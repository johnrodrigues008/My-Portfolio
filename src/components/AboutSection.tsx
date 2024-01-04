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
          <div className="w-[300px] bg-cover shrink-0rounded-md overflow-hidden rounded-[50%] sm:mr-5 sm:w-[1000px]">
            <Image
              src={aboutImage}
              alt="Logo da seção sobre de John Rodrigues"
              className="w-full object-cover"
            />
          </div>
          <div className="">
            <p className="my-5">Olá! Tudo bem?</p>
            <p className="text-zinc-400">
              Meu nome é John Rodrigues, e sou um apaixonado por tecnologia. Tenho 25 anos, e sou morador do Distrito federal, atualmente resido em Aguas Claras com minha familia. Tenho em média de 3 a 4 anos de experiência com tecnologia, passando por áreas de infraestrutura, manutenção, suporte, automação, dados e agora, programação e desenvolvimentro web. Foi a área em que me encontrei e que quero seguir carreira, atualmente atuo como Desenvolvedor Full Stack e estou iniciando a minha segunda pós graduação.  
              <br /> <br />
              Mas acredito que podemos bater um papo para falar mais a respeiro, neste breve contato, fique a vontade para vizualizar o meu portfolio que foi desenvovido com tanto carinho e espero que possamos nos falar em breve. 
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
