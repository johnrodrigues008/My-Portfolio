import Image from "next/image";
import { Heading } from "./Heading";
import aboutImage from "../../public/aboutImage.png";
import { socialLinks } from "@/data/socialLinks";
import { CustomLink } from "./CustomLink";



export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28">
      <Heading title="Sobre min" description="Uma breve descrição sobre min" />
      <div className="flex gap-4 flex-col md:flex-row items-center">
        <div className=" w-[500px] shrink-0rounded-md overflow-hidden rounded-[50%]">
          <Image
            className="w-full h-full object-top object-cover"
            src={aboutImage}
            alt="Logo da seção sobre de John Rodrigues"
            width={600}
            height={600}
          />
        </div>
        <div className="space-y-2">
          <p>Olá, Tudo bem?</p>
          <p className="text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            labore ducimus placeat nostrum? Dolorem voluptate porro corrupti
            rerum, reprehenderit expedita in voluptas aut, ex molestiae
            repellat, autem nihil unde et!
          </p>
          <ul className="flex gap-2 mt-4">
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
    </section>
  );
}
