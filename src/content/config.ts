import { defineCollection } from 'astro:content'
import { blogSchema, craftSchema } from './_schemas'

const blog = defineCollection({
  schema: blogSchema,
})

const craft = defineCollection({
  schema: craftSchema,
})

export const collections = { blog, craft }
