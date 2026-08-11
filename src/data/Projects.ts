export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  cover: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "duplex-house",

    title: "Duplex House",

    category: "Residential Interior",

    location: "Mumbai, India",

    description:
      "A contemporary duplex interior designed with warm materials, refined details and a comfortable sense of luxury.",

    cover:
      "/images/projects/Duplex House/Photo 1.png",

    images: [
      "/images/projects/Duplex House/Photo 1.png",
      "/images/projects/Duplex House/Photo 2.png",
      "/images/projects/Duplex House/Photo 3.png",
      "/images/projects/Duplex House/Photo 4.png",
      "/images/projects/Duplex House/Photo 5.png",

      "/images/projects/Duplex House/Photo 7.png",
      "/images/projects/Duplex House/Photo 8.png",

      "/images/projects/Duplex House/Photo 9.jpeg",

      "/images/projects/Duplex House/Photo 11.jpeg",
      "/images/projects/Duplex House/Photo 12.jpeg",
      "/images/projects/Duplex House/Photo 13.jpeg",
    ],
  },
];