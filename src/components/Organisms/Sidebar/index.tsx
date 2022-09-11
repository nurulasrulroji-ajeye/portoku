import React, { useState } from 'react'
import Link from 'next/link'
import {GoHome} from 'react-icons/go'
import {SiAboutdotme, SiCodeproject, SiInstagram, SiGithub, SiTwitter, SiLinkedin} from 'react-icons/si'
import {AiOutlineMessage} from 'react-icons/ai'
import {MdArrowForwardIos, MdArrowBackIosNew} from 'react-icons/md'
import { Logo } from '../../../assets'
import { useRouter } from 'next/router'

const dataSidebar = [
  {id:1, label:"Home", icon:<GoHome className='w-6 h-6'/>, link: "/"},
  {id:2, label:"About", icon:<SiAboutdotme className='w-6 h-6'/>, link: "/about"},
  {id:3, label:"Project", icon:<SiCodeproject className='w-6 h-6'/>, link:"/project"},
  {id:4, label:"Contact", icon:<AiOutlineMessage className='w-6 h-6'/>, link:"/contact"},
]

const Sidebar = () => {
  const [minify, setMinify] = useState<boolean>(false);
  const router = useRouter();
  const currentRouter = router.pathname;
  

  const handleMinify = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    localStorage.setItem("minify", minify);
    setMinify(!minify)
  }

  return (
    <div className={`${minify ? 'h-screen w-[60px] hidden md:flex flex-col justify-between bg-[#212121] px-1 relative' : 'h-screen w-1/5 hidden md:flex flex-col justify-between bg-[#212121] px-3 relative'}`}>
      <button className='absolute top-24 -right-4 w-10 h-10 bg-blue-600 rounded-full text-white flex justify-center items-center'onClick={handleMinify}>
        {
          minify === localStorage.getItem("minify")          ? (
            <MdArrowForwardIos/>
            ) : (
            <MdArrowBackIosNew/>
          )
        }
      </button>
      <div className='flex items-center justify-center mt-5'>
        <div className='h-10 w-7'>
          <Logo className="w-full h-full fill-black stroke-white stroke-[12px] drop-shadow-[2px_2px_rgba(255,255,255,1)] hover:fill-white hover:stroke-black transition duration-500 ease-in-out"/>
        </div>
        {
          minify === true ? "" : (
            <h1 className='text-4xl font-Rampart text-white hover:rotate-2 transition duration-300 ease-in-out'>
              Jeye
            </h1>
          )
        }
      </div>
      <div className='flex flex-col gap-2 w-full border-2 border-white/30 shadow-[2px_2px_0px_3px_rgba(26,26,26,1),-3px_-3px_0px_rgba(40,40,40,1)] rounded-lg p-2'>
        {
          dataSidebar.map((menu) => (
            <Link href={menu.link} className='w-full' key={menu.id}>
              <a className={ currentRouter === menu.link ? 'flex items-center bg-white rounded-md gap-1 shadow-[1px_1px_5px_rgba(255,255,255,1)]' : "flex items-center text-white gap-1 transition duration-500 ease-in-out rounded-md hover:bg-white/90 hover:rounded-md hover:text-black"}>
                <div className='w-10 h-10 rounded-full flex justify-center items-center'>
                  {menu.icon}
                </div>
                {
                  minify ? null : (
                  <h2 className='font-medium'>
                    {menu.label}
                  </h2>
                  )
                }
              </a>
            </Link>
          ))
        }
      </div>
      <div className='w-full'>
        <div className='w-full text-center mb-2'>
          <h5 className='font-bold text-sm text-white'>Follow Me :</h5>
        </div>
        <div className='mb-5 flex w-full justify-center gap-2'>
          <a href='https://www.instagram.com/ajeye_/' target="_blank" className='flex text-white justify-center items-center w-7 h-7 border-[1px] font-extrabold border-white rounded-full shadow-[1px_1px_5px_rgba(0,0,0,1)] hover:bg-white hover:text-pink-700 hover:border-black hover:shadow-[1px_1px_5px_rgba(255,255,255,1)] transition duration-500 ease-in-out'>
            <SiInstagram/>
          </a>
          <a href='https://github.com/nurulasrulroji-ajeye' target="_blank" className='flex text-white justify-center items-center w-7 h-7 border-[1px] font-extrabold border-white rounded-full shadow-[1px_1px_5px_rgba(0,0,0,1)] hover:bg-white hover:text-black hover:border-black hover:shadow-[1px_1px_5px_rgba(255,255,255,1)] transition duration-500 ease-in-out'>
            <SiGithub/>
          </a>
          <a href='https://twitter.com/Ajeye_' target="_blank" className='flex text-white justify-center items-center w-7 h-7 border-[1px] font-extrabold border-white rounded-full shadow-[1px_1px_5px_rgba(0,0,0,1)] hover:bg-white hover:text-blue-500 hover:border-black hover:shadow-[1px_1px_5px_rgba(255,255,255,1)] transition duration-500 ease-in-out'>
            <SiTwitter/>
          </a>
          <a href='https://www.linkedin.com/in/nurul-asrul-roji-092610238/' target="_blank" className='flex text-white justify-center items-center w-7 h-7 border-[1px] font-extrabold border-white rounded-full shadow-[1px_1px_5px_rgba(0,0,0,1)] hover:bg-white hover:text-blue-800 hover:border-black hover:shadow-[1px_1px_5px_rgba(255,255,255,1)] transition duration-500 ease-in-out'>
            <SiLinkedin/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar