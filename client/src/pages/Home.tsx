// Library imports
import { Link } from "react-router"

// Local imports
import { Button } from "@/components/ui/button"
import Couch from "@/data/images/couch.png"

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* Text section */}
        <div className="my-8 text-center lg:mt-20 lg:mb-0 lg:w-2/5 lg:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-balance text-own lg:mb-6 lg:text-6xl">
            Modern Interior Design Studio
          </h1>
          <p className="mb-6 lg:mb-8">
            Furniture is an essential component of any living space, providing
            functionality, comfort, and aesthetic appeal.
          </p>
          <div>
            <Button
              className="mr-2 rounded-full bg-orange-300 px-8 py-6 text-base font-bold"
              asChild
            >
              <Link to="">Shop Now</Link>
            </Button>
            <Button
              variant="outline"
              className="mr-2 rounded-full px-8 py-6 text-base font-bold text-own"
              asChild
            >
              <Link to="">Explore</Link>
            </Button>
          </div>
        </div>
        {/* Image section */}
        <img src={Couch} alt="Couch-image" className="w-full lg:w-3/5" />
      </div>
    </div>
  )
}

export default Home
