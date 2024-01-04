import { skills } from "@/data/skillsData";
import { Heading } from "./Heading";

export function SkillsSection() {
  return (
    <section id="skills" className="mb-10">
      <div className="container">
        <Heading title="Skills" description="Minhas habilidades são:" />

        <div className="pb-10">
          {Object.values(skills).map((cate) => {
            return (
              <div className="mb-5" key={cate.title}>
                <h3 className="my-10">{cate.title}</h3>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {cate.stacks.map(({ icon: Icon, stack }) => {
                    return (
                      <li
                        key={stack}
                        className="bg-zinc-800/50 border border-zinc-800 p-4 inline-flex items-center gap-4 justify-center rounded-md"
                      >
                        <Icon className="text-xl shrink-0" />
                        {stack}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
