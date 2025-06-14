import React, { useState } from 'react';
import { testimonials } from '../assets/assets';
import { LuQuote } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import TextAnimation from '../components/TextAnimation';

const StarRating = ({ rating }) => (
    <div className="flex gap-1">
        {Array(5).fill(0).map((_, i) => (
            <FaStar key={i} className={`transition-all duration-300 ${i < rating ? "text-yellow-400" : "text-gray-300"}`} />
        ))}
    </div>
);

const Testimonials = () => {
    const [activeCard, setActiveCard] = useState(null);

    return (
        <div className="min-h-screen mt-20 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-6xl font-bold text-black text-center mb-16 drop-shadow-2xl flex justify-center">
                    <TextAnimation
                        text="Words from Our  Happy Clients"
                        className="text-[40px] text-center  font-semibold mb-4"
                    />
                </h1>

                {/* Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {testimonials.map((testimonial, index) => {
                        const isActive = activeCard === index; 

                        return (
                            <div
                                key={index}
                                className={`backdrop-blur-xl bg-white/20 border-2 border-white/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden cursor-pointer transition-all duration-500 
                                    hover:bg-white hover:backdrop-blur-md hover:border-white/40 hover:scale-105 hover:shadow-3xl`}
                                onMouseEnter={() => setActiveCard(index)} 
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }}></div>
                                <div className="absolute top-12 right-16 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                <div className="absolute top-20 right-8 w-2 h-2 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-70 animate-ping" style={{ animationDelay: '1s' }}></div>
                                <div className="absolute bottom-12 left-12 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                                <div className="absolute bottom-6 left-20 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
                                <div className="absolute top-1/2 left-4 w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full opacity-50 animate-ping" style={{ animationDelay: '0.3s' }}></div>

                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>

                                <div className="relative z-10">
                                    <div className="flex flex-col lg:flex-row lgitems-start gap-6">
                                        <div className="relative w-20 h-20 min-w-[80px]">
                                            {/* Outer circle with icon */}
                                            <div className={`w-full h-full bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-500 ${isActive ? 'scale-110 rotate-12 shadow-2xl' : ''}`}>
                                                <FiMessageCircle className="w-full h-full text-white" />
                                            </div>

                                            {/* Inner small circle for initial */}
                                            <div className={`absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${isActive ? 'scale-110 rotate-12 shadow-xl bg-gradient-to-r from-cyan-100 to-blue-100' : ''}`}>
                                                <span className={`text-sm font-bold text-gray-800 transition-all duration-500 ${isActive ? 'text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text' : ''}`}>
                                                    {testimonial.name[0]}
                                                </span>
                                            </div>

                                            {/* Ping ring animation */}
                                            {isActive && (
                                                <div className="absolute inset-0 rounded-full border-2 border-orange-400 animate-ping opacity-75" />
                                            )}
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center space-x-3 mb-3">
                                                <h3 className={`font-bold text-xl text-gray-800 transition-all duration-500 ${isActive ? 'scale-105 text-2xl' : ''}`}>
                                                    {testimonial.name}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 mb-3">{testimonial.role}</p>
                                            <div className="flex items-center space-x-4 mb-4">
                                                <StarRating rating={testimonial.rating} />
                                            </div>
                                            <p className="text-gray-700 text-lg leading-relaxed text-justify whitespace-normal">
                                                {testimonial.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
};

export default Testimonials;
