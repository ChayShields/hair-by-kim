"use client"

import { useEffect, useRef, useState } from "react"
import { dayNames, formatTime, hoursFor } from "@/lib/business"
import { ukNow } from "@/lib/uk-time"
import { useEpochMinute } from "./useEpochMinute"

// Monday first, the way a UK diary runs.
const WEEK = [1, 2, 3, 4, 5, 6, 0]

// The week as diary lines. Open hours are highlighted as the section is read
// (the page's one authored moment); closed days are written plainly in
// violet ink. Today gets a pencilled arrow once the page is running.
export default function WeekDiary() {
  const ref = useRef<HTMLDivElement>(null)
  const [inked, setInked] = useState(false)
  const minute = useEpochMinute()
  const today = minute === null ? null : ukNow(minute).day

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInked(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  let openIndex = 0

  return (
    <div ref={ref} className={inked ? "is-inked" : undefined}>
      <ul className="m-0 list-none p-0">
        {WEEK.map((day) => {
          const hours = hoursFor(day)
          const isToday = today === day
          const i = hours ? openIndex++ : 0
          return (
            <li key={day} className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3" aria-current={isToday ? "date" : undefined}>
              <span className={`w-[6.5rem] shrink-0 font-display text-lg sm:w-28 ${hours ? "font-bold" : "font-medium text-pencil"}`}>
                {dayNames[day]}
              </span>
              {hours ? (
                <span className="ink-line tnum whitespace-nowrap px-1 font-semibold" style={{ ["--i" as string]: i }}>
                  {formatTime(hours.open)} to {formatTime(hours.close)}
                </span>
              ) : (
                <span className="font-hand text-[1.7rem] leading-[var(--line)]">
                  closed
                </span>
              )}
              {isToday ? (
                <span aria-hidden className="font-hand -rotate-3 whitespace-nowrap text-[1.4rem] sm:text-[1.7rem] leading-[var(--line)]">
                  &larr; today
                </span>
              ) : null}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
