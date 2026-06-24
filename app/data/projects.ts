// ─────────────────────────────────────────────────────────────
//  Add or edit projects here. Each entry renders as a glass card.
//  `tags` show as pills, `link`/`github` add buttons (omit to hide).
// ─────────────────────────────────────────────────────────────

export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  github?: string
  /** Optional emoji or short label shown in the card header */
  emoji?: string
}

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'This site — a glassy, animated portfolio built with Next.js, Tailwind and Framer Motion, deployed statically to GitHub Pages.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/mark18cosmic/mark18cosmic.github.io',
    emoji: '🪟',
  },
  // Example template — copy this block to add a new project:
  // {
  //   title: 'My Cool App',
  //   description: 'What it does and why it is interesting.',
  //   tags: ['Go', 'Postgres', 'Docker'],
  //   link: 'https://example.com',
  //   github: 'https://github.com/you/repo',
  //   emoji: '🚀',
  // },
]
