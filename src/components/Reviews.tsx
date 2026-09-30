import { reviews } from "@/lib/services"

// Real reviews, word for word. Renders nothing until reviews have been added
// to `reviews` in lib/services.ts.
export default function Reviews() {
  if (reviews.length === 0) return null

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="py-[calc(var(--line)*2)]">
      <h2 id="reviews-title" className="font-display text-3xl font-bold leading-[calc(var(--line)*2)] sm:text-4xl">
        What clients say
      </h2>
      <ul className="m-0 mt-[var(--line)] flex list-none flex-col gap-[var(--line)] p-0">
        {reviews.map((review) => (
          <li key={review.name + review.quote.slice(0, 24)}>
            <blockquote className="m-0 max-w-[65ch] text-lg">&ldquo;{review.quote}&rdquo;</blockquote>
            <p className="font-hand text-[1.7rem] leading-[var(--line)]">
              {review.name}
              {review.source ? `, ${review.source}` : ""}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
