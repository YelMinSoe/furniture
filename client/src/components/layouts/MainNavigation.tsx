// Library imports
import { Link } from "react-router"

// Local imports
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {} from "lucide-react"
import type { MainNavItem } from "@/types/type"
import { Icons } from "../icons"
import { siteConfig } from "@/config/site"

// Types
interface mainNavigationProps {
  items?: MainNavItem[]
}

const MainNavigation = ({ items }: mainNavigationProps) => {
  return (
    <div className="hidden lg:flex">
      <Link to="/" className="flex items-center space-x-2">
        <Icons.logo className="size-7" aria-hidden="true" />
        <span className="font-bold">{siteConfig.name}</span>
        <span className="sr-only">Home</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {items?.[0].card && (
            <>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{items[0].title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-96">
                    {items[0].card.map((item) => (
                      <ListItem
                        key={item.title}
                        href={String(item.href)}
                        title={item.title}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {items[0].menu &&
                items[0].menu.map((item) => (
                  <NavigationMenuItem>
                    <Link
                      to={String(item.href)}
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuItem>
                ))}
            </>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default MainNavigation
