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
    mainImage: "/placeholder.svg?height=600&width=600&q=eco1",
    images: ["/placeholder.svg?height=600&width=600&q=eco2", "/placeholder.svg?height=600&width=600&q=eco3"],
  },
  {
    id: 2,
    name: "Luminária Nórdica",
    price: 149.9,
    description:
      "Inspirada no minimalismo escandinavo, esta luminária combina madeira natural e metal para criar uma iluminação acolhedora. Ideal para mesas de cabeceira ou cantos de leitura.",
    mainImage: "/placeholder.svg?height=600&width=600&q=lum1",
    images: ["/placeholder.svg?height=600&width=600&q=lum2", "/placeholder.svg?height=600&width=600&q=lum3"],
  },
  {
    id: 3,
    name: "Cadeira Ergonômica",
    price: 799.9,
    description:
      "Conforto e design se encontram nesta cadeira ergonômica. Com suporte lombar ajustável e materiais de alta qualidade, é a escolha perfeita para seu home office ou escritório.",
    mainImage: "/placeholder.svg?height=600&width=600&q=cad1",
    images: ["/placeholder.svg?height=600&width=600&q=cad2", "/placeholder.svg?height=600&width=600&q=cad3"],
  },
]

const mostPurchasedData: Omit<Product, "priceFormatted">[] = [
  {
    id: 4,
    name: "Mesa de Centro Rústica",
    price: 450.0,
    description: "Mesa de centro feita com madeira de demolição, trazendo um toque rústico e único para sua sala.",
    mainImage: "/placeholder.svg?height=600&width=600&q=mesa1",
    images: ["/placeholder.svg?height=600&width=600&q=mesa2", "/placeholder.svg?height=600&width=600&q=mesa3"],
  },
  {
    id: 5,
    name: "Estante de Aço e Madeira",
    price: 620.5,
    description:
      "Design industrial que combina a robustez do aço com o calor da madeira. Perfeita para organizar e decorar.",
    mainImage: "/placeholder.svg?height=600&width=600&q=estante1",
    images: ["/placeholder.svg?height=600&width=600&q=estante2", "/placeholder.svg?height=600&width=600&q=estante3"],
  },
  {
    id: 6,
    name: "Poltrona de Couro",
    price: 1250.0,
    description:
      "Uma poltrona clássica e confortável, revestida em couro legítimo. Ideal para criar um espaço de leitura sofisticado.",
    mainImage: "/placeholder.svg?height=600&width=600&q=poltrona1",
    images: ["/placeholder.svg?height=600&width=600&q=poltrona2", "/placeholder.svg?height=600&width=600&q=poltrona3"],
  },
  {
    id: 7,
    name: "Tapete Persa",
    price: 980.0,
    description:
      "Tapete feito à mão com padrões tradicionais persas. Adiciona cor, textura e elegância a qualquer ambiente.",
    mainImage: "/placeholder.svg?height=600&width=600&q=tapete1",
    images: ["/placeholder.svg?height=600&width=600&q=tapete2", "/placeholder.svg?height=600&width=600&q=tapete3"],
  },
  {
    id: 8,
    name: "Conjunto de Almofadas",
    price: 120.0,
    description:
      "Kit com 4 almofadas em linho, com estampas geométricas. Renove o visual do seu sofá com estilo e conforto.",
    mainImage: "/placeholder.svg?height=600&width=600&q=almofada1",
    images: ["/placeholder.svg?height=600&width=600&q=almofada2", "/placeholder.svg?height=600&width=600&q=almofada3"],
  },
  {
    id: 9,
    name: "Aparador Moderno",
    price: 550.0,
    description: "Aparador com linhas limpas e design minimalista, perfeito para halls de entrada ou salas de jantar.",
    mainImage: "/placeholder.svg?height=600&width=600&q=aparador1",
    images: ["/placeholder.svg?height=600&width=600&q=aparador2", "/placeholder.svg?height=600&width=600&q=aparador3"],
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

export const mostPurchasedProducts: Product[] = mostPurchasedData.map((product) => ({
  ...product,
  priceFormatted: formatCurrency(product.price),
}))

export function getProductById(id: number): Product | undefined {
  return [...products, ...mostPurchasedProducts].find((product) => product.id === id)
}
