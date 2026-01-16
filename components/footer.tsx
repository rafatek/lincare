import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-white py-12" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center" aria-hidden="true">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="font-bold text-lg">Lincare Saúde</span>
            </div>
            <p className="text-white/70 text-sm">
              Soluções de qualidade em assistência à saúde com cuidado humanizado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition-colors" aria-label="Ir para a seção de serviços">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/70 hover:text-white transition-colors" aria-label="Ir para a seção sobre nós">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-white transition-colors" aria-label="Ir para a seção de contato">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <address className="not-italic">
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <a href="tel:+5511992953786" aria-label="Ligar para Lincare Saúde">(11) 99295-3786</a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </address>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Visite nossa página no Facebook"
              >
                <span className="text-sm">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Visite nosso perfil no LinkedIn"
              >
                <span className="text-sm">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Visite nosso perfil no Instagram"
              >
                <span className="text-sm">ig</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm text-white/60">
            Copyright © 2025 Lincare Saúde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
