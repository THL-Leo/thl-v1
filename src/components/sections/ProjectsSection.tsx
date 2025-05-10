'use client'

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const projects = [
  {
    title: "Project One",
    description: "A brief description of your first major project and its impact.",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "Project Two",
    description: "Description of another significant project you've worked on.",
    tags: ["Next.js", "TailwindCSS", "PostgreSQL"],
  },
  {
    title: "Project Three",
    description: "Overview of a third project showcasing different skills.",
    tags: ["AWS", "Python", "Docker"],
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 