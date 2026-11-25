// Library imports
import { createBrowserRouter } from "react-router"

// Local imports
import RootLayout from "./pages/RootLayout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "contact", Component: Contact },
    ],
  },
])
