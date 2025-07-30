"use client"

import { useEffect, useState } from "react"
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonialsData = [
  {
    name: "Carlos Silva",
    avatar: "/placeholder.svg?height=100&width=100&q=carlos",
    title: "Melhor decisão para meu jardim!",
    comment:
      "Comprei uma colmeia de Jataí e meu jardim nunca esteve tão vivo. As abelhas são super dóceis e a produção de mel é uma delícia. Recomendo!",
  },
  {
    name: "Mariana Oliveira",
    avatar: "/placeholder.svg?height=100&width=100&q=mariana",
    title: "Experiência incrível!",
    comment:
      "O kit de criação de Uruçu é fantástico. Veio tudo certinho e o suporte da equipe foi essencial. Minhas filhas adoram observar as abelhinhas.",
  },
  {
    name: "Ricardo Souza",
    avatar: "/placeholder.svg?height=100&width=100&q=ricardo",
    title: "Sabor inesquecível",
    comment:
      "O mel de Mandaçaia é simplesmente divino. Sabor suave e único. A entrega foi rápida e o produto veio muito bem embalado.",
  },
  {
    name: "Fernanda Lima",
    avatar: "/placeholder.svg?height=100&width=100&q=fernanda",
    title: "Apaixonada pela minha colmeia",
    comment:
      "Estou apaixonada pela minha colmeia de Jataí. É uma terapia cuidar delas e ver a polinização acontecendo no meu quintal. A Abelhas Nativas está de parabéns!",
  },
  {
    name: "Lucas Pereira",
    avatar: "/placeholder.svg?height=100&width=100&q=lucas",
    title: "Qualidade e confiança",
    comment:
      "Comprei com um pouco de receio, mas a qualidade da colmeia e o atendimento me surpreenderam. Empresa séria e comprometida.",
  },
]

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0)
        api.scrollTo(0)
      } else {
        api.scrollNext()
        setCurrent(current + 1)
      }
    }, 4000)
    return () => clearTimeout(timer)
  }, [api, current])

  return (
    <div id="testimonials" className="w-full py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-bold text-left">
            Aprovado por quem mais importa: nossos clientes
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-white rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col shadow-md">
                    <div className="flex text-yellow-400">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight font-semibold">{testimonial.title}</h3>
                        <p className="text-muted-foreground max-w-xs text-base">{testimonial.comment}</p>
                      </div>
                      <div className="flex flex-row gap-2 text-sm items-center">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={`Avatar de ${testimonial.name}`}
                          />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{testimonial.name}</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
