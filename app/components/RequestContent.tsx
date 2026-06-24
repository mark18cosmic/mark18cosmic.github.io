'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import Window from './Window'

// ─────────────────────────────────────────────────────────────
//  HOW SUBMISSIONS REACH YOU
//  This static site can't run a server, so it uses Web3Forms — a
//  free service that emails each submission straight to your inbox.
//
//  1. Go to https://web3forms.com  → enter your email → copy the
//     "Access Key" they give you (no account/password needed).
//  2. Paste it below as ACCESS_KEY.
//
//  Until you add a key, the form falls back to opening a pre-filled
//  email in the visitor's mail app addressed to you.
// ─────────────────────────────────────────────────────────────
const ACCESS_KEY = '' // <-- paste your Web3Forms access key here
const MY_EMAIL = 'kaish018@gmail.com'

type Status = 'idle' | 'sending' | 'success' | 'error'

const topics = ['A project', 'Collaboration', 'Just saying hi']

export default function RequestContent() {
  const [status, setStatus] = useState<Status>('idle')
  const [topic, setTopic] = useState(topics[0])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>

    // Fallback: no key configured → open the visitor's email client.
    if (!ACCESS_KEY) {
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nAbout: ${topic}\n\n${data.message}`
      )
      window.location.href = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(
        `Message from ${data.name}`
      )}&body=${body}`
      setStatus('success')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New message from ${data.name}`,
          from_name: 'Portfolio — contact form',
          about: topic,
          ...data,
        }),
      })
      const json = await res.json()
      setStatus(json.success ? 'success' : 'error')
      if (json.success) form.reset()
    } catch {
      setStatus('error')
    }
  }

  const field =
    'w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-[var(--text)] placeholder:text-muted'
  const borderStyle = { borderColor: 'var(--glass-border)' }

  return (
    <section className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <header className="mb-12">
        <p className="font-mono text-xs text-muted">04 — contact</p>
        <h1 className="mt-3 font-serif text-5xl sm:text-6xl">
          Get in <span className="italic text-muted">touch.</span>
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Have an idea, a question, or just want to connect? Drop me a line
          below — I read every message and reply personally.
        </p>
      </header>

      <Window title="message — new" bodyClassName="p-7 sm:p-9">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-10 text-center"
          >
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[#28c840]/15 text-[#28c840]">
              <FiCheck size={26} />
            </div>
            <h2 className="font-serif text-2xl">Message on its way</h2>
            <p className="max-w-sm text-sm text-muted">
              Thanks for reaching out — I&apos;ll get back to you as soon as I
              can.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-2 font-mono text-xs text-muted underline underline-offset-4 hover:text-[var(--text)]"
            >
              send another
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-muted">name</label>
                <input name="name" required placeholder="Jane Doe" className={field} style={borderStyle} />
              </div>
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-muted">email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className={field}
                  style={borderStyle}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-xs text-muted">about</label>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTopic(t)}
                    className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition ${
                      topic === t
                        ? 'bg-[var(--text)] text-[var(--bg)]'
                        : 'text-muted hover:text-[var(--text)]'
                    }`}
                    style={topic === t ? undefined : borderStyle}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-xs text-muted">message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me what's on your mind…"
                className={`${field} resize-none`}
                style={borderStyle}
              />
            </div>

            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm text-[#ff5f57]">
                <FiAlertCircle /> Something went wrong. Try again or email me
                directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition hover:gap-3 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send request'}
              <FiSend className="transition group-hover:translate-x-0.5" />
            </button>
          </form>
        )}
      </Window>

      <p className="mt-6 text-center font-mono text-xs text-muted">
        prefer email? →{' '}
        <a
          href={`mailto:${MY_EMAIL}`}
          className="text-[var(--text)] underline underline-offset-4"
        >
          {MY_EMAIL}
        </a>
      </p>
    </section>
  )
}
