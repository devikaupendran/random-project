import React from 'react';
import { teamMembersData } from '../assets/assets';
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const OurTeamMembers = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">

            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-12"> Meet the People Behind the Magic </h1>
                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {
                        teamMembersData.map((data, index) => (
                            <CardLayout
                                key={index}
                                image={data.image}
                                name={data.name}
                                title={data.title}
                                url={data.url}
                                description={data.description}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default OurTeamMembers;

const CardLayout = ({ image, name, title, description, url }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-lg mx-auto hover:shadow-xl transition-shadow duration-300">

            {/*  Image Container */}
            <div className="relative flex justify-center mb-4">
                <div className="relative">
                    <div className="w-52 h-52 rounded-full border-4 border-orange-500 overflow-hidden">
                        <img src={image} alt={name} className="w-full h-full object-cover" />
                    </div>

                    {/* LinkedIn Icon */}
                    {
                        url && (
                            <a
                                href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn`} className="absolute -bottom-2 -right-0 bg-white rounded-full p-3 shadow-md border border-custom">
                                <FaLinkedinIn className="w-5 h-5 text-[#0077B5]" />
                            </a>
                        )
                    }
                </div>
            </div>

            <div>
                {/* Name */}
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-2"> {name} </h2>
                
                {/* Title */}
                <h3 className="text-blue-400 text-center mb-4 text-lg"> {title} </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed text-justify max-w-prose"> {description}</p>
            </div>

        </div>
    );
};

