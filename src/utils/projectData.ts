export const projects = [
  {
    id: 1,
    title: 'cinegeek v2',
    description: 'Rewrite of cinegeek with NextJS 13 React Server Components',
    technologies: ['React', 'NextJS', 'TailwindCSS', 'TMDB API'],
    github: 'https://github.com/arifimran5/cinegeekV2',
    live: 'https://cinegeek.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'twipper',
    description: 'A microblogging web app just like `you know what`.',
    technologies: [
      'NextJS',
      'Typescript',
      'TailwindCSS',
      'Prisma',
      'Trpc',
      'Postgres',
    ],
    github: 'https://github.com/arifimran5/twipper',
    live: 'https://twipper.vercel.app',
    featured: true,
  },
  {
    id: 3,
    title: 'Jwt Auth with Fastify, JWT, and Typescript',
    description: 'simple token based auth pattern.',
    technologies: ['Fastify', 'JWT', 'Typescript', 'Prisma'],
    github: 'https://github.com/arifimran5/jwt-auth-fastify',
    featured: true,
  },
  {
    id: 4,
    title: 'cinegeek',
    description:
      'A movie listing application that provides details about movies based on popularity, rating, and different genres.',
    technologies: ['React', 'Vite', 'TailwindCSS', 'TMDB API'],
    github: 'https://github.com/arifimran5/cinegeek',
    live: 'https://cinegeek.netlify.app',
    featured: false,
  },
  {
    id: 5,
    title: 'StoreFront',
    description: 'An e-commerce storefront',
    technologies: [
      'C#',
      'ASP .Net Core',
      'SQL Server',
      'Entity Framework Core',
      'Angular',
    ],
    github: 'https://github.com/arifimran5/StoreFront',
    featured: true,
  },
]

export type Project = (typeof projects)[0]
