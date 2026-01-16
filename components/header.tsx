"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Serviços", href: "#services" },
    { label: "Sobre Nós", href: "#about" },
    { label: "Diferenciais", href: "#differentials" },
    { label: "Contato", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Página inicial da Lincare Saúde">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center" aria-hidden="true">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">Lincare Saúde</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                aria-current={item.href === "#home" ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+5511992953786"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              aria-label="Ligar para Lincare Saúde"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>(11) 99295-3786</span>
            </a>
            <Button
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white"
              aria-label="Solicitar orçamento"
            >
              Solicite Orçamento
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav id="mobile-nav" className="md:hidden pb-4 space-y-2" aria-label="Navegação móvel">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
                aria-current={item.href === "#home" ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+5511992953786"
              className="block px-4 py-2 text-sm font-medium text-primary hover:bg-muted rounded-lg transition-colors"
              aria-label="Ligar para Lincare Saúde"
            >
              (11) 99295-3786
            </a>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white"
              aria-label="Solicitar orçamento"
            >
              Solicite Orçamento
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
