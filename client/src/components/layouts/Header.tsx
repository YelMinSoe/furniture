// Local imports
import MainNavigation from "./MainNavigation"
import { siteConfig } from "@/config/site"
import MobileNavigation from "./MobileNavigation"
import { ModeToggle } from "../mode-toggle"

const Header = () => {
  return (
    <header className="w-full border-b">
      <nav className="container mx-auto flex h-16 items-center">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
        <div className="mr-8 flex flex-1 items-center justify-end lg:mr-0">
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
