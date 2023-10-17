import SkillsContent from "../components/SkillsContent"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kaish | skills',
  description: 'My set of skills',
}

export default function Skills() {
  return (
    <main className="">
      <SkillsContent />
    </main>
  )
}
