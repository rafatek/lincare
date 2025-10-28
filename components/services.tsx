import { Heart, Users, Pill, Activity, Brain, Stethoscope } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Cuidados Pós-Operatórios",
      description: "Acompanhamento especializado após cirurgias com monitoramento contínuo da recuperação",
    },
    {
      icon: Users,
      title: "Assistência ao Idoso",
      description: "Cuidados personalizados para idosos com atenção à mobilidade e bem-estar",
    },
    {
      icon: Pill,
      title: "Administração de Medicamentos",
      description: "Controle e administração segura de medicamentos conforme prescrição médica",
    },
    {
      icon: Activity,
      title: "Reabilitação Física",
      description: "Programas de fisioterapia e reabilitação no conforto do seu lar",
    },
    {
      icon: Brain,
      title: "Cuidados Paliativos",
      description: "Atendimento compassivo focado no conforto e qualidade de vida",
    },
    {
      icon: Stethoscope,
      title: "Monitoramento de Saúde",
      description: "Acompanhamento contínuo de sinais vitais e condições de saúde",
    },
  ]

  return (
    <section id="services" className="w-full py-20 md:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de serviços de assistência à saúde domiciliar adaptados às suas necessidades
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300 fade-in group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href="#contact"
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                  >
                    Saiba mais
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 border border-border text-center fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Não encontrou o serviço que procura?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Oferecemos soluções personalizadas. Entre em contato conosco para discutir suas necessidades específicas.
          </p>
          <a
            href="tel:+5511992953786"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  )
}
