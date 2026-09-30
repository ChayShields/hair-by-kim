import { reviews } from "@/lib/services"

// Real reviews, word for word, added in lib/services.ts. Renders nothing
// while the list is empty.
export default function Reviews() {
  if (reviews.length === 0) return null

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="py-[calc(var(--line)*2)]">
      <h2 id="reviews-title" className="font-display text-3xl font-bold leading-[calc(var(--line)*2)] sm:text-4xl">
        What clients say
      </h2>
      <ul className="m-0 mt-[var(--line)] grid list-none gap-x-12 gap-y-[calc(var(--line)*1.5)] p-0 md:grid-cols-2">
        {reviews.map((review) => (
          <li key={review.name + review.quote.slice(0, 24)}>
            <figure className="m-0">
              <blockquote className="m-0 max-w-[60ch]">&ldquo;{review.quote}&rdquo;</blockquote>
              <figcaption className="font-hand text-[1.7rem] leading-[var(--line)]">
                {review.name}
                {review.source ? `, ${review.source}` : ""}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
