import type { Metadata } from 'next'
import ProjectsContent from '../components/ProjectsContent'

export const metadata: Metadata = {
  title: 'Kaish | Work',
  description: 'Selected projects by Kaish.',
}

export default function Projects() {
  return <ProjectsContent />
}
