import { useState } from "react";

import GalleryHero from "../components/GalleryHero";
import GalleryModal from "../components/GalleryModal";

import { galleryItems } from "../data/gallery";

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] =
    useState(null);

  return (
    <main className="bg-black min-h-screen text-white">
      <GalleryHero />

      <section
        className="
          px-4
          py-12
          md:px-8
        "
      >
        <div
          className="
            columns-1
            sm:columns-2
            lg:columns-3
            gap-5
          "
        >
          {galleryItems.map((album) => (
            <div
              key={album.id}
              onClick={() =>
                setSelectedAlbum(album)
              }
              className="
                mb-5
                break-inside-avoid
                cursor-pointer
                overflow-hidden
                rounded-3xl
                relative
                group
              "
            >
              <img
                src={album.cover}
                alt={album.title}
                className="
                  w-full
                  transition-all
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
                    text-xl
                    font-bold
                  "
                >
                  {album.title}
                </h3>

                <p
                  className="
                    text-sm
                    text-zinc-300
                    mt-1
                  "
                >
                  {album.photos.length} fotos
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedAlbum && (
        <GalleryModal
          album={selectedAlbum}
          onClose={() =>
            setSelectedAlbum(null)
          }
        />
      )}
    </main>
  );
}