import './globals.css'
import type { Metadata } from 'next'
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import ThemeProvider from './components/ThemeProvider'
import Background from './components/Background'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
})
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Kaish | Fullstack Developer',
  description: 'Portfolio of Kaish — a fullstack developer working with Go, NestJS, Next.js, React and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body className="font-sans flex min-h-screen flex-col antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Background />
          <NavBar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
