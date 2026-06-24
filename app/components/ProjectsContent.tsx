'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { projects } from '../data/projects'
import Window from './Window'

const ProjectsContent = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-32 pb-24">
      <header className="mb-14">
        <p className="font-mono text-xs text-muted">03 — work</p>
        <h1 className="mt-3 font-serif text-5xl sm:text-6xl">
          Selected <span className="italic text-muted">work.</span>
        </h1>
      </header>

      {projects.length === 0 ? (
        <Window title="readme.md" bodyClassName="p-8 font-mono text-sm text-muted">
          <p># Nothing here yet</p>
          <p className="mt-3">
            Projects are coming soon. In the meantime, check out{' '}
            <Link
              href="https://github.com/mark18cosmic"
              className="text-[var(--text)] underline underline-offset-4"
            >
              my GitHub
            </Link>
            .
          </p>
        </Window>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Window
                title={`${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="h-full transition duration-300 hover:-translate-y-1"
                bodyClassName="flex flex-col gap-4 p-7 sm:p-8"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-serif text-2xl leading-tight">{project.title}</h2>
                  {project.emoji && (
                    <span className="shrink-0 text-2xl">{project.emoji}</span>
                  )}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-2.5 py-1 font-mono text-[11px] text-muted"
                      style={{ borderColor: 'var(--glass-border)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.link || project.github) && (
                  <div className="flex items-center gap-4 text-sm">
                    {project.link && (
                      <Link
                        href={project.link}
                        className="group inline-flex items-center gap-1.5 font-medium"
                      >
                        Live <FiArrowUpRight className="transition group-hover:rotate-45" />
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        className="inline-flex items-center gap-1.5 text-muted transition hover:text-[var(--text)]"
                      >
                        <FiGithub /> Code
                      </Link>
                    )}
                  </div>
                )}
              </Window>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}

export default ProjectsContent
