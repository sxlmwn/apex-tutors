import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_TITLE_TEMPLATE,
  SITE_LANG,
  IS_INDEXING_ENABLED,
  GSC_VERIFICATION_ID,
} from "@/lib/site";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/schema";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#F5F0E8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Apex Tutors — Verified University Tutors in Pakistan",
    template: SITE_TITLE_TEMPLATE,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "home tutor Pakistan",
    "online tutor Pakistan",
    "O Level tutor",
    "A Level tutor",
    "FSc tutor",
    "Matric tutor",
    "verified university tutors",
    "LUMS tutors",
    "NUST tutors",
    "home tuition Lahore",
    "online tutor Islamabad",
    "tutor Karachi DHA",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "./",
  },
  robots: IS_INDEXING_ENABLED
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
        },
      },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Apex Tutors — Verified University Tutors in Pakistan",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Tutors — Verified University Tutors in Pakistan",
    description: SITE_DESCRIPTION,
  },
  verification: GSC_VERIFICATION_ID
    ? {
        google: GSC_VERIFICATION_ID,
      }
    : undefined,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/brand/logo-mark-v2.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = buildOrganizationSchema();
  const websiteSchema = buildWebSiteSchema();

  return (
    <html
      lang={SITE_LANG}
      className={`${plusJakartaSans.variable} font-sans scroll-smooth`}
    >
      <head>
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </head>
      <body className="min-h-screen bg-[#F5F0E8] text-[#18181B] antialiased flex flex-col">
        {/* Accessible Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#2E8B57] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Providers>{children}</Providers>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
