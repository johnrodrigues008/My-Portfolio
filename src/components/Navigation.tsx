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
      <div className="max-w-7xl mx-auto p-4 md:px-8 flex justify-between items-center">
        <Link className="z-50" href="#home">
          <Image
            className="w-[40px]"
            src={Logo}
            alt="Logo do portfolio escrito John"
          ></Image>
        </Link>

        <div
          className="cursor-pointer z-50"
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
            "fixed top-0 right-0 w-full min-h-screen bg-zinc-900/90 backdrop-blur-lg",
            !isNavOpen && "hidden"
          )}
        >
          <ul className="fixed w-[98%] h-[95%] text-center bg-[#404040E5] bg-opacity-90 z-10 flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {navMenuList.map(({ title, href }, index) => {
              const isLastElement = index === navMenuList.length - 1;
              return (
                <li
                  className="mb-5 text-[27px] pb-3 border-b-[1px]  w-[500px] text-[#fff] Roboto-100"
                  key={href}
                >
                  <CustomLink
                    href={href}
                    linkType="link"
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
