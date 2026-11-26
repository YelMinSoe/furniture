// Library imports
import { useEffect, useState } from "react"

// Local imports
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"

import type { MainNavItem } from "@/types/type"
import { Icons } from "../icons"
import { Button } from "../ui/button"
import { Link } from "react-router"
import { siteConfig } from "@/config/site"

// Types
interface mainNavigationProps {
  items?: MainNavItem[]
}

const MobileNavigation = ({ items }: mainNavigationProps) => {
  const [isDesktop, setIsDesktop] = useState(false)

  // Prevent the sheet is shown from being affected when suddenly switching from phone to laptop
  const query = "(min-width : 1024px)"
  useEffect(() => {
    const onChange = (even: MediaQueryListEvent) => {
      setIsDesktop(even.matches)
    }
    const result = matchMedia(query)
    result.addEventListener("change", onChange)
    return () => result.removeEventListener("change", onChange)
  }, [query])
  if (isDesktop) {
    return null
  }
  // done in here
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-4 size-5">
            <Icons.menu aria-hidden="true" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pt-9 pl-9">
          <SheetClose asChild>
            <Link to="/" className="flex items-center">
              <Icons.logo className="mr-2 size-4" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </SheetClose>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-8">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>{items?.[0].title}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-2">
                    {items?.[0].card?.map((item) => (
                      <SheetClose asChild key={item.title}>
                        <Link
                          to={String(item.href)}
                          className="text-foreground/70"
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-4 flex flex-col space-y-2">
              {items?.[0].menu?.map((item) => (
                <SheetClose asChild key={item.title}>
                  <Link to={String(item.href)} className="">
                    {item.title}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNavigation
