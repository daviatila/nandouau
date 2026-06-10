import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "Artista", to: "/artista" },
    { label: "Redes Sociais", to: "/redes" },
    { label: "Galeria", to: "/galeria" },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          bottom-6
          right-6
          z-50
          w-14
          h-14
          rounded-full
          bg-[#9b3e29]
          text-white
          flex
          items-center
          justify-center
          shadow-xl
        "
      >
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div
          className="
            fixed
            bottom-24
            right-6
            z-40
            bg-black/90
            backdrop-blur
            border
            border-white/10
            rounded-3xl
            p-4
            flex
            flex-col
            gap-3
            min-w-[220px]
          "
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="
                px-4
                py-3
                rounded-xl
                hover:bg-white/10
                transition
              "
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}