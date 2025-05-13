'use client'

import Image from 'next/image'

interface Technology {
  name: string
  icon: string
}

const technologies = {
  "Languages": [
    { name: "Python", icon: "/icons/python.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "C++", icon: "/icons/cplusplus.svg" },
    // { name: "MySQL", icon: "/icons/mysql.svg" },
    // { name: "HTML", icon: "/icons/html5.svg" },
    { name: "Swift", icon: "/icons/swift.svg" },
    { name: "Kotlin", icon: "/icons/kotlin.svg" },
    // { name: "CSS", icon: "/icons/css3.svg" },
    { name: "Postgres", icon: "/icons/postgresql.svg" },
    // { name: "SQLite", icon: "/icons/sqlite.svg" },
  ] as Technology[],
  "Machine Learning": [
    { name: "PyTorch", icon: "/icons/pytorch.svg" },
    { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
    // { name: "Keras", icon: "/icons/keras.svg" },
    { name: "Scikit-learn", icon: "/icons/scikitlearn.svg" },
    { name: "OpenCV", icon: "/icons/opencv.svg" },
    { name: "YOLO", icon: "/icons/yolo.svg" },
    { name: "Pandas", icon: "/icons/pandas.svg" },
    // { name: "GeoPandas", icon: "/icons/geopandas.svg" },
    { name: "Numpy", icon: "/icons/numpy.svg" },

  ] as Technology[],
  "Tools": [
    // { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextdotjs.svg" },
    { name: "Node.js", icon: "/icons/nodedotjs.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    // { name: "Bun", icon: "/icons/bun.svg" },
    // { name: "Deno", icon: "/icons/deno.svg" },
    { name: "Flask", icon: "/icons/flask.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    // { name: "Vercel", icon: "/icons/vercel.svg" },
    { name: "Supabase", icon: "/icons/supabase.svg" },
    // { name: "Google Cloud", icon: "/icons/googlecloud.svg" },
  ] as Technology[],

}

export function TechnologiesSection() {
  return (
    <section className="py-20 px-8 sm:px-12 md:px-16 lg:px-24 scroll-mt-24" id="technologies">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16 pb-20">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category}>
              <h2 className="text-2xl font-normal mb-8">{category}</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-8">
                {techs.map((tech) => (
                  <div 
                    key={tech.name}
                    className="group flex flex-col items-center gap-3"
                  >
                    <div className="relative w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center overflow-hidden transition-colors group-hover:bg-muted/50">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="transition-transform group-hover:scale-110 dark:invert"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 