'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Window from './Window'
import { FiArrowUpRight } from 'react-icons/fi'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

const MainPage = () => {
  return (
    <section className="mx-auto grid min-h-screen max-w-5xl items-center gap-12 px-6 pt-28 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col">
      {/* meta row */}
      <motion.div
        custom={0}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted"
      >
        <span className="inline-flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#28c840] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#28c840]" />
          </span>
          fullstack engineer
        </span>
        <span>·</span>
        <span>building things that ship</span>
      </motion.div>

      {/* display name */}
      <motion.h1
        custom={1}
        variants={fade}
        initial="hidden"
        animate="show"
        className="font-serif text-6xl leading-[0.95] sm:text-7xl"
      >
        Kaish — a fullstack
        <br />
        developer who ships
        <br />
        <span className="italic text-muted">the whole stack.</span>
      </motion.h1>

      {/* rotating role */}
      <motion.div
        custom={2}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-8 font-mono text-sm text-muted"
      >
        <span className="opacity-50">~/ </span>
        <TypeAnimation
          sequence={[
            'building APIs in Go',
            1400,
            'shipping NestJS services',
            1400,
            'crafting Next.js frontends',
            1400,
            'wiring React Native apps',
            1400,
            'running Linux + Docker',
            1400,
          ]}
          wrapper="span"
          speed={55}
          repeat={Infinity}
          cursor
        />
      </motion.div>

      {/* blurb */}
      <motion.p
        custom={3}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
      >
        I design and build end-to-end products — from typed Go and NestJS
        backends on Postgres and Supabase, to Next.js and React Native
        clients, all the way down to the Linux boxes, Docker containers and
        networking that keep them online.
      </motion.p>

      {/* CTAs */}
      <motion.div
        custom={4}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <Link
          href="mailto:kaish018@gmail.com"
          className="group inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition hover:gap-3"
        >
          Get in touch
          <FiArrowUpRight className="transition group-hover:rotate-45" />
        </Link>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 font-mono text-sm text-muted transition hover:text-[var(--text)]"
        >
          view selected work
          <HiOutlineArrowLongRight className="transition group-hover:translate-x-1" />
        </Link>
      </motion.div>
      </div>

      {/* floating terminal */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block"
      >
        <div className="animate-float">
          <Window title="kaish@dev — zsh" bodyClassName="p-5 font-mono text-[13px] leading-relaxed">
            <p>
              <span className="text-[#28c840]">➜</span>{' '}
              <span className="text-[#febc2e]">~</span> whoami
            </p>
            <p className="text-muted">fullstack engineer · problem solver</p>
            <p className="mt-3">
              <span className="text-[#28c840]">➜</span>{' '}
              <span className="text-[#febc2e]">~</span> cat stack.txt
            </p>
            <p className="text-muted">go · nestjs · next · react-native</p>
            <p className="text-muted">postgres · supabase · docker · linux</p>
            <p className="mt-3">
              <span className="text-[#28c840]">➜</span>{' '}
              <span className="text-[#febc2e]">~</span> ./status --now
            </p>
            <p className="text-muted">
              <span className="text-[#28c840]">●</span> shipping production software
            </p>
            <p className="mt-3">
              <span className="text-[#28c840]">➜</span>{' '}
              <span className="text-[#febc2e]">~</span>{' '}
              <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-current" />
            </p>
          </Window>
        </div>
      </motion.div>
    </section>
  )
}

export default MainPage
