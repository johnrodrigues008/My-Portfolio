import Image from "next/image";

import { CustomLink } from "./CustomLink";

import ImagemLogo from "../../public/Foto.png";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
      <div className="grid md:grid-cols-2 items-center h-[calc(100vh-70px)] max-h-[678px] bg-red">
        <div>
          <p className="text-lg mb-1">Olá 👋, Eu sou</p>
          <h1 className="font-title tracking-wider text-3xl sm:text-6xl -ml-0.5">
            Desenvolvedor Full Stack
          </h1>
          <p className="text-zinc-300 mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatum, aliquid odio. At ea officia laborum fuga molestias
            aliquid ipsa rem, molestiae voluptatibus vitae numquam, architecto,
            sit tenetur soluta voluptas sunt!
          </p>
          <CustomLink className="mt-4" href="#project" linkType="primary">
            Meus trabalhos
          </CustomLink>
        </div>
        <div className="hidden md:flex w-full h-full relative overflow-hidden">
          <Image
            className="object-cover object-top w-full h-full self-end"
            src={ImagemLogo}
            alt="Imagem do john"
          />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-zinc-900 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
