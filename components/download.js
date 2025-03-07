"use client"
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

const Download = () => {
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = "/assets/Cv/cv.pdf";
        link.download = "My_Cv.pdf";
        document.body.appendChild(link)
        link.click()
        console.dir(link)
        document.body.removeChild(link)

    }

    return(
         <Button 
         variant='outline' 
         size='lg' 
         className='flex items-center uppercase gap-2 text-center'
         onClick={handleDownload}>
              <span>
               Download CV
              </span>
            <FiDownload className='text-xl' />
        </Button>
    )
}

export default Download