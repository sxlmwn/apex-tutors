import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Dynamic XML Sitemap Generation
 *
 * Driven entirely by SITE_URL. All URLs update automatically when NEXT_PUBLIC_SITE_URL changes.
 * Excludes internal, API, and thank-you states.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const routes = [
    {
      url: `${SITE_URL}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/signup`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/apply-tutor`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  return routes;
}
