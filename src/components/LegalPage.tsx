import Shell from "./Shell"

// Plain reading layout for the legal pages.
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <Shell>
      <article className="max-w-[65ch] py-[calc(var(--line)*2)] [&_h2]:mt-[calc(var(--line)*1.5)] [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_p]:my-[var(--line)] [&_p]:mt-0 [&_ul]:my-[var(--line)] [&_ul]:mt-0 [&_ul]:pl-6 [&_a]:text-biro">
        <h1 className="font-display text-4xl font-extrabold leading-[calc(var(--line)*2)]">{title}</h1>
        <p className="mt-[var(--line)] text-pencil">Last updated {updated}</p>
        {children}
      </article>
    </Shell>
  )
}
