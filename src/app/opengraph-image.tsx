import { readFile } from "node:fs/promises"
import path from "node:path"
import { ImageResponse } from "next/og"
import { business } from "@/lib/business"

// Social share card, generated in code from the site's own colours plus
// Kim's round logo (supplied by Kim via Chay).
export const alt = `${business.name}, hairdresser and barber in ${business.town}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public", "logo.png"))
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 96px 0 152px",
          background: "#f8f5fa",
          color: "#1c1620",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 56, background: "#1a1618" }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={300} height={300} alt="" style={{ marginRight: 56 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 800, lineHeight: 1.05 }}>
            <span style={{ background: "#e6dcec", padding: "0 12px" }}>{business.name}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 28, fontSize: 44, fontWeight: 600, lineHeight: 1.2 }}>
            <span>Hairdresser and barber</span>
            <span>in {business.town}</span>
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 36, color: "#5a5062" }}>
            Call or WhatsApp {business.phoneDisplay}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
