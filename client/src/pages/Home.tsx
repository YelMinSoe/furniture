/* eslint-disable react-hooks/static-components */
// Library imports
import { Link } from "react-router"

// Local imports
import { Button } from "@/components/ui/button"
import Couch from "@/data/images/couch.png"
import CarouselCard from "@/components/products/CarouselCard"
import { products } from "@/data/products"
import { posts } from "@/data/posts"
import BlogCard from "@/components/blogs/BlogCard"
import ProductCard from "@/components/products/ProductCard"

// const samplePosts = posts.slice(0, 3)
const Home = () => {
  // Component for Titles
  const Title = ({
    title,
    href,
    sideText,
  }: {
    title: string
    href: string
    sideText: string
  }) => (
    <div className="mt-28 mb-10 flex flex-col px-4 md:flex-row md:justify-between lg:px-0">
      <h2 className="mb-4 text-2xl font-bold md:mb-0">{title}</h2>
      <Link to={href} className="font-semibold text-muted-foreground underline">
        {sideText}
      </Link>
    </div>
  )
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
      <CarouselCard products={products} />
      <Title
        title="Featured Products"
        href="/products"
        sideText="View All Products"
      />
      <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      <Title title="Recent Blogs" href="/blogs" sideText="View All Posts" />
      {/* why slice? we want target posts. Don't show all posts . show it like sample posts  */}
      <BlogCard posts={posts.slice(0, 3)} />
    </div>
  )
}

export default Home
