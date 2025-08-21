import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ContactSection />
      </main>
    </>
  )
}
