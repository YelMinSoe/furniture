// Library imports
import { createBrowserRouter } from "react-router"
import { lazy, Suspense } from "react"

// Local imports
import RootLayout from "./pages/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
// import Blog from "./pages/blogs/Blog"
// import BlogDetail from "./pages/blogs/BlogDetail"
// import BlogRootLayout from "./pages/blogs/BlogRootLayout"
const BlogRootLayout = lazy(() => import("./pages/blogs/BlogRootLayout"))
const Blog = lazy(() => import("./pages/blogs/Blog"))
const BlogDetail = lazy(() => import("./pages/blogs/BlogDetail"))

import ProductRootLayout from "./pages/products/ProductRootLayout"
import Product from "./pages/products/Product"
import ProductDetail from "./pages/products/ProductDetail"

const SuspenseFallback = () => <div className="text-center">Loading...</div>
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: Error,
    children: [
      { index: true, Component: Home },
      { path: "contact", Component: About },
      {
        path: "blogs",
        Component: () => (
          <Suspense fallback={<SuspenseFallback />}>
            <BlogRootLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            Component: () => (
              <Suspense fallback={<SuspenseFallback />}>
                <Blog />
              </Suspense>
            ),
          },
          {
            path: ":postId",
            Component: () => (
              <Suspense fallback={<SuspenseFallback />}>
                <BlogDetail />
              </Suspense>
            ),
          }, // blogs/1 => we got 1
        ],
      },
      {
        path: "products",
        Component: ProductRootLayout,
        children: [
          { index: true, Component: Product },
          { path: ":productId", Component: ProductDetail }, // blogs/1 => we got 1
        ],
      },
    ],
  },
])
