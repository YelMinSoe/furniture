import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// Local imports
import type { Category } from "@/types/type"
import { Button } from "../ui/button"

// types
interface FilterProps {
  filterList: { categories: Category[]; types: Category[] }
}

const FormSchema = z.object({
  categories: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item",
    }),
  types: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one type",
  }),
})
const ProductFilter = ({ filterList }: FilterProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      categories: [],
      types: [],
    },
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data)
  }
  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <h1 className="text-lg font-semibold">Funitures Made By</h1>
        {filterList.categories.map((category) => (
          <label key={category.id} className="mt-1 flex items-center">
            <input
              type="checkbox"
              value={String(category.id)}
              className="mr-4"
              {...register("categories")}
            />
            {category.label}
          </label>
        ))}
        {errors.categories && (
          <p className="mt-1 text-sm text-destructive">
            {errors.categories.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <h1 className="text-lg font-semibold">Funitures Types</h1>

        {filterList.types.map((type) => (
          <label key={type.id} className="mt-1 flex items-center">
            <input
              type="checkbox"
              value={String(type.id)}
              className="mr-4"
              {...register("types")}
            />
            {type.label}
          </label>
        ))}
        {errors.types && (
          <p className="mt-1 text-sm text-destructive">
            {errors.types.message}
          </p>
        )}
      </div>
      <Button type="submit" className="cursor-pointer">
        Filter
      </Button>
    </form>
  )
}

export default ProductFilter
