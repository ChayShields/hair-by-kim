// Everything the site says about the business lives here, in one place, so a
// change (a price, her hours, whether the address is shown) is a one-line edit.
// Every value below was supplied by Chay (Kim's details); nothing is invented.

export const business = {
  name: "Hair by Kim",
  // Trading name of Kim Bennett (printed on her business card).
  owner: "Kim Bennett",
  // TODO before launch: replace with the real domain once it is registered
  // (canonical URLs, sitemap, schema and social cards all read this).
  siteUrl: "https://hair-by-kim.vercel.app",

  phoneDisplay: "07920 011058",
  phoneE164: "+447920011058",
  whatsappNumber: "447920011058",

  town: "Lowestoft",
  region: "Suffolk",
  postcodeArea: "NR32",

  // Kim works from home. Chay decided (2026-09-29) to show the address for
  // now while he checks with Kim. Set to false and the site falls back to
  // "Lowestoft, NR32" with "address given when you book" everywhere.
  showAddress: true,
  address: {
    street: "27 Mimosa Walk",
    town: "Lowestoft",
    postcode: "NR32 2SR",
  },

  facebookUrl: "https://www.facebook.com/share/1DU82tR9zu/?mibextid=wwXIfr",
} as const

// day: 0 = Sunday ... 6 = Saturday. `open` and `close` are 24-hour "HH:MM"
// in UK time. A day that is not listed is closed.
export type Hours = { day: number; open: string; close: string }

export const openingHours: Hours[] = [
  { day: 3, open: "09:30", close: "17:00" },
  { day: 4, open: "07:00", close: "10:00" },
  { day: 5, open: "09:30", close: "17:00" },
  { day: 6, open: "07:30", close: "14:00" },
]

export const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const
export const dayShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const

export function hoursFor(day: number): Hours | undefined {
  return openingHours.find((h) => h.day === day)
}

// "17:30" -> "5:30pm", "10:00" -> "10am"
export function formatTime(value: string): string {
  const [h, m] = value.split(":").map(Number)
  const suffix = h >= 12 ? "pm" : "am"
  const hour = h % 12 === 0 ? 12 : h % 12
  return m === 0 ? `${hour}${suffix}` : `${hour}:${String(m).padStart(2, "0")}${suffix}`
}

export function whatsappUrl(message = "Hi Kim, I'd like to book an appointment please."): string {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const telUrl = `tel:${business.phoneE164}`
export const smsUrl = `sms:${business.phoneE164}`

export function mapsUrl(): string {
  const a = business.address
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${a.street}, ${a.town} ${a.postcode}`)}`
}
