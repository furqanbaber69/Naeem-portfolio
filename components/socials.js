
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'


const Socials = ({containerStyles , iconStyle}) => {
    const social = [
        {
            icon: <FaGithub className={iconStyle}/>,
            path:"https://github.com/furqanbaber69" ,
        },
        {
            icon: <FaLinkedin className={iconStyle}/>,
            path:"https://www.linkedin.com/in/naeem-ahmed-061a891a3/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BG8qm4xfaQtuwWaJhfpY%2FWg%3D%3D" ,
        },
        {
            icon: <FaTwitter className={iconStyle}/>,
            path:"https://www.twitter.com" ,
        },
        {
            icon: <FaInstagram className={iconStyle}/>,
            path:"https://www.instagram.com/baberfurqan/" ,
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