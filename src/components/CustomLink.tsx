import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { cn } from "@/utils/helper";

interface IProps extends LinkProps{
      children:ReactNode;
      linkType: "primary" | "secondary" | "link" | "none";
      className?: string;
}

const styled = {
  baseStyled: "px-6 py-2 rounded-full inline-block text-sm cursor-pointer",
  primary: "bg-zinc-100 text-zinc-900",
  secondary: "text-white ",
  link: "text-white ",
  none: "px-0",
};

export function CustomLink({
      children, 
      linkType = "primary",
      className,
      ...props

      }: IProps) {

      return (
        <Link
          {...props}
          className={cn(
            linkType !== "link" &&styled.baseStyled,
            styled[linkType],
            className
          )}
        >
          {children}
        </Link>
      );
}