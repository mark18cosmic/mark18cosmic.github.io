'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import Link from 'next/link'

import svg from '@/public/images/ryunosuke-kikuno-zE-MrTmjzd4-unsplash.jpg'

const MainPage = () => {
  return (
    <main>
      <div className='items-center flex w-full min-h-screen mt-8 md:mt-0'>
        <div className='flex items-center justify-between w-full'>
          <div className='w-1/2 flex flex-col ml-24'>
            <h1 className='font-extrabold text-white text-6xl mb-4 text-center md:text-left'>Hi, I'm Kaish</h1>
            <div className='w-52 md:w-96 rounded-full bg-white border-2 mb-4' />
            <h2 className='font-bold mb-10 text-gray-300 text-center md:text-left text-2xl md:text-3xl'>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'CS Student',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Linux User',
                  1000,
                  'Fullstack Dev',
                  1000,
                  'UI/UX Designer',
                  1000,
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
              // style={{ display: 'inline-block' }}
              />
            </h2>
            <p className=' text-md text-gray-400 antialiased text-center md:text-left font-medium leading-relaxed'>As a seasoned developer with a penchant for designing intuitive and user-friendly web applications, I have been utilizing the versatile capabilities of the MERN stack (MongoDB, Express.js, React.js, and Node.js) to craft customized digital experiences for various clients. I believe that with hard work, dedication, and continuous learning, there is no limit to what I can achieve. So let's connect and discuss any project ideas you have!</p>
            <div className='mt-10 mb-5 self-center md:self-start'>
              <Link href='mailto:kaish018@gmail.com' className='p-3 bg-white text-black justify-center rounded-2xl font-bold hover:bg-white/60'>Contact me</Link>
            </div>
          </div>
          <div className='w-1/2 h-full flex-col ml-16 mb-16 mr-24'>
            <Image src={svg} height={650} width={650} alt='' className='rounded-xl'/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainPage
