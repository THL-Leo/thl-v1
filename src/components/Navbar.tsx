'use client'

import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex items-center justify-between h-16 px-4 md:px-8 lg:px-16">
        <a href="/" className="text-2xl font-bold">
          thleov1
        </a>
        <nav className="flex items-center gap-8">
          <a href="#projects" className="text-sm hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#technologies" className="text-sm hover:text-primary transition-colors">
            Technologies
          </a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
} 