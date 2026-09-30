import Image from "next/image"
import { salonPhotos } from "@/lib/services"

// Kim's home salon. Renders nothing while there are no photos.
export default function Salon() {
  if (salonPhotos.length === 0) return null

  return (
    <section id="salon" aria-labelledby="salon-title" className="py-[calc(var(--line)*2)]">
      <h2 id="salon-title" className="font-display text-3xl font-bold leading-[calc(var(--line)*2)] sm:text-4xl">
        The salon
      </h2>
      <p className="m-0 mt-[var(--line)] max-w-[40ch]">A relaxed home salon in Lowestoft.</p>
      <ul className="m-0 mt-[var(--line)] grid max-w-3xl list-none gap-3 p-0 sm:grid-cols-2 sm:gap-6">
        {salonPhotos.map((photo) => (
          <li key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 768px) 330px, 92vw"
              className="aspect-square h-auto w-full border-2 border-ink object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
