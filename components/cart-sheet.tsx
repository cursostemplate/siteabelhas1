"use client"

import Image from "next/image"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Trash2, ShoppingCart } from "lucide-react"

export function CartSheet() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart()

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-6">
          <SheetTitle>Carrinho de Compras</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
          <ScrollArea className="h-full">
            <div className="flex flex-col gap-6 p-6">
              {cartItems.length > 0 ? (
                cartItems.map(({ product, quantity }) => (
                  <div key={product.id} className="flex items-start gap-4">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={product.mainImage || "/placeholder.svg"}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.priceFormatted}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <Input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => updateQuantity(product.id, Number.parseInt(e.target.value, 10))}
                          className="h-8 w-16"
                        />
                        <Button variant="outline" size="icon" onClick={() => removeFromCart(product.id)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remover item</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart className="h-16 w-16 text-muted-foreground" />
                  <p className="mt-4 text-lg font-semibold">Seu carrinho está vazio</p>
                  <p className="text-sm text-muted-foreground">Adicione produtos para vê-los aqui.</p>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
        {cartItems.length > 0 && (
          <SheetFooter className="border-t p-6">
            <div className="w-full space-y-4">
              <div className="flex justify-between font-semibold">
                <span>Subtotal</span>
                <span>{formatCurrency(cartTotal)}</span>
              </div>
              <Button className="w-full" size="lg">
                Finalizar Compra
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
