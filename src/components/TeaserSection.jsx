import teaserVideo from "../assets/videos/teaser.mp4";
import { Play } from "lucide-react";

export default function TeaserSection() {
    return (
        <section className="
            bg-gradient-to-b
            from-black
            to-black
            px-6
            py-8
        "
        >
            <div className="max-w-6xl mx-auto">

                {/* <div className="text-center mb-10">
                    <span
                        className="
                        text-[#9b3e29]
                        uppercase
                        tracking-[0.3em]
                        text-sm
                        "
                    >
                        Teaser Oficial
                    </span>

                    <h2
                        className="
                        text-4xl
                        md:text-6xl
                        font-black
                        text-white
                        mt-4
                        "
                    >
                        JÁ SABIA
                    </h2>

                    <p
                        className="
                        text-[#f7eada]
                        mt-4
                        max-w-xl
                        mx-auto
                        "
                    >
                        Uma prévia exclusiva do clipe
                    </p>
                </div> */}

                <div className="max-w-2xl mx-auto">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="
                            w-full
                            max-w-[650px]
                            aspect-square
                            rounded-3xl
                            shadow-2xl
                        "
                    >
                        <source src={teaserVideo} type="video/mp4" />
                    </video>
                </div>

            </div>
        </section>
    );
}