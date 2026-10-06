import type { MetadataRoute } from "next";
import { SITE_URL, IS_INDEXING_ENABLED } from "@/lib/site";

/**
 * Next.js Dynamic robots.txt Generation
 *
 * SAFETY SWITCH:
 * - Default: When SITE_INDEXING !== "true", returns "Disallow: /" for all user-agents,
 *   preventing pre-launch domains or staging environments from being indexed.
 *
 * HOW TO FLIP AT LAUNCH:
 * In your deployment environment (e.g. Vercel Project Settings > Environment Variables),
 * set `SITE_INDEXING="true"` and trigger a redeploy.
 */
export default function robots(): MetadataRoute.Robots {
  if (!IS_INDEXING_ENABLED) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
