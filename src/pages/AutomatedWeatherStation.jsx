import React, { useState, useEffect } from 'react';
import { CiCloud, CiGlobe, CiSettings } from "react-icons/ci";
import { IoShield } from "react-icons/io5";
import { FaEye, FaLeaf } from "react-icons/fa";
import { FiZap, FiAlertTriangle, FiSmartphone } from "react-icons/fi";

export default function AutomatedWeatherStation() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % 12);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            icon: <CiCloud className="w-6 h-6" />,
            title: "Real-Time Weather Data",
            description: "Continuous monitoring and instant access to live meteorological information with high precision sensors.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <FiAlertTriangle className="w-6 h-6" />,
            title: "Early Warning Systems",
            description: "Advanced alert mechanisms for severe weather conditions to ensure safety and preparedness.",
            color: "from-red-500 to-orange-500"
        },
        {
            icon: <FaEye className="w-6 h-6" />,
            title: "Micro Climate Monitoring",
            description: "Detailed analysis of localized weather patterns for precise environmental assessment.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <FiZap className="w-6 h-6" />,
            title: "Cost-Effectiveness",
            description: "Optimized energy consumption and low maintenance requirements for sustainable operations.",
            color: "from-yellow-500 to-amber-500"
        },
        {
            icon: <IoShield className="w-6 h-6" />,
            title: "High Accuracy & Reliability",
            description: "Industrial-grade sensors ensuring consistent and precise measurements in all conditions.",
            color: "from-purple-500 to-violet-500"
        },
        {
            icon: <CiSettings className="w-6 h-6" />,
            title: "AI & Predictive Analytics",
            description: "Machine learning algorithms for weather forecasting and pattern recognition capabilities.",
            color: "from-indigo-500 to-blue-500"
        },
        {
            icon: <FiSmartphone className="w-6 h-6" />,
            title: "Remote Monitoring",
            description: "Access data from anywhere with cloud connectivity and mobile application support.",
            color: "from-teal-500 to-cyan-500"
        },
        {
            icon: <FaLeaf className="w-6 h-6" />,
            title: "Sustainable & Scalable",
            description: "Eco-friendly design with solar power options and modular expansion capabilities.",
            color: "from-green-500 to-lime-500"
        },
        {
            icon: <IoShield className="w-6 h-6" />,
            title: "Disaster Preparedness",
            description: "Critical infrastructure for emergency response and risk management systems.",
            color: "from-red-500 to-pink-500"
        },
        {
            icon: <FaLeaf className="w-6 h-6" />,
            title: "Agriculture Benefits",
            description: "Specialized features for farming communities and crop management optimization.",
            color: "from-green-600 to-emerald-600"
        },
        {
            icon: <CiSettings className="w-6 h-6" />,
            title: "Minimal Human Intervention",
            description: "Fully automated operations with self-calibration and maintenance alerts.",
            color: "from-gray-500 to-slate-500"
        },
        {
            icon: <CiGlobe className="w-6 h-6" />,
            title: "Versatile Applications",
            description: "Suitable for research, aviation, marine, agriculture, and urban planning sectors.",
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-blue-950 to-cyan-900 text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-cyan-900/50 to-transparent"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 p-6">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-white/20 to-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <CiCloud className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold tracking-wider">AUTOMATED</h1>
                        <div className="flex items-center space-x-2 -mt-2">
                            <span className="text-lg font-light">WEATHER</span>
                            <span className="text-lg font-light">STATION</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col gap-12">

                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Main Station Structure */}
                            <div className="bg-white/90 w-32 h-20 rounded-lg shadow-xl relative">
                                {/* Ventilation Slits */}
                                <div className="absolute inset-x-4 inset-y-3 space-y-1">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <div key={i} className="w-full h-1 bg-gray-400 rounded opacity-60"></div>
                                    ))}
                                </div>

                                {/* Status LED */}
                                <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            </div>

                            {/* Wind Vane */}
                            <div className="absolute -top-8 right-8 flex flex-col items-center">
                                <div className="w-6 h-1 bg-red-500 rounded-full animate-pulse"></div>
                                <div className="w-px h-4 bg-gray-400 mt-1"></div>
                            </div>

                            {/* Anemometer */}
                            <div className="absolute -top-6 -right-6">
                                <div className="w-8 h-8 relative animate-spin">
                                    <div className="absolute top-0 left-1/2 w-px h-3 bg-white transform -translate-x-1/2"></div>
                                    <div className="absolute top-1/2 right-0 w-3 h-px bg-white transform -translate-y-1/2"></div>
                                    <div className="absolute bottom-0 left-1/2 w-px h-3 bg-white transform -translate-x-1/2"></div>
                                    <div className="absolute top-1/2 left-0 w-3 h-px bg-white transform -translate-y-1/2"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Solar Panel */}
                            <div className="absolute -top-4 -left-8 w-12 h-8 bg-blue-800 rounded border border-blue-400 grid grid-cols-3 grid-rows-2 gap-px p-1">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="bg-blue-700 rounded-sm"></div>
                                ))}
                            </div>

                            {/* Rain Gauge */}
                            <div className="absolute top-8 -left-12 w-4 h-8 bg-gray-400 rounded-t-full">
                                <div className="absolute top-1 inset-x-1 h-1 bg-blue-400 rounded-t-full opacity-60"></div>
                            </div>

                            {/* Signal Waves */}
                            <div className="absolute -top-4 left-4">
                                <div className="w-3 h-3 border border-cyan-400 rounded-full animate-ping opacity-40"></div>
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className={`order-2 lg:order-none transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="space-y-8">
                            <div className="flex justify-center">
                                <p className="text-xl text-white/90 leading-relaxed font-light xl:max-w-[700px] text-center">
                                    Automatic Weather Stations (AWS) are versatile systems designed to measure and monitor various meteorological parameters. They are widely used in a range of industries and applications due to their ability to provide real-time and accurate weather data.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setActiveFeature(index)}
                                        className={`p-4 rounded-xl border backdrop-blur-sm transform transition-all duration-300 cursor-pointer 
                                            ${activeFeature === index
                                                ? 'bg-white/20 border-white/40 scale-105 shadow-xl'
                                                : 'bg-white/10 border-white/20 hover:bg-white/15 hover:scale-105 hover:shadow-lg'
                                            }`}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <span className="text-2xl font-bold text-white/60">
                                                    {String(index + 1).padStart(2, '0')}.
                                                </span>
                                            </div>
                                            <div className="flex flex-col xl:flex-row items-start space-x-3 flex-1">
                                                <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color} flex-shrink-0 shadow-md`}>
                                                    {feature.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-white mb-1 text-lg">{feature.title}</h3>
                                                    <p className="text-sm text-white/80 leading-relaxed">{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
                .scale-102 {
                    transform: scale(1.02);
                }
            `}</style>
        </div>
    );
}