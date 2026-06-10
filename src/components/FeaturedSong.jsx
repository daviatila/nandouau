import { Music4, Play } from "lucide-react";
import capa from "../assets/capas/capa.jpg";

export default function FeaturedSong() {
  return (
    <section
      className="
        bg-gradient-to-b
        from-black
        to-[#9b3e29]
        px-6
        py-20
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-2
          gap-10
          items-center
        "
      >
        <div>
          <img
            src={capa}
            alt=""
            className="
              w-full
              rounded-3xl
              shadow-2xl
            "
          />
        </div>

        <div>
          <span
            className="
              uppercase
              tracking-[0.3em]
              text-sm
            "
          >
            Lançamento
          </span>

          <h2
            className="
              text-5xl
              font-black
              mt-3
            "
          >
            JÁ SABIA
          </h2>

          <p
            className="
              mt-2
              text-zinc-300
              leading-relaxed
            "
          >
            "Cérebro faça o meu coração de aprendiz"
          </p>

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-black
              mt-3
            "
          >
            DISPONÍVEL DIA 16 ÀS 21H
          </h2>
        </div>
      </div>
    </section>
  );
}