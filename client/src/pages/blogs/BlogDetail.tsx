// Library imports
import { Link, useParams } from "react-router"

// Local imports
import { posts } from "@/data/posts"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import RichTextRenderer from "@/components/blogs/RichTextRenderer"

const BlogDetail = () => {
  const { postId } = useParams()
  const post = posts.find((post) => post.id === postId)
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <section className="flex flex-col lg:flex-row">
        <section className="w-full lg:w-3/4 lg:pr-16">
          <Button variant="outline" asChild className="mt-8 mb-6">
            <Link to="/blogs">
              <Icons.back className="size-6" />
              All Posts
            </Link>
          </Button>
          {post ? (
            <>
              <h2 className="mb-3 text-3xl font-extrabold">{post.title}</h2>
              <div className="text-sm">
                <span>
                  By <span className="font-semibold">{post.author}</span> on{" "}
                  <span className="font-semibold">{post.updated_at}</span>
                </span>
              </div>
              <h3 className="my-6 text-base font-normal">{post.content}</h3>
              <img
                src={post.image}
                alt="Post image"
                className="w-full rounded-xl"
              />
              {/* <p className="">{post.body}</p> */}
              <RichTextRenderer content={post.body} className="my-8" />
              <div className="mb-12 space-x-2">
                {post.tags.map((tag, i) => (
                  <Button variant="secondary" key={i}>
                    {tag}
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <p className="mt-8 mb-16 text-center text-xl font-bold text-muted-foreground lg:mt-24">
              No post found
            </p>
          )}
        </section>
        <section className="w-full lg:mt-24 lg:w-1/4">
          <div className="mb-8 flex items-center gap-2 text-base font-bold">
            <Icons.layers className="size-7" />
            <h3 className="">Other Blog Posts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            {posts.map((post) => (
              <Link
                to={`/blogs/${post?.id}`}
                className="mb-6 flex items-start gap-2"
                key={post.id}
              >
                <img src={post?.image} alt="Blog post" className="w-1/4" />
                <div className="w-3/4 text-sm font-medium text-muted-foreground">
                  <p className="line-clamp-2">{post?.content}</p>
                  <i className="">... see more</i>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}

export default BlogDetail
