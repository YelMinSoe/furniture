// Library imports
import { Link } from "react-router"
// Local imports
import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/Header"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

const Error = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="mx-auto my-32 flex flex-1 items-center">
        <Card className="w-87.5 md:w-125 lg:w-125">
          <CardHeader className="flex flex-col items-center justify-center">
            <div className="mt-2 mb-4 grid size-24 place-items-center rounded-full border border-dashed border-muted-foreground">
              <Icons.exclamationMark
                className="size-13 text-muted-foreground/70"
                aria-hidden="true"
              />
            </div>
            <CardTitle>Oops</CardTitle>
            <CardDescription>An error accours accidently</CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-center">
            <Button asChild variant="default">
              <Link to="/">Go to home page</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

export default Error
