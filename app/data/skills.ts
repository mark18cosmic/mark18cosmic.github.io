import type { IconType } from 'react-icons'
import {
  FaReact,
  FaNodeJs,
  FaLinux,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaNetworkWired,
} from 'react-icons/fa'
import {
  SiGo,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiNginx,
  SiPrisma,
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

// ─────────────────────────────────────────────────────────────
//  Edit your skills here. Add an icon from react-icons + a label.
// ─────────────────────────────────────────────────────────────

export type Skill = { name: string; icon: IconType }
export type SkillGroup = { title: string; blurb: string; skills: Skill[] }

// Highlighted "core stack" — the tools shown large at the top of the page.
export const coreStack: Skill[] = [
  { name: 'Go', icon: SiGo },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React Native', icon: TbBrandReactNative },
  { name: 'NestJS', icon: SiNestjs },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Docker', icon: FaDocker },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    blurb: 'Interfaces that feel fast and look right — web and mobile.',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React Native', icon: TbBrandReactNative },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    blurb: 'Typed, reliable services and the data layer behind them.',
    skills: [
      { name: 'Go', icon: SiGo },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Prisma', icon: SiPrisma },
    ],
  },
  {
    title: 'DevOps & Infra',
    blurb: 'Shipping it, running it, and keeping it online.',
    skills: [
      { name: 'Linux', icon: FaLinux },
      { name: 'Docker', icon: FaDocker },
      { name: 'Nginx', icon: SiNginx },
      { name: 'Networking', icon: FaNetworkWired },
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
    ],
  },
]
