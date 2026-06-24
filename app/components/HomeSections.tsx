'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { LuLayoutDashboard, LuServer, LuContainer } from 'react-icons/lu'
import { skillGroups } from '../data/skills'
import Window from './Window'

// Flatten every skill into one ribbon for the marquee.
const ticker = skillGroups.flatMap((g) => g.skills.map((s) => s))

const capabilities = [
  {
    icon: LuLayoutDashboard,
    title: 'Frontend',
    file: 'client.tsx',
    body: 'Fast, accessible interfaces with Next.js, React and React Native — typed end to end and animated where it counts.',
  },
  {
    icon: LuServer,
    title: 'Backend',
    file: 'server.go',
    body: 'APIs and services in Go and NestJS, backed by Postgres and Supabase. Clean schemas, sensible auth, real observability.',
  },
  {
    icon: LuContainer,
    title: 'Infra',
    file: 'deploy.sh',
    body: 'Linux servers, Docker, Nginx and the networking glue — so what I build actually ships and stays up.',
  },
]

const facts = [
  { k: 'focus', v: 'Fullstack' },
  { k: 'primary', v: 'Go · TS' },
  { k: 'data', v: 'Postgres' },
  { k: 'runs on', v: 'Linux' },
]

export default function HomeSections() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-28">
      {/* ── tech marquee ────────────────────────────────── */}
      <div
        className="relative overflow-hidden border-y py-5"
        style={{ borderColor: 'var(--glass-border)' }}
      >
        <div className="flex w-max animate-marquee gap-10">
          {[...ticker, ...ticker].map((s, i) => {
            const Icon = s.icon
            return (
              <span
                key={i}
                className="flex shrink-0 items-center gap-2 font-mono text-sm text-muted"
              >
                <Icon size={18} /> {s.name}
              </span>
            )
          })}
        </div>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent" />
      </div>

      {/* ── what I do ───────────────────────────────────── */}
      <section className="mt-24">
        <p className="font-mono text-xs text-muted">{'// what I do'}</p>
        <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          One person, the <span className="italic text-muted">whole</span> pipeline.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {capabilities.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Window
                  title={c.file}
                  className="h-full transition duration-300 hover:-translate-y-1"
                  bodyClassName="flex flex-col gap-4 p-7"
                >
                  <Icon size={26} className="text-muted" />
                  <h3 className="font-serif text-2xl">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{c.body}</p>
                </Window>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── quick facts ─────────────────────────────────── */}
      <section className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border md:grid-cols-4"
        style={{ borderColor: 'var(--glass-border)', background: 'var(--glass-border)' }}>
        {facts.map((f) => (
          <div key={f.k} className="glass p-6">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
              {f.k}
            </p>
            <p className="mt-2 font-serif text-2xl">{f.v}</p>
          </div>
        ))}
      </section>

      {/* ── CTA band ────────────────────────────────────── */}
      <section className="mt-20">
        <Window title="contact.sh" bodyClassName="flex flex-col items-start gap-6 p-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">
              Got a project in mind?
            </h2>
            <p className="mt-2 text-sm text-muted">
              Tell me what you&apos;re building and I&apos;ll get back to you.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--text)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition hover:gap-3"
          >
            Get in touch
            <FiArrowUpRight className="transition group-hover:rotate-45" />
          </Link>
        </Window>
      </section>
    </div>
  )
}
