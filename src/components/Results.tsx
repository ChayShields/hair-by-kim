import Image from "next/image"
import { results, type Photo } from "@/lib/services"

function Tile({ photo, label }: { photo: Photo; label?: string }) {
  return (
    <div>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes="(min-width: 1024px) 22vw, (min-width: 768px) 40vw, 46vw"
        className="aspect-[3/4] h-auto w-full border-2 border-ink object-cover"
      />
      {label ? <p className="font-hand m-0 text-[1.7rem] leading-[var(--line)]">{label}</p> : null}
    </div>
  )
}

// Kim's own work, added in lib/services.ts. Renders nothing while the list is
// empty, so the page never shows a placeholder or a made-up picture.
export default function Results() {
  if (results.length === 0) return null

  return (
    <section id="work" aria-labelledby="work-title" className="py-[calc(var(--line)*2)]">
      <h2 id="work-title" className="font-display text-3xl font-bold leading-[calc(var(--line)*2)] sm:text-4xl">
        Recent work
      </h2>
      <ul className="m-0 mt-[var(--line)] grid list-none gap-x-12 gap-y-[calc(var(--line)*1.5)] p-0 md:grid-cols-2">
        {results.map((item) => (
          <li key={item.after.src}>
            {item.before ? (
              <div className="grid grid-cols-2 gap-3">
                <Tile photo={item.before} label="before" />
                <Tile photo={item.after} label="after" />
              </div>
            ) : (
              <div className="w-1/2">
                <Tile photo={item.after} />
              </div>
            )}
            <p className="m-0 mt-[var(--line)] max-w-[40ch]">{item.caption}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
