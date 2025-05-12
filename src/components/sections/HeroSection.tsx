'use client'

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 sm:px-12 md:px-16 lg:px-24 relative">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl mb-4 font-bold">
          Leo is a software engineer based in Los Angeles.
        </h1>
        <p className="text-lg font-semibold mb-4">
          I make tools that help me with my daily life or anything I find interesting.
        </p>
        <div className="text-base space-y-1">
          <p>
            My recent work includes{' '}
            <a href="https://devpost.com/software/moodify-tqhfsk" className="underline underline-offset-4 hover:text-foreground transition-colors">
              Image to Music platform
            </a>{' '}
            from LA Hacks 24, a{' '}
            <a href="https://devpost.com/software/degen-purity-test" className="underline underline-offset-4 hover:text-foreground transition-colors">
              Modern Brainrot Personality Test
            </a>{' '}
            from jia.seed Hackathon 24, an {' '}
            <a href="https://devpost.com/software/idontknowhowtowriteemails" className="underline underline-offset-4 hover:text-foreground transition-colors">
              Email Writer
            </a>{' '}
            from Anthropic x USC Hackathon 25, and {' '}
            <a href="https://github.com/THL-Leo/conclave" className="underline underline-offset-4 hover:text-foreground transition-colors">
              Conclave
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
} 