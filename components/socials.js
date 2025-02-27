
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { FiGithub, FiTwitter , FiLinkedin } from 'react-icons/fi'

const Socials = ({containerStyles , iconStyle}) => {
    const social = [
        {
            icon: <FiGithub className={iconStyle}/>,
            path:"" ,
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
            <Link key={index} href={item.path} >
                {item.icon}
            </Link>
        ))
    }
    </div>
  )
}

export default Socials