import BottomBar from "./BottomBar"
import Footer from "./Footer"
import Header from "./Header"

// Common frame for every page: binder, content column, footer, phone action bar.
export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-6xl pl-[30px] pr-[18px] lg:pl-[9.5rem] lg:pr-16">
        {children}
      </main>
      <div className="h-[calc(var(--line)*2)]" aria-hidden />
      <Footer />
      <BottomBar />
    </>
  )
}
