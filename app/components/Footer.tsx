import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-zinc-900/5 min-h-[200px] md:min-h-[100px] shadow-lg'>
      <Link href='https://github.com/mark18cosmic' className='mb-4 mt-5 flex items-center justify-center'><AiOutlineGithub color='white' size={30} /></Link>
      <div className='flex justify-center mt-2'>
        <p className=''>Kaish &copy; 2023</p>
      </div>
    </footer>
  )
}

export default Footer