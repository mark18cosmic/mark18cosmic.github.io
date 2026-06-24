'use client'

import { motion } from 'framer-motion'
import { coreStack, skillGroups } from '../data/skills'
import Window from './Window'

const ease = [0.22, 1, 0.36, 1] as const

const SkillsContent = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-32 pb-24">
      <header className="mb-12 max-w-2xl">
        <p className="font-mono text-xs text-muted">02 — skills</p>
        <h1 className="mt-3 font-serif text-5xl sm:text-6xl">
          The tools I reach <span className="italic text-muted">for.</span>
        </h1>
        <p className="mt-4 text-muted">
          A pragmatic, full-stack toolkit — chosen for shipping real products,
          not chasing hype. Here&apos;s what I work with day to day.
        </p>
      </header>

      {/* ── core stack showcase ─────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="mb-6"
      >
        <Window title="core-stack" bodyClassName="p-6 sm:p-8">
          <p className="mb-6 font-mono text-xs text-muted">{'// what I build with most'}</p>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            {coreStack.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease }}
                  className="group flex flex-col items-center gap-2.5"
                >
                  <div className="grid h-16 w-16 place-items-center rounded-2xl border transition duration-300 group-hover:-translate-y-1 group-hover:border-[var(--text)]"
                    style={{ borderColor: 'var(--glass-border)' }}>
                    <Icon size={30} className="transition group-hover:scale-110" />
                  </div>
                  <span className="text-center font-mono text-[11px] text-muted">
                    {s.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </Window>
      </motion.div>

      {/* ── category panes ──────────────────────────────── */}
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: gi * 0.1, duration: 0.6, ease }}
          >
            <Window
              title={`${group.title.toLowerCase().replace(/\s*&\s*/g, '-')}.app`}
              className="h-full"
              bodyClassName="flex flex-col gap-5 p-6"
            >
              <div>
                <h2 className="font-serif text-2xl">{group.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {group.blurb}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {group.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2.5 rounded-lg border px-3 py-2.5 transition hover:-translate-y-0.5 hover:border-[var(--text)]"
                      style={{ borderColor: 'var(--glass-border)' }}
                    >
                      <Icon
                        size={18}
                        className="shrink-0 text-muted transition group-hover:text-[var(--text)]"
                      />
                      <span className="truncate text-xs">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </Window>
          </motion.div>
        ))}
      </div>

      {/* ── closing note ────────────────────────────────── */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 text-center font-mono text-xs text-muted"
      >
        + always learning something new ↗
      </motion.p>
    </section>
  )
}

export default SkillsContent
