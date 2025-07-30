"use client"
import { Carousel } from "@/components/ui/image-deck-carousel"

const beeSlides = [
  {
    title: "Abelha Jataí: A Jardineira Incansável",
    button: "Conheça a Jataí",
    src: "/placeholder.svg?height=800&width=800",
  },
  {
    title: "Abelha Uruçu: A Gigante Gentil",
    button: "Descubra a Uruçu",
    src: "/placeholder.svg?height=800&width=800",
  },
  {
    title: "Abelha Mandaçaia: A Guardiã do Sabor",
    button: "Saiba mais",
    src: "/placeholder.svg?height=800&width=800",
  },
  {
    title: "Meliponicultura: Um Hobby Sustentável",
    button: "Comece a criar",
    src: "/placeholder.svg?height=800&width=800",
  },
]

export function ImageDeckCarouselDemo() {
  return (
    <section className="relative overflow-hidden w-full bg-gray-50 py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">Nossos Enxames: Um Mundo de Biodiversidade</h2>
        <Carousel slides={beeSlides} />
      </div>
    </section>
  )
}
