import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Differentials from "@/components/differentials"
import Coverage from "@/components/coverage"
import Testimonials from "@/components/testimonials"
import ContactCTA from "@/components/contact-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Coverage />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  )
}
