// Library imports
import { Link } from "react-router"
// Local imports
import { Icons } from "../icons"
import { siteConfig } from "@/config/site"
import NewsLetter from "../news-letter"

const Footer = () => {
  return (
    <footer className="ml-4 w-full border-t lg:ml-0">
      <div className="container mx-auto pt-6 pb-8 lg:py-6">
        <section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <section>
            <Link to="/" className="flex items-center space-x-2">
              <Icons.logo className="size-7" aria-hidden="true" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </section>
          <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            {siteConfig.footerNav.map((foot) => (
              <div className="space-y-3" key={foot.title}>
                <h4 className="font-medium">{foot.title}</h4>
                <ul className="">
                  {foot.items.map((item) => (
                    <li className="" key={item.title}>
                      <Link
                        to={item.href}
                        className="text-muted-foreground hover:text-foreground"
                        target={item.external ? "_blank" : undefined}
                      >
                        {item.title}
                      </Link>
                      <span className="sr-only">Title</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section>
            <h4 className="mb-3 font-medium">Subscribe to our Newsletter</h4>
            <NewsLetter />
          </section>
        </section>
      </div>
    </footer>
  )
}

export default Footer
