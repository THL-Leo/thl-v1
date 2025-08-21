import { Navbar } from '@/components/Navbar'
import { TechnologiesSection } from '@/components/sections/TechnologiesSection'

export default function TechnologiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        <TechnologiesSection />
      </main>
    </>
  )
}
