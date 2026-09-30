import { ImageResponse } from "next/og"

// Home-screen icon. Drawn in code from the same mark as icon.svg (teal tile,
// pink highlighter stroke, paper-white K), so it carries no third-party asset.
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#10424c" }}>
        <svg width="180" height="180" viewBox="0 0 64 64">
          <rect x="10" y="38" width="44" height="12" rx="2" fill="#ff5fa2" transform="rotate(-4 32 44)" />
          <path
            d="M22 12v34M43 12L22 32M28 27l16 19"
            fill="none"
            stroke="#f4f7fc"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size,
  )
}
