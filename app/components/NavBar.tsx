'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

import png from '@/public/images/Private GIF.gif'

const NavBar = () => {
  const router = useRouter()
  return (
    <header className="w-full h-18 mt-2 flex shadow-xl rounded-full bg-zinc-950/2">
      <div className="flex bg-black/5 justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link
          href="/"
          className='ml-4'
        >
          <Image src={png} width={50} height={50} alt='' />
        </Link>
        <div className="mr-8">
          <ul className="">
            <Link
              href="/skills"
              className={`${usePathname() == "/skills"
                ? "border-b text-gray-200 border-gray-200 font-semibold"
                : ""
                } ml-7 text-lg hover:text-gray-200 hover:border-b hover:border-gray-200`}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className={`${usePathname() == "/projects"
                ? "border-b text-gray-200 border-gray-200 font-semibold"
                : ""
                } ml-7 text-lg hover:text-gray-200 hover:border-b hover:border-gray-200`}
            >
              Projects
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar