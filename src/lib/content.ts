import { getCollection } from 'astro:content';

export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPubs() {
  const pubs = await getCollection('publications');
  // Newest first; within a year, keep filename order stable.
  return pubs.sort((a, b) => b.data.year - a.data.year || a.id.localeCompare(b.id));
}

export async function getProjects(kind?: 'game' | 'music' | 'other') {
  const items = await getCollection('projects', ({ data }) => !kind || data.kind === kind);
  return items.sort((a, b) => b.data.order - a.data.order || b.data.date.valueOf() - a.data.date.valueOf());
}

export const fmtDate = (d: Date, opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }) =>
  d.toLocaleDateString('en-US', { timeZone: 'UTC', ...opts });
