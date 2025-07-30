import Link from "next/link"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { PolicyDialog } from "./policy-dialog"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-white/10 p-6 text-white">
            <Icons.logo className="h-8 w-8" />
          </div>
          <nav className="mb-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-300">
            <Link href="/" className="hover:text-white">
              Início
            </Link>
            <Link href="/#products" className="hover:text-white">
              Produtos
            </Link>
            <Link href="/#testimonials" className="hover:text-white">
              Depoimentos
            </Link>
            <Link href="#" className="hover:text-white">
              Contato
            </Link>
          </nav>

          <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <PolicyDialog triggerText="Política de Privacidade" title="Política de Privacidade">
              <p>
                Sua privacidade é importante para nós. É política do Abelhas Nativas respeitar a sua privacidade em
                relação a qualquer informação sua que possamos coletar no site.
              </p>
              <p>
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
                Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que
                estamos coletando e como será usado.
              </p>
            </PolicyDialog>
            <PolicyDialog triggerText="Política de Reembolso" title="Política de Reembolso">
              <p>
                Nossa política de reembolso visa garantir a satisfação de nossos clientes. Caso não esteja satisfeito
                com o produto, você pode solicitar a devolução em até 7 dias corridos após o recebimento.
              </p>
              <p>
                O produto deve ser devolvido em sua embalagem original, sem sinais de uso. Após o recebimento e
                verificação, o reembolso será processado.
              </p>
            </PolicyDialog>
            <PolicyDialog triggerText="Política de Frete" title="Política de Frete">
              <p>Oferecemos frete grátis para todas as regiões do Brasil em todos os pedidos, sem valor mínimo.</p>
              <p>
                O prazo de entrega pode variar de acordo com a sua localidade, sendo informado no momento da finalização
                da compra. Você receberá um código de rastreio para acompanhar seu pedido.
              </p>
            </PolicyDialog>
            <PolicyDialog triggerText="Seguro e Garantia" title="Seguro e Garantia na Entrega">
              <p>
                Garantimos a entrega segura de todas as nossas abelhas sem ferrão. Todas as encomendas são enviadas com
                seguro total contra perdas e danos durante o transporte.
              </p>
              <p>
                Caso sua encomenda chegue danificada, entre em contato conosco imediatamente com fotos do produto e da
                embalagem para acionarmos o seguro e providenciarmos o reenvio ou reembolso.
              </p>
            </PolicyDialog>
          </div>

          <div className="mb-8 flex space-x-4">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full border-gray-600 bg-transparent text-white hover:border-white hover:bg-white/10"
            >
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full border-gray-600 bg-transparent text-white hover:border-white hover:bg-white/10"
            >
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full border-gray-600 bg-transparent text-white hover:border-white hover:bg-white/10"
            >
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full border-gray-600 bg-transparent text-white hover:border-white hover:bg-white/10"
            >
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Digite seu e-mail"
                  type="email"
                  className="rounded-full border-gray-700 bg-gray-800 text-white placeholder:text-gray-400"
                />
              </div>
              <Button type="submit" className="rounded-full bg-white text-black hover:bg-gray-200">
                Inscrever-se
              </Button>
            </form>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Abelhas Nativas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
