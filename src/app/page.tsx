import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { TechnologiesSection } from '@/components/sections/TechnologiesSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProjectsSection />
        <TechnologiesSection />
        <ContactSection />
      </main>
    </>
  )
}
