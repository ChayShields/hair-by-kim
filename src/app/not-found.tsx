import Link from "next/link"
import Shell from "@/components/Shell"

export default function NotFound() {
  return (
    <Shell>
      <section className="py-[calc(var(--line)*3)]">
        <h1 className="font-display text-5xl font-extrabold leading-[calc(var(--line)*2)]">Page not found</h1>
        <p className="mt-[var(--line)] max-w-[40ch]">That page isn&rsquo;t in the diary. Head back to the start.</p>
        <p className="m-0">
          <Link href="/" className="font-semibold text-biro">
            Back to Hair by Kim
          </Link>
        </p>
      </section>
    </Shell>
  )
}
