import Image from "next/image"
import type { Metadata } from 'next'

import soon from "@/public/images/Welcome to the Game.gif"

export const metadata: Metadata = {
  title: 'Kaish | Projects',
  description: 'My Projects',
}


export default function Skills() {
  return (
    <main className="min-h-screen ">
      <h1 className="font-extrabold mt-12 md:mt-6 text-center text-5xl">Coming Soon</h1>
      <div className="flex items-center text-center justify-center mt-1">
        <p>If you want to see the projects I'm currently working on check github or contact me.</p>
      </div>
    </main>


  )
}
