"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function CouponPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const couponCode = "NATIVAS15"

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000) // 8 segundos

    return () => clearTimeout(timer)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-md p-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-8 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Ilustração de abelha e favo de mel"
                  width={100}
                  height={100}
                  className="mb-4"
                />
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Você Ganhou um Cupom!</DialogTitle>
                  <DialogDescription className="mt-2">
                    Use o cupom abaixo para um desconto especial na compra de 3 ou mais enxames de abelhas sem ferrão.
                  </DialogDescription>
                </DialogHeader>
                <div className="my-6 w-full">
                  <div className="border-2 border-dashed border-primary/50 bg-primary/10 rounded-lg p-4 flex items-center justify-center gap-4">
                    <span className="text-2xl font-bold text-primary tracking-widest">{couponCode}</span>
                    <Button onClick={handleCopy} size="icon" variant="ghost">
                      {isCopied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                      <span className="sr-only">Copiar código</span>
                    </Button>
                  </div>
                  {isCopied && <p className="text-sm text-green-500 mt-2">Código copiado!</p>}
                </div>
                <Button onClick={() => setIsOpen(false)} className="w-full">
                  Continuar Comprando
                </Button>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
