import React, { useState, useEffect } from 'react';
import { FiMessageCircle,FiZap,FiTarget } from "react-icons/fi";
import { CiGlobe, CiUser,CiClock2 ,CiSettings,CiPhone} from "react-icons/ci";
import { IoIosTrendingUp } from "react-icons/io";


export default function Helpybo() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % 6);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            icon: <CiClock2 className="w-6 h-6" />,
            title: "Never miss a customer",
            description: "inquiry with 24/7 support.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <FiTarget className="w-6 h-6" />,
            title: "Capture and nurture leads",
            description: "effortlessly.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <CiGlobe className="w-6 h-6" />,
            title: "Connect with global audiences",
            description: "with multi-lingual / Indic languages support.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <IoIosTrendingUp className="w-6 h-6" />,
            title: "Boost customer engagement",
            description: "and satisfaction.",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <CiSettings className="w-6 h-6" />,
            title: "Empower your team",
            description: "with easy admin access.",
            color: "from-indigo-500 to-purple-500"
        },
        {
            icon: <FiZap className="w-6 h-6" />,
            title: "Streamline operations",
            description: "and reduce costs.",
            color: "from-teal-500 to-blue-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">

            {/* Header */}
            <header className="relative z-10 p-6">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <FiMessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold">helpybo</span>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                        Go Global, Grow Faster
                                    </span>
                                    <br />
                                    <span className="text-white">
                                        Helpybo's AI Chatbot Delivers Support in Any Language, Any Time.
                                    </span>
                                </h1>

                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Helpybo empowers your business with easy-to-use, customizable AI chatbots that transform customer engagement and drive growth.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid md:grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 cursor-pointer ${activeFeature === index
                                                ? 'bg-white/10 border-white/30 scale-105'
                                                : 'bg-white/5 border-white/10 hover:bg-white/10'
                                            }`}
                                        onMouseEnter={() => setActiveFeature(index)}
                                    >
                                        <div className="flex items-start space-x-3">
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color}`}>
                                                {feature.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-white mb-1">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-sm text-gray-300">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Section */}
                            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                                <h3 className="text-xl font-semibold mb-3">
                                    Request a demo and see how Helpybo can transform your customer engagement.
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                                        Request Demo
                                    </button>
                                    <div className="flex items-center space-x-2 text-gray-300">
                                        <CiPhone className="w-4 h-4" />
                                        <span className="font-mono">+91 9447075374</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Robot Illustration */}
                    <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="relative">
                            {/* Animated Background Circles */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse"></div>
                                <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-ping"></div>
                            </div>

                            {/* Robot Character */}
                            <div className="relative z-10 flex items-center justify-center h-96">
                                <div className="text-center space-y-4">
                                    {/* Robot Head */}
                                    <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl mx-auto flex items-center justify-center mb-4 animate-bounce">
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                            <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-100"></div>
                                        </div>
                                    </div>

                                    {/* Chat Bubbles */}
                                    <div className="space-y-3">
                                        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl inline-block animate-fade-in">
                                            <p className="text-sm">Hello! How can I help you today?</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm p-3 rounded-xl inline-block animate-fade-in delay-500">
                                            <p className="text-sm">Available in 100+ languages!</p>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl inline-block animate-fade-in delay-1000">
                                            <p className="text-sm">24/7 support ready 🚀</p>
                                        </div>
                                    </div>
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
                        <span className="text-gray-400">tricta</span>
                        <span className="text-xs text-gray-500">TECHNOLOGIES</span>
                    </div>
                    <p className="text-gray-400 text-sm">www.tricta.com</p>
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
      `}</style>
        </div>
    );
}