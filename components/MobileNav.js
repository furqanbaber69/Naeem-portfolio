"use client"
import React from 'react'
import {Sheet ,SheetContent , SheetTrigger} from '@/components/ui/sheet'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {CiMenuFries} from 'react-icons/ci'

const links = [
    {name: 'Home', href: '/'},
    {name: 'Services', href: '/services'},
    {name: 'Resume', href: '/resume'},
    {name: 'Work', href: '/work'},
    {name: 'Contact', href: '/contact'},
    
]

const MobileNav = () => {
    const pathname = usePathname()

  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries  className='text-[32px] text-accent'/>
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            {/* Logo */}
            <div className='mt-32 mb-40 text-center text-2xl'>
                <Link href='/'>
              <h1 className='text-4xl font-semibold'>Adil<span className='text-accent'>.</span></h1>
                 </Link>
            </div>
            {/* nav */}
            <nav className='flex flex-col gap-9 justify-center items-center'>
                {links.map((link) => (
                     <Link key={link.href} href={link.href}  className={`text-xl capitalize text-center hover:text-accent transition-all ${pathname === link.href ? 'text-accent border-accent border-b-2' : 'text-white'}`}>
                         {link.name}
                    </Link>
                ))}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav