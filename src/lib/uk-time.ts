import { dayNames, formatTime, hoursFor } from "@/lib/business"

// The salon's hours are UK time, so "open now" is worked out in UK time
// whatever timezone the visitor's phone is in.
const partsFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/London",
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
})

const WEEKDAY_INDEX: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }

export function ukNow(epochMinutes: number): { day: number; minutes: number } {
  const parts = partsFormat.formatToParts(new Date(epochMinutes * 60_000))
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ""
  return {
    day: WEEKDAY_INDEX[get("weekday")] ?? 0,
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  }
}

const toMinutes = (value: string) => {
  const [h, m] = value.split(":").map(Number)
  return h * 60 + m
}

export type OpenStatus = { open: boolean; text: string }

export function openStatus(epochMinutes: number): OpenStatus {
  const { day, minutes } = ukNow(epochMinutes)
  const today = hoursFor(day)

  if (today) {
    if (minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
      return { open: true, text: `Open now, until ${formatTime(today.close)}` }
    }
    if (minutes < toMinutes(today.open)) {
      return { open: false, text: `Opens today at ${formatTime(today.open)}` }
    }
  }

  for (let step = 1; step <= 7; step++) {
    const nextDay = (day + step) % 7
    const next = hoursFor(nextDay)
    if (next) {
      const when = step === 1 ? "tomorrow" : dayNames[nextDay]
      return { open: false, text: `Closed now, opens ${when} at ${formatTime(next.open)}` }
    }
  }
  return { open: false, text: "Closed" }
}
