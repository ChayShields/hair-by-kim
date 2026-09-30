// Price list from Kim, as sent by Chay on 2026-09-30 (the updated list). Groups
// are how a client looks for things. `from: true` only where Kim's list said
// "from". `long` is the long-hair price where Kim gave one.
//
// Confirmed by Chay (2026-09-30): Cut is £22 (long hair £26) and covers every
// cut; the gents cut is £18 and still offered.
// Kim may add more services: add a line below, nothing else changes.

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
export type Photo = { src: string; alt: string; width: number; height: number }
// One piece of work: a before-and-after pair, or a single finished photo.
// Captions describe the work only (no client names, no colour formulas).
export type Result = { caption: string; before?: Photo; after: Photo }

// Real Facebook reviews of Kim, word for word (sent by Chay 2026-09-30).
// Names are shown as first name and initial. All four are 5-star reviews
// (confirmed by Chay).
export const reviews: Review[] = [
  {
    quote:
      "I went to have my hair done by Kim this morning and what an amazing job she has done! After having bad experiences in other hair dressers, trusting someone is very hard! I won’t be going anywhere else from now on to have my hair cut!",
    name: "Eboymai B.",
    source: "five star Facebook review",
  },
  {
    quote:
      "I had my hair coloured and trimmed by Kim today for the first time. I love it I have long hair was worried I would never find another hairdresser I would trust with my hair but Kim is amazing so glad I found her not going anywhere else now.",
    name: "Louise P.",
    source: "five star Facebook review",
  },
  {
    quote:
      "Very professional and I came away feeling a million dollars. My hair felt so limp and lifeless when I walked in and upon leaving my hair felt amazing. I would highly recommend Kim to anyone looking for a professional service",
    name: "Donna M.",
    source: "five star Facebook review",
  },
  {
    quote:
      "Was welcomed in and after a wash and consultation my very long hair lost a few dry inches and had long layers added. Dried and straightened with professional products and I am one happy customer. Am happy that my hair received exactly what I asked for, and I haven't had that in a very long time with previous hairdressers! Kim is confident and kind and I definitely recommend her",
    name: "Melanie Q.",
    source: "five star Facebook review",
  },
]

// Photos of Kim's home salon (supplied by Kim via Chay). No people in shot.
export const salonPhotos: Photo[] = [
  { src: "/salon/salon-1.jpg", alt: "Kim's salon: two black styling chairs in front of glitter-framed mirrors, with a basin and white metro tiles", width: 1080, height: 1080 },
  { src: "/salon/salon-2.jpg", alt: "Kim's salon: a shelf of purple and black towels above the basin, with two styling chairs and glitter-framed mirrors", width: 1080, height: 1080 },
]
export const results: Result[] = [
  {
    caption: "Face frame and half a head of fine weaves, blending grey hair.",
    before: { src: "/work/weaves-before.jpg", alt: "Mid-length brown hair sectioned with clips before colouring, seen from behind", width: 369, height: 491 },
    after: { src: "/work/weaves-after.jpg", alt: "The same mid-length hair after colouring, straight with soft caramel weaves", width: 399, height: 532 },
  },
  {
    caption: "A full head of foils with a root colour and toner, for a colour change.",
    before: { src: "/work/foils-1-before.jpg", alt: "Brown hair with grey at the parting before colouring, seen from behind", width: 369, height: 491 },
    after: { src: "/work/foils-1-after.jpg", alt: "The same hair after colouring, straight and blonde with a soft root", width: 625, height: 832 },
  },
  {
    caption: "Full head of foils, a root touch-up and toner.",
    before: { src: "/work/foils-2-before.jpg", alt: "Shoulder-length hair with dark regrowth and warm orange lengths before colouring", width: 900, height: 1200 },
    after: { src: "/work/foils-2-after.jpg", alt: "The same hair after colouring, honey and caramel highlights with a blended root", width: 921, height: 1228 },
  },
  {
    caption: "Rich brunette colour, styled in soft curls.",
    after: { src: "/work/curls.jpg", alt: "Long dark brown hair styled in loose glossy curls, seen from behind", width: 717, height: 955 },
  },
]

export const hasLongHairPrices = serviceGroups.some((g) => g.items.some((s) => s.long))

export const lowestPrice = Math.min(...serviceGroups.flatMap((g) => g.items.map((s) => s.price.amount)))

export const money = (amount: number) => `£${amount}`
