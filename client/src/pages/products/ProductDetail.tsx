import { Link, useParams } from "react-router"

// Local imports
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import ProductCard from "@/components/products/ProductCard"
import { Icons } from "@/components/icons"

const ProductDetail = () => {
  const { productId } = useParams()
  const product = products.find((product) => product.id === productId)

  return (
    <div className="container mx-auto px-4 md:px-0">
      <Button asChild className="mt-8" variant="outline">
        <Link to="/products">
          <Icons.back /> All Products
        </Link>
      </Button>
      <section className=""></section>
      <section className="space-y-6 overflow-hidden">
        <h2 className="line-clamp-1 text-2xl font-bold">
          More Products From Funiture Shop
        </h2>
        <ScrollArea className="w-full rounded-md border pb-8 whitespace-nowrap lg:w-full">
          <div className="flex w-max gap-4 space-x-4 p-4">
            {products.slice(0, 5).map((item) => (
              <ProductCard product={item} key={item.id} className="min-w-65" />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  )
}

export default ProductDetail
