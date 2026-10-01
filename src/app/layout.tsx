import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Apex Tutors — Find Verified Tutors in Pakistan",
  description:
    "Connect with verified university-student tutors for Primary, Matric, FSc, O Level, and A Level students in Karachi, Lahore, Islamabad, Rawalpindi, Multan, Faisalabad, and Bahawalpur. Free demo class guaranteed.",
  keywords: [
    "tutor Pakistan",
    "O Level tutor",
    "A Level tutor",
    "Matric tutor",
    "FSc tutor",
    "Primary school tutor",
    "home tutor Lahore",
    "online tutor Islamabad",
    "tutor Karachi DHA",
    "Bahria Town tutor",
    "FBISE tutor",
    "Cambridge tutor Pakistan",
    "Punjab board tutor",
  ],
  authors: [{ name: "Apex Tutors" }],
  openGraph: {
    title: "Apex Tutors — Find Verified Tutors in Pakistan",
    description:
      "Pakistan's premier tutoring platform connecting Primary, Matric, FSc, O Level & A Level students with top-tier university tutors. Book a free demo class today.",
    type: "website",
    locale: "en_PK",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/brand/logo-mark-v2.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen bg-[#F5F0E8] text-[#18181B] antialiased flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
