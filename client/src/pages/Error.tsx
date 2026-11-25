// Local imports
import Header from "@/components/layouts/Header"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router"

const Error = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto flex flex-1 items-center">
        <Card className="w-87.5 md:w-125 lg:w-125">
          <CardHeader>
            <CardTitle className="text-center">Oops</CardTitle>
            <CardDescription className="text-center">
              An error accours accidently
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-center">
            <Button asChild variant="default">
              <Link to="/">Go to home page</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

export default Error
