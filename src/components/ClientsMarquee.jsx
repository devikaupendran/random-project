import React from 'react';
import { clients_logo } from '../assets/assets';

const ClientsMarquee = () => {

    return (
        <section className="py-10  bg-gray-50 overflow-hidden">
            <div className="container mx-auto  mb-12 mt-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                    Trusted by Leading Companies
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto">
                    Join thousands of satisfied customers who trust our services to power their business growth
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative">

                {/* Gradient overlays for smooth fade effect */}
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                {/* Marquee wrapper */}
                <div className="marquee-container">
                    <div className="marquee-content">
                        {/* First set of clients */}
                        {
                            clients_logo.map((client, index) => (
                                <div
                                    key={`first-${index}`}
                                    className="flex items-center justify-center hover:bg-white rounded-lg hover:shadow-md transition-all duration-300 px-6 py-4 min-w-[200px] flex-shrink-0 hover:scale-105 mx-4"
                                >
                                    <img src={client.logo} alt={`Client ${index + 1}`} className="w-[170px] h-[70px] object-contain" />
                                </div>
                            ))
                        }

                        {/* Duplicate set for infinite loop */}
                        {
                            clients_logo.map((client, index) => (
                                <div
                                    key={`second-${index}`}
                                    className="flex items-center justify-center hover:bg-white rounded-lg hover:shadow-md transition-all duration-300 px-6 py-4 min-w-[200px] flex-shrink-0 hover:scale-105 mx-4"
                                >
                                    <img src={client.logo} alt={`Client ${index + 1}`} className="w-[170px] h-[70px] object-contain" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* CSS Animation Styles */}
            <style jsx>{`
                .marquee-container {
                    overflow: hidden;
                    white-space: nowrap;
                    mask-image: linear-gradient(to right, transparent, black 128px, black calc(100% - 128px), transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 128px, black calc(100% - 128px), transparent);
                }
                
                .marquee-content {
                    display: flex;
                    animation: marquee 30s linear infinite;
                    will-change: transform;
                    width: max-content;
                }
                
                .marquee-content:hover {
                    animation-play-state: paused;
                }
                
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .marquee-content {
                        animation-duration: 45s;
                    }
                    
                    .marquee-container {
                        mask-image: linear-gradient(to right, transparent, black 64px, black calc(100% - 64px), transparent);
                        -webkit-mask-image: linear-gradient(to right, transparent, black 64px, black calc(100% - 64px), transparent);
                    }
                }
                
                @media (max-width: 480px) {
                    .marquee-content {
                        animation-duration: 40s;
                    }
                    
                    .marquee-container {
                        mask-image: linear-gradient(to right, transparent, black 32px, black calc(100% - 32px), transparent);
                        -webkit-mask-image: linear-gradient(to right, transparent, black 32px, black calc(100% - 32px), transparent);
                    }
                }
                
                /* Smooth  */
                .marquee-content {
                    backface-visibility: hidden;
                    perspective: 1000px;
                    transform-style: preserve-3d;
                }
                
                /* Remove the gradient overlays since we're using mask */
                .marquee-container::before,
                .marquee-container::after {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default ClientsMarquee;