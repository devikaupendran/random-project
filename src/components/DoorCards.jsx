import React, { useState } from 'react';
import { cardsData } from '../assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const DoorCards = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const renderAnimatedCard = (card, sizeClass = 'h-[500px]') => (
        <div
            key={card.id}
            className={`relative w-full ${sizeClass} perspective-1000 cursor-pointer`}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
        >
            <div className="relative w-full h-full preserve-3d">

                {/* Left Door */}
                <div
                    className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-gray-800 to-black shadow-2xl transition-all duration-700 ease-in-out transform-gpu ${hoveredCard === card.id ? 'opacity-0 rotate-y-150 -translate-x-6' : 'opacity-100'
                        }`}
                    style={{
                        transformOrigin: 'left center',
                        transformStyle: 'preserve-3d',
                    }}
                />

                {/* Right Door */}
                <div
                    className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-gray-800 to-black shadow-2xl transition-all duration-700 ease-in-out transform-gpu ${hoveredCard === card.id ? 'opacity-0 -rotate-y-150 translate-x-6' : 'opacity-100'
                        }`}
                    style={{
                        transformOrigin: 'right center',
                        transformStyle: 'preserve-3d',
                    }}
                />

                {/* Inner Content */}
                <div
                    className={`absolute inset-4 bg-white rounded-xl shadow-inner p-6 flex flex-col items-center justify-center text-center transition-all duration-700 ${hoveredCard === card.id ? 'opacity-100 scale-100 delay-200' : 'opacity-0 scale-95 delay-0'
                        }`}
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
                    <div className="text-5xl xl:text-8xl xl mb-4">{card.content.image}</div>
                    <p className="text-gray-600 leading-relaxed sm:text-[11px] text-sm xl:text-[18px] text-justify">{card.content.text}</p>

                    {/* Decorative borders */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue-300 rounded-tl-lg"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-300 rounded-tr-lg"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-blue-300 rounded-bl-lg"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-blue-300 rounded-br-lg"></div>
                </div>

                {/* Front Title */}
                <div
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${hoveredCard === card.id
                        ? 'opacity-0 scale-75'
                        : 'opacity-100 scale-100'
                        }`}
                    style={{
                        transformStyle: 'preserve-3d',
                        transitionProperty: 'opacity, transform',
                    }}
                >
                    <h2 className="text-white text-2xl font-bold tracking-wider mb-4">{card.title}</h2>
                    <div className="w-12 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* XL Screens - Full size cards */}
            <div className="hidden xl:grid grid-cols-3 py-12 xl:p-0">
                {cardsData.map((card) => renderAnimatedCard(card, 'h-[750px]'))}
            </div>

            {/* MD & LG Screens - Smaller animated cards */}
            <div className="hidden sm:grid xl:hidden grid-cols-1 sm:grid-cols-2 gap-6 px-6 py-10">
                {cardsData.map((card) => renderAnimatedCard(card, 'h-[500px]'))}
            </div>

            {/* XS Screens - Swiper for static cards */}
            <div className="sm:hidden px-4 py-6">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        cardsData.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div className="bg-white shadow-xl rounded-xl p-10 flex flex-col items-center">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
                                    <div className="text-5xl mb-4">{card.content.image}</div>
                                    <p className="text-gray-600 text-sm text-justify px-5">{card.content.text}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            {/* Custom styles */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .transform-gpu {
                    transform: translateZ(0);
                }
                .-rotate-y-150 {
                    transform: rotateY(-150deg);
                }
                .rotate-y-150 {
                    transform: rotateY(150deg);
                }
            `}</style>
        </>
    );
};

export default DoorCards;
