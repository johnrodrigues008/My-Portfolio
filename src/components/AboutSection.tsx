import Image from "next/image";
import { Heading } from "./Heading";
import aboutImage from "../../public/img/about/about-image.png";
import { socialLinks } from "@/data/socialLinks";
import { CustomLink } from "./CustomLink";



export function AboutSection() {
  return (
    <section id="about" className="mb-10">
      <div className="container">
        <Heading
          title="Sobre min"
          description="Uma breve descrição sobre min"
        />

        <div className="flex gap-4 flex-col md:flex-row items-center pb-10">
          <div className="w-[300px] bg-cover shrink-0rounded-md overflow-hidden rounded-[50%] sm:mr-5 sm:w-[500px]">
            <Image
              src={aboutImage}
              alt="Logo da seção sobre de John Rodrigues"
              className="w-full object-cover  "
            />
          </div>
          <div className="">
            <p className="my-5">Olá, Tudo bem?</p>
            <p className="text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              labore ducimus placeat nostrum? Dolorem voluptate porro corrupti
              rerum, reprehenderit expedita in voluptas aut, ex molestiae
              repellat, autem nihil unde et!
            </p>
            <ul className="flex gap-2 mt-5">
              {socialLinks.map(({ icon: Icon, href }, index) => {
                return (
                  <li key={index}>
                    <CustomLink
                      href={href}
                      linkType="primary"
                      className="w-10 h-10 p-0 rounded-full flex justify-center items-center"
                    >
                      <Icon className="text-xl shrink-0" />
                    </CustomLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
