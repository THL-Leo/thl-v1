'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Want to work together? Drop me a line below.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                className="min-h-[150px]"
              />
            </div>

            <Button className="w-full">
              Send Message
            </Button>
          </form>

          <div className="mt-12 pt-12 border-t text-center">
            <p className="text-muted-foreground mb-4">Or reach out directly:</p>
            <p className="font-mono">contact@yourdomain.com</p>
            <p className="font-mono mt-2">London, UK</p>
          </div>
        </div>
      </div>
    </section>
  )
} 