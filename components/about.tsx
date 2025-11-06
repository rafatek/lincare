import { CheckCircle2 } from "lucide-react"

export default function About() {

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Sobre a Lincare Saúde
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Somos uma empresa dedicada a transformar a assistência à saúde domiciliar, oferecendo soluções
            personalizadas com qualidade e cuidado humanizado.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg fade-in">
            <img
              src="/misao.jpg"
              alt="Equipe de profissionais de saúde da Lincare"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>

          {/* Right Content */}
          <div className="space-y-6 fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Missão e Visão</h3>

            <p className="text-base text-muted-foreground leading-relaxed">
              Ser ousada na entrega em soluções de saúde, priorizando uma assistência humanizada, com acolhimento, qualidade, segurança e responsabilidade.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Ser referência na atenção domiciliar pela excelência e inovação nos serviços prestados, buscando o crescimento sustentável.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">Equipe multidisciplinar de profissionais qualificados</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">Atendimento personalizado conforme necessidade do paciente</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">Disponibilidade 24 horas para emergências</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 fade-in">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Nossos Valores</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Amor",
                  "Família",
                  "Cuidar",
                  "Confiança",
                  "Ética e Responsabilidade",
                  "Evolução contínua",
                  "Disseminação do conhecimento",
                  "Sustentabilidade",
                  "Diversidade e Inclusão",
                ].map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg fade-in">
              <img
                src="/medico.jpg"
                alt="Coração representando os valores da Lincare"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
