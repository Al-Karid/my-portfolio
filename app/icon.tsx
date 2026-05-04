import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0d0d14",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontSize: 13,
            color: "#f0f0f8",
            letterSpacing: "-0.5px",
            lineHeight: 1,
          }}
        >
          AC
          <span style={{ color: "#6c63ff" }}>.</span>
        </span>
      </div>
    ),
    { ...size }
  );
}
