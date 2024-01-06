import { university_education, complementary_courses } from "@/data/EducationData";
import { professional } from "@/data/ProfessionalData";

import { Heading } from "../Heading";

export function TrajectorySection() {
  return (
    <section id="trajectory" className="scroll-mt-28 w-full">
      <div>
        <Heading
          title="Trajetória"
          description="Minha trajetória educacional e profissional"
        />

        <div className="w-full flex flex-col justify-center md:flex-row md:justify-around">
          <div className="flex flex-col md:mt-0 md:ml-5">
            <div className="university w-full flex flex-col items-center md:m-0">
              <h3 className="text-center text-[20px] mb-5">
                Formação Universitária
              </h3>

              {Object.values(university_education).map((education) => {
                return (
                  <div
                    className="card-education w-full md:w-[420px] p-5  mb-5 bg-zinc-800/50 border border-zinc-800 rounded-md"
                    key={education.name}
                  >
                    <h4 className="mb-3 text-[16px] font-semibold">
                      Curso: {education.name}
                    </h4>
                    <p>Instituição de Ensino: {education.institution}</p>
                    <p>Diploma: {education.degree_type}</p>
                    <p>Status: {education.status}</p>
                    <p>Ano de conclusão: {education.end_date}</p>
                  </div>
                );
              })}
            </div>

            <div className="complementary w-full flex flex-col items-center mt-10 ">
              <h3 className="text-center text-[20px] mb-5">
                Cursos Complementares
              </h3>

              {Object.values(complementary_courses).map((complementary) => {
                return (
                  <div
                    className="card-complementary w-full md:w-[420px] p-5 mb-5 bg-zinc-800/50 border border-zinc-800 rounded-md"
                    key={complementary.name}
                  >
                    <h4 className="mb-3 text-[16px] font-semibold">
                      {complementary.name}
                    </h4>
                    <p>Instituição de Ensino: {complementary.institution}</p>
                    <p>Ano de conclusão: {complementary.end_date}</p>
                    <p>Carga horária: {complementary.hours}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="exprerience md:mt-0 md:m-5">
            <h3 className="text-center text-[20px] mb-5">Experiência</h3>

            {Object.values(professional).map((work) => {
              return (
                <div
                  className="card-education p-5 mb-5 bg-zinc-800/50 border border-zinc-800 rounded-md"
                  key={work.title}
                >
                  <h4 className="mb-3 text-[16px] font-semibold">
                    {work.title}
                  </h4>
                  <p>Empresa: {work.company}</p>

                  <ul>
                    {work.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <p>Inicio: {work.start_date}</p>
                  <p>Status: {work.status}</p>
                  {"status" in work && work.status && work.end_date ? (
                    <p>Fim: {work.end_date}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
 