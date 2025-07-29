"use client"

import { useState, useEffect } from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star, ShoppingCart, X } from "lucide-react"
import { cn } from "@/lib/utils"

// Tipagem para os dados do produto
type Product = {
  id: number
  name: string
  price: string
  description: string
  images: string[]
  mainImage: string
}

// Dados de exemplo dos produtos
const products: Product[] = [
  {
    id: 1,
    name: "Eco-Vaso Geométrico",
    price: "R$ 89,90",
    description:
      "Um vaso elegante e sustentável, feito com materiais reciclados. Seu design geométrico moderno adiciona um toque de sofisticação a qualquer ambiente. Perfeito para plantas pequenas e suculentas.",
    mainImage: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
  {
    id: 2,
    name: "Luminária Nórdica",
    price: "R$ 149,90",
    description:
      "Inspirada no minimalismo escandinavo, esta luminária combina madeira natural e metal para criar uma iluminação acolhedora. Ideal para mesas de cabeceira ou cantos de leitura.",
    mainImage: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
  {
    id: 3,
    name: "Cadeira Ergonômica",
    price: "R$ 799,90",
    description:
      "Conforto e design se encontram nesta cadeira ergonômica. Com suporte lombar ajustável e materiais de alta qualidade, é a escolha perfeita para seu home office ou escritório.",
    mainImage: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
]

// Dados de exemplo das provas sociais
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)

    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  return (
    <div className="bg-white text-gray-800">
      {/* Banner Principal */}
      <header className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1200&width=1920"
            alt="Banner principal com decoração moderna"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
        </div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Design que Transforma</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Encontre peças exclusivas que combinam estilo, conforto e qualidade para o seu lar.
          </p>
          <Button size="lg" className="mt-8">
            Explore nossa coleção
          </Button>
        </div>
      </header>

      <main>
        {/* Seção de Produtos */}
        <section id="products" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossos Destaques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={product.mainImage || "/placeholder.svg"}
                        alt={`Imagem do produto ${product.name}`}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                      <Button onClick={() => setSelectedProduct(product)}>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Comprar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold text-lg mb-4">Sua Loja</h3>
            <p className="text-gray-400">Design e qualidade para o seu espaço.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Início
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <p className="text-gray-400">contato@sualoja.com</p>
            <p className="text-gray-400">(11) 99999-8888</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Siga-nos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Sua Loja. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Modal de Detalhes do Produto */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-[800px] p-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {selectedProduct?.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`Imagem ${index + 1} de ${selectedProduct.name}`}
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
              <div className="mt-4 flex justify-center gap-2">
                {selectedProduct?.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                      "overflow-hidden rounded-md transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      current === index
                        ? "opacity-100 ring-2 ring-primary ring-offset-2"
                        : "opacity-60 hover:opacity-100",
                    )}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`Miniatura ${index + 1} de ${selectedProduct.name}`}
                      width={100}
                      height={100}
                      className="h-[100px] w-[100px] object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6 flex flex-col">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProduct?.name}</DialogTitle>
                <DialogDescription className="text-base text-gray-600 pt-2">
                  {selectedProduct?.description}
                </DialogDescription>
              </DialogHeader>
              <div className="my-6">
                <p className="text-3xl font-bold text-primary">{selectedProduct?.price}</p>
              </div>
              <DialogFooter className="mt-auto">
                <Button size="lg" className="w-full">
                  Finalizar Compra
                </Button>
              </DialogFooter>
            </div>
          </div>
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Fechar</span>
          </button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
