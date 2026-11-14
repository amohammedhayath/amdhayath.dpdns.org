import { ImageResponse } from "next/og";
import { portfolioData } from "@/data/portfolio";

export const dynamic = "force-static";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  const monogram = portfolioData.navigation.brandMonogram || "MH";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#141619",
          border: "4px solid #cd8656",
          borderRadius: "14px",
          color: "#f59e0b",
          fontSize: 28,
          fontWeight: 700,
          fontFamily: "monospace",
          letterSpacing: "-0.04em",
        }}
      >
        {monogram}
      </div>
    ),
    {
      ...size,
    }
  );
}
