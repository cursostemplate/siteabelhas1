import Link from "next/link"
import { PolicyDialog } from "./policy-dialog"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg mb-4">Abelhas Nativas</h3>
          <p className="text-gray-400">Peças exclusivas para transformar seu ambiente.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white">
                Início
              </Link>
            </li>
            <li>
              <Link href="/#products" className="text-gray-400 hover:text-white">
                Produtos
              </Link>
            </li>
            <li>
              <Link href="/#testimonials" className="text-gray-400 hover:text-white">
                Depoimentos
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Políticas</h3>
          <ul className="space-y-2">
            <li>
              <PolicyDialog triggerText="Política de Privacidade" title="Política de Privacidade">
                <p>
                  Sua privacidade é importante para nós. É política do Abelhas Nativas respeitar a sua privacidade em
                  relação a qualquer informação sua que possamos coletar no site.
                </p>
                <p>
                  Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um
                  serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também
                  informamos por que estamos coletando e como será usado.
                </p>
              </PolicyDialog>
            </li>
            <li>
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
            </li>
            <li>
              <PolicyDialog triggerText="Política de Frete" title="Política de Frete">
                <p>Oferecemos frete grátis para todas as regiões do Brasil em todos os pedidos, sem valor mínimo.</p>
                <p>
                  O prazo de entrega pode variar de acordo com a sua localidade, sendo informado no momento da
                  finalização da compra. Você receberá um código de rastreio para acompanhar seu pedido.
                </p>
              </PolicyDialog>
            </li>
            <li>
              <PolicyDialog triggerText="Seguro e Garantia" title="Seguro e Garantia na Entrega">
                <p>
                  Garantimos a entrega segura de todas as nossas abelhas sem ferrão. Todas as encomendas são enviadas
                  com seguro total contra perdas e danos durante o transporte.
                </p>
                <p>
                  Caso sua encomenda chegue danificada, entre em contato conosco imediatamente com fotos do produto e da
                  embalagem para acionarmos o seguro e providenciarmos o reenvio ou reembolso.
                </p>
              </PolicyDialog>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Contato</h3>
          <p className="text-gray-400">contato@abelhasnativas.com</p>
          <p className="text-gray-400">(11) 99999-8888</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Siga-nos</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Abelhas Nativas. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
