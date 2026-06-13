import { useEffect, useState } from "react";

import cover from "../assets/capas/capa.jpg";

export default function Countdown() {
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

    if (!timeLeft) {
        return (
            <section className="bg-black px-6 py-8">
                <div className="mx-auto max-w-md text-center">
                    <h2 className="text-4xl font-black text-white">
                        JÁ DISPONÍVEL
                    </h2>

                    <p className="mt-4 text-zinc-400">
                        Ouça agora em sua plataforma favorita.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-black px-4 py-16">
            <div className="mx-auto max-w-2xl">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl">

                    <div className="flex items-center gap-4 p-4 md:p-5">
                        <img
                            src={cover}
                            alt="Capa do single Já Sabia"
                            className="h-16 w-16 rounded-2xl object-cover md:h-20 md:w-20"
                        />

                        <div className="flex-1">
                            <div className="grid grid-cols-4 gap-2 text-center">
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

                    <div className="border-t border-white/10 p-5">
                        <h2 className="text-2xl font-black text-white md:text-3xl">
                            Já sabia
                        </h2>

                        <p className="mt-2 text-sm text-zinc-400 md:text-base">
                            Single - Lançamento em 16 de junho às 22h
                        </p>

                        <a
                            href="https://ffm.to/emakqgd"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#9b3e29] px-6 py-3 font-semibold text-white transition hover:bg-[#b54a32] md:w-auto"
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
            <div className="text-xl font-black text-white md:text-3xl">
                {String(value).padStart(2, "0")}
            </div>

            <div className="mt-1 text-[10px] uppercase tracking-wide text-zinc-500 md:text-xs">
                {label}
            </div>
        </div>
    );
}