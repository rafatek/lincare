import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="w-full bg-gradient-to-b from-primary/5 to-background py-20 md:py-32" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full" aria-label="Destaque: Cuidado Humanizado" role="banner">
              <Heart className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-primary">Cuidado Humanizado</span>
            </div>

            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Assistência à Saúde no Conforto do Seu Lar
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              A Lincare Saúde oferece soluções completas de assistência domiciliar com profissionais qualificados e
              atenciosos. Cuidamos de você e sua família com excelência e humanidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold flex items-center gap-2" aria-label="Solicite um orçamento">
                Solicite Orçamento
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 text-base font-semibold border-primary text-primary hover:bg-primary/5 bg-transparent"
                aria-label="Saiba mais sobre nossos serviços"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border" aria-label="Estatísticas da empresa">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Famílias Atendidas</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Disponibilidade</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <figure className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg fade-in">
            <img
              src="/healthcare-professional-providing-home-care-assist.jpg"
              alt="Profissional de saúde oferecendo assistência domiciliar"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <figcaption className="sr-only">
              Profissional de saúde oferecendo assistência domiciliar com cuidado e atenção
            </figcaption>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </figure>
        </div>
      </div>
    </section>
  )
}
