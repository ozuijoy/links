import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const links = defineCollection({
  loader: glob({ base: './src/content/links', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    description: z.string(),
    category: z.string(),
  }),
});

export const collections = { links };
