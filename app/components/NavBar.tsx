'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/', label: 'index', no: '01' },
  { href: '/skills', label: 'skills', no: '02' },
  { href: '/projects', label: 'work', no: '03' },
  { href: '/contact', label: 'contact', no: '04' },
]

const NavBar = () => {
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div className="glass flex items-center gap-1 rounded-full px-2 py-1.5">
        <Link href="/" className="px-3 py-1 font-serif text-lg leading-none">
          K<span className="italic">aish</span>
        </Link>
        <div className="mx-1 h-5 w-px bg-current opacity-10" />
        {links.map((link) => {
          const active = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative rounded-full px-3 py-1.5 font-mono text-xs transition"
            >
              {active && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full"
                  style={{ background: 'var(--glass-border)' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className={active ? '' : 'text-muted hover:opacity-80'}>
                <span className="opacity-50">{link.no}</span> {link.label}
              </span>
            </Link>
          )
        })}
        <div className="mx-1 h-5 w-px bg-current opacity-10" />
        <ThemeToggle />
      </div>
    </motion.nav>
  )
}

export default NavBar
