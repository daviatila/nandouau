export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black">
            <div className="mx-auto max-w-6xl px-6 py-8">
                <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
                    <p className="text-sm text-zinc-400">
                        © {new Date().getFullYear()} Nandouau. Todos os direitos reservados.
                    </p>

                    <p className="text-sm text-zinc-400">
                        Desenvolvido por{" "}
                        <a
                            href="https://www.linkedin.com/in/atiladavi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-zinc-200 transition hover:text-white"
                        >
                            Davi Atila
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}