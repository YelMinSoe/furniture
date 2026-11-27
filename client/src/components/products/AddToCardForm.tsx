import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { toast } from "sonner"
import { Button } from "../ui/button"
import { Icons } from "../icons"
import { cn } from "cn"

// Local imports

// zod
const quantitySchema = z.object({
  quantity: z
    .number()
    .min(1, "Must not be empty")
    .max(4, "Too Many! Is it real?"),
})
// types
interface ShowBuyNowProps {
  canBuy: boolean
}

const AddToCardForm = ({ canBuy }: ShowBuyNowProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof quantitySchema>>({
    resolver: zodResolver(quantitySchema),
    defaultValues: {
      quantity: 1,
    },
  })
  const onSubmit = (values: z.infer<typeof quantitySchema>) => {
    toast.success("Added to cart")
  }
  return (
    <form
      className="flex w-fit max-w-65 flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Quantity stepper */}
      <div className="flex items-center">
        <Button
          type="button"
          aria-label="Decrease quantity"
          className="size-8 shrink-0 cursor-pointer rounded-r-none"
          variant="outline"
          size="icon"
        >
          <Icons.minus className="size-3" naria-hidden="true" />
          <span className="sr-only">Remove one item</span>
        </Button>

        <input
          type="number"
          min={0}
          defaultValue={1}
          aria-label="Quantity"
          inputMode="numeric" // mobile phone
          className="h-8 w-16 rounded-none text-center"
        />

        <Button
          type="button"
          aria-label="Increase quantity"
          className="size-8 shrink-0 cursor-pointer rounded-l-none"
          variant="outline"
        >
          <Icons.plus className="size-3" aria-hidden="true" />
          <span className="sr-only">Remove one item</span>
        </Button>
      </div>
      {errors.quantity && (
        <p className="text-red-500">{errors.quantity.message}</p>
      )}

      {/* Actions */}
      <div className="mt-3 flex items-center space-x-5">
        <Button
          type="button"
          className={cn(
            "w-full cursor-pointer bg-own font-bold",
            !canBuy && "bg-slate-300"
          )}
          aria-label="Buy now"
        >
          Buy now
        </Button>
        <Button
          type="button"
          variant={canBuy ? "outline" : "default"}
          className="w-full cursor-pointer font-semibold"
        >
          Add to cart
        </Button>
      </div>
    </form>
  )
}

export default AddToCardForm
