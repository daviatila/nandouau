import GalleryHero from "../components/GalleryHero";

export default function Gallery() {
  return (
    <main className="bg-black min-h-screen text-white">
      <GalleryHero />

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#9b3e29] uppercase tracking-[0.3em] text-sm">
            Em Breve
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-black">
            GALERIA EXCLUSIVA
          </h2>

          <p className="mt-8 text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto">
            A galeria oficial ainda está sendo preparada.
            Após o lançamento do single <strong>"Já Sabia"</strong>,
            este espaço receberá conteúdos exclusivos para quem acompanha
            o projeto desde o início
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-bold text-xl">
                📸 Photoshoot Oficial
              </h3>

              <p className="mt-3 text-zinc-400 text-sm">
                Imagens inéditas da divulgação do single
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-bold text-xl">
                🎬 Bastidores
              </h3>

              <p className="mt-3 text-zinc-400 text-sm">
                Registros dos momentos de gravação e produção do videoclipe
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-bold text-xl">
                ⭐ Conteúdo Exclusivo
              </h3>

              <p className="mt-3 text-zinc-400 text-sm">
                Fotos especiais e materiais inéditos
              </p>
            </div>
          </div>

          <div className="mt-14 rounded-3xl border border-[#9b3e29]/40 bg-[#9b3e29]/10 p-8">
            <h3 className="text-2xl font-bold">
              Continue acompanhando o site
            </h3>

            <p className="mt-4 text-zinc-300">
              Novos conteúdos serão adicionados após o lançamento de
              <strong> Já sabia</strong>. Volte em breve para conferir
              fotos exclusivas do clipe, bastidores da produção e o
              photoshoot oficial do single
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}