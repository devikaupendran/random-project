import React from 'react';
import { techIcon } from '../assets/assets';

const TechnologyStack = () => {

    const renderSection = (section) => (
        <div className={` p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}>

            {/* ------------- Title section ------------- */}
            <h2 className="lg:text-2xl font-bold mb-6 tracking-wide">{section.title}</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
                {
                    section.icons.map((tech, id) => (
                        <div key={id} className="flex flex-col items-center space-y-2 p-2 sm:p-3 rounded-lg">
                            <div className="relative">

                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-16 h-16 sm:w-16 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gray-500 mix-blend-saturation opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                            </div>
                            <span className="hidden md:block text-xs sm:text-sm font-medium text-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                {tech.name}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto space-y-6">

                {/* Row 1: ABOUT & Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* About Section */}
                    <div className="bg-[#ED5B18] text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                        <h2 className="lg:text-[20px] font-bold mb-6 tracking-wide uppercase">
                            Our trusted framework for structured and scalable digital delivery.
                        </h2>
                        <div className="space-y-4">
                            {
                                [
                                    "SMAC Stack implementation",
                                    "Skilled in open-source and enterprise technologies.",
                                    "Built with microservices, containers, and cloud-native tools.",
                                    "Smooth connectivity across APIs, platforms, and systems."
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                        <p className="text-lg">{item}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Mobile Icons */}
                    {renderSection(techIcon.mobile)}
                </div>

                {/* Row 2: Web and cloud Icons */}
                {renderSection(techIcon.web)}

            </div>
        </div>
    );
};

export default TechnologyStack;
