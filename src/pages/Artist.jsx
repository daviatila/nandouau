import slide3 from "../assets/slides/slide-3.jpeg";

export default function Artist() {
    return (
        <main className="min-h-screen bg-black text-white">
            <section className="relative h-[70vh]">
                <img
                    src={slide3}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-12">
                    <span className="uppercase tracking-[0.3em] text-[#9b3e29] text-sm">
                        O Artista
                    </span>

                    <h1 className="text-5xl font-black mt-2">
                        NANDOUAU
                    </h1>
                </div>
            </section>

            <section className="px-6 py-16 max-w-4xl mx-auto">
                <h2 className="mb-8 text-2xl text-[#9b3e29] font-black">
                    TRAJETÓRIA
                </h2>
                <div className="text-sm sm:text-lg leading-relaxed text-zinc-300">
                    <p>
                        Teve o primeiro contato com a música desde muito cedo. Ainda na infância,
                        participou de corais e festivais escolares em sua cidade natal,
                        Icaraí de Minas, experiências que marcaram o vínculo com a arte.
                    </p>
                    <br></br>
                    <p>
                        Em 2019, mudou-se para Montes Claros em busca de novos rumos e
                        então decidiu abraçar sua veia artística,
                        profissionalizando-se como cantor e compositor.
                    </p>
                    <br></br>
                    <p>
                        Junto a essa escolha, ingressou na graduação de Publicidade e
                        Propaganda para agregar conhecimentos que contribuíssem com sua trajetória artística.
                    </p>
                    <br></br>
                    <p>
                        A partir de março de 2024, iniciou apresentações em bares e espaços culturais da cidade.
                        E em junho de 2026 inicia sua carreira autoral, lançando o seu primeiro single "Já sabia".
                    </p>
                </div>
            </section>

        </main>
    );
}