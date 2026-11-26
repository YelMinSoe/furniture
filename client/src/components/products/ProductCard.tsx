// Library imports
import { Link } from "react-router"

// Local imports
import type { Product } from "@/types/type"
import { Icons } from "../icons"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "../ui/aspect-ratio"
import { Button } from "../ui/button"
import { formatPrice } from "@/lib/utils"

// types
interface ProductProps {
  product: Product
}
const ProductCard = ({ product }: ProductProps) => {
  return (
    <Card className="size-full overflow-hidden rounded-lg shadow-md">
      <Link to={`/products/${product.id}`} aria-label={product.name}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <img
              src={product.images[0]}
              alt="product image"
              className="size-full object-cover"
              loading="lazy"
            />
          </AspectRatio>
        </CardHeader>
      </Link>
      <CardContent className="space-y-1.5 p-4">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="line-clamp-1">
          {formatPrice(product.price)}
          {product.discount > 0 && (
            <span className="ml-2 font-extralight line-through">
              {formatPrice(product.discount)}
            </span>
          )}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-1">
        {product.status === "sold" ? (
          <Button
            size="sm"
            disabled={true}
            aria-label="Sold out"
            className="h-8 w-full cursor-pointer rounded-sm font-bold"
          >
            Sold Out
          </Button>
        ) : (
          <Button
            size="sm"
            className="h-8 w-full cursor-pointer rounded-sm bg-own font-bold"
          >
            <Icons.addToCart className="" /> Add to cart
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default ProductCard
