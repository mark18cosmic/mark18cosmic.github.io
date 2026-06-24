'use client'

// A restrained backdrop: one slow aurora wash + a fine SVG film grain and
// a hairline dot-grid. No gradient-blob soup.
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          color: 'var(--text-muted)',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)',
        }}
      />
      {/* single soft aurora */}
      <div
        className="absolute -top-1/3 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full opacity-40 blur-[120px] animate-float"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, var(--bg-grad-1), var(--bg-grad-2), var(--bg-grad-3), var(--bg-grad-1))',
        }}
      />
      {/* film grain */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.035]">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  )
}
