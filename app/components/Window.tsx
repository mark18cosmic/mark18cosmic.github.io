'use client'

import { ReactNode } from 'react'

// A macOS-style window frame. Used as the recurring visual motif across the
// site so cards feel like panes on a desktop rather than generic glass boxes.
export default function Window({
  title,
  children,
  className = '',
  bodyClassName = '',
}: {
  title?: string
  children: ReactNode
  className?: string
  bodyClassName?: string
}) {
  return (
    <div
      className={`glass flex flex-col overflow-hidden rounded-xl ${className}`}
    >
      {/* title bar */}
      <div
        className="flex shrink-0 items-center gap-2 border-b px-4 py-2.5"
        style={{ borderColor: 'var(--glass-border)' }}
      >
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        {title && (
          <span className="ml-2 truncate font-mono text-xs text-muted">
            {title}
          </span>
        )}
      </div>
      <div className={`flex-1 ${bodyClassName}`}>{children}</div>
    </div>
  )
}
