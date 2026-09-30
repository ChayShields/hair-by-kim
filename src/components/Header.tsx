import Link from "next/link"
import { business } from "@/lib/business"

// The binder: a strip of steel rings across the top on phones, a rail down
// the left edge on wide screens, then a plain diary-line nav.
export default function Header({ brand = true }: { brand?: boolean }) {
  return (
    <header>
      <div aria-hidden className="binder-strip h-10" />
      <div aria-hidden className="rail" />
      <div className="mx-auto flex max-w-6xl items-baseline justify-between gap-4 pl-[30px] pr-[18px] pt-[var(--line)] lg:pl-[9.5rem] lg:pr-16">
        {brand ? (
          <Link href="/" className="font-display text-lg font-bold no-underline">
            {business.name}
          </Link>
        ) : (
          <span aria-hidden />
        )}
        <nav aria-label="Sections" className="flex gap-5 font-medium">
          <Link href="/#prices" className="text-ink">
            Prices
          </Link>
          <Link href="/#find-kim" className="text-ink">
            Find Kim
          </Link>
        </nav>
      </div>
    </header>
  )
}
