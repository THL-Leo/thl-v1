'use client'

import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#technologies", label: "Technologies" },
  { href: "#contact", label: "Contact" },
  { href: "/resume.pdf", label: "Resume" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex items-center justify-between h-16 px-4 md:px-8 lg:px-16">
        <a href="/" className="text-2xl font-bold">
          thleov1
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 