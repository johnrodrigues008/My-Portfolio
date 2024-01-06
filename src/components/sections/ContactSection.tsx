import { Heading } from "../Heading";

export function ContactSection(){
  return (
    <section id="contact" className="mt-10">
      <div>
        <Heading
          title="Contato"
          description="Fique a vontade para escolher o meio de contato"
        />

        <div className="contact-box flex flex-col md:flex-row md:justify-around">
          <div className="contact-info w-full  "></div>

          <form className="contact-form w-full flex flex-col items-center justify-center relative bg-[#F0F0F0] text-[#000] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)] px-[48px] pb-10 mt-10 md:w-[700px] md:mx-5 ">
            <legend className="w-[210px] h-[50px] bg-[#FF7070] text-white font-semibold flex justify-center items-center absolute top-[-25px]">
              Formulario de contato
            </legend>

            <div className="w-full mt-[25px]">
              <input
                className="w-full my-5 text-black font-normal bg-[#F0F0F0] border-b-[1px] border-black py-2 "
                type="text"
                placeholder="digite seu nome"
              />
            </div>

            <div className="w-full ">
              <input
                className="w-full my-5 text-black font-normal bg-[#F0F0F0] border-b-[1px] border-black py-2"
                type="email"
                placeholder="digite seu email"
              />
            </div>

            <div className="w-full ">
              <input
                className="w-full my-5 text-black font-normal bg-[#F0F0F0] border-b-[1px] border-black py-2"
                type="tel"
                placeholder="(xx) xxxxx-xxxx"
              />
            </div>

            <div className="w-full flex flex-col">
              <label
                className="w-full my-5 text-black font-normal bg-[#F0F0F0] border-b-[1px] "
                htmlFor="nome"
              >
                Mensagem:{" "}
              </label>
              <input
                className="h-[120px] bg-[#D9D9D9]"
                type="text"
                name="nome"
              />
            </div>

            <div>
              <button
                className="bg-[#262626] text-white w-[218px] h-[50px] flex justify-center items-center absolute bottom-[-25px] right-0"
                type="submit"
              >
                Contrate-me
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
