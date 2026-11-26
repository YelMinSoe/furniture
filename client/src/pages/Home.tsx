// Library imports
import { Link } from "react-router"

// Local imports
import { Button } from "@/components/ui/button"
import Couch from "@/data/images/couch.png"

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        {/* Text section */}
        <div className="text-center">
          <h1 className="">Modern Interior Design Studio</h1>
          <p className="">
            Furniture is an essential component of any living space, providing
            functionality, comfort, and aesthetic appeal.
          </p>
          <div className="">
            <Button className="">
              <Link to="">Shop Now</Link>
            </Button>
            <Button className="">
              <Link to="">Explore</Link>
            </Button>
          </div>
        </div>
        {/* Image section */}
        <img src={Couch} alt="Couch-image" className="" />
      </div>
    </div>
  )
}

export default Home
