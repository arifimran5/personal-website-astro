import { z } from 'astro:content'

export const blogSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(['others']),
    ogImage: z.string().optional(),
    description: z.string(),
    canonicalURL: z.string().optional(),
  })
  .strict()

export type BlogFrontmatter = z.infer<typeof blogSchema>

export const craftSchema = z.object({
  title: z.string(),
  description: z.string(),
  github: z.string().url().optional(),
  datetime: z.date(),
  draft: z.boolean(),
})

export type CraftFrontMatter = z.infer<typeof craftSchema>
