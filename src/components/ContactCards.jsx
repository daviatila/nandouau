import {
  Instagram,
  Youtube,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function ContactCards() {
  const cards = [
    {
      title: "WhatsApp",
      icon: MessageCircle,
      link: "#",
      color: "bg-green-600",
    },

    {
      title: "Instagram",
      icon: Instagram,
      link: "#",
      color: "bg-pink-600",
    },

    {
      title: "YouTube",
      icon: Youtube,
      link: "#",
      color: "bg-red-600",
    },

    {
      title: "E-mail",
      icon: Mail,
      link: "#",
      color: "bg-zinc-700",
    },
  ];

  return (
    <section className="px-6 py-20 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black">
          Contato
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.title}
                href={card.link}
                target="_blank"
                className={`
                  ${card.color}
                  rounded-3xl
                  p-6
                  flex
                  items-center
                  gap-4
                  hover:scale-[1.02]
                  transition
                `}
              >
                <Icon size={28} />

                <span className="font-semibold">
                  {card.title}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}