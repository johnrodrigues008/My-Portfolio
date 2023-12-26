import { navMenuList } from "@/data/NavigationData";
import { CustomLink } from "./CustomLink";
import { title } from "process";

export function Navigation(){
  return (
    <nav className="py-4 border-b border-zinc-800 shadow-md sticky top-0 z-10 bg-zinc-900/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
            <p>John Rodrigues</p>
            <div>
                  <ul className="flex items-center gap-6">
                        {navMenuList.map(({title, href}, index) => {
                              const isLastElement = index === navMenuList.length - 1;
                              return (
                                    <li key={href}>
                                          <CustomLink 
                                                href={href}
                                                linkType={isLastElement ? "primary" : "link"}
                                          >
                                                {title}
                                          </CustomLink>
                                    </li>
                              )
                        })}
                  </ul>
            </div>
      </div>
    </nav>
  )
}
