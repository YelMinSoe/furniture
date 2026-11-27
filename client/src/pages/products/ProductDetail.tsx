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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/utils"
import Rating from "@/components/products/Rating"
import AddToFavorite from "@/components/products/AddToFavorite"
import AddToCardForm from "@/components/products/AddToCardForm"

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
      <section className="my-6 flex flex-col gap-16 md:flex-row md:gap-16">
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
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="space-y-0.5">
            <h2 className="mb-2 line-clamp-1 text-2xl font-bold">
              {product?.name}
            </h2>
            <p className="text-base text-muted-foreground">
              {formatPrice(Number(product?.price))}
            </p>
          </div>
          <Separator className="my-1.5" />
          <p className="text-base text-muted-foreground">
            {product?.inventory} in stock
          </p>
          <div className="flex items-center justify-between">
            <Rating rating={Number(product?.rating)} />
            <AddToFavorite
              productId={String(product?.id)}
              rating={Number(product?.rating)}
            />
          </div>
          <AddToCardForm canBuy={product?.status === "active" ? true : false} />
          <Separator className="my-5" />
          <Accordion
            type="multiple"
            defaultValue={["shipping"]}
            className="max-w-lg"
          >
            <AccordionItem value="shipping" className="border-none">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                {product?.description ??
                  "No description is available for this product"}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
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
