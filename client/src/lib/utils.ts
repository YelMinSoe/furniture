export { cn } from "cn"

export const formatPrice = (
  price: number | string,
  opts: Intl.NumberFormatOptions = {}
) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: opts.currency ?? "USD",
    notation: opts.notation ?? "compact",
  }).format(Number(price))
}
