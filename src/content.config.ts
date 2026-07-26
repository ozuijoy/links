import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const links = defineCollection({
  loader: file('src/data/links.json'),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    description: z.string(),
    category: z.string(),
  }),
});

export const collections = { links };
