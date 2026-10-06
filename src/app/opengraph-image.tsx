import { ImageResponse } from "next/og";

export const alt = "Apex Tutors — Verified University Tutors in Pakistan";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#FAF7F2",
          backgroundImage:
            "radial-gradient(circle at 90% 15%, rgba(46, 139, 87, 0.12) 0%, transparent 60%)",
          color: "#18181B",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              backgroundColor: "#2E8B57",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FAF7F2",
              fontSize: 32,
              fontWeight: 900,
            }}
          >
            A
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            <span>Apex</span>
            <span style={{ color: "#2E8B57" }}>Tutors</span>
          </div>
          <div
            style={{
              marginLeft: 12,
              padding: "4px 12px",
              borderRadius: 999,
              backgroundColor: "rgba(46, 139, 87, 0.12)",
              color: "#2E8B57",
              fontSize: 16,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Pakistan
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 900,
              letterSpacing: "-0.035em",
              lineHeight: 1.15,
              color: "#18181B",
              maxWidth: 960,
            }}
          >
            Verified 1-on-1 Tutors from Top Universities
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#52525B",
              fontWeight: 500,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Mentors from LUMS, NUST, AKU, FAST & GIKI for Primary, Matric, FSc, O Level & A Level students across Pakistan.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 30,
            borderTop: "2px solid #E8E1D5",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 28,
              fontSize: 18,
              color: "#18181B",
              fontWeight: 700,
            }}
          >
            <span>✓ 100% Background Verified</span>
            <span>✓ Free 45-Min Demo Class</span>
            <span>✓ Online & In-Home</span>
          </div>
          <div
            style={{
              padding: "12px 28px",
              backgroundColor: "#2E8B57",
              color: "#FFFFFF",
              borderRadius: 999,
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            Book Free Demo
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
