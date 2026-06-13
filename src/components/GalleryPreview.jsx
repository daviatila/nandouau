import { Link } from "react-router-dom";

export default function GalleryPreview() {
  return (
    <section className="bg-black px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <span className="uppercase tracking-[0.3em] text-[#9b3e29] text-sm">
          Galeria
        </span>

        <h2 className="mt-4 text-4xl md:text-6xl font-black text-white">
          Em Breve
        </h2>

        <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
          Após o lançamento de <strong>Já Sabia</strong>, esta seção receberá
          fotos exclusivas do clipe, bastidores da produção e o photoshoot
          oficial do single
        </p>

        <div className="mt-10 flex justify-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 max-w-xl backdrop-blur">
            <p className="text-zinc-300">
              Continue acompanhando o site para conferir conteúdos inéditos
              que serão disponibilizados em breve
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            to="/galeria"
            className="inline-flex bg-[#9b3e29] hover:bg-[#b54a32] transition px-6 py-4 rounded-full text-white font-semibold"
          >
            Saiba Mais
          </Link>
        </div>
      </div>
    </section>
  );
}