import { CONTACT_INFO } from "./contact";

/**
 * Apex Tutors — Site Configuration & Single Source of Truth
 *
 * All domain references, metadata defaults, indexing switches, and
 * business facts must be imported from this file. Never hardcode domains.
 */

// Normalized base URL without trailing slash (driven by NEXT_PUBLIC_SITE_URL)
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

export const SITE_NAME = "Apex Tutors";
export const SITE_TAGLINE = "Verified University Tutors in Pakistan";
export const SITE_TITLE_TEMPLATE = "%s | Apex Tutors";

export const SITE_DESCRIPTION =
  "Connect with verified university scholars from LUMS, NUST, AKU, FAST & GIKI for Primary, Matric, FSc, O Level & A Level students across Pakistan. Free demo class guaranteed.";

export const SITE_LOCALE = "en_PK";
export const SITE_LANG = "en-PK";

/**
 * Indexing Safety Switch:
 * Controlled by SITE_INDEXING ("true" to index; otherwise noindex, nofollow).
 * On launch day, set SITE_INDEXING="true" in production environment variables.
 */
export const IS_INDEXING_ENABLED = process.env.SITE_INDEXING === "true";

// Verified business facts strictly drawn from existing site copy
export const SITE_CONTACT = CONTACT_INFO;

export const CITIES_COVERED = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Multan",
  "Faisalabad",
  "Bahawalpur",
] as const;

export const PARTNER_UNIVERSITIES = [
  "LUMS",
  "NUST",
  "AKU",
  "FAST",
  "GIKI",
] as const;

export const ACADEMIC_TRACKS = [
  "Primary & Middle School (Grade 1-8)",
  "Matric (9th & 10th)",
  "FSc Pre-Medical",
  "FSc Pre-Engineering",
  "ICS (Computer Science)",
  "O Level / IGCSE (Cambridge)",
  "A Level (AS & A2)",
] as const;

export const EXAM_BOARDS = [
  "Federal Board (FBISE)",
  "BISE Lahore & Punjab Boards",
  "Cambridge (CAIE / IGCSE)",
  "Sindh Board & AKU-EB",
  "BISE Gujranwala & Regional Boards",
] as const;

// Analytics & Search Console slots (empty by default)
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const GSC_VERIFICATION_ID = process.env.NEXT_PUBLIC_GSC_VERIFICATION || "";
