import React from 'react'
import { assets } from '../assets/assets';
import { BsArrowRight } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { Navigate, useNavigate } from 'react-router-dom';


const AboutSection = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full p-4 my-10 md:my-0 md:h-screen flex flex-col xl:justify-between justify-center '>
            <div className='flex flex-col xl:flex-row items-center justify-center w-full h-full gap-10 xl:gap-5'>

                {/* ------------------------- sm,md,lg ------------------------- */}
                <div className='w-full flex flex-col items-center justify-center gap-4 xl:hidden'>
                    <div className='flex w-full flex-row  gap-4 justify-center'>

                        <div className="w-[40%] md:w-[50%] ">
                            <img src={assets.about_img1} alt="about 1" className='rounded-2xl w-full h-full object-cover' />
                        </div>
                        <div className="w-[40%] md:w-[50%] rounded-2xl overflow-hidden">
                            <img src={assets.about_img2} alt="about 2" className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>

                {/*  ------------------------- xl screen ------------------------- */}
                <div className='hidden xl:flex-row items-center justify-center w-full h-auto xl:w-[50%] gap-5 lg:gap-0 xl:flex'>

                    {/* Column 1 */}
                    <div className="w-1/2 p-4">
                        <img src={assets.about_img1} alt="about image2" className='rounded-2xl w-full h-full object-cover' />
                    </div>

                    {/* Column 2 */}
                    <div className="xl:w-1/2 w-full p-4 flex flex-col xl:gap-4">

                        {/* Row 1 - Quote Card */}
                        <div className="flex-1 xl:flex items-center justify-start bg-white rounded-2xl p-6 shadow-xl hidden">
                            <div className=" relative w-full">
                                <div className="text-lg font-semibold text-gray-800 leading-relaxed whitespace-break-spaces">
                                    <BsGraphUpArrow className="w-6 h-6 font-bold text-green-500 mt-1 ml-4 flex-shrink-0 absolute top-0 right-[-15px]" />
                                    <p><span className='text-orange-600'>"</span> Innovate</p>
                                    <p className='pl-3'> Secure</p>
                                    <p className='pl-7'>Transform. <span className='text-orange-600'>"</span></p>
                                </div>
                                <span className="absolute bottom-0 left-0 h-[0.4px] w-full bg-[#ED4718] mt-2"></span>
                            </div>
                        </div>

                        {/* Row 2 - Image */}
                        <div className="bg-green-600  rounded-2xl overflow-hidden ">
                            <img src={assets.about_img2} alt="about image" className=" object-cover" />
                        </div>
                    </div>
                </div>

                {/* Orange accent bar */}
                <div className="bg-[#ED4718] hidden xl:block xl:w-[3px] xl:min-h-[40%] mx-4 my-3 xl:my-0"></div>

                {/* Right Side - Main Content */}
                <div className="flex items-start justify-start sm:justify-center">
                    <div className="space-y-2 flex flex-col">
                        <p className="w-full xl:max-w-[700px] text-[16px] md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 leading-tight break-normal whitespace-normal">
                            Transforming your business Through solutions built on  trust And driven by  innovation
                        </p>
                        <div className="pt-2 lg:pt-6 w-fit group">
                            <button onClick={() => { navigate('/about-us'); scrollTo(0, 0) }}
                                className="bg-black text-white px-4 py-2 cursor-pointer rounded-full lg:text-base tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex gap-2 items-center ">
                                <p className='text-[11px] lg:text-[19px]'>Know More</p>
                                <BsArrowRight className='group-hover:translate-x-2 duration-400 text-[20px] lg:text-[26px]' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;