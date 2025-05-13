'use client'

import { ThemeToggle } from './ThemeToggle'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#technologies", label: "Technologies" },
  { href: "#contact", label: "Contact" },
  { href: "/resume.pdf", label: "Resume" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle smooth scroll for hash links
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        const navbarHeight = 96 // h-16 = 64px
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
      isScrolled ? 'bg-background/60 backdrop-blur-sm border-b' : 'bg-transparent'
    }`}>
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
              onClick={(e) => handleClick(e, link.href)}
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