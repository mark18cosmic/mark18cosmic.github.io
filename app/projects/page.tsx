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
      <div className="h-[80vh] flex items-center text-center justify-center">
        <Image src={soon} alt="" />
      </div>
    </main>


  )
}
