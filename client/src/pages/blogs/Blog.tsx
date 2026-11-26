//Library imports
// import { Outlet } from "react-router"

// Local imports
import { posts } from "@/data/posts"
import BlogPostList from "@/components/blogs/BlogPostList"

const Blog = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center text-2xl font-bold md:text-left">
        Latest Blog Posts
      </div>
      <BlogPostList posts={posts} />
      {/* <Outlet /> */}
    </div>
  )
}

export default Blog
