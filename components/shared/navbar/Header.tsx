'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
import { usePathname } from 'next/navigation'

interface Props {
  href:string
  title:string
  className:string
}

const CustomLinks = ({href,title,className=""}:Props)=>{
  const pathname = usePathname()  
    return(
      <Link href={href} className={`${className} relative group`}>
         {title}
         <span className={`h-[1px]  inline-block  transition-[width] ease-in
          duration-200 bg-yellow-300 group-hover:w-full
           absolute left-0  -bottom-0.5 ${pathname === href ? "w-full" : "w-0"}`}>&nbsp;</span>
      </Link>
    )
}

export const Header = () => {
  return (
    <header className='w-full border-b bg-transparent fixed z-50 backdrop-blur-md'>
        <div className=' max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-between'>
        <Link href="/" className='w-36'>
        <h1 className="text-3xl drop-shadow-lg  font-bold "><span className="
       bg-gradient-to-l text-transparent bg-clip-text from-red-500 animate-shimmer transition-colors bg-[length:200%_100%] to-yellow-400
      ">Gha</span>Media</h1>
        </Link>

        <nav className=' hidden sm:flex items-center   space-x-6'>
        <CustomLinks href="/" title="Home" className='mr-4'/>
           <CustomLinks href="/services" title="Services" className='mx-4'/>
           <CustomLinks href="/our-plans" title="Our Plans" className='mx-4'/>
           <CustomLinks href="/blog" title="Blogs" className='mx-4'/>
           <CustomLinks href="/about" title="About Us" className='ml-4'/>
        </nav>
       
      <ModeToggle/>
        </div>
    </header>
  )
}
