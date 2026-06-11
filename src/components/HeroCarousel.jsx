import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import slide1 from "../assets/slides/slide-1.jpeg";
import slide2 from "../assets/slides/slide-2.jpg";
import slide3 from "../assets/slides/slide-3.jpeg";
import slide4 from "../assets/slides/slide-4.jpg";
import slide5 from "../assets/slides/slide-5.jpg";

import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroCarousel() {
  const slides = [
    {
      sobtitle: "Novo Lançamento",
      title: "JÁ SABIA",
      subtitle: "Estreia dia 16 às 21h",
      image: slide1,
      link: "",
      button: "Em Breve",
      imagePosition: "center top",
    },
    {
      sobtitle: "Novo Lançamento",
      title: "JÁ SABIA",
      subtitle: "Clipe disponível dia 20 às 19h30",
      image: slide2,
      link: "",
      button: "Em Breve",
      imagePosition: "center center",
    },
    
    {
      sobtitle: "TRAJETÓRIA",
      title: "O ARTISTA",
      subtitle: "Conheça sua trajetória",
      image: slide3,
      link: "/artista",
      button: "Ver Biografia",
      imagePosition: "center top",
    },
    {
      sobtitle: "REDES SOCIAIS",
      title: "NANDOUAU",
      subtitle: "Siga Nandouau nas redes",
      image: slide4,
      link: "/redes",
      button: "Seguir",
      imagePosition: "center center",
    },
    {
      sobtitle: "MOMENTOS",
      title: "GALERIA",
      subtitle: "Registros de shows e bastidores",
      image: slide5,
      link: "/galeria",
      button: "Ver Galeria",
      imagePosition: "center center",
    },
  ];

  return (
    <section className="h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-screen bg-cover"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition:
                  slide.imagePosition || "center",
              }}
            >
              <div className="absolute inset-0 bg-black/65" />

              <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-24">
                <span className="text-[#9b3e29] text-sm tracking-[0.3em] uppercase">
                  {slide.sobtitle}
                </span>

                <h1 className="mt-3 text-5xl font-black leading-none">
                  {slide.title}
                </h1>

                <p className="mt-4 text-lg text-white/80 max-w-sm">
                  {slide.subtitle}
                </p>

                <Link
                  to={slide.link}
                  className="
                    mt-8
                    w-fit
                    bg-[#9b3e29]
                    hover:bg-[#9b3e29]
                    transition
                    px-6
                    py-4
                    rounded-full
                    font-semibold
                  "
                >
                  {slide.button}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}