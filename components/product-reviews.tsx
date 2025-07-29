"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reviewsData = {
  averageRating: 4.8,
  totalReviews: 171465,
  ratingDistribution: [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ],
  attributeRatings: [
    { name: "Custo-benefício", rating: 4.5 },
    { name: "Fácil de consumir", rating: 5 },
    { name: "Sabor agradável", rating: 4 },
  ],
  reviewsWithPhotos: [
    {
      id: 1,
      imageUrl: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
    {
      id: 2,
      imageUrl: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
    {
      id: 3,
      imageUrl: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
  ],
}

const StarRating = ({ rating, className = "w-5 h-5" }: { rating: number; className?: string }) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className={`${className} text-yellow-400 fill-yellow-400`} />
      ))}
      {/* Note: half-star rendering is complex, showing full/empty for simplicity */}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className={`${className} text-gray-300 fill-gray-300`} />
      ))}
    </div>
  )
}

export function ProductReviews() {
  return (
    <Card className="mt-12">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Opiniões do produto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-5xl font-bold text-gray-800">{reviewsData.averageRating.toFixed(1)}</p>
            <StarRating rating={reviewsData.averageRating} className="w-6 h-6" />
            <p className="text-sm text-muted-foreground mt-2">
              {reviewsData.totalReviews.toLocaleString("pt-BR")} avaliações
            </p>
          </div>
          <div className="space-y-1">
            {reviewsData.ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-2 text-sm">
                <span className="font-medium w-3">{item.stars}</span>
                <Star className="w-3 h-3 text-gray-400" />
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-gray-400 h-1.5 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {reviewsData.attributeRatings.map((attr) => (
            <div key={attr.name} className="flex justify-between items-center">
              <p className="text-sm font-medium">{attr.name}</p>
              <StarRating rating={attr.rating} />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Opiniões com fotos</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {reviewsData.reviewsWithPhotos.map((review) => (
              <div key={review.id} className="relative">
                <Image
                  src={review.imageUrl || "/placeholder.svg"}
                  alt={`Foto de avaliação ${review.id}`}
                  width={200}
                  height={200}
                  className="rounded-md object-cover w-full aspect-square"
                />
                <div className="absolute bottom-1 left-1 bg-black/50 text-white px-1.5 py-0.5 rounded-full flex items-center gap-1 text-xs">
                  <span>{review.rating}</span>
                  <Star className="w-3 h-3 fill-white text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
