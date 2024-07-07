export const projects = [
  {
    title: 'http load balancer',
    description:
      'Repository contains a simple HTTP load balancer written in Go and a test HTTP server to demonstrate its functionality.',
    technologies: ['Go'],
    github: 'https://github.com/arifimran5/http_loadbalancer',
    featured: true,
  },
  {
    title: 'demo order processing',
    description:
      'A simple order processing system using go and rabbitmq. emulates an event driven system',
    technologies: ['Go', 'RabbitMQ'],
    github: 'https://github.com/arifimran5/order-processing-demo/',
    featured: true,
  },
  {
    title: 'cinegeek v2',
    description: 'Rewrite of cinegeek with NextJS 13 React Server Components',
    technologies: ['React', 'NextJS', 'TailwindCSS', 'TMDB API'],
    github: 'https://github.com/arifimran5/cinegeekV2',
    live: 'https://cinegeek.vercel.app',
    featured: false,
  },
  {
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
    title: 'Jwt Auth with Fastify, JWT, and Typescript',
    description: 'simple token based auth pattern.',
    technologies: ['Fastify', 'JWT', 'Typescript', 'Prisma'],
    github: 'https://github.com/arifimran5/jwt-auth-fastify',
    featured: true,
  },
  {
    title: 'cinegeek',
    description:
      'A movie listing application that provides details about movies based on popularity, rating, and different genres.',
    technologies: ['React', 'Vite', 'TailwindCSS', 'TMDB API'],
    github: 'https://github.com/arifimran5/cinegeek',
    live: 'https://cinegeek.netlify.app',
    featured: false,
  },
  {
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
