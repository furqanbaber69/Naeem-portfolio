import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white bg-pink-50/20'>
        <div className='container mx-auto flex justify-between items-center py-4'>
        <Link href='/' className='text-4xl font-semibold'>
        <h1>Adil <span className='text-accent'>.</span></h1>
        </Link>
        {/* Desktop Nav */}
        <div className='hidden xl:flex '>
        <Nav />
        <Link href='/contact'>
        <Button className=""> Hire Me</Button>
        </Link>
        </div>

        {/* Mobile Nav */}
        <div className='xl:hidden'>
            <MobileNav />
        </div>

        </div>

    </header>
  )
}

export default Header