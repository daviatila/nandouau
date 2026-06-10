import slide5 from "../assets/slides/slide-5.jpg";

export default function GalleryHero() {
  return (
    <section className="relative h-[70vh]">
      <img
        src={slide5}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-12">
        <span className="uppercase tracking-[0.3em] text-[#9b3e29] text-sm">
          Momentos
        </span>

        <h1 className="text-5xl font-black mt-2">
          GALERIA
        </h1>
      </div>
    </section>
  );
}