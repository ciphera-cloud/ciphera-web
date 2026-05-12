import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Footer } from "@/components/layout/footer"
import { I18nProvider } from "@/lib/i18n"

export default function Home() {
  return (
    <I18nProvider defaultLocale="en">
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Problem />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}
