import { ImageResponse } from "next/og"
import { business } from "@/lib/business"

// Social share card, generated in code from the site's own colours (no
// photograph or stock image). Replace with a real photo of Kim's work once
// Chay has supplied one.
export const alt = `${business.name}, hairdresser in ${business.town}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px 0 152px",
          background: "#f4f7fc",
          color: "#1b2233",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 56, background: "#10424c" }} />
        <div style={{ display: "flex", fontSize: 148, fontWeight: 800, lineHeight: 1.05 }}>
          <span style={{ background: "#ffd0e5", padding: "0 16px" }}>{business.name}</span>
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 52, fontWeight: 600 }}>
          Hairdresser in {business.town}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 40, color: "#4f5b73" }}>
          Call or WhatsApp {business.phoneDisplay}
        </div>
      </div>
    ),
    size,
  )
}
