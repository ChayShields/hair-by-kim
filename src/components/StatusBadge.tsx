"use client"

import { openStatus } from "@/lib/uk-time"
import { useEpochMinute } from "./useEpochMinute"

// "Open now, until 5:30pm" worked out from Kim's real hours in UK time.
// Renders nothing on the server (the page is static and would go stale),
// then fills in on the visitor's phone. Space is reserved so nothing jumps.
export default function StatusBadge({ className = "" }: { className?: string }) {
  const minute = useEpochMinute()
  const status = minute === null ? null : openStatus(minute)

  return (
    <p className={`min-h-[var(--line)] ${className}`} aria-live="polite">
      {status ? (
        <span className="inline-flex items-center gap-2 font-semibold">
          <span
            aria-hidden
            className={`inline-block size-3 rounded-full border-2 border-ink ${status.open ? "bg-highlight" : "bg-paper"}`}
          />
          <span className={status.open ? "marker px-1" : "text-pencil"}>{status.text}</span>
        </span>
      ) : null}
    </p>
  )
}
