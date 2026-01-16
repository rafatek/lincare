import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Filha de paciente",
      content:
        "A Lincare Saúde foi fundamental na recuperação da minha mãe após a cirurgia. Os profissionais são atenciosos, qualificados e sempre disponíveis. Recomendo muito!",
      rating: 5,
      image: "/placeholder.svg?key=testimonial-1",
    },
    {
      name: "João Santos",
      role: "Paciente",
      content:
        "Recebi atendimento excelente em casa. A equipe é profissional e humanizada. Sinto-me seguro e bem cuidado. Muito obrigado à Lincare Saúde!",
      rating: 5,
      image: "/placeholder.svg?key=testimonial-2",
    },
    {
      name: "Ana Costa",
      role: "Esposa de paciente",
      content:
        "Meu marido recebeu cuidados paliativos com muita dignidade e respeito. A equipe nos apoiou em um momento difícil. Somos eternamente gratos.",
      rating: 5,
      image: "/placeholder.svg?key=testimonial-3",
    },
    {
      name: "Carlos Oliveira",
      role: "Filho de paciente",
      content:
        "Excelente serviço! A disponibilidade 24/7 nos deu tranquilidade. Meu pai está bem cuidado e isso é o mais importante para nós.",
      rating: 5,
      image: "/placeholder.svg?key=testimonial-4",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Histórias reais de famílias que confiaram na Lincare Saúde para o cuidado de seus entes queridos
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 fade-in flex flex-col"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-border">
          <div className="text-center fade-in">
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</p>
            <p className="text-muted-foreground">Taxa de Satisfação</p>
          </div>
          <div className="text-center fade-in">
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</p>
            <p className="text-muted-foreground">Famílias Atendidas</p>
          </div>
          <div className="text-center fade-in">
            <p className="text-4xl md:text-5xl font-bold text-primary mb-2">4.9★</p>
            <p className="text-muted-foreground">Avaliação Média</p>
          </div>
        </div>
      </div>
    </section>
  )
}
