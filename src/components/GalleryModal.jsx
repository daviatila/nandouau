import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryModal({
  album,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [album]);

  if (!album) return null;

  const nextPhoto = () => {
    setCurrentIndex((prev) =>
      prev === album.photos.length - 1
        ? 0
        : prev + 1
    );
  };

  const previousPhoto = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? album.photos.length - 1
        : prev - 1
    );
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        bg-black/95
        p-4
        flex
        items-center
        justify-center
      "
    >
      <button
        onClick={onClose}
        className="
          absolute
          top-5
          right-5
          text-white
        "
      >
        <X size={30} />
      </button>

      <div
        className="
          w-full
          max-w-6xl
        "
      >
        <div className="relative">
          <img
            src={album.photos[currentIndex]}
            alt=""
            className="
              w-full
              max-h-[75vh]
              object-contain
              rounded-3xl
            "
          />

          <button
            onClick={previousPhoto}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              bg-black/60
              p-3
              rounded-full
            "
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextPhoto}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              bg-black/60
              p-3
              rounded-full
            "
          >
            <ChevronRight />
          </button>
        </div>

        <div className="mt-6">
          <h2
            className="
              text-3xl
              font-black
            "
          >
            {album.title}
          </h2>

          <p
            className="
              text-zinc-400
              mt-3
            "
          >
            {album.description}
          </p>

          <div
            className="
              mt-4
              text-sm
              text-zinc-500
            "
          >
            {currentIndex + 1} de {album.photos.length}
          </div>
        </div>

        <div
          className="
            mt-6
            flex
            gap-2
            overflow-x-auto
          "
        >
          {album.photos.map((photo, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentIndex(index)
              }
              className={`
                shrink-0
                rounded-xl
                overflow-hidden
                border-2

                ${
                  currentIndex === index
                    ? "border-red-500"
                    : "border-transparent"
                }
              `}
            >
              <img
                src={photo}
                alt=""
                className="
                  w-20
                  h-20
                  object-cover
                "
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}