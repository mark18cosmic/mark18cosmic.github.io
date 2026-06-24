import Link from 'next/link'
import { FiGithub, FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-5xl px-6 pb-10">
      <div
        className="flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
        style={{ borderColor: 'var(--glass-border)' }}
      >
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Kaish · built with Next.js
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/mark18cosmic"
            aria-label="GitHub"
            className="text-muted transition hover:text-[var(--text)]"
          >
            <FiGithub size={18} />
          </Link>
          <Link
            href="mailto:kaish018@gmail.com"
            aria-label="Email"
            className="text-muted transition hover:text-[var(--text)]"
          >
            <FiMail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
