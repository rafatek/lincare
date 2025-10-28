import { CheckCircle2 } from "lucide-react"

export default function About() {
  const values = [
    {
      title: "Excelência",
      description: "Profissionais qualificados e treinados para oferecer o melhor cuidado",
    },
    {
      title: "Humanidade",
      description: "Tratamos cada paciente com respeito, dignidade e empatia",
    },
    {
      title: "Confiabilidade",
      description: "Serviço consistente e responsável que você pode contar",
    },
    {
      title: "Inovação",
      description: "Utilizamos as melhores práticas e tecnologias em saúde",
    },
  ]

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
              src="/placeholder.svg?key=about-team"
              alt="Equipe de profissionais de saúde da Lincare"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>

          {/* Right Content */}
          <div className="space-y-6 fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Missão e Visão</h3>

            <p className="text-base text-muted-foreground leading-relaxed">
              Nossa missão é proporcionar assistência à saúde de qualidade no conforto do lar, promovendo bem-estar,
              independência e dignidade aos nossos pacientes.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Acreditamos que o cuidado humanizado é fundamental para a recuperação e manutenção da saúde. Por isso,
              nossa equipe é treinada não apenas em técnicas médicas, mas também em empatia e comunicação.
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

        {/* Values Grid */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">Nossos Valores</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="space-y-3 fade-in">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
