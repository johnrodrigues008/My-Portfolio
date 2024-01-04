import Link from "next/link";
import Image from "next/image";

import IconLinkedin from "../../public/icon/linkedin.svg";

export function HeroSection() {
  return (
    <section id="home" className="mb-10 lg:pb-0 ">
      <div className="container flex flex-col content-between justify-center items-center Roboto-400">
        <div className="h-[calc(100vh-320px)] sm:h-[calc(80vh-300px)] lg:h-[calc(80vh-120px)] ">
          <h1 className="text-4xl flex justify-between items-center h-[100%] tracking-wider ml-0.5 text-center Ubuntu-400 lg:text-[70px]">
            John Rodrigues
          </h1>
        </div>

        <div className="w-full sm:flex sm:items-center sm:justify-between lg:flex lg:items-center lg:justify-between">
          <div className=" ">
            <h2 className="text-[16px] text-center sm:text-start">
              SEO Analyst & Full Stack Developer
            </h2>
            <p className="max-w-[528px] text-zinc-300 mt-2 text-[14px] text-center sm:text-start">
              Costumo me descrever como um desenvolvedor orientado à
              performance, arquitetura, análise e posicionamento. Acredito
              firmemente na importância desses elementos para criar sistemas
              eficientes e estrategicamente posicionados.
            </p>
          </div>

          <div className="mt-5">
            <Link
              href="https://www.linkedin.com/in/johnrodrigues009/"
              className="Ubuntu-400 flex justify-center items-center"
            >
              <p className="m-0 p-0">Linkedin</p>

              <Image
                className="w-[40px] h-[40px] ml-[13px] "
                src={IconLinkedin}
                alt="Icone do linkedin"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
