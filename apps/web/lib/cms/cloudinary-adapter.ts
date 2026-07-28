import { v2 as cloudinary } from "cloudinary";
import type { Adapter, File } from "@payloadcms/plugin-cloud-storage/types";

type CloudinaryDoc = {
  cloudinaryPublicId?: unknown;
  cloudinaryUrl?: unknown;
};

function uploadBuffer(file: File, folder: string) {
  return new Promise<{ public_id: string; secure_url: string; bytes: number; format: string }>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "auto",
        public_id: file.filename.replace(/\.[^/.]+$/, ""),
        overwrite: false
      },
      (error, result) => {
        if (error || !result) {
          reject(error || new Error("Cloudinary upload failed"));
          return;
        }
        resolve({
          public_id: result.public_id,
          secure_url: result.secure_url,
          bytes: result.bytes,
          format: result.format
        });
      }
    );

    stream.end(file.buffer);
  });
}

export const cloudinaryAdapter =
  ({ folder = "hydroscope" }: { folder?: string } = {}): Adapter =>
  ({ prefix }) => {
    const uploadFolder = [folder, prefix].filter(Boolean).join("/");

    return {
      name: "cloudinary",
      fields: [
        { name: "cloudinaryPublicId", type: "text", admin: { readOnly: true } },
        { name: "cloudinaryUrl", type: "text", admin: { readOnly: true } }
      ],
      async handleUpload({ file }) {
        const uploaded = await uploadBuffer(file, uploadFolder);
        return {
          filename: file.filename,
          filesize: uploaded.bytes,
          mimeType: file.mimeType,
          url: uploaded.secure_url,
          cloudinaryPublicId: uploaded.public_id,
          cloudinaryUrl: uploaded.secure_url
        };
      },
      async handleDelete({ doc }) {
        const cloudinaryDoc = doc as CloudinaryDoc;
        const publicId = typeof cloudinaryDoc.cloudinaryPublicId === "string" ? cloudinaryDoc.cloudinaryPublicId : undefined;
        if (publicId) {
          await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
        }
      },
      generateURL({ data }) {
        const cloudinaryDoc = data as CloudinaryDoc | undefined;
        const cloudinaryUrl = typeof cloudinaryDoc?.cloudinaryUrl === "string" ? cloudinaryDoc.cloudinaryUrl : undefined;
        return cloudinaryUrl || "";
      },
      async staticHandler(_req, { doc }) {
        const cloudinaryDoc = doc as CloudinaryDoc | undefined;
        const cloudinaryUrl = typeof cloudinaryDoc?.cloudinaryUrl === "string" ? cloudinaryDoc.cloudinaryUrl : undefined;
        if (!cloudinaryUrl) return new Response("Not found", { status: 404 });
        return Response.redirect(cloudinaryUrl, 302);
      }
    };
  };
