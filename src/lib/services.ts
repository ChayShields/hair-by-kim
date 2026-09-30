// Price list from Kim, as sent by Chay on 2026-09-30 (the updated list). Groups
// are how a client looks for things. `from: true` only where Kim's list said
// "from". `long` is the long-hair price where Kim gave one.
//
// OPEN QUESTIONS for Kim (Chay to confirm):
//  - Gents cut £18: confirmed still offered (Chay, 2026-09-30).
//  - "Cuts £22" on the updated list replaced "Women's cut £22", so the name is
//    plain "Cut". Confirm nobody is mislabelled.
//  - Kim may add more services: add a line below, nothing else changes.

export type Price = { amount: number; from?: boolean }
export type Service = { name: string; price: Price; long?: Price }
export type ServiceGroup = { title: string; items: Service[] }

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Cuts",
    items: [
      { name: "Cut", price: { amount: 22 }, long: { amount: 26 } },
      { name: "Gents cut", price: { amount: 18 } },
      { name: "Wet cut", price: { amount: 30 }, long: { amount: 35 } },
      { name: "Restyle", price: { amount: 45 }, long: { amount: 50 } },
      { name: "Wash, cut and blow-dry", price: { amount: 32 }, long: { amount: 40 } },
    ],
  },
  {
    title: "Blow-dry",
    items: [{ name: "Blow-dry", price: { amount: 22 }, long: { amount: 26 } }],
  },
  {
    title: "Perms",
    items: [{ name: "Perm", price: { amount: 70, from: true }, long: { amount: 90, from: true } }],
  },
  {
    title: "Colour",
    items: [
      { name: "Root colour", price: { amount: 62, from: true } },
      { name: "Foils", price: { amount: 72, from: true } },
      { name: "All-over colour", price: { amount: 75 } },
    ],
  },
]

// Real customer reviews and before/after photos are added here once Chay has
// collected them from Kim's Facebook page (word for word, image files).
// While these lists are empty their sections do not render at all.
export type Review = { quote: string; name: string; source?: string }
export type Result = { src: string; alt: string; width: number; height: number; label?: string }

export const reviews: Review[] = []
export const results: Result[] = []

export const hasLongHairPrices = serviceGroups.some((g) => g.items.some((s) => s.long))

export const lowestPrice = Math.min(...serviceGroups.flatMap((g) => g.items.map((s) => s.price.amount)))

export const money = (amount: number) => `£${amount}`
