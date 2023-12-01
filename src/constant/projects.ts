type Project = {
  id: number;
  name: string;
  description: string;
  url: string;
  repository: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "AnyMovie!",
    description:
      "This is my first project using ReactJS. It's a movie search app using The Movie Database API.",
    url: "https://anymovie.vercel.app/",
    repository: "https://github.com/shidqi29/anymovie",
    image:
      "https://i.ibb.co/FJgp8tf/Web-capture-1-12-2023-93938-anymovie-vercel-app.jpg",
  },
  {
    id: 2,
    name: "SPICES - Recipe App",
    description:
      "Description 2 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
    url: "https://anymovie.vercel.app/",
    repository: "https://github.com/shidqi29/SPICES-recipe-app",
    image: "https://picsum.photos/1280/720",
  },
];
