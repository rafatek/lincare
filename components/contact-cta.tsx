"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Entre em Contato Conosco
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estamos prontos para responder suas dúvidas e oferecer a melhor solução para suas necessidades de saúde
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-xl p-8 border border-border shadow-sm fade-in">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Telefone</h3>
            <a href="tel:+5511992953786" className="text-primary hover:text-primary/80 font-medium">
              (11) 99295-3786
            </a>
            <p className="text-sm text-muted-foreground mt-2">Disponível 24 horas</p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-border shadow-sm fade-in">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <a href="mailto:contato@lincaresaude.com.br" className="text-primary hover:text-primary/80 font-medium">
              contato@lincaresaude.com.br
            </a>
            <p className="text-sm text-muted-foreground mt-2">Resposta em até 2 horas</p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-border shadow-sm fade-in">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Localização</h3>
            <p className="text-foreground font-medium">São Paulo, SP</p>
            <p className="text-sm text-muted-foreground mt-2">Atendimento em toda região metropolitana</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Solicite um Orçamento</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="pos-operatorio">Cuidados Pós-Operatórios</option>
                  <option value="idoso">Assistência ao Idoso</option>
                  <option value="medicamentos">Administração de Medicamentos</option>
                  <option value="reabilitacao">Reabilitação Física</option>
                  <option value="paliativos">Cuidados Paliativos</option>
                  <option value="monitoramento">Monitoramento de Saúde</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="Descreva suas necessidades..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-semibold flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Enviar Solicitação
              </Button>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                <p className="font-medium">Obrigado! Sua solicitação foi enviada com sucesso.</p>
                <p className="text-sm">Entraremos em contato em breve.</p>
              </div>
            )}
          </form>
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center text-white fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Não Espere Mais</h3>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Sua saúde e bem-estar são nossa prioridade. Entre em contato agora e descubra como podemos ajudar você e sua
            família.
          </p>
          <a
            href="tel:+5511992953786"
            className="inline-flex items-center gap-2 bg-white hover:bg-primary-foreground text-primary hover:text-primary/80 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <Phone className="w-5 h-5" />
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  )
}
