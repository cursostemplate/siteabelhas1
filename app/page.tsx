"use client"

import React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star, ShoppingCart } from "lucide-react"
import { products, mostPurchasedProducts } from "@/lib/products"
import { useCart } from "@/contexts/cart-context"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { VideoPlayer } from "@/components/ui/video-thumbnail-player"
import { ImageSwiper } from "@/components/ui/image-swiper"

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

const bannerSlides = [
  {
    image: "/placeholder.svg?height=1200&width=1920&q=banner1",
    alt: "Sala de estar moderna com sofá cinza e decoração minimalista.",
    title: "Design que Transforma",
    subtitle: "Encontre peças exclusivas que combinam estilo, conforto e qualidade para o seu lar.",
    buttonText: "Explore nossa coleção",
    buttonLink: "#products",
  },
  {
    image: "/placeholder.svg?height=1200&width=1920&q=banner2",
    alt: "Canto de leitura aconchegante com poltrona de couro e luminária de chão.",
    title: "Conforto em Cada Detalhe",
    subtitle: "Crie ambientes acolhedores com móveis que abraçam e relaxam.",
    buttonText: "Veja as poltronas",
    buttonLink: "#most-purchased",
  },
  {
    image: "/placeholder.svg?height=1200&width=1920&q=banner3",
    alt: "Mesa de jantar de madeira com cadeiras de design moderno.",
    title: "Momentos para Compartilhar",
    subtitle: "Peças que reúnem pessoas e criam memórias inesquecíveis.",
    buttonText: "Nossos destaques",
    buttonLink: "#products",
  },
  {
    image: "/placeholder.svg?height=1200&width=1920&q=banner4",
    alt: "Escritório em casa bem iluminado com cadeira ergonômica e estante organizada.",
    title: "Inspiração para seu Espaço",
    subtitle: "Soluções inteligentes e elegantes para o seu dia a dia.",
    buttonText: "Descubra mais",
    buttonLink: "#most-purchased",
  },
]

const dailyDeals = [
  {
    id: 10,
    name: "Colmeia de Jataí",
    location: "Produção sustentável",
    price: 250.0,
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
  },
  {
    id: 11,
    name: "Mel de Mandaçaia 250g",
    location: "Sabor único e medicinal",
    price: 79.9,
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
  },
  {
    id: 12,
    name: "Kit Criação de Uruçu",
    location: "Inicie sua meliponicultura",
    price: 499.9,
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
  },
]

export default function HomePage() {
  const { addToCart } = useCart()
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  const handleBuyNowClick = (e: React.MouseEvent, product: (typeof products)[0]) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <>
      {/* Banner Principal */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="h-full">
            {bannerSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative h-full w-full flex items-center justify-center text-center text-white">
                  <div className="absolute inset-0">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.alt}
                      layout="fill"
                      objectFit="cover"
                      className="brightness-50"
                      priority={index === 0}
                    />
                  </div>
                  <div className="relative z-10 p-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 animate-fade-in-down">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up">{slide.subtitle}</p>
                    <Button size="lg" className="mt-8" asChild>
                      <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/20 hover:bg-black/50 border-none hidden md:flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/20 hover:bg-black/50 border-none hidden md:flex" />
        </Carousel>
      </section>

      {/* Seção de Ofertas do Dia */}
      <section id="daily-deals" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ofertas do Dia Promocional</h2>
          <div className="flex justify-center">
            {dailyDeals.slice(0, 1).map((deal) => (
              <Card key={deal.id} className="w-full max-w-sm mx-auto">
                <CardContent className="p-0">
                  <ImageSwiper images={deal.images} />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{deal.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{deal.location}</p>
                  <p className="mt-1">
                    <span className="font-semibold">
                      {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(deal.price)}
                    </span>
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
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

      {/* Seção de Mais Comprados */}
      <section id="most-purchased" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Categorias Mais Comprados</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {mostPurchasedProducts.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Link href={`/products/${product.id}`} className="group">
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* Seção de Vídeo */}
      <section id="video-section" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Conheça Nossa História</h2>
          <div className="w-full max-w-4xl mx-auto">
            <VideoPlayer
              thumbnailUrl="/placeholder.svg?height=1080&width=1920"
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Nossa Paixão por Abelhas Nativas"
              description="Descubra como cuidamos das nossas abelhas e produzimos com sustentabilidade."
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Seção de Provas Sociais */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
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
