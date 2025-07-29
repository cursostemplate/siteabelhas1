// Tipagem para os dados do produto
export type Product = {
  id: number
  name: string
  price: number
  priceFormatted: string
  description: string
  images: string[]
  mainImage: string
}

// Dados de exemplo dos produtos
const productsData: Omit<Product, "priceFormatted">[] = [
  {
    id: 1,
    name: "Eco-Vaso Geométrico",
    price: 89.9,
    description:
      "Um vaso elegante e sustentável, feito com materiais reciclados. Seu design geométrico moderno adiciona um toque de sofisticação a qualquer ambiente. Perfeito para plantas pequenas e suculentas.",
    mainImage: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
  {
    id: 2,
    name: "Luminária Nórdica",
    price: 149.9,
    description:
      "Inspirada no minimalismo escandinavo, esta luminária combina madeira natural e metal para criar uma iluminação acolhedora. Ideal para mesas de cabeceira ou cantos de leitura.",
    mainImage: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
  {
    id: 3,
    name: "Cadeira Ergonômica",
    price: 799.9,
    description:
      "Conforto e design se encontram nesta cadeira ergonômica. Com suporte lombar ajustável e materiais de alta qualidade, é a escolha perfeita para seu home office ou escritório.",
    mainImage: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
]

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

export const products: Product[] = productsData.map((product) => ({
  ...product,
  priceFormatted: formatCurrency(product.price),
}))

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}
