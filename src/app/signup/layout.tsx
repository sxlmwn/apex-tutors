import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Request a Verified Tutor — Free Demo",
  description:
    "Book a free 45-minute demo session with a top-scoring university mentor for Matric, FSc, O/A Levels in Lahore, Karachi, Islamabad & nationwide.",
  alternates: {
    canonical: "/signup",
  },
  openGraph: {
    title: "Request a Verified Tutor — Free Demo | Apex Tutors",
    description:
      "Book a free 45-minute demo session with a top-scoring university mentor for Matric, FSc, O/A Levels in Lahore, Karachi, Islamabad & nationwide.",
    url: "/signup",
  },
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Request a Tutor", path: "/signup" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      {children}
    </>
  );
}
