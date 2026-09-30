import { hasLongHairPrices, money, serviceGroups, type Price } from "@/lib/services"

// One fixed-width cell per column, right-aligned, so every "from" and every
// figure lines up down the page whatever the group.
function PriceCell({ price }: { price?: Price }) {
  return (
    <span className="tnum inline-block w-[4.9rem] whitespace-nowrap text-right font-display text-lg font-bold sm:w-[5.6rem] sm:text-[1.375rem]">
      {price ? (
        <>
          {price.from ? <span className="mr-1 text-sm font-medium text-pencil">from</span> : null}
          {money(price.amount)}
        </>
      ) : null}
    </span>
  )
}

// The price list as it would be pencilled down the diary margin: a dotted
// leader from each service to its price, the number set larger than the name.
export default function PriceList() {
  return (
    <div className="flex flex-col gap-[var(--line)]">
      {hasLongHairPrices ? (
        <div aria-hidden className="flex justify-end">
          <span className="font-hand inline-block w-[4.9rem] text-right text-[1.6rem] leading-[var(--line)] sm:w-[5.6rem]">standard</span>
          <span className="font-hand inline-block w-[4.9rem] text-right text-[1.6rem] leading-[var(--line)] sm:w-[5.6rem]">long hair</span>
        </div>
      ) : null}
      {serviceGroups.map((group) => (
        <section key={group.title} aria-labelledby={`grp-${group.title}`}>
          <h3 id={`grp-${group.title}`} className="font-display text-2xl font-bold">
            {group.title}
          </h3>
          <ul className="m-0 list-none p-0">
            {group.items.map((service) => (
              <li key={service.name} className="flex items-baseline gap-2">
                <span className="font-medium">{service.name}</span>
                <span aria-hidden className="leader" />
                <PriceCell price={service.price} />
                {hasLongHairPrices ? <PriceCell price={service.long} /> : null}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
