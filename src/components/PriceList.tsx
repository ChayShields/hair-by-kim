import { hasLongHairPrices, money, serviceGroups, type Price } from "@/lib/services"

const CELL = "tnum inline-block shrink-0 w-[4.4rem] whitespace-nowrap text-right font-display text-lg font-bold sm:w-[5.6rem] sm:text-[1.375rem]"
// The long-hair column is set apart: a divider line and a soft wash, so it
// never reads as a continuation of the standard column.
const LONG = "ml-2 pr-1 sm:ml-3"
const LONG_RULED = "border-l-2 border-rule"

function Figure({ price }: { price?: Price }) {
  if (!price) return null
  return (
    <>
      {price.from ? <span className="mr-1 text-xs font-medium text-pencil sm:text-sm">from</span> : null}
      {money(price.amount)}
    </>
  )
}

// The price list as it would be pencilled down the diary margin: a dotted
// leader from each service to its price, the number set larger than the name.
export default function PriceList() {
  return (
    <div className="flex flex-col gap-[var(--line)]">
      {hasLongHairPrices ? (
        <div aria-hidden className="flex justify-end">
          <span className="font-hand inline-block w-[4.4rem] shrink-0 whitespace-nowrap text-right text-[1.25rem] leading-[var(--line)] sm:w-[5.6rem] sm:text-[1.6rem]">standard</span>
          <span className={`font-hand inline-block w-[4.4rem] shrink-0 whitespace-nowrap text-right text-[1.25rem] leading-[var(--line)] sm:w-[5.6rem] sm:text-[1.6rem] ${LONG} ${LONG_RULED}`}>long hair</span>
        </div>
      ) : null}
      {serviceGroups.map((group) => {
        const groupHasLong = group.items.some((s) => s.long)
        return (
          <section key={group.title} aria-labelledby={`grp-${group.title}`}>
            <h3 id={`grp-${group.title}`} className="font-display text-2xl font-bold">
              {group.title}
            </h3>
            <ul className="m-0 list-none p-0">
              {group.items.map((service) => (
                <li key={service.name} className="flex items-baseline gap-2">
                  <span className="font-medium">
                    {service.name.split(" ").map((word, i) => (
                      <span key={i} className={word.includes("-") ? "whitespace-nowrap" : undefined}>
                        {i > 0 ? " " : ""}
                        {word}
                      </span>
                    ))}
                  </span>
                  <span aria-hidden className="leader" />
                  <span className={CELL}>
                    <Figure price={service.price} />
                  </span>
                  {hasLongHairPrices ? (
                    <span className={`${CELL} ${LONG} ${groupHasLong ? `${LONG_RULED} bg-highlight-soft/60` : ""}`}>
                      <Figure price={service.long} />
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
