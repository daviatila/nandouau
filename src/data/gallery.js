// src/data/gallery.js

import festa1 from "../assets/gallery/festa-agosto/1.jpeg";
import festa2 from "../assets/gallery/festa-agosto/2.jpeg";
import festa3 from "../assets/gallery/festa-agosto/3.jpeg";

import nandouau1 from "../assets/gallery/nandouau/1.jpeg";
import nandouau2 from "../assets/gallery/nandouau/2.jpeg";

import clipe1 from "../assets/gallery/clipe/1.jpeg";
import clipe2 from "../assets/gallery/clipe/2.jpeg";

export const galleryItems = [
  {
    id: 1,
    title: "Festa de Agosto",
    category: "shows",
    cover: festa1,
    description: "Apresentação realizada durante a Festa de Agosto.",

    photos: [
      festa1,
      festa2,
      festa3,
    ],
  },

  {
    id: 2,
    title: "Show com Nandouau",
    category: "shows",
    cover: nandouau1,
    description: "Participação especial durante o evento.",

    photos: [
      nandouau1,
      nandouau2,
    ],
  },

  {
    id: 3,
    title: "Clipe Já Sabia",
    category: "clipe",
    cover: clipe1,
    description: "Bastidores e gravações do clipe.",

    photos: [
      clipe1,
      clipe2,
    ],
  },
];