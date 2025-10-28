import { Award, Clock, Users, Shield, Zap, MapPin } from "lucide-react"

export default function Differentials() {
  const differentials = [
    {
      icon: Award,
      title: "Profissionais Certificados",
      description: "Equipe com certificações e treinamentos contínuos em saúde domiciliar",
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description: "Atendimento em emergências a qualquer hora do dia ou da noite",
    },
    {
      icon: Users,
      title: "Equipe Multidisciplinar",
      description: "Enfermeiros, fisioterapeutas, cuidadores e outros especialistas",
    },
    {
      icon: Shield,
      title: "Segurança e Higiene",
      description: "Protocolos rigorosos de segurança e higiene em todos os atendimentos",
    },
    {
      icon: Zap,
      title: "Resposta Rápida",
      description: "Atendimento ágil com tempo de resposta reduzido em emergências",
    },
    {
      icon: MapPin,
      title: "Cobertura Ampla",
      description: "Atuamos em toda a região metropolitana de São Paulo",
    },
  ]

  const coverageAreas = [
    "São Paulo (Capital)",
    "Guarulhos",
    "Osasco",
    "Santo André",
    "São Bernardo do Campo",
    "Diadema",
    "Mauá",
    "Ribeirão Pires",
  ]

  return (
    <section id="differentials" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Por Que Escolher a Lincare Saúde
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nossos diferenciais garantem qualidade, segurança e confiabilidade no cuidado com você e sua família
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {differentials.map((differential, index) => {
            const Icon = differential.icon
            return (
              <div key={index} className="flex gap-4 fade-in">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{differential.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{differential.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Coverage Area Section */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Área de Cobertura</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Atendemos toda a região metropolitana de São Paulo com profissionais qualificados e equipamentos
                modernos. Se sua região não está listada, entre em contato para verificar possibilidades.
              </p>

              <div className="space-y-3">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?key=coverage-map"
                alt="Mapa de cobertura da Lincare Saúde na região metropolitana de São Paulo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
