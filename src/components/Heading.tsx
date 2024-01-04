interface IProps {
      title: string;
      description: string;
}

export function Heading({ title, description }: IProps) {
  return (
    <>
      {""}
      <h2 className="text-[22px] tracking-wide text-4xl uppercase">{ title }</h2>
      <p className="text-zinc-400 mb-10">{ description }</p>
    </>
  );
}
