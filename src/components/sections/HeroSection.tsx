'use client'

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          thleov1 is a full-stack developer based in London.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          I help innovative startups and forward-thinking organisations rapidly concept, build, and deploy their ideas into the real world.
        </p>
        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            My work includes a real-time streaming platform for commercial photographers,
            <br className="hidden md:block" />
            a 3D and AI-powered design tool, and backend platforms for various projects.
          </p>
        </div>
      </div>
    </section>
  )
} 