// Library imports
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

// Local imports
import { Button } from "./ui/button"
import { Icons } from "./icons"

const emailSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address",
  }),
})

const NewsLetter = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  })
  const onSubmit = (values: z.infer<typeof emailSchema>) => {
    console.log(values)
    setLoading(true)
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="relative flex w-60 items-center">
          <label htmlFor="newsletter-email" className="sr-only">
            E-mail
          </label>
          <input
            id="newsletter-email"
            {...register("email")}
            type="email"
            placeholder="furniture@gmail.com"
            className="h-8.5 w-full rounded-md border p-2 pr-13"
            autoComplete="off"
            aria-invalid={!!errors.email}
          />
          <Button
            type="submit"
            size="icon"
            aria-label="Subscribe"
            className="absolute right-0 w-10 p-0.5"
          >
            {loading ? (
              <Icons.loader className="size-4 animate-spin" />
            ) : (
              <Icons.send className="size-4" />
            )}
          </Button>
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </form>
    </div>
  )
}

export default NewsLetter
