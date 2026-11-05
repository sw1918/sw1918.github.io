import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), href: z.string() });

// One YAML file per paper in src/content/publications/
const publications = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(), // e.g. "CHI 2026"
    year: z.number(),
    type: z.enum(['conference', 'journal', 'workshop', 'poster', 'preprint', 'other']).default('conference'),
    award: z.string().optional(), // e.g. "Best Paper Honorable Mention"
    selected: z.boolean().default(false), // show on the home page
    links: z.array(link).default([]), // PDF, DOI, video, code...
  }),
});

// Markdown blog posts in src/content/posts/
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Games, music releases, other creative work in src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kind: z.enum(['game', 'music', 'other']),
      date: z.coerce.date(),
      summary: z.string(),
      cover: image().optional(), // put images next to the .md file
      status: z.string().optional(), // e.g. "Released", "In development"
      steamAppId: z.string().optional(), // renders the Steam store widget
      embed: z.string().optional(), // any iframe src: Bandcamp, SoundCloud, YouTube, itch.io
      embedHeight: z.number().optional(),
      links: z.array(link).default([]),
      order: z.number().default(0), // higher shows first
    }),
});

// Short dated items for the home page: src/content/news.yaml
const news = defineCollection({
  loader: file('./src/content/news.yaml'),
  schema: z.object({ date: z.coerce.date(), text: z.string() }),
});

// Courses: src/content/teaching.yaml
const courses = defineCollection({
  loader: file('./src/content/teaching.yaml'),
  schema: z.object({
    code: z.string().optional(),
    title: z.string(),
    terms: z.array(z.string()).default([]),
    description: z.string(),
    url: z.string().optional(),
  }),
});

export const collections = { publications, posts, projects, news, courses };
