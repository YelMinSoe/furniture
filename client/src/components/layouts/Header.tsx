// Local imports
import MainNavigation from "./MainNavigation"
import { siteConfig } from "@/config/site"
import MobileNavigation from "./MobileNavigation"

const Header = () => {
  return (
    <header className="w-full border-b">
      <nav className="container mx-auto flex h-16 items-center">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
      </nav>
    </header>
  )
}

export default Header
