'use client'

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { RepoLanguageChart } from '@/components/RepoLanguageChart'

const projects = [
  {
    title: "Project Name",
    description: `Project Name is an innovative project that explores new possibilities in technology. 
    The first version demonstrates key concepts in user interaction and system design.`,
    longDescription: `In order to create this prototype, we designed custom solutions and built the technology stack to
    drive the user interface and system architecture. The project includes custom-built interfaces and 
    integrates with modern technologies to create a seamless experience.`,
    feedback: "The project was showcased to industry experts and received positive feedback from the community.",
    tags: ["Software Engineering", "UI/UX Design", "System Architecture"],
    links: [
      { label: "GitHub", url: "https://github.com/THL-Leo/thl" },
      { label: "Live Demo", url: "https://demo.com" },
    ],
    github: {
      owner: "THL-Leo",
      repo: "thl"
    }
  },
  // Add more projects as needed
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16" id="projects">
      <div className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={project.title} className="mb-32 last:mb-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {project.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {project.description}
                </p>
                <p className="text-muted-foreground mb-8">
                  {project.longDescription}
                </p>
                <p className="text-muted-foreground mb-8">
                  {project.feedback}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-muted rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="space-x-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>

              {/* Language Chart */}
              <div className="relative aspect-square bg-muted/30 rounded-lg overflow-hidden">
                <RepoLanguageChart 
                  repoName={project.github.repo} 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 