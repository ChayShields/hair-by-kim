import Image from "next/image"
import { results } from "@/lib/services"

// Real before-and-after photos from Kim's clients. Renders nothing until
// photos have been added to `results` in lib/services.ts, so the page never
// shows a placeholder or a made-up picture.
export default function Results() {
  if (results.length === 0) return null

  return (
    <section id="results" aria-labelledby="results-title" className="py-[calc(var(--line)*2)]">
      <h2 id="results-title" className="font-display text-3xl font-bold leading-[calc(var(--line)*2)] sm:text-4xl">
        Before and after
      </h2>
      <ul className="m-0 mt-[var(--line)] grid list-none grid-cols-1 gap-[var(--line)] p-0 sm:grid-cols-2">
        {results.map((photo) => (
          <li key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 640px) 45vw, 92vw"
              className="h-auto w-full border-2 border-ink"
            />
            {photo.label ? <p className="mt-1 text-sm text-pencil">{photo.label}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
