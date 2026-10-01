/**
 * Apex Tutors — Centralized Contact & Social Configuration
 * All contact numbers, social media profiles, and chat links must be imported from here.
 */

export const CONTACT_INFO = {
  // Social Media Profiles
  facebook: "https://www.facebook.com/share/1Fz2wW4T6K/",
  instagram: "https://www.instagram.com/apexxtutors",

  // WhatsApp & Phone Details
  whatsAppNumber: "0346 7507339",
  whatsAppLink: "https://wa.me/923467507339",
  whatsAppChatLink:
    "https://wa.me/923467507339?text=Assalam%20o%20Alaikum%2C%20I%20want%20to%20know%20more%20about%20Apex%20Tutors",
  telLink: "tel:+923467507339",

  // Email & Operations
  email: "admissions@apextutors.pk",
} as const;

export const FACEBOOK_URL = CONTACT_INFO.facebook;
export const INSTAGRAM_URL = CONTACT_INFO.instagram;
export const WHATSAPP_NUMBER = CONTACT_INFO.whatsAppNumber;
export const WHATSAPP_LINK = CONTACT_INFO.whatsAppLink;
export const WHATSAPP_CHAT_LINK = CONTACT_INFO.whatsAppChatLink;
export const TEL_LINK = CONTACT_INFO.telLink;
