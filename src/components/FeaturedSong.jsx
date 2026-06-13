import { Music4 } from "lucide-react";
import { useEffect, useState } from "react";

import capa from "../assets/capas/capa.jpg";

export default function FeaturedSong() {
    const launchDate = new Date("2026-06-16T22:00:00");

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

                    <img
                        src={capa}
                        alt="Já Sabia"
                        className="w-full aspect-square object-cover"
                    />

                    {timeLeft && (
                        <div className="border-t border-white/10 p-4">
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
                    )}

                    <div className="p-6 text-center">

                        <div className="flex justify-center">
                            <div className="rounded-full bg-[#9b3e29]/20 p-3">
                                <Music4
                                    size={26}
                                    className="text-[#9b3e29]"
                                />
                            </div>
                        </div>

                        <span className="mt-4 block text-sm uppercase tracking-[0.3em] text-[#9b3e29]">
                            Novo Single
                        </span>

                        <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
                            JÁ SABIA
                        </h2>

                        <p className="mt-4 text-zinc-400 italic">
                            "Cérebro faça o meu coração de aprendiz"
                        </p>

                        <p className="mt-6 text-zinc-300">
                            Disponível dia 16 de junho às 22h
                        </p>

                        <a
                            href="https://ffm.to/emakqgd"
                            target="_blank"
                            rel="noreferrer"
                            className="
                                mt-8
                                inline-flex
                                w-full
                                items-center
                                justify-center
                                rounded-full
                                bg-[#9b3e29]
                                px-6
                                py-4
                                font-semibold
                                text-white
                                transition
                                hover:bg-[#b54a32]
                                md:w-auto
                            "
                        >
                            Fazer Pré-Save
                        </a>
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