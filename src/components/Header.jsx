import React from 'react'
import { assets } from '../assets/assets'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Header = () => {
    return (
        <div className='w-full'>
            <div className='w-full h-screen relative'>

                <video src={assets.landingPageVideo} autoPlay loop muted
                    className='w-full h-full object-cover'></video>

                {/* Black Overlay */}
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10'></div>

                {/* Text Content */}
                <div className='absolute top-3/5 left-9 md:left-22 md:pl-30 w-max text-white flex flex-col gap-3 md:gap-5 z-20 custom-header tracking-wider'>
                    <h1 className='text-3xl md:text-5xl 3xl:text-7xl'>Empower Your Future</h1>
                    <h1 className='text-3xl md:text-5xl 3xl:text-7xl'>with Tricta</h1>
                    <p className='w-[300px] text-[14px] md:text-[18px] md:w-fit break-normal whitespace-normal 3xl:text-2xl text-gray-300 '>
                        Shaping Your Future with Smart, Trusted Solutions
                    </p>
                </div>

                {/* Bottom Center Icon */}
                <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer p-2.5 text-white bg-white/15 backdrop-sepia-0 rounded-full border-amber-50'
                    style={{ animation: 'customBounce 3s infinite' }}>
                    <a href="#about">
                        <MdKeyboardDoubleArrowDown fontSize={40} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
