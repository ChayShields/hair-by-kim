"use client"

import { useSyncExternalStore } from "react"

// The current minute (as minutes since 1970), or null on the server and while
// hydrating. Static HTML therefore never claims "open now" for a moment that
// has passed; the badge fills in once the page is running on the visitor's
// phone, and refreshes each minute.
function subscribe(callback: () => void) {
  const id = window.setInterval(callback, 30_000)
  return () => window.clearInterval(id)
}

const getSnapshot = () => Math.floor(Date.now() / 60_000)
const getServerSnapshot = () => null

export function useEpochMinute(): number | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
