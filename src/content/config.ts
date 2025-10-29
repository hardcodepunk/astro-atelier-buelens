import { defineCollection, z } from "astro:content"

const works = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number().optional(),
    materials: z.array(z.string()).optional(),
    dimensions: z.string().optional(),
    photographer: z.string().optional(),
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
})

const exhibitions = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    city: z.string().optional(),
    start: z.string(),
    end: z.string().optional(),
    featured: z.boolean().default(false),
  }),
})

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    cover: z.string().optional(),
    excerpt: z.string().optional(),
  }),
})

export const collections = { works, exhibitions, posts }
