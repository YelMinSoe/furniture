// Library imports
import { Link, useParams } from "react-router"

// Local imports
import { posts } from "@/data/posts"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

const BlogDetail = () => {
  const { postId } = useParams()
  const post = posts.find((post) => post.id === postId)
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <section className="flex flex-col lg:flex-row">
        <section className="">
          <Button variant="outline" asChild>
            <Link to="/blogs">
              <Icons.back className="size-6" />
              All Posts
            </Link>
          </Button>
          {post ? (
            <>
              <h2 className=""></h2>
              <div className="">
                <span className=""></span>
              </div>
              <h3 className=""></h3>
              <img src="" alt="" className="" />
            </>
          ) : (
            <p className="mt-8 mb-16 text-center text-xl font-bold text-muted-foreground lg:mt-24">
              No post found
            </p>
          )}
        </section>
        <section className="">Other</section>
      </section>
    </div>
  )
}

export default BlogDetail
