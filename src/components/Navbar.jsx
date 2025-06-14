import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';
import { BiPhoneCall, BiMenu } from "react-icons/bi";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const location = useLocation();
    const isPortfolioPage = location.pathname === '/portfolio';
    const isServicePage = location.pathname === '/services';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        scrollTo(0, 0);
    };

    return (
        <>
            <div className={`w-full h-20 fixed top-0 z-49 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
                <div className='pl-6 py-2'>
                    <Link to='/' onClick={() => scrollTo(0,0)}>
                        <img src={assets.tricta_logo} alt="tricta_logo" className='w-[100px] md:w-[160px] h-auto' />
                    </Link>
                </div>

                <div className={`flex gap-10 items-center transition-colors duration-300 ${isPortfolioPage || isServicePage || isScrolled ? 'text-black' : 'text-white'}`}>
                    <Link to='/services' className='hidden md:block cursor-pointer hover:text-gray-500 transition-colors' onClick={() => scrollTo(0,0)}>Services</Link>
                    <Link to='/our-products' className='hidden md:block cursor-pointer hover:text-gray-500 transition-colors' onClick={() => scrollTo(0,0)}>Products</Link>
                    <Link to='/about-us' className='hidden md:block cursor-pointer hover:text-gray-500 transition-colors' onClick={() => scrollTo(0,0)}>About Us</Link>
                    <div className={`p-2.5 rounded-full duration-300 ease-in cursor-pointer ${isScrolled ? 'hover:bg-black/10' : 'hover:bg-white/20 hover:backdrop-sepia-0'}`}>
                        <a href="tel:+919447318527"> <BiPhoneCall fontSize={28} /> </a>
                    </div>

                    {/* menu icon  */}
                    <div className={`mr-2 cursor-pointer p-2 ${isScrolled ? 'hover:text-gray-500' : 'hover:text-gray-300'}`} onClick={toggleModal}>
                        <BiMenu fontSize={40} />
                    </div>
                </div>
            </div>

            {/* ---------------- Modal Navbar ---------------- */}
            {
                isModalOpen && (
                    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-hidden">
                        <style>
                            {`
                            @keyframes float-orange {
                                0%, 100% { transform: translate(0, 0) scale(1); }
                                25% { transform: translate(30px, -20px) scale(1.1); }
                                50% { transform: translate(-20px, 30px) scale(0.9); }
                                75% { transform: translate(20px, 20px) scale(1.05); }
                            }
                            @keyframes float-blue {
                                0%, 100% { transform: translate(0, 0) scale(1); }
                                25% { transform: translate(-25px, 25px) scale(1.1); }
                                50% { transform: translate(25px, -30px) scale(0.95); }
                                75% { transform: translate(-30px, -15px) scale(1.05); }
                            }
                            @keyframes float-orange-2 {
                                0%, 100% { transform: translate(0, 0) scale(1.5) rotate(0deg); }
                                33% { transform: translate(20px, -25px) scale(1.1) rotate(120deg); }
                                66% { transform: translate(-25px, 20px) scale(0.9) rotate(240deg); }
                            }
                            @keyframes float-blue-2 {
                                0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
                                33% { transform: translate(-20px, 30px) scale(1.5) rotate(-120deg); }
                                66% { transform: translate(30px, -20px) scale(0.95) rotate(-240deg); }
                            }
                            .float-orange { animation: float-orange 8s ease-in-out infinite; }
                            .float-blue { animation: float-blue 10s ease-in-out infinite reverse; }
                            .float-orange-2 { animation: float-orange-2 12s ease-in-out infinite; }
                            .float-blue-2 { animation: float-blue-2 9s ease-in-out infinite reverse; }
                        `}
                        </style>

                        {/* Animated Circles */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute w-96 h-96 bg-orange-400/40 rounded-full blur-3xl float-orange" style={{ top: '20%', left: '0%' }}></div>
                            <div className="absolute w-80 h-80 bg-blue-500/35 rounded-full blur-3xl float-blue" style={{ top: '60%', right: '15%' }}></div>
                            <div className="absolute w-74 h-74 bg-orange-400/35 rounded-full blur-2xl float-orange-2" style={{ bottom: '7%', left: '73%' }}></div>
                            <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-2xl float-blue-2" style={{ top: '5%', left: '0%' }}></div>
                        </div>

                        <div className="w-full h-full relative flex z-10 flex-col lg:flex-row">
                            {/* Close Button */}
                            <button
                                onClick={toggleModal}
                                className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors z-60 p-4 rounded-full cursor-pointer hover:bg-white/20 hover:backdrop-sepia-0"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Our Impact (Hidden on md and below) */}
                            <div className="hidden lg:flex flex-1 p-8 md:p-16 flex-col justify-center">
                                <div className="max-w-2xl">
                                    <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Our Impact</h2>
                                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-16 max-w-xl">
                                        Driven by passion and powered by purpose, every solution we craft at Tricta is built to empower businesses and enrich user experiences. We don't just deliver projects — we create digital milestones.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                                        <div>
                                            <div className="text-5xl md:text-6xl font-light text-white mb-4">20+</div>
                                            <p className="text-gray-400 text-sm md:text-base">Innovative solutions delivered across various platforms and industries</p>
                                        </div>
                                        <div>
                                            <div className="text-5xl md:text-6xl font-light text-white mb-4">30+</div>
                                            <p className="text-gray-400 text-sm md:text-base">A skilled team of developers, designers, and strategists driving innovation</p>
                                        </div>
                                        <div>
                                            <div className="text-5xl md:text-6xl font-light text-white mb-4">7+</div>
                                            <p className="text-gray-400 text-sm md:text-base">Proven expertise delivering reliable and future-ready digital solutions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Links (Always visible) */}
                            <div className="w-full lg:w-100 p-8 md:p-16 flex flex-col justify-center items-center mt-20  lg:mt-0">
                                <nav className="space-y-8">
                                    <Link to="/" onClick={toggleModal} className="block text-white text-2xl md:text-[45px] font-light hover:text-gray-300 ">Home</Link>
                                    <Link to="/services" onClick={toggleModal} className="block text-white text-2xl md:text-[45px] font-light hover:text-gray-300 lg:hidden">Services</Link>
                                    <Link to="/our-products" onClick={toggleModal} className="block text-white text-2xl md:text-[45px] font-light hover:text-gray-300 lg:hidden">Products</Link>
                                    <Link to="/about-us" onClick={toggleModal} className="block text-white text-2xl md:text-[45px] font-light hover:text-gray-300 lg:hidden">About Us</Link>
                                    <Link to="/portfolio" onClick={toggleModal} className="block text-white text-2xl md:text-[45px] font-light hover:text-gray-300">Portfolio</Link>
                                    <Link to="/contact-us" onClick={toggleModal} className="block text-white text-2xl md:text-[45px] font-light hover:text-gray-300">Contact Us</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Navbar;
