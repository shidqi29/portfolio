type Project = {
  name: string;
  description: string;
  url: string;
  repository: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: "Cek Rumah Sakit Indonesia",
    description:
      "A website that provides information information regarding the list of hospitals and the availability of hospital beds in Indonesia. Created using ReactJS, DaisyUI, and Tailwind CSS.",
    url: "https://cekrs.vercel.app/",
    repository: "https://github.com/shidqi29/cekrs",
    image:
      "https://i.ibb.co/dMwGyPq/Web-capture-1-12-2023-17315-cekrs-vercel-app.jpg",
  },
  {
    name: "AnyMovie!",
    description:
      "A website that provides a collection of movies from various genres, allowing users to explore and discover new films. Created using ReactJS, Headless UI, and Tailwind CSS.",
    url: "https://anymovie.vercel.app/",
    repository: "https://github.com/shidqi29/anymovie",
    image:
      "https://i.ibb.co/yRNVH7d/Web-capture-1-12-2023-93938-anymovie-vercel-app-2.jpg",
  },
  {
    name: "SPICES - Recipe App",
    description:
      "A website dedicated to Sharing Palatable International Culinary Experiences & Secrets. Created using ReactJS and Tailwind CSS.",
    url: "https://spices-recipe-app.vercel.app/",
    repository: "https://github.com/shidqi29/SPICES-recipe-app",
    image:
      "https://i.ibb.co/26GNL2S/Web-capture-1-12-2023-161555-localhost.jpg",
  },
];
