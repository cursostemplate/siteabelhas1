import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg mb-4">Abelhas Nativas</h3>
          <p className="text-gray-400">Design e qualidade para o seu espaço.</p>
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
