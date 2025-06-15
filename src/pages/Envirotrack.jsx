import React, { useState, useEffect } from 'react';
import { CiMonitor, CiDroplet, CiCloud, CiSettings } from "react-icons/ci";
import { FaThermometerEmpty,FaDatabase } from "react-icons/fa";
import { GiWindSlap } from "react-icons/gi";
import { MdOutlineBarChart } from "react-icons/md";



export default function Envirotrack() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % 7);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            icon: <CiMonitor className="w-6 h-6" />,
            title: "Real-Time Monitoring and Alerts",
            description: "Combines air quality data with other environmental factors (temperature, humidity, smoke, water leak), offering a comprehensive view of the environment and ensuring holistic oversight.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <CiSettings className="w-6 h-6" />,
            title: "Web Interface",
            description: "Provides an intuitive, user-friendly platform for remote monitoring, threshold configuration, and viewing reports.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <FaThermometerEmpty className="w-6 h-6" />,
            title: "Extended Sensor Capabilities",
            description: "Measures critical environmental factors with high precision, crucial for sensitive environments.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <CiCloud className="w-6 h-6" />,
            title: "Cloud-Ready",
            description: "Facilitates easy remote data access and management through HTTP or MQTT protocols, perfect for organizations with multiple sites.",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <FaDatabase className="w-6 h-6" />,
            title: "Customizable and Scalable",
            description: "Can integrate up to 32 Modbus-enabled sensors, offering flexibility in tailoring thresholds and alerts to meet specific environmental needs.",
            color: "from-indigo-500 to-purple-500"
        },
        {
            icon: <GiWindSlap className="w-6 h-6" />,
            title: "Air Quality Monitoring",
            description: "Measures air pollution levels, including particulate matter (PM 2.5, PM10), carbon dioxide (CO2), carbon monoxide (CO), volatile organic compounds (VOCs), and other harmful gases.",
            color: "from-teal-500 to-blue-500"
        },
        {
            icon: <MdOutlineBarChart className="w-6 h-6" />,
            title: "Advanced Reporting and Analytics",
            description: "Generates detailed reports and trends on air quality levels over time, helping organizations assess the effectiveness of their air filtration systems or identify recurring air quality issues.",
            color: "from-rose-500 to-pink-500"
        }
    ];

    const applications = [
        "Server Rooms & Data Centers",
        "Cold Storage",
        "Industrial Sites",
        "Water-Sensitive Areas",
        "Indoor Air Quality (IAQ) Monitoring",
        "Manufacturing and Industrial Sites",
        "Clean Rooms & Laboratories",
        "Agriculture and Greenhouses"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">

            {/* Header */}
            <header className="relative z-10 p-6">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <CiMonitor className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Enviro</h1>
                        <h2 className="text-3xl font-bold -mt-2">Track</h2>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Content */}
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <p className="text-xl text-blue-200 leading-relaxed">
                                    EnviroTrack is an advanced, all-in-one micro-environment monitoring solution designed to ensure the safety and reliability of critical environments.
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 cursor-pointer ${activeFeature === index
                                                ? 'bg-white/15 border-white/40 scale-102'
                                                : 'bg-white/8 border-white/15 hover:bg-white/12'
                                            }`}
                                        onMouseEnter={() => setActiveFeature(index)}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <span className="text-3xl font-bold text-blue-300/60">
                                                    {String(index + 1).padStart(2, '0')}.
                                                </span>
                                            </div>
                                            <div className="flex items-start space-x-3 flex-1">
                                                <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color} flex-shrink-0`}>
                                                    {feature.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-white mb-2 text-lg">
                                                        {feature.title}:
                                                    </h3>
                                                    <p className="text-sm text-blue-100 leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Applications & Device */}
                    <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>

                        {/* Applications Section */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-6 text-cyan-300">Applications:</h3>
                            <div className="grid gap-3">
                                {applications.map((app, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                                    >
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                                        <span className="text-cyan-100 font-medium">{app}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Device Illustration */}
                        <div className="relative">
                            {/* Animated Background */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse"></div>
                                <div className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-ping"></div>
                            </div>

                            {/* Device Mockup */}
                            <div className="relative z-10 flex items-center justify-center h-64">
                                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-600">
                                    {/* Screen */}
                                    <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                                        <div className="text-white text-xs font-mono">
                                            <div>PM2.5: 12μg/m³</div>
                                            <div>CO2: 420ppm</div>
                                            <div>Temp: 22.3°C</div>
                                        </div>
                                    </div>

                                    {/* Antenna */}
                                    <div className="w-1 h-8 bg-gray-600 mx-auto mb-2 rounded-full"></div>

                                    {/* Status Indicators */}
                                    <div className="flex justify-center space-x-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-600"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Data Points */}
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-lg animate-fade-in">
                                <div className="flex items-center space-x-2">
                                    <FaThermometerEmpty className="w-4 h-4 text-red-400" />
                                    <span className="text-xs">24.5°C</span>
                                </div>
                            </div>

                            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm p-2 rounded-lg animate-fade-in delay-500">
                                <div className="flex items-center space-x-2">
                                    <CiDroplet className="w-4 h-4 text-blue-400" />
                                    <span className="text-xs">65% RH</span>
                                </div>
                            </div>

                            <div className="absolute top-1/2 left-4 bg-white/10 backdrop-blur-sm p-2 rounded-lg animate-fade-in delay-1000">
                                <div className="flex items-center space-x-2">
                                    <GiWindSlap className="w-4 h-4 text-green-400" />
                                    <span className="text-xs">Good</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-16 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">T</span>
                        </div>
                        <span className="text-blue-200">tricta</span>
                        <span className="text-xs text-blue-300">TECHNOLOGIES</span>
                    </div>
                    <p className="text-blue-300 text-sm">www.tricta.com</p>
                </div>
            </main>

            {/* Custom CSS for animations */}
            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
        </div>
    );
}