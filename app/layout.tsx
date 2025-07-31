import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartProvider } from "@/contexts/cart-context"
import { Toaster } from "@/components/ui/sonner"
import { CartSheet } from "@/components/cart-sheet"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"

export const metadata: Metadata = {
  title: "Abelhas Nativas - Design que Transforma",
  description: "Encontre peças exclusivas que combinam estilo, conforto e qualidade para o seu lar.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="bg-white text-gray-800">
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-grow">{children}</main>
            <SiteFooter />
            <CartSheet />
          </div>
          <Toaster richColors />
          <CookieConsentBanner />
        </CartProvider>
      </body>
    </html>
  )
}
