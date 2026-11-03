// One place for everything that identifies you. Edit this file first.

export const site = {
  name: 'Spencer Zhao-Williams',
  // Used to bold your name in author lists. Match how it appears in citations.
  authorName: 'Spencer Williams',
  title: 'Assistant Teaching Professor',
  affiliation: 'University of Washington, Information School',
  email: 'sw1918@uw.edu',
  // Swap for your own square headshot in public/ (e.g. '/photo.jpg').
  photo: '/img/spencer-head.jpg',
  description:
    'HCI researcher studying science communication. I also make games and music.',

  // Shown as icon-less text links on the home page and footer. Remove any you don't use.
  links: [
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=HmVmYNwAAAAJ&hl=en' },
    { label: 'ORCID', href: 'https://orcid.org/0000-0002-3672-1294' },
    { label: 'Bluesky', href: 'https://bsky.app/profile/swilliams1918.bsky.social' },
    { label: 'CV', href: '/cv' },
  ],

  // Top navigation. Academic sections first; creative work after.
  nav: [
    { label: 'Research', href: '/research' },
    { label: 'Teaching', href: '/teaching' },
    { label: 'Blog', href: '/blog' },
    { label: 'Games', href: '/games' },
    { label: 'Music', href: '/music' },
    { label: 'CV', href: '/cv' },
  ],
} as const;
