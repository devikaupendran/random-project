import React from 'react';
import { portfolioHome } from '../assets/assets';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import newYouMobile from '../assets/images/portfolio/new-you-mobile.png'


const PortfolioSection = () => {
    const navigate = useNavigate();

    return (
        <div className=' w-full my-30'>
            <div className='flex flex-col  mb-20 '>
                <h1 className="text-[40px] font-bold">Portfolio</h1>
                <p className="max-w-[700px]">Explore the work we've crafted with care and collaboration.</p>
            </div>

            <div className='flex justify-center items-center w-full'>
                {/* portfolio grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 '>
                    {
                        portfolioHome.slice(0, 4).map((project, index) => (
                            <div key={index}
                                className={`relative w-full overflow-hidden group rounded-[20px] cursor-pointer shadow-sm ${project.span || "h-60"}`}
                                onClick={() => { navigate('/portfolio'); scrollTo(0, 0) }}

                            >
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in" />
                                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/50 text-white px-4 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                                    <h3 className="text-lg font-semibold">{project.title}</h3>
                                    <p className="text-sm ">{project.type}</p>
                                </div>
                            </div>
                        ))
                    }

                    {/* New You + Explore More in same column */}
                    <div className='flex flex-col gap-6 h-80'>
                        {/* New You Card */}
                        <div className={`relative w-full overflow-hidden cursor-pointer group rounded-[20px] shadow-sm h-60`}>
                            <img src={newYouMobile} alt="New You" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in" />
                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black/50 text-white px-4 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                                <h3 className="text-lg font-semibold">New You</h3>
                                <p className="text-sm">Mobile Application</p>
                            </div>
                        </div>

                        {/* Explore More Card */}
                        <div className='flex h-20 items-center justify-center text-[#ED7F13] font-semibold hover:font-bold cursor-pointer rounded-[20px] '>
                            <span className='flex items-center' onClick={() => { navigate('/portfolio'); scrollTo(0, 0) }}>
                                Explore more projects
                                <MdOutlineKeyboardArrowRight fontSize={30} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;
