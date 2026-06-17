import { Music4, Music, CirclePlus } from "lucide-react";
import { useEffect, useState } from "react";

import capa from "../assets/capas/capa.jpg";

export default function FeaturedSong() {
  const launchDate = new Date("2026-06-16T20:00:00");

  const calculateTimeLeft = () => {
    const difference = launchDate - new Date();

    if (difference <= 0) {
      return null;
    }

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black px-4 py-12">
      <div className="mx-auto max-w-3xl">

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl">

          {/* Countdown Compacto */}
          {timeLeft && (
            <div className="border-b border-white/10 p-4">
              <div className="flex items-center gap-4">

                <img
                  src={capa}
                  alt="Já Sabia"
                  className="h-16 w-16 rounded-xl object-cover md:h-20 md:w-20"
                />

                <div className="flex-1">
                  <div className="grid grid-cols-4 text-center">
                    <TimeCard
                      value={timeLeft.dias}
                      label="Dias"
                    />

                    <TimeCard
                      value={timeLeft.horas}
                      label="Horas"
                    />

                    <TimeCard
                      value={timeLeft.minutos}
                      label="Min"
                    />

                    <TimeCard
                      value={timeLeft.segundos}
                      label="Seg"
                    />
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Informações */}
          <div className="px-10 pb-2 text-center">

            <span className="block mt-6 text-sm uppercase tracking-[0.3em] text-[#9b3e29]">
              Novo Single
            </span>

            <h2 className="mt-3 text-5xl font-black text-white">
              JÁ SABIA
            </h2>

          </div>

          {/* Capa Grande */}
          <div className="p-6">
            <img
              src={capa}
              alt="Já Sabia"
              className="
                            w-full
                            rounded-3xl
                            object-cover
                            shadow-2xl
                        "
            />
          </div>

          <div className="px-6 pb-8 text-center">

            <p className=" text-sm italic text-zinc-400">
              "Cérebro faça o meu coração de aprendiz"
            </p>

            <h3
              className="
                            mt-5
                            text-xl
                            font-black
                            text-white
                            md:text-3xl
                        "
            >
              OUÇO AGORA EM TODAS AS PLATAFORMAS
            </h3>

            {/* Pré Save */}
            <div className="px-6 pt-6">
              <a
                href="https://ffm.to/emakqgd"
                target="_blank"
                rel="noreferrer"
                className="
                          inline-flex
                          w-fit
                          items-center
                          justify-center
                          gap-2
                          rounded-full
                          bg-[#9b3e29]
                          px-5
                          py-3
                          font-semibold
                          text-white
                          transition-all
                          duration-300
                          hover:bg-[#b54a32]
                          hover:scale-105
                          "
              >
                Ouça agora
                <Music size={20} />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

function TimeCard({ value, label }) {
  return (
    <div>
      <div className="text-2xl font-black text-white md:text-4xl">
        {String(value).padStart(2, "0")}
      </div>

      <div className="mt-1 text-[10px] uppercase tracking-wide text-zinc-500 md:text-xs">
        {label}
      </div>
    </div>
  );
}