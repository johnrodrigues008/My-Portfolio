"use client"

import { navMenuList } from "@/data/NavigationData";
import { CustomLink } from "./CustomLink";
import { RiMenu3Fill } from "react-icons/ri";
import { cn } from "@/utils/helper";
import { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/logo.svg"

export function Navigation(){

      const [isNavOpen, setNavOpen] = useState(false);

      useEffect(() => {
            const overflowValue = isNavOpen ? "hidden" : "auto"
            document.body.style.overflow = overflowValue;
      }, [isNavOpen]);


  return (
    <nav className="py-4 border-b border-zinc-800 shadow-md sticky top-0 z-10 bg-zinc-900/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="#home">
          <Image className="w-[40px]" src={Logo} alt="Logo do portfolio escrito John"></Image>
        </Link>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setNavOpen((prevState) => !prevState)}
        >
          {isNavOpen ? (
            <MdOutlineClose className="text-5xl" />
          ) : (
            <RiMenu3Fill className="text-5xl" />
          )}
        </div>

        <div
          className={cn(
            "max-md:fixed max-md:top-[60px] max-md:py-10 max-md:left-0 max-md:w-full max-md:min-h-screen max-md:bg-zinc-900/90 max-md:backdrop-blur-lg",
            !isNavOpen && "max-md:hidden"
          )}
        >
          <ul className="flex items-center flex-col md:flex-row gap-6">
            {navMenuList.map(({ title, href }, index) => {
              const isLastElement = index === navMenuList.length - 1;
              return (
                <li key={href}>
                  <CustomLink
                    href={href}
                    linkType={isLastElement ? "primary" : "link"}
                    onClick={() => {
                      if (isNavOpen) {
                        setNavOpen(false);
                      }
                    }}
                  >
                    {title}
                  </CustomLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
