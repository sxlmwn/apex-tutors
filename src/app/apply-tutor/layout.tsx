import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Become a Tutor — Teach & Earn",
  description:
    "Join Pakistan's premier tutor network of university scholars. Teach Primary, Matric, FSc & Cambridge students on flexible hours with Rs. 40k–90k+/mo pay.",
  alternates: {
    canonical: "/apply-tutor",
  },
  openGraph: {
    title: "Become a Tutor — Teach & Earn | Apex Tutors Pakistan",
    description:
      "Join Pakistan's premier tutor network of university scholars. Teach Primary, Matric, FSc & Cambridge students on flexible hours with Rs. 40k–90k+/mo pay.",
    url: "/apply-tutor",
  },
};

export default function ApplyTutorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Become a Tutor", path: "/apply-tutor" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  );
}
