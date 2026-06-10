import { Link } from "react-router-dom";
import festa1 from "../assets/gallery/festa-agosto/1.jpeg";
import nandouau1 from "../assets/gallery/nandouau/1.jpeg";
import clipe1 from "../assets/gallery/clipe/1.jpeg";

const fotos = [
  {
    titulo: "Show Festa de Agosto",
    imagem: festa1,
  },
  {
    titulo: "Show com Nandouau",
    imagem: nandouau1,
  },
  {
    titulo: "Bastidores do Clipe",
    imagem: clipe1,
  },
];

export default function GalleryPreview() {
  return (
    <section className="bg-black px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <span
          className="
            uppercase
            tracking-[0.3em]
            text-[#9b3e29]
            text-sm
          "
        >
          Galeria
        </span>

        <h2
          className="
            text-4xl
            md:text-6xl
            font-black
            mt-4
            text-white
          "
        >
          Momentos
        </h2>

        <p
          className="
            mt-4
            text-zinc-400
            max-w-lg
          "
        >
          Bastidores, apresentações e momentos
          marcantes da trajetória artística.
        </p>

        <div
          className="
            mt-12
            columns-1
            md:columns-2
            gap-5
          "
        >
          {fotos.map((foto) => (
            <div
              key={foto.titulo}
              className="
                relative
                mb-5
                overflow-hidden
                rounded-3xl
                group
                break-inside-avoid
              "
            >
              <img
                src={foto.imagem}
                alt={foto.titulo}
                className="
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/30
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  p-5
                "
              >
                <h3
                  className="
                    text-white
                    font-bold
                    text-xl
                  "
                >
                  {foto.titulo}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/galeria"
            className="
              inline-flex
              bg-[#9b3e29]
              hover:bg-red-500
              transition
              px-6
              py-4
              rounded-full
              text-white
              font-semibold
            "
          >
            Ver Galeria Completa
          </Link>
        </div>
      </div>
    </section>
  );
}