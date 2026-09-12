import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { getPayloadClient } from "@/lib/cms/payload";
import { siteConfig } from "@/lib/site";

const leadNotificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || siteConfig.email;

const enquirySchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  country: z.string().min(2),
  cityState: z.string().optional(),
  requirementType: z.string().min(2),
  applicationType: z.string().optional(),
  dailyWaterDemand: z.string().optional(),
  tankCapacity: z.string().optional(),
  numberOfSites: z.string().optional(),
  powerAvailability: z.string().optional(),
  solarRequirement: z.string().optional(),
  interest: z.string().optional(),
  sourcePage: z.string().optional(),
  message: z.string().min(10),
  consent: z.literal(true),
  website: z.string().optional()
});

function escapeHtml(value = "") {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function enquiryEmailTemplate(data: z.infer<typeof enquirySchema>) {
  const rows = [
    ["Name", data.name],
    ["Company", data.company || "-"],
    ["Email", data.email],
    ["Phone", data.phone || "-"],
    ["Country", data.country],
    ["City / State", data.cityState || "-"],
    ["Requirement", data.requirementType],
    ["Application Type", data.applicationType || "-"],
    ["Daily Water Demand", data.dailyWaterDemand || "-"],
    ["Tank Capacity", data.tankCapacity || "-"],
    ["Number of Sites", data.numberOfSites || "-"],
    ["Power Availability", data.powerAvailability || "-"],
    ["Solar Requirement", data.solarRequirement || "-"],
    ["Interest", data.interest || "-"],
    ["Source Page", data.sourcePage || "-"]
  ];

  return `<!doctype html>
  <html>
    <body style="margin:0;background:#f5f9ff;font-family:Arial,sans-serif;color:#101729;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f5f9ff;padding:28px 0;">
        <tr>
          <td align="center">
            <table width="640" cellpadding="0" cellspacing="0" role="presentation" style="width:640px;max-width:94%;background:#ffffff;border:1px solid #dbe4ef;border-radius:14px;overflow:hidden;">
              <tr>
                <td style="background:#09244c;padding:24px 28px;color:#ffffff;">
                  <div style="font-size:24px;font-weight:800;letter-spacing:-.4px;"><span style="color:#26b9e8;">HYDRO</span>scope</div>
                  <div style="font-size:13px;color:#cfe4ff;margin-top:6px;">New website enquiry</div>
                </td>
              </tr>
              <tr>
                <td style="padding:26px 28px;">
                  <h1 style="font-size:22px;line-height:1.25;margin:0 0 10px;">A new B2B enquiry has been submitted</h1>
                  <p style="font-size:14px;line-height:1.6;color:#5c6574;margin:0 0 20px;">Review the details below and respond from the HYDROscope team email.</p>
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;">
                    ${rows
                      .map(
                        ([label, value]) => `<tr>
                          <td style="width:160px;padding:12px;border-bottom:1px solid #dbe4ef;background:#f5f9ff;font-size:12px;font-weight:700;color:#1258b6;">${escapeHtml(label)}</td>
                          <td style="padding:12px;border-bottom:1px solid #dbe4ef;font-size:14px;color:#101729;">${escapeHtml(value)}</td>
                        </tr>`
                      )
                      .join("")}
                  </table>
                  <div style="margin-top:22px;padding:16px;border:1px solid #dbe4ef;border-radius:10px;background:#f8fbff;">
                    <div style="font-size:12px;font-weight:700;color:#1258b6;margin-bottom:8px;">Message</div>
                    <div style="font-size:14px;line-height:1.7;color:#101729;">${escapeHtml(data.message).replace(/\n/g, "<br>")}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:18px 28px;background:#f5f9ff;color:#5c6574;font-size:12px;">
                  HYDROscope website notification. Keep customer data private and use only for enquiry follow-up.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

async function sendNotification(data: z.infer<typeof enquirySchema>) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) return false;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: leadNotificationEmail,
    replyTo: data.email,
    subject: `New HYDROscope enquiry from ${data.name}`,
    html: enquiryEmailTemplate(data)
  });

  return true;
}

export async function POST(request: Request) {
  const payload = enquirySchema.parse(await request.json());
  if (payload.website) return NextResponse.json({ ok: true });

  let storedInCms = false;
  let notifiedByEmail = false;

  if (process.env.DATABASE_URI || process.env.MONGODB_URI) {
    try {
      const cms = await getPayloadClient();
      await cms.create({
        collection: "enquiries",
        data: {
          ...payload,
          status: "new"
        }
      });
      storedInCms = true;
    } catch (error) {
      console.error("Unable to store enquiry in CMS", error);
    }
  }

  try {
    notifiedByEmail = await sendNotification(payload);
  } catch (error) {
    console.error("Unable to send enquiry notification email", error);
  }

  if (!storedInCms && !notifiedByEmail) {
    return NextResponse.json({ ok: false, message: "Unable to receive enquiry" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, message: "Enquiry received" });
}
