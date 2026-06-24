import Link from 'next/link'
import Window from './components/Window'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-screen max-w-2xl items-center px-6">
      <Window title="error.log" className="w-full" bodyClassName="p-8 font-mono text-sm">
        <p className="text-muted">
          <span className="text-[#ff5f57]">404</span> — page not found
        </p>
        <h1 className="mt-4 font-serif text-5xl">
          This window <span className="italic">closed.</span>
        </h1>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-[var(--text)] px-5 py-2.5 text-sm text-[var(--bg)] transition hover:opacity-80"
        >
          ← back home
        </Link>
      </Window>
    </section>
  )
}
