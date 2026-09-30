"use client"

import { useEffect, useState } from "react"
import { smsUrl, telUrl, whatsappUrl } from "@/lib/business"
import { ChatIcon, PhoneIcon, TextIcon } from "./Icons"

// Phones only: Call, WhatsApp and Text stay under the thumb once the hero
// buttons have scrolled away (on pages without them it is always there).
// Without scripting it is simply always shown. Hidden on wide screens.
export default function BottomBar() {
  const [heroInView, setHeroInView] = useState(false)

  useEffect(() => {
    const target = document.getElementById("hero-actions")
    if (!target) return
    const observer = new IntersectionObserver(([entry]) => setHeroInView(entry.isIntersecting))
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Book an appointment"
      aria-hidden={heroInView}
      inert={heroInView}
      className={`fixed inset-x-0 bottom-0 z-40 border-t-2 border-ink bg-paper px-3 pt-3 transition-transform duration-300 lg:hidden max-[440px]:[&_svg]:hidden ${heroInView ? "translate-y-full" : "translate-y-0"}`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-xl gap-1 min-[341px]:gap-1.5">
        <a href={telUrl} className="btn btn-call min-w-0 flex-[1.2] gap-2 px-1 text-[0.8rem] min-[341px]:px-2 min-[341px]:text-base" aria-label="Call Kim">
          <PhoneIcon />
          Call
        </a>
        <a href={whatsappUrl()} className="btn min-w-0 flex-1 gap-2 px-1 text-[0.8rem] min-[341px]:px-2 min-[341px]:text-base" target="_blank" rel="noopener noreferrer" aria-label="Message Kim on WhatsApp">
          <ChatIcon />
          WhatsApp
        </a>
        <a href={smsUrl} className="btn min-w-0 flex-1 gap-2 px-1 text-[0.8rem] min-[341px]:px-2 min-[341px]:text-base" aria-label="Text Kim">
          <TextIcon />
          Text
        </a>
      </div>
    </nav>
  )
}
