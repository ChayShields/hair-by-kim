import Image from "next/image"
import Link from "next/link"
import { business } from "@/lib/business"
import { results } from "@/lib/services"

// The binder: a strip of steel rings across the top on phones, a rail down
// the left edge on wide screens, then Kim's round logo and a plain diary-line nav.
export default function Header() {
  return (
    <header>
      <div aria-hidden className="binder-strip h-10" />
      <div aria-hidden className="rail" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 pl-[30px] pr-[18px] pt-[var(--line)] lg:pl-[9.5rem] lg:pr-16">
        <Link href="/" aria-label={`${business.name} home`} className="block">
          <Image src="/logo.png" alt={`${business.name} logo`} width={304} height={304} priority className="size-16 lg:size-20" />
        </Link>
        <nav aria-label="Sections" className="flex gap-5 font-medium">
          <Link href="/#prices" className="text-ink">
            Prices
          </Link>
          <Link href="/#find-kim" className="text-ink">
            Find Kim
          </Link>
          {results.length > 0 ? (
            <Link href="/#work" className="text-ink">
              Work
            </Link>
          ) : null}
        </nav>
      </div>
    </header>
  )
}
