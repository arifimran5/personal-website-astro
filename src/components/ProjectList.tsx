
const projects = [
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
    live: "https://twipper.vercel.app"
  },
  {
    id: 2,
    title: "cinegeek",
    description:
      "A movie listing application that provides details about movies based on popularity, rating, and different genres.",
    technologies: ["React", "Vite", "TailwindCSS", "TMDB API"],
    github: "https://github.com/arifimran5/cinegeek",
    live: "https://cinegeek.netlify.app"
  },
];

const ProjectList = () => {
  return (
    <div className="mt-4">
      {projects.map((p) => (
        <div key={p.id} className="mt-5">
          <div className="flex items-center justify-between">
            <h2 className="text-text_primary">{p.title}</h2>
            <div className="flex items-center gap-5">
              <a href={p.github}><img src="/assets/github.svg" alt="Github icon" /></a>
              <a href={p.live}><img src="/assets/link.svg" alt="Live Link icon" /></a>
            </div>
          </div>
          <p className="mt-1 text-text_secondary">{p.description}</p>
          <p className="mt-2 text-text_secondary">technologies:
            <span className="italic"> {p.technologies.join(", ")}</span> </p>
        </div>
      ))}
    </div>
  )
}

export default ProjectList