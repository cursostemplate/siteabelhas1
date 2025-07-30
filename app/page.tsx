"use client"

import React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Star } from "lucide-react"
import { products, mostPurchasedProducts } from "@/lib/products"
import { useCart } from "@/contexts/cart-context"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { VideoPlayer } from "@/components/ui/video-thumbnail-player"
import { ImageSwiper } from "@/components/ui/image-swiper"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/ui/faq"
import { AnimatedCarousel } from "@/components/ui/logo-carousel"
import { CouponPopup } from "@/components/coupon-popup"
import { AnimatedTooltipPreview } from "@/components/animated-tooltip-preview"

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

const faqData = [
  {
    question: "Como as abelhas são enviadas?",
    answer:
      "Nossas abelhas são enviadas em caixas especiais, projetadas para garantir a segurança e o bem-estar delas durante o transporte. Utilizamos transportadoras especializadas em cargas vivas, com seguro total contra perdas e danos.",
  },
  {
    question: "É legal comprar abelhas sem ferrão?",
    answer:
      "Sim, é totalmente legal. Todas as nossas colônias são de criadores autorizados e seguem as regulamentações do IBAMA. Você receberá toda a documentação necessária junto com sua compra.",
  },
  {
    question: "O que acontece se as abelhas chegarem mortas?",
    answer:
      "Nossa garantia de entrega cobre 100% do valor. Caso ocorra qualquer problema durante o transporte e as abelhas não cheguem vivas, basta nos contatar com fotos em até 24h após o recebimento que providenciaremos o reenvio de uma nova colônia ou o reembolso total.",
  },
  {
    question: "Preciso de alguma licença para criar abelhas sem ferrão?",
    answer:
      "Para a criação como hobby, geralmente não é necessária uma licença específica, mas é importante se informar sobre as regulamentações locais. Para atividades comerciais, pode ser necessário o registro junto aos órgãos ambientais. Oferecemos orientação sobre os primeiros passos.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo de entrega varia de acordo com a sua localidade. Em média, leva de 3 a 7 dias úteis. O prazo exato será calculado e informado no momento da finalização da compra.",
  },
]

const promoItems = [
  "Abelha Jataí",
  "Abelha Uruçu",
  "Abelha Mandaçaia",
  "Promoções Exclusivas",
  "Frete Grátis Brasil",
  "12x Sem Juros",
  "Compra 100% Segura",
  "Sustentabilidade",
  "Mel Puro e Orgânico",
  "Apoie o Meliponicultor",
  "Polinização para o Planeta",
  "Qualidade Garantida",
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
      <CouponPopup />
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

      {/* Premium Buyers Section */}
      <section className="py-6 bg-gray-50 border-b border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-sm font-medium text-gray-600 whitespace-nowrap">Compradores premium</p>
            </div>
            <AnimatedTooltipPreview />
          </div>
        </div>
      </section>

      {/* Seção de Vantagens */}
      <AnimatedCarousel
        title="Vantagens que voam até você"
        logos={promoItems}
        itemsPerViewMobile={3}
        itemsPerViewDesktop={6}
        logoContainerHeight="h-20"
        logoClassName="border-none"
        padding="py-12 md:py-16"
      />

      {/* Seção de Ofertas do Dia */}
      <section id="daily-deals" className="py-16 md:py-24 bg-gray-50">
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
      <section id="products" className="py-16 md:py-24 bg-white">
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
      <section id="most-purchased" className="py-16 md:py-24 bg-gray-50">
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

      {/* Seção de Vídeo e FAQ */}
      <div className="bg-white">
        <section id="video-section" className="pt-16 md:pt-24">
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

        <FaqSection
          title="Dúvidas Frequentes"
          description="Tudo o que você precisa saber sobre a compra e envio das nossas abelhas."
          items={faqData}
          contactInfo={{
            title: "Ainda tem dúvidas?",
            description: "Nossa equipe está pronta para ajudar você.",
            buttonText: "Fale Conosco",
            onContact: () => console.log("Contact support clicked"),
          }}
          className="bg-white"
        />
      </div>

      {/* Seção de Provas Sociais */}
      <Testimonials />
    </>
  )
}
