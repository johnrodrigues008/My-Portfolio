interface IProps {
      title: string;
      description: string;
}

export function Heading({ title, description }: IProps) {
  return (
    <>
      {""}
      <p className="font-title tracking-wide text-4xl uppercase">{ title }</p>
      <p className="text-zinc-400 mb-10">{ description }</p>
    </>
  );
}
