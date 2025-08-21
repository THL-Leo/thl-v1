import { Navbar } from '@/components/Navbar'
import { ProjectsSection } from '@/components/sections/ProjectsSection'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <ProjectsSection />
      </main>
    </>
  )
}


