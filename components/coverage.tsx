export default function Coverage() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Área de Abrangência</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="fade-in">
            <img src="/map-sao-paulo-region.jpg" alt="Mapa de cobertura" className="w-full rounded-lg shadow-lg" />
          </div>

          {/* Content */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Atendemos toda a região metropolitana de São Paulo
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Com uma equipe qualificada e estrutura preparada, oferecemos cobertura completa em toda a região
              metropolitana de São Paulo, garantindo acesso rápido e eficiente aos nossos serviços.
            </p>
            <ul className="space-y-3">
              {["São Paulo", "Guarulhos", "Osasco", "Santo André", "São Bernardo do Campo"].map((city) => (
                <li key={city} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
