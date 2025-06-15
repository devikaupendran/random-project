import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const icons = [
        {
            id: '1',
            iconImg: FaInstagram,
            link: 'https://www.instagram.com/trictatech/',
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        {
            id: '2',
            iconImg: FaFacebookF,
            link: 'https://www.facebook.com/trictatechnologiespvtltd',
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        {
            id: '3',
            iconImg: FaLinkedinIn,
            link: 'https://www.linkedin.com/company/tricta-technologies-pvt-ltd/',
            target: '_blank',
            rel: 'noopener noreferrer'
        },
        {
            id: '4',
            iconImg: BiLogoGmail,
            link: 'mailto:info@tricta.com',
        },
        {
            id: '5',
            iconImg: FaPhoneAlt,
            link: 'tel:+91 944 731 8527',

        },
    ];


    const navigate = useNavigate();
    return (
        <footer className="bg-[#0C1518] text-white pt-[76px] pb-10 px-10 relative w-full">

            {/* ---------------------- sm, md ---------------------- */}
            <div className='block lg:hidden'>
                {/* Get Started */}
                <div className='flex flex-col justify-center items-center mb-8'>
                    <h2 className="text-3xl md:text-[40px] font-bold mb-6 text-center ">
                        Ready to <span className="text-[#ED7215]">Get Started?</span>
                    </h2>
                    <button
                        className="bg-[#ED7215] hidden hover:bg-orange-500 w-fit text-white px-4 py-2 rounded-full font-semibold transition-colors duration-300 text-lg"
                        onClick={() => navigate('/contact')}
                    >
                        Get in touch
                    </button>
                </div>

                {/* Logo - Center */}
                <div className="flex justify-center mb-8">
                    <img src={assets.tricta_logo} alt="Tricta Logo" className='w-40' />
                </div>

                {/* Locations and Contact */}
                <div className='flex flex-col gap-8 items-center'>

                    {/* Location Section */}
                    <div>
                        <h3 className="text-[20px] font-semibold mb-5 text-center">Locations</h3>
                        <div className="text-gray-400 text-[15px] flex flex-col md:flex-row justify-around gap-10  text-center">
                            {/* India */}
                            <div>
                                <p className="text-gray-300 font-semibold mb-1">India Office</p>
                                <p>Module No.7 (a), Gayatri Top Floor,</p>
                                <p>Technopark Campus</p>
                                <p>Trivandrum 695581</p>
                            </div>
                            {/* UAE */}
                            <div>
                                <p className="text-gray-300  font-semibold mb-1">UAE Office</p>
                                <p>Sharjah Media City,</p>
                                <p>Sharjah, UAE</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-center">Contact Us</h3>
                        <div className="flex space-x-4 justify-center">
                            {icons.map((icon) => (
                                <a
                                    key={icon.id}
                                    href={icon.link}
                                    target={icon.target}
                                    rel={icon.rel}
                                    className="w-10 h-10 border border-[#8F9FA3] rounded-full flex items-center justify-center hover:border-0 hover:bg-white/20 hover:backdrop-sepia-0 ease-in cursor-pointer transition-colors duration-300"
                                >
                                    {React.createElement(icon.iconImg, { size: 20 })}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 pt-8 text-center text-gray-400 text-[12px]">
                    <p>&copy; {new Date().getFullYear()} Tricta Technologies. All Rights Reserved.</p>
                </div>
            </div>



            {/* -------------------------------------------- large Screen -------------------------------------------- */}
            <div className='w-full hidden lg:block'>

                {/* Get Started Section */}
                <div className="flex flex-col lg:justify-center items-center mb-16">
                    <h2 className="text-3xl md:text-[40px] font-bold mb-6">
                        Ready to <span className="text-[#ED7215]">Get Started?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed text-center">
                        Experience the future of business operations with Tricta—AI-powered automation delivering increased speed,
                        accuracy, and adaptability, driving unmatched productivity gains.
                    </p>
                    <button
                        className="bg-[#ED7215] hover:bg-orange-500 w-fit text-white px-4 py-2 rounded-full font-semibold transition-colors duration-300 text-lg"
                        onClick={() => navigate('/contact-us')}
                    >
                        Get in touch
                    </button>
                </div>

                {/*----------- Main Footer Content -----------*/}
                <div className="flex justify-around items-center gap- px-10">
                    {/* Location - Left */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Locations</h3>
                        <div className="flex  gap-6 text-gray-400 text-[15px]">
                            {/* India Office */}
                            <div>
                                <p className="font-semibold text-white mb-1">India Office</p>
                                <p>Module No.7 (a), Gayatri Top Floor,</p>
                                <p>Technopark Campus</p>
                                <p>Trivandrum 695581</p>
                            </div>

                            {/* UAE Office */}
                            <div>
                                <p className="font-semibold text-white mb-1">UAE Office</p>
                                <p>Sharjah Media City,</p>
                                <p>Sharjah, UAE</p>
                            </div>
                        </div>
                    </div>

                    {/* Logo - Center */}
                    <div className="flex flex-col items-center">
                        <img src={assets.tricta_logo} alt="Tricta Logo" className='w-40 xl:w-60' />
                    </div>

                    {/* Contact - Right */}
                    <div className="text-left">
                        <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
                        <div className="flex space-x-4 justify-end">
                            {icons.map((icon) => (
                                <a
                                    key={icon.id}
                                    href={icon.link}
                                    target={icon.target}
                                    rel={icon.rel}
                                    className="w-10 h-10 border border-[#8F9FA3] rounded-full flex items-center justify-center hover:border-0 hover:bg-white/20 hover:backdrop-sepia-0 ease-in cursor-pointer transition-colors duration-300"
                                >
                                    {React.createElement(icon.iconImg, { size: 20 })}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 pt-8 text-center text-gray-400 text-[12px]">
                    <p>&copy; {new Date().getFullYear()} Tricta Technologies. All Rights Reserved.</p>
                </div>
            </div>

        </footer>
    );
}
export default Footer;