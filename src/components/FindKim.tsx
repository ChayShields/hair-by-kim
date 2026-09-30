import { business, mapsUrl } from "@/lib/business"
import ActionButtons from "./ActionButtons"
import { PinIcon } from "./Icons"

// Where Kim is and how to book. Whether the street address is public is one
// switch in lib/business.ts (`showAddress`).
export default function FindKim() {
  const a = business.address

  return (
    <section id="find-kim" aria-labelledby="find-title" className="py-[calc(var(--line)*2)]">
      <h2 id="find-title" className="font-display text-3xl font-bold leading-[calc(var(--line)*2)] sm:text-4xl">
        Find Kim
      </h2>
      <div className="mt-[var(--line)] grid gap-[calc(var(--line)*1.5)]">
        <div>
          <p className="m-0 flex items-baseline gap-2 font-medium">
            <PinIcon className="size-5 shrink-0 translate-y-1" />
            {business.showAddress ? (
              <span>
                {a.street}
                <br />
                {a.town}
                <br />
                {a.postcode}
              </span>
            ) : (
              <span>
                {business.town}, {business.postcodeArea}
                <br />
                Address given when you book
              </span>
            )}
          </p>
          <p className="m-0 mt-[var(--line)] max-w-[40ch]">
            Kim works from her home salon.
          </p>
          {business.showAddress ? (
            <p className="m-0 mt-[var(--line)]">
              <a href={mapsUrl()} target="_blank" rel="noopener noreferrer" className="font-semibold text-biro">
                Get directions
              </a>
            </p>
          ) : null}
        </div>
        <div>
          <p className="font-hand m-0 mb-[var(--line)] text-[1.7rem] leading-[var(--line)]">
            no online booking: call, WhatsApp or text
          </p>
          <ActionButtons />
        </div>
      </div>
    </section>
  )
}
