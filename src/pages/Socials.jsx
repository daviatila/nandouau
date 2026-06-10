import {
    FaInstagram,
    FaTiktok,
    FaYoutube,
    FaXTwitter,
} from "react-icons/fa6";

import { ArrowUpRight } from "lucide-react";

import slide7 from "../assets/slides/slide-7.jpeg";

const socials = [
    {
        name: "Instagram",
        icon: FaInstagram,
        url: "https://www.instagram.com/nandouau/",
        color: "from-pink-600 to-purple-600",
    },
    {
        name: "TikTok",
        icon: FaTiktok,
        url: "https://www.tiktok.com/@onandouau",
        color: "from-zinc-900 to-zinc-700",
    },
    {
        name: "YouTube",
        icon: FaYoutube,
        url: "https://www.youtube.com/@nandouau",
        color: "from-red-700 to-red-500",
    },
    {
        name: "X (Twitter)",
        icon: FaXTwitter,
        url: "https://x.com/nandouau",
        color: "from-zinc-800 to-black",
    },
];

export default function Socials() {
    return (
        <main
            className="relative min-h-screen bg-cover bg-top bg-center bg-no-repeat text-white"
            style={{ backgroundImage: `url(${slide7})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/95" />

            <section className="relative z-10 flex min-h-screen items-center px-6 py-20">
                <div className="mx-auto w-full max-w-3xl">
                    <div className="mb-14 text-center">
                        <span className="text-sm uppercase tracking-[0.35em] text-red-500">
                            Redes Sociais
                        </span>

                        <h1 className="mt-4 text-5xl font-black md:text-7xl">
                            CONECTE-SE
                        </h1>

                        <p className="mx-auto mt-6 max-w-xl text-zinc-300">
                            Acompanhe Nandouau nas redes
                        </p>
                    </div>

                    <div className="space-y-5">
                        {socials.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`group block rounded-3xl bg-gradient-to-r ${social.color} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="rounded-2xl bg-white/10 p-3">
                                                <Icon size={30} />
                                            </div>

                                            <div>
                                                <h2 className="text-xl font-bold">
                                                    {social.name}
                                                </h2>

                                                <p className="text-sm text-white/70">
                                                    Abrir perfil oficial
                                                </p>
                                            </div>
                                        </div>

                                        <ArrowUpRight
                                            size={24}
                                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}