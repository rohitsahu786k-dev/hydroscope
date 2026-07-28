import type { CollectionConfig } from "payload";

export const Enquiries: CollectionConfig = {
  slug: "enquiries",
  admin: { useAsTitle: "email", defaultColumns: ["name", "company", "email", "status", "createdAt"], group: "Leads" },
  access: { create: () => true },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "company", type: "text" },
    { name: "email", type: "email", required: true },
    { name: "phone", type: "text" },
    { name: "country", type: "text", required: true },
    { name: "cityState", type: "text" },
    { name: "requirementType", type: "text", required: true },
    { name: "applicationType", type: "text" },
    { name: "dailyWaterDemand", type: "text" },
    { name: "tankCapacity", type: "text" },
    { name: "numberOfSites", type: "text" },
    { name: "powerAvailability", type: "text" },
    { name: "solarRequirement", type: "text" },
    { name: "interest", type: "text" },
    { name: "sourcePage", type: "text" },
    { name: "message", type: "textarea", required: true },
    { name: "consent", type: "checkbox", required: true },
    { name: "website", type: "text", admin: { hidden: true } },
    { name: "status", type: "select", defaultValue: "new", options: ["new", "contacted", "converted", "closed"] },
    { name: "adminNotes", type: "textarea" }
  ]
};
