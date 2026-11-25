// Library imports
import { createBrowserRouter } from "react-router"

// Local imports
import RootLayout from "./pages/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
import Blog from "./pages/blogs/Blog"
import BlogDetail from "./pages/blogs/BlogDetail"
import BlogRootLayout from "./pages/blogs/BlogRootLayout"

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
        Component: BlogRootLayout,
        children: [
          { index: true, Component: Blog },
          { path: ":postId", Component: BlogDetail }, // blogs/1 => we got 1
        ],
      },
    ],
  },
])
