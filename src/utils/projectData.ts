export const projects = [
  {
    id: 1,
    title: "twipper",
    description: "A microblogging web app just like `you know what`.",
    technologies: [
      "NextJS",
      "Typescript",
      "TailwindCSS",
      "Prisma",
      "Trpc",
      "Postgres",
    ],
    github: "https://github.com/arifimran5/twipper",
    live: "https://twipper.vercel.app",
  },
  {
    id: 2,
    title: "cinegeek",
    description:
      "A movie listing application that provides details about movies based on popularity, rating, and different genres.",
    technologies: ["React", "Vite", "TailwindCSS", "TMDB API"],
    github: "https://github.com/arifimran5/cinegeek",
    live: "https://cinegeek.netlify.app",
  },
];

export type Project = typeof projects[0]