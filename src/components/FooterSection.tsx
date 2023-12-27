export function FooterSection() {
  return (
    <footer className="w-full mt-28 py-8 px-4 md:px-8 border-t border-t-zinc-700">
      <div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between">
          <p className="text-zinc-500 text-sm">
            © Todos os direitos reservados.
          </p>
          <p className="text-zinc-500 text-sm">
            Desenvolvido por John Rodrigues | {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
