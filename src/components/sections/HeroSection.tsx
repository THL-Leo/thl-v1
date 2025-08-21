'use client'

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 sm:px-12 md:px-16 lg:px-24 relative">
      <div className="max-w-6xl mx-auto w-full sm:w-auto">
        <h1 className="text-xl mb-4 font-bold">
          Leo is a software engineer based in Los Angeles.
        </h1>
        <p className="text-lg font-semibold mb-4">
          I make tools that help me with my daily life or anything I find interesting.
        </p>
        <div className="text-base space-y-4">
          <p>
            My recent work includes a{' '}
            <a href="https://yesterday7.vercel.app/" className="underline underline-offset-4 hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
              news platform
            </a>{' '}
            that runs React components directly from PostgreSQL,{' '}
            <a href="https://devpost.com/software/moodify-tqhfsk" className="underline underline-offset-4 hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
              Image to Music platform
            </a>{' '}
            from LA Hacks 24.
          </p>
          <p>
            I also built an{' '}
            <a href="https://devpost.com/software/idontknowhowtowriteemails" className="underline underline-offset-4 hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
              Email Writer
            </a>{' '}
            from Anthropic x USC Hackathon 25, and{' '}
            <a href="https://github.com/THL-Leo/conclave" className="underline underline-offset-4 hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
              Conclave
            </a>: a papal election simulator.
          </p>
        </div>

        <div className="flex gap-4 mt-4 flex-wrap">
          <a 
            href="https://github.com/THL-Leo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base font-semibold hover:text-primary transition-colors"
          >
            Github
          </a>
          <a 
            href="https://www.linkedin.com/in/thl-leo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base font-semibold hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=leolee.developer@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base font-semibold hover:text-primary transition-colors"
          >
            Email
          </a>
          <a 
            href="Web.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base font-semibold hover:text-primary transition-colors"
          >
            Web Resume
          </a>
          <a 
            href="MLE.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base font-semibold hover:text-primary transition-colors"
          >
            MLE Resume
          </a>
        </div>
      </div>
    </section>
  )
} 