
import React from 'react'
import Link from 'next/link'
import { FaBehance, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { FiGithub, FiTwitter , FiLinkedin } from 'react-icons/fi'

const Socials = ({containerStyles , iconStyle}) => {
    const social = [
        {
            icon: <FaBehance className={iconStyle}/>,
            path:"https://www.behance.net/99adilashraf" ,
        },
        {
            icon: <FiLinkedin className={iconStyle}/>,
            path:"" ,
        },
        {
            icon: <FiTwitter className={iconStyle}/>,
            path:"" ,
        },
        {
            icon: <FaInstagram className={iconStyle}/>,
            path:"" ,
        },
    ]
    
  return (
    <div className={containerStyles}>
        {social.map((item, index) => (
            <Link key={index} href={item.path} target='_blank'>
                {item.icon}
            </Link>
        ))
    }
    </div>
  )
}

export default Socials