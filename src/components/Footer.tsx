import Link from "next/link"
import { business } from "@/lib/business"

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-binder text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 py-8 pl-[30px] pr-[18px] lg:pl-[9.5rem] lg:pr-16">
        <p className="font-display text-xl font-bold">
          {business.name}, {business.town}
        </p>
        <nav aria-label="Legal and social" className="flex flex-wrap gap-x-6 gap-y-1">
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="underline">
            Terms of Service
          </Link>
          <a href={business.facebookUrl} className="underline" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </nav>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {business.name}. Designed and developed by{" "}
          <a href="https://hireme.link" className="underline" target="_blank" rel="noopener noreferrer">
            Chay Shields
          </a>
        </p>
      </div>
    </footer>
  )
}
