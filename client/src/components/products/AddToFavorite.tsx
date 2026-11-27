import { cn } from "cn"
// Local imports
import { Icons } from "../icons"
import { Button } from "../ui/button"
import type React from "react"

// types
interface FavoriteProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  productId: string
  rating: number
}
const AddToFavorite = ({
  productId,
  rating,
  className,
  ...props
}: FavoriteProps) => {
  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn("size-8 shrink-0 cursor-pointer", className)}
      {...props}
    >
      <Icons.favorite className="size-4" />
    </Button>
  )
}

export default AddToFavorite
