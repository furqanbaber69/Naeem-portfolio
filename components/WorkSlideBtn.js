'use client'
import React from 'react'
import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold , PiCaretRightBold } from 'react-icons/pi' 

const WorkSlideBtn = ({containerStyle, btnStyle, iconStyle}) => {
    const swiper = useSwiper() 
  return (
    <div className={`${containerStyle}`}>
        <button className={`${btnStyle}`} onClick={() => swiper.slidePrev()}>
            <PiCaretLeftBold className={`${iconStyle}`}/>
        </button>
        <button className={`${btnStyle}`} onClick={() => swiper.slideNext()}>
            <PiCaretRightBold className={`${iconStyle}`}/>
        </button>
    </div>
  )
}

export default WorkSlideBtn