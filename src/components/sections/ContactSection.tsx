'use client'

export function ContactSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-muted/50" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Reach out here:</p>
            <p className="font-xl">leolee.developer@gmail.com</p>
            <a 
              href="https://www.linkedin.com/in/thl-leo/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-xl mt-2 block hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <p className="font-xl mt-2">Los Angeles, CA</p>
          </div>
        </div>
      </div>
    </section>
  )
} 