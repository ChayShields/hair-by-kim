import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Hanken_Grotesk, Reenie_Beanie } from "next/font/google"
import { business } from "@/lib/business"
import { lowestPrice } from "@/lib/services"
import "./globals.css"

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" })
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" })
const hand = Reenie_Beanie({ subsets: ["latin"], weight: "400", variable: "--font-hand", display: "swap" })

const title = `${business.name} | Hairdresser and Barber in ${business.town}`
const description = `Hairdresser and barber in ${business.town}: cuts from £${lowestPrice}, colour, perms and blow-dries in a relaxed home salon. Open Wednesday to Saturday. Call or WhatsApp ${business.phoneDisplay}.`

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: business.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
}

export const viewport: Viewport = {
  themeColor: "#221a26",
  width: "device-width",
  initialScale: 1,
}

// The design contract for this build, kept in the emitted markup so it can be
// audited against what shipped.
const contract = `
THESIS: the whole page is a hairdresser's appointment diary; it refuses the salon default of a hero photo over pastel cards.
OWN-WORLD: lavender-white ruled paper on a 2rem baseline, purple margin line, near-black steel-ring binder, purple highlighter for open hours and Call (the colours of Kim's business card), violet-ink handwriting for small notes; Bricolage Grotesque, Hanken Grotesk, Reenie Beanie.
STORY: a local woman on her phone learns in seconds that Kim does cuts, colour and perms in a relaxed home salon, sees prices and hours, then calls, WhatsApps or texts.
FIRST VIEWPORT: binder strip; big Hair by Kim heading with a live open-now line; one-line lede; full-width Call button with WhatsApp and Text beneath; on desktop the week's hours as diary lines alongside; a fixed Call/WhatsApp/Text bar on phones once the hero buttons scroll out of view.
`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body className="relative min-h-screen">
        <div hidden suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `<!--${contract}-->` }} />
        <noscript>
          <style>{`.ink-line{background-size:100% 100%!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  )
}
