"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star, ShoppingCart } from "lucide-react"
import { products } from "@/lib/products"
import { useCart } from "@/contexts/cart-context"

const testimonials = [
  {
    name: "Ana Clara",
    comment:
      "Amei o vaso! Chegou super rápido e é ainda mais bonito pessoalmente. Deu um charme especial para minha sala.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Marcos Rocha",
    comment: "A cadeira é extremamente confortável, valeu cada centavo. Minhas costas agradecem! Qualidade impecável.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Juliana Paes",
    comment:
      "A luminária tem um design incrível e a luz é muito agradável. Deixou meu canto de leitura super aconchegante.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function HomePage() {
  const { addToCart } = useCart()

  const handleBuyNowClick = (e: React.MouseEvent, product: (typeof products)[0]) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <>
      {/* Banner Principal */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1200&width=1920"
            alt="Banner principal com decoração moderna"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Design que Transforma</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Encontre peças exclusivas que combinam estilo, conforto e qualidade para o seu lar.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="#products">Explore nossa coleção</Link>
          </Button>
        </div>
      </section>

      {/* Seção de Produtos */}
      <section id="products" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossos Destaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="p-0 flex-grow flex flex-col">
                    <div className="relative">
                      <Image
                        src={product.mainImage || "/placeholder.svg"}
                        alt={`Imagem do produto ${product.name}`}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 text-center flex-grow flex flex-col">
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-4 mt-auto">{product.priceFormatted}</p>
                      <Button onClick={(e) => handleBuyNowClick(e, product)}>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Comprar Agora
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Provas Sociais */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={`Foto de ${testimonial.name}`} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex gap-1 text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill="currentColor" className="w-5 h-5" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">&quot;{testimonial.comment}&quot;</p>
                  <h4 className="font-bold">{testimonial.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
