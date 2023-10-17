'use client'

import React from 'react'
import Image from 'next/image'
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaLinux, FaFigma, FaGit, FaGithub, FaJira, FaCloudflare, FaYarn } from "react-icons/fa"
import { TbBrandNextjs, TbBrandTailwind, TbBrandBulma, TbBrandTypescript, TbBrandNodejs, TbBrandVscode, } from "react-icons/tb"
import { SiExpress, SiMongodb, SiPostgresql, SiSqlite, SiNginx, SiApache, SiArchlinux, SiGnubash } from "react-icons/si"
import { Tooltip } from "@nextui-org/react";

const SkillsContent = () => {
  return (
    <main className='min-h-screen'>
      <div className='flex text-center justify-center mt-5'>
        <h1 className='font-extrabold text-4xl underline underline-offset-[15px]'>My skills</h1>
      </div>
      <div className='grid md:grid-cols-3 text-center max-w-5xl mx-auto mt-10 gap-12'>
        <div className='bg-zinc-950 p-8 rounded-xl border border-zinc-950 shadow-lg px-4 '>
          <h2 className='font-bold text-2xl mt-1'>Front-End</h2>
          <div className='w-full bg-white h-[2px] mt-1'></div>
          <div className='mt-8 flex justify-center'>
            <ul className='space-y-3'>
              <Tooltip placement='right-end' content="HTML"><li><FaHtml5 size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="CSS"><li><FaCss3Alt size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="Javascript"><li><FaJsSquare size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="Typescript"><li><TbBrandTypescript size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="React"><li><FaReact size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="Nextjs"><li><TbBrandNextjs size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="TailwindCSS"><li><TbBrandTailwind size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="BulmaCSS"><li><TbBrandBulma size={40} /></li></Tooltip>
            </ul>
          </div>
        </div>
        <div className='bg-zinc-950 p-8 rounded-xl border border-zinc-950 shadow-lg px-4 '>
          <h2 className='font-bold  text-2xl mt-1'>Back-End</h2>
          <div className='w-full bg-white h-[2px] mt-1'></div>
          <div className='mt-8 flex justify-center'>
            <ul className='space-y-3'>
              <Tooltip placement='right-end' content="Expressjs"><li><SiExpress size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="Nodejs"><li><TbBrandNodejs size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="MongoDB"><li><SiMongodb size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="PostgreSQL"><li><SiPostgresql size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="SQLite"><li><SiSqlite size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="Nginx"><li><SiNginx size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="Apache"><li><SiApache size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="Linux"><li><FaLinux hover={50} size={40} /></li></Tooltip>
            </ul>
          </div>
        </div>
        <div className='bg-zinc-950 p-8 rounded-xl border border-zinc-950 shadow-lg px-4 '>
          <h2 className='font-bold text-2xl mt-1'>Tools</h2>
          <div className='w-full bg-white h-[2px] mt-1'></div>
          <div className="mt-8 flex justify-center">
            <ul className='space-y-3'>
              <Tooltip placement='right-end' content="VS Code"><li><TbBrandVscode size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="Arch Linux"><li><SiArchlinux size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="Figma"><li><FaFigma size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="Git"><li><FaGit size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="Github"><li><FaGithub size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="Jira"><li><FaJira size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="Bash"><li><SiGnubash size={40} /></li></Tooltip>
              <Tooltip placement='right-end' content="Yarn || NPM"><li><FaYarn size={40} /></li></Tooltip>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SkillsContent