import {
    FaInstagram,
    FaTiktok,
    FaYoutube,
    FaXTwitter,
} from "react-icons/fa6";

import { ArrowUpRight } from "lucide-react";

import slide7 from "../assets/slides/slide-7.jpeg";
import logo from "../assets/logo.png";

const socials = [
    {
        name: "Instagram",
        icon: FaInstagram,
        url: "https://www.instagram.com/nandouau/",
        color: "from-zinc-700 via-zinc-500 to-zinc-300",
    },
    {
        name: "TikTok",
        icon: FaTiktok,
        url: "https://www.tiktok.com/@onandouau",
        color: "from-zinc-900 via-zinc-700 to-zinc-500",
    },
    {
        name: "YouTube",
        icon: FaYoutube,
        url: "https://www.youtube.com/@nandouau",
        color: "from-zinc-800 via-zinc-600 to-zinc-400",
    },
    {
        name: "X (Twitter)",
        icon: FaXTwitter,
        url: "https://x.com/nandouau",
        color: "from-black via-zinc-800 to-zinc-500",
    },
];

export default function Socials() {
    return (
        <main
            className="relative min-h-screen bg-cover bg-top bg-no-repeat text-white"
            style={{ backgroundImage: `url(${slide7})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />

            <section className="relative z-10 flex min-h-screen items-center px-6 py-20">
                <div className="mx-auto w-full max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-sm uppercase tracking-[0.35em] text-zinc-400">
                            Redes Sociais
                        </span>

                        <div className="mt-6 flex justify-center">
                            <img
                                src={logo}
                                alt="Nandouau"
                                className="max-h-28 md:max-h-40 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                            />
                        </div>

                        <p className="mx-auto mt-6 max-w-xl text-zinc-300">
                            Acompanhe Nandouau nas plataformas oficiais
                        </p>
                    </div>

                    <div className="mx-auto max-w-3xl space-y-4">
                        {socials.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`group block rounded-3xl bg-gradient-to-r ${social.color} p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="rounded-2xl bg-black/20 p-3 backdrop-blur">
                                                <Icon size={26} />
                                            </div>

                                            <div>
                                                <h2 className="text-lg md:text-xl font-bold">
                                                    {social.name}
                                                </h2>

                                                <p className="text-sm text-white/80">
                                                    Abrir perfil oficial
                                                </p>
                                            </div>
                                        </div>

                                        <ArrowUpRight
                                            size={22}
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