"use client"

import { useEffect, useState } from "react"
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { TextRoll } from "./text-roll"

export const AnimatedCarousel = ({
  title = "Trusted by thousands of businesses worldwide",
  logos = [],
  autoPlay = true,
  autoPlayInterval = 2500,
  containerClassName = "",
  titleClassName = "",
  carouselClassName = "",
  logoClassName = "",
  itemsPerViewMobile = 2,
  itemsPerViewDesktop = 5,
  spacing = "gap-8",
  padding = "py-12 md:py-16",
  logoContainerHeight = "h-24",
}: {
  title?: string
  logos?: string[]
  autoPlay?: boolean
  autoPlayInterval?: number
  containerClassName?: string
  titleClassName?: string
  carouselClassName?: string
  logoClassName?: string
  itemsPerViewMobile?: number
  itemsPerViewDesktop?: number
  spacing?: string
  padding?: string
  logoContainerHeight?: string
}) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api || !autoPlay) {
      return
    }
    const timer = setInterval(() => {
      if (api.scrollSnapList().length === 0) return
      api.scrollNext()
    }, autoPlayInterval)
    return () => clearInterval(timer)
  }, [api, autoPlay, autoPlayInterval])

  return (
    <div className={`w-full ${padding} bg-white ${containerClassName}`}>
      <div className="container mx-auto">
        <div className={`flex flex-col ${spacing}`}>
          <h2 className={`text-3xl md:text-4xl tracking-tighter font-bold text-left text-foreground ${titleClassName}`}>
            <TextRoll>{title}</TextRoll>
          </h2>
          <div>
            <Carousel
              setApi={setApi}
              className={`w-full ${carouselClassName}`}
              opts={{
                loop: true,
                align: "start",
              }}
            >
              <CarouselContent className="-ml-4">
                {logos.map((logo, index) => (
                  <CarouselItem
                    className={`pl-4 basis-1/${itemsPerViewMobile} md:basis-1/3 lg:basis-1/${itemsPerViewDesktop}`}
                    key={index}
                  >
                    <div
                      className={`group flex rounded-lg ${logoContainerHeight} items-center justify-center p-4 hover:bg-accent transition-colors ${logoClassName}`}
                    >
                      <span className="text-center font-medium text-muted-foreground group-hover:text-foreground transition-colors text-sm md:text-base">
                        {logo}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
