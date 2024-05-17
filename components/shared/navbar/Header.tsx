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
    <header className='w-full border-b bg-transparent  drop-shadow-md'>
        <div className=' max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-between'>
        <Link href="/" className='w-36'>
        <Image src="/images/ghamedialogo.png" width={128} height={38} alt='logo'/>
        </Link>

        <nav className='flex items-center  space-x-6'>
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
