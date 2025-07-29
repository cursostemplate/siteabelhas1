"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { getProductById, type Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { ProductReviews } from "@/components/product-reviews"
import { useCart } from "@/contexts/cart-context"
import { cn } from "@/lib/utils"

export default function ProductPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [activeImage, setActiveImage] = useState<string>("")
  const { addToCart } = useCart()

  useEffect(() => {
    if (params.id) {
      const productId = Number.parseInt(params.id as string, 10)
      const foundProduct = getProductById(productId)
      if (foundProduct) {
        setProduct(foundProduct)
        setActiveImage(foundProduct.mainImage)
      }
    }
  }, [params.id])

  if (!product) {
    return <div>Carregando...</div>
  }

  return (
    <div className="container mx-auto my-12 px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="relative">
            <Image
              src={activeImage || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={cn(
                  "overflow-hidden rounded-md transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  activeImage === img
                    ? "opacity-100 ring-2 ring-primary ring-offset-2"
                    : "opacity-60 hover:opacity-100",
                )}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Miniatura ${index + 1} de ${product.name}`}
                  width={100}
                  height={100}
                  className="h-[100px] w-[100px] object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" className="w-5 h-5" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(123 avaliações)</span>
          </div>
          <p className="mt-4 text-3xl font-bold text-primary">{product.priceFormatted}</p>
          <p className="mt-6 text-base text-gray-600">{product.description}</p>
          <Separator className="my-8" />
          <Button size="lg" className="w-full" onClick={() => addToCart(product)}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
      <ProductReviews />
    </div>
  )
}
