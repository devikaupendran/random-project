import React, { useState } from 'react'
import { assets } from './../assets/assets';
import { GoArrowRight } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import Map from '../components/Map';
import ReCAPTCHA from "react-google-recaptcha";

const Contactus = () => {
    const [verified, setVerified] = useState(false)
    const onChange = (value) => {
        console.log("Captcha value:", value);
        setVerified(true);
    }
    return (
        <div className='w-full h-auto bg-[#F6F6F8] custom-font'>

            {/* --------------------- header section --------------------- */}
            <div className='relative'>
                <img src={assets.contactBanner} alt="contact-us-banner" className='w-full xl:h-[650px] md:h-full h-[300px] object-cover' />
                <div className='absolute top-40 xl:top-50 2xl:top-60 left-10 flex flex-col gap-4'>
                    <p className='text-white text-[12px] max-w-[500px] xl:max-w-[800px] xl:text-[22px] text-wrap pe-3'>Let’s build something great together. Get in touch with Tricta Technologies Pvt. Ltd. to discover how our innovative software solutions can drive your business forward.</p>
                </div>
            </div>

            {/* --------------------- Contact section --------------------- */}
            <section className='flex justify-center py-20 w-full '>

                <div className='flex flex-col lg:flex-row justify-around items-center gap-10 w-[1300px] '>
                    {/* ------------ Contact LEFT ------------ */}
                    <section className=' px-5 md:px-10 py-8 w-full md:w-[70%] lg:w-[50%]'>
                        {/* 1 */}
                        <div className='flex flex-col gap-6'>
                            <h1 className='bg-white w-max p-3 shadow-sm rounded-md text-custom font-semibold'>We're here to help you</h1>
                            <h3 className='text-[17px] lg:text-2xl xl:text-3xl font-semibold'>Need digital solutions that are reliable, <br /> high-quality, and fit your business?</h3>
                            <p className='text-[12px] md:text-sm font-light'>Tricta Technologies is here to turn your vision into reality with precision and care.</p>
                        </div>

                        {/* 2 */}
                        <div className='flex flex-col gap-6 mt-10'>

                            {/* heading */}
                            <div className='flex gap-2 items-center'>
                                <FaLocationDot fontSize={20} className='text-custom' />
                                <h1 className='font-semibold'>Our Offices</h1>
                            </div>

                            {/* LOCATIONS  */}
                            <section className='flex  gap-20'>
                                <div>
                                    <h1 className='text-[20px] font-semibold'>UAE</h1>
                                    <p className='text-[13px]'>Sharjah Media City, <br />
                                        Sharjah, UAE</p>
                                </div>

                                <div>
                                    <h1 className='text-[20px] font-semibold'>INDIA</h1>
                                    <p className='text-[13px]'>Module No-7 (a), Gayatri Top Floor, <br />
                                        Technopark Campus <br />
                                        Trivandrum 695581</p>
                                </div>
                            </section>
                        </div>

                        {/* 3 */}
                        <div className='flex flex-col gap-6 mt-10'>
                            <div className='flex gap-2 items-center'>
                                <AiFillMessage fontSize={20} className='text-custom' />
                                <h1 className='font-semibold'>Get in Touch</h1>
                            </div>
                            <div className='flex flex-col items-start md:flex-row md:items-center gap-3 md:gap-5 text-sm'>
                                <p>+91 944 731 8527</p>
                                <p>+91 471 2937788</p>
                                <a href='mailto:info@tricta.com'>info@tricta.com</a>
                            </div>
                        </div>
                    </section>

                    {/* ------------ Contact RIGHT ------------ */}
                    <section className='  w-full md:w-[70%] lg:w-[40%] mx-3 md:mx-0 bg-white'>
                        <div className="py-8 lg:py-16 px-4 border md:px-10 border-gray-200 shadow-lg ">
                            <form action="#" className="space-y-8">

                                {/* ------------- First Row: Name and Email ------------- */}
                                <div className="grid grid-cols-1  gap-4">
                                    <div>
                                        <input type="text" id="name"
                                            className="bg-[#F6F6F8] text-gray-900 text-sm rounded-lg block w-full p-3.5 focus:border-gray-100   outline-0"
                                            placeholder="Enter your name" required />
                                    </div>

                                    <div>
                                        <input type="email" id="email"
                                            className="bg-[#F6F6F8] text-gray-900 text-sm rounded-lg block w-full p-3.5 focus:border-gray-100  outline-0"
                                            placeholder="Enter your email" required />
                                    </div>

                                    <div>
                                        <input type="text" id="mobile"
                                            className="bg-[#F6F6F8] text-gray-900 text-sm rounded-lg block w-full p-3.5 focus:border-gray-100  outline-0"
                                            placeholder="Enter your Phone Number" required />
                                    </div>

                                    <div>
                                        <textarea id="message" rows="6"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-[#F6F6F8] rounded-lg  focus:border-gray-100  outline-0  resize-none"
                                            placeholder="Type your message here..."></textarea>
                                    </div>

                                    <ReCAPTCHA
                                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                        onChange={onChange}
                                    />
                                </div>

                                {/* <!-- Send Button --> */}
                                <button type="submit" className="flex justify-between items-center gap-4 py-1 pl-2 pr-4 text-sm font-medium text-center text-white  bg-[#FC8A1F] 
                                                 sm:w-fit cursor-pointer focus:outline-none rounded-full"
                                    disabled={!verified}>

                                    <p className='p-2 bg-white rounded-full'>
                                        <GoArrowRight fontSize={30} fontWeight={800} className='text-custom' />
                                    </p>
                                    <p className='text-[15px] font-bold'>Get a Solution</p>
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </section>
            <Map />
        </div>
    )
}

export default Contactus