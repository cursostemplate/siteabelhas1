"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu, ShoppingCart } from "lucide-react"
import { SearchDialog } from "./search-dialog"
import { useCart } from "@/contexts/cart-context"
import { Badge } from "@/components/ui/badge"

export function SiteHeader() {
  const { cartItems, setIsCartOpen } = useCart()
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="bg-gray-900 px-4 py-2 text-center text-xs font-medium text-white md:text-sm">
        PARCELE EM ATÉ 12X | FRETE GRÁTIS
      </div>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 pt-8">
                <Link href="/" className="text-lg font-medium" prefetch={false}>
                  Início
                </Link>
                <Link href="/#products" className="text-lg font-medium" prefetch={false}>
                  Produtos
                </Link>
                <Link href="/#testimonials" className="text-lg font-medium" prefetch={false}>
                  Depoimentos
                </Link>
                <Link href="#" className="text-lg font-medium" prefetch={false}>
                  Contato
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="/" prefetch={false}>
              Início
            </Link>
            <Link href="/#products" prefetch={false}>
              Produtos
            </Link>
            <Link href="/#testimonials" prefetch={false}>
              Depoimentos
            </Link>
          </nav>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="text-xl font-bold tracking-wider" prefetch={false}>
            Abelhas Nativas
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <SearchDialog />
          <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
            {itemCount > 0 && (
              <Badge variant="destructive" className="absolute -right-2 -top-2 h-5 w-5 justify-center rounded-full p-0">
                {itemCount}
              </Badge>
            )}
            <ShoppingCart className="h-6 w-6" />
            <span className="sr-only">Carrinho</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
