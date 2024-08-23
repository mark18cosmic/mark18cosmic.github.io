'use client'

import React from 'react'
import Link from 'next/link'


const NavBar = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-between mx-4 md:mx-16 my-4'>
        <div>
          <Link href={'/'} className='font-extrabold text-xl text-zinc-50 hover:underline'>Kaish</Link>
        </div>
        <div className='flex gap-2 md:gap-4 font-semibold'>
            <Link href={'/skills'} className='hover:underline'>Skills</Link>
            <Link href={'projects'} className='hover:underline'>Projects</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar