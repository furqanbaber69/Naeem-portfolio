'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


const links = [
  {name: 'Home', path: '/'},
  {name: 'Services', path: '/services'},
  {name: 'Resume', path: '/resume'},
  {name: 'Work', path: '/work'},
  {name: 'Contact', path: '/contact'},

]

const Nav = () => {

  const Pathname = usePathname()
  return (
    <nav className='flex gap-8 relative right-6 items-center justify-center'>
      {links.map((link, index) => (
        <Link key={index} href={link.path} className={` ${Pathname === link.path ? 'text-accent border-b-2 border-accent' : ''} capitalize font-medium hover:text-accent transition-all `}>{link.name}</Link>
      ))}
    </nav>
  )
}

export default Nav