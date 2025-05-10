'use client'

const technologies = {
  "Frontend": [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
  ],
  "Backend": [
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
  ],
  "Tools & Others": [
    "Git",
    "Docker",
    "AWS",
    "CI/CD",
    "Testing",
  ],
}

export function TechnologiesSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Core Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-6">{category}</h3>
              <ul className="space-y-3">
                {techs.map((tech) => (
                  <li key={tech} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 