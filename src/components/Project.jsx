import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { IoMdPeople } from "react-icons/io";
import { FaRegFolderOpen } from "react-icons/fa6";


const Project = () => {

    const [counterState, setCounterState] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.3, // Trigger when 30% visible
        triggerOnce: true, // Only trigger once
    });

    useEffect(() => {
        if (inView) {
            setCounterState(true);
        }
    }, [inView]);


    // Cursor following state
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
    const [isDesktop, setIsDesktop] = useState(false);

    // Check if screen is desktop size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 1024); // lg breakpoint (1024px)
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    // Mouse movement tracking - only on desktop
    useEffect(() => {
        if (!isDesktop) return;

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDesktop]);

    // Smooth cursor following animation - only on desktop
    useEffect(() => {
        if (!isDesktop) {
            setImagePosition({ x: 0, y: 0 }); // Reset position on smaller screens
            return;
        }

        const dampening = 0.06; // Adjust for movement sensitivity
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Calculate offset from center, scaled down for the movement
        const offsetX = (mousePosition.x - centerX) * dampening;
        const offsetY = (mousePosition.y - centerY) * dampening;

        setImagePosition({ x: offsetX, y: offsetY });
    }, [mousePosition, isDesktop]);

    return (
        <div className='w-full'>
            <div>
                <h1 className='md:text-[20px] lg:text-[30px] font-semibold'>Driven by Experience. Delivered by Experts. <br /> Trusted by Clients Worldwide.</h1>
            </div>

            <div className='flex justify-center w-full'>
                <div className='flex xl:justify-between justify-center items-center xl:items-end xl:w-[1200px] w-full'>
                    <div className='relative w-full xl:w-[80%]' ref={ref} style={{
                        transform: isDesktop ? `translate(${imagePosition.x}px, ${imagePosition.y}px)` : 'none',
                    }}
                    >
                        <img src={assets.project} alt="image" className='w-100 md:w-150 hidden lg:block' />

                        {/* ---------------------- Statistics Cards ---------------------- */}
                        <div className="flex flex-col sm:flex-row justify-center items-center md:justify-between flex-wrap gap-5  w-full p-4 lg:p-0 mt-20 lg:mt-0">

                            {/* Projects Card */}
                            <div className="bg-white w-max h-[120px] rounded-2xl p-6 lg:p-8 transform hover:scale-105 hover:shadow-xl transition-all duration-300 border border-gray-100
                                        lg:absolute xl:top-[35%] xl:left-[58%]
                                        lg:top-[30%] left-[55%]
                                        shadow-[0px_5px_10px_rgba(99,99,99,0.4)]"
                            >
                                <div className="flex items-center justify-between gap-5">
                                    <div>
                                        <CountUp
                                            start={0}
                                            end={counterState ? 20 : 0}
                                            duration={7}
                                            delay={0}
                                            suffix="+"
                                            className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2"
                                        />
                                        <div className="text-gray-700 font-medium text-lg">Projects</div>
                                    </div>
                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                                        <FaRegFolderOpen fontSize={30} color='white' />
                                    </div>
                                </div>
                            </div>

                            {/* Team Members Card */}
                            <div className="bg-white w-max h-[120px] rounded-2xl p-6 lg:p-8 transform hover:scale-105 hover:shadow-xl transition-all duration-300 border border-gray-100 
                                    lg:absolute xl:top-[61%] xl:left-[58%]
                                    lg:top-[56%] left-[53%]
                                    shadow-[0px_5px_10px_rgba(99,99,99,0.4)]"
                            >
                                <div className="flex items-center justify-between gap-5">
                                    <div>
                                        <CountUp
                                            start={0}
                                            end={counterState ? 30 : 0}
                                            duration={7}
                                            delay={0}
                                            suffix="+"
                                            className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2"
                                        />

                                        {/* <div className="text-gray-700 font-medium text-lg">Team</div> */}
                                        <div className="text-gray-700 font-medium text-lg">Members</div>
                                    </div>
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                                        <IoMdPeople fontSize={30} color='white' />
                                    </div>
                                </div>
                            </div>

                            {/* Experience Card */}
                            <div className="bg-white w-max h-[120px] rounded-2xl p-6 lg:p-8 transform hover:scale-105 hover:shadow-xl transition-all duration-300 border border-gray-100 
                                        lg:absolute xl:top-[85%] xl:left-[45%]
                                         lg:top-[82%] left-[40%]
                                         shadow-[0px_5px_10px_rgba(99,99,99,0.4)]"
                            >
                                <div className="flex items-center justify-between gap-5">
                                    <div>
                                        <CountUp
                                            start={0}
                                            end={counterState ? 7 : 0}
                                            duration={5}
                                            delay={0}
                                            suffix="+"
                                            className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2"
                                        />
                                        <div className="text-gray-700 font-medium text-lg">Experience</div>
                                    </div>
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                                        <RiVerifiedBadgeLine fontSize={30} color='white' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hidden xl:block'>
                        <img src={assets.robot} alt="robot-image" />
                    </div>
                </div>
            </div>

        </div >
    )
}
export default Project