import { projects } from "@/data/projectData";

import Image from "next/image";
import { CustomLink } from "./CustomLink";
import { Heading } from "./Heading";

export function ProjectSection() {
  return (
    <section id="project" className="scroll-mt-28">
      <Heading title="Projetos" description="Meus melhores projetos"></Heading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          return <ProjectCard key={project.title} project={project} />;
        })}
      </div>
      <div className="mt-10 flex justify-center">
        <CustomLink
          href="https://github.com/johnrodrigues008/"
          linkType="primary"
        >
          Ver todos os projetos
        </CustomLink>
      </div>
    </section>
  );
}

interface IprojectCard {
  project: (typeof projects)[0];
}

function ProjectCard({ project }: IprojectCard) {
  return (
    <div className="bg-zinc-800/50 border border-zinc-800 rounded-lg overflow-hidden">
      <div className="h-[200px]">
        <Image
          className="w-full h-full object-cover"
          src={project.image}
          alt={project.title}
          width={400}
          height={400}
        />
      </div>

      <div className="p-4">
        <ul className="flex justify-center items-center gap-4 mb-2">
          {project.stacks.map((stack) => {
            return (
              <li
                key={stack}
                className="px-4 py-1 text-xs border border-zinc-700 text-zinc-400 rounded-md"
              >
                {stack}
              </li>
            );
          })}
        </ul>

        <p className="text-lg font-medium">{project.title}</p>
        <p className="text-zinc-400">{project.description}</p>

        <div className="gap-4 mt-4 flex justify-center items-center">
          <CustomLink href={project.sourceCode} linkType="primary">
            Código fonte
          </CustomLink>

          <CustomLink href={project.liveAt} linkType="primary">
            Ver agora
          </CustomLink>
        </div>
        
      </div>
    </div>
  );
}
