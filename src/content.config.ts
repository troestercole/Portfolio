import { defineCollection, z, reference } from 'astro:content'
import { glob, file } from 'astro/loaders'

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/blog' }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
        tags: z.array(z.string()),
        relatedPosts: z.array(reference('blog')).optional(),
    }),
})

export const collections = { blog }
