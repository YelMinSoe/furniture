// Local imports
import MainNavigation from "./MainNavigation"
import { siteConfig } from "@/config/site"
import MobileNavigation from "./MobileNavigation"
import { ModeToggle } from "../mode-toggle"

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background">
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
