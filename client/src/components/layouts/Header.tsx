// Local imports
import MainNavigation from "./MainNavigation"
import { siteConfig } from "@/config/site"

const Header = () => {
  return (
    <header className="w-full border-b">
      <nav className="container flex h-16 items-center">
        <MainNavigation items={siteConfig.mainNav} />
      </nav>
    </header>
  )
}

export default Header
