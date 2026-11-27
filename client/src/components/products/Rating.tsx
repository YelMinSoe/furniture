// Local imports
import { cn } from "cn"
import { Icons } from "../icons"

interface RatingProps {
  rating: number
}
const Rating = ({ rating }: RatingProps) => {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Icons.star
          key={index}
          className={cn(
            "size-4",
            rating >= index + 1 ? "text-yellow-500" : "text-muted-foreground"
          )}
        />
      ))}
    </div>
  )
}

export default Rating
