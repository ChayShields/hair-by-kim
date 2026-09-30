import ActionButtons from "@/components/ActionButtons"
import FindKim from "@/components/FindKim"
import PriceList from "@/components/PriceList"
import Results from "@/components/Results"
import Reviews from "@/components/Reviews"
import Shell from "@/components/Shell"
import StatusBadge from "@/components/StatusBadge"
import WeekDiary from "@/components/WeekDiary"
import { business, dayNames, openingHours } from "@/lib/business"
import { jsonLd } from "@/lib/json-ld"

const salonSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${business.siteUrl}/#salon`,
  name: business.name,
  url: business.siteUrl,
  telephone: business.phoneE164,
  areaServed: { "@type": "City", name: business.town },
  address: {
    "@type": "PostalAddress",
    ...(business.showAddress ? { streetAddress: business.address.street } : {}),
    addressLocality: business.town,
    addressRegion: business.region,
    ...(business.showAddress ? { postalCode: business.address.postcode } : {}),
    addressCountry: "GB",
  },
  openingHoursSpecification: openingHours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: dayNames[h.day],
    opens: h.open,
    closes: h.close,
  })),
  founder: { "@type": "Person", name: business.owner, jobTitle: "Hairdresser and barber" },
  sameAs: [business.facebookUrl],
}

export default function Home() {
  return (
    <Shell brand={false}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(salonSchema) }} />

      <section aria-labelledby="hero-title" className="grid gap-[calc(var(--line)*2)] pb-[calc(var(--line)*2)] pt-[calc(var(--line)*2)] lg:grid-cols-[1.25fr_1fr] lg:items-start">
        <div>
          <h1 id="hero-title" className="font-display text-[2.9rem] font-extrabold leading-[calc(var(--line)*2)] min-[360px]:text-[3.4rem] sm:text-[4.5rem] sm:leading-[calc(var(--line)*3)] lg:text-[6rem] lg:leading-[calc(var(--line)*3)]">
            Hair by Kim
          </h1>
          <p className="font-display m-0 text-2xl font-semibold leading-[var(--line)]">
            Hairdresser and barber in {business.town}
          </p>
          <StatusBadge className="mt-[var(--line)]" />
          <p className="m-0 mt-[var(--line)] max-w-[34ch] text-lg">
            Cuts, colour, perms and blow-dries in a relaxed home salon. Qualified level 3 hairdresser and barber since 1999.
          </p>
          <div id="hero-actions" className="mt-[var(--line)] max-w-md">
            <ActionButtons />
          </div>
        </div>

        <aside id="hours" aria-labelledby="hours-title">
          <h2 id="hours-title" className="font-display text-2xl font-bold">
            This week
          </h2>
          <div className="mt-[var(--line)]">
            <WeekDiary />
          </div>
        </aside>
      </section>

      <div className="grid gap-x-16 lg:grid-cols-[1.25fr_1fr] lg:items-start">
      <section id="prices" aria-labelledby="prices-title" className="py-[calc(var(--line)*2)]">
        <h2 id="prices-title" className="font-display text-3xl font-bold leading-[calc(var(--line)*2)] sm:text-4xl">
          Prices
        </h2>
        <div className="mt-[var(--line)] max-w-xl">
          <PriceList />
        </div>
        <p className="font-hand m-0 mt-[var(--line)] text-[1.7rem] leading-[var(--line)]">
          &ldquo;From&rdquo; prices depend on hair and style, ask when booking in.
        </p>
      </section>

      <FindKim />
      </div>

      <Results />
      <Reviews />
    </Shell>
  )
}
