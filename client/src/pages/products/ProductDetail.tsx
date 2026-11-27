import { Link, useParams } from "react-router"
import Autoplay from "embla-carousel-autoplay"

// Local imports
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import ProductCard from "@/components/products/ProductCard"
import { Icons } from "@/components/icons"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"

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
      <section className="my-6 flex flex-col gap-8 md:flex-row md:gap-16">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full md:w-1/2"
        >
          <CarouselContent>
            {product?.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <img
                    src={image}
                    alt={product.name}
                    className="size-full rounded-md object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Separator className="mt-4 md:hidden" />
      </section>
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
