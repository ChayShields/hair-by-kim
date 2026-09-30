import type { MetadataRoute } from "next"
import { business } from "@/lib/business"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-30")
  return [
    { url: business.siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${business.siteUrl}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${business.siteUrl}/terms-of-service`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ]
}
