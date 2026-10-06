import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_CONTACT,
  CITIES_COVERED,
} from "./site";

/**
 * Structured Data (Schema.org) Builders
 *
 * Strictly adheres to Google Search Central guidelines:
 * - Reflects only verified information visible on the page
 * - No fabricated reviews or aggregate ratings
 * - URLs strictly derived from SITE_URL
 */

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/logo-mark-v2.png`,
    description: SITE_DESCRIPTION,
    email: SITE_CONTACT.email,
    telephone: "+92-346-7507339",
    sameAs: [SITE_CONTACT.facebook, SITE_CONTACT.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-346-7507339",
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: ["en", "ur"],
    },
    areaServed: CITIES_COVERED.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "Country",
        name: "Pakistan",
      },
    })),
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en-PK",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
