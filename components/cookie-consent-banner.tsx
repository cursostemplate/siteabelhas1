"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { PolicyDialog } from "./policy-dialog"
import { Cookie } from "lucide-react"

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (consent !== "true") {
      // Use a timeout to avoid layout shift issues on initial render
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true")
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md rounded-lg bg-gray-900 p-6 text-white shadow-lg animate-in slide-in-from-bottom-10">
      <div className="flex items-start gap-4">
        <Cookie className="h-8 w-8 flex-shrink-0 text-yellow-400" />
        <div>
          <h3 className="text-lg font-semibold">Nós usamos cookies</h3>
          <p className="mt-2 text-sm text-gray-300">
            Nosso site utiliza cookies para melhorar sua experiência de navegação e para fins de análise, conforme
            exigido pelas políticas do Google. Ao continuar a usar nosso site, você concorda com o uso de cookies. Saiba
            mais em nossa{" "}
            <PolicyDialog
              triggerText="Política de Privacidade"
              title="Política de Privacidade"
              triggerClassName="underline hover:text-white"
            >
              <p>
                Sua privacidade é importante para nós. É política do Abelhas Nativas respeitar a sua privacidade em
                relação a qualquer informação sua que possamos coletar no site.
              </p>
              <p>
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
                Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que
                estamos coletando e como será usado. Usamos cookies para análise e para melhorar a sua experiência.
              </p>
            </PolicyDialog>
            .
          </p>
        </div>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <Button onClick={handleAccept} className="bg-white text-black hover:bg-gray-200">
          Aceitar e fechar
        </Button>
      </div>
    </div>
  )
}
