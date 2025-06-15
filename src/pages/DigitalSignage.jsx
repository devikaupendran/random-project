import React, { useState, useEffect } from 'react';
import { Monitor, Brain, Target, DollarSign, TrendingUp, Eye, Users, Zap, Sparkles, PlayCircle, ChevronRight } from 'lucide-react';

export default function DigitalSignage() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const featureInterval = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % 6);
        }, 3000);

        const slideInterval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % 3);
        }, 4000);

        return () => {
            clearInterval(featureInterval);
            clearInterval(slideInterval);
        };
    }, []);

    const features = [
        {
            number: "01",
            title: "Smart Ad Pushing Techniques",
            icon: <Target className="w-6 h-6" />,
            color: "from-cyan-500 to-blue-600",
            description: "Intelligent targeting algorithms"
        },
        {
            number: "02",
            title: "AI Enabled",
            subtitle: "Face Detection, Age, Gender & Mood Detection, Audience Classification, Audience Based Ad Display",
            icon: <Brain className="w-6 h-6" />,
            color: "from-purple-500 to-pink-600",
            description: "Advanced AI analytics"
        },
        {
            number: "03",
            title: "Smart Ad Pushing Techniques",
            icon: <Sparkles className="w-6 h-6" />,
            color: "from-orange-500 to-red-600",
            description: "Dynamic content delivery"
        },
        {
            number: "04",
            title: "Cost Effective & High-Performance Solution",
            icon: <DollarSign className="w-6 h-6" />,
            color: "from-green-500 to-emerald-600",
            description: "Maximum ROI guaranteed"
        },
        {
            number: "05",
            title: "Actively Increases Engagement",
            icon: <TrendingUp className="w-6 h-6" />,
            color: "from-yellow-500 to-orange-600",
            description: "Boost customer interaction"
        },
        {
            number: "06",
            title: "Enhanced Analytics",
            icon: <Eye className="w-6 h-6" />,
            color: "from-indigo-500 to-purple-600",
            description: "Real-time insights"
        }
    ];

    const slides = [
        { title: "Retail Excellence", content: "Transform shopping experiences with personalized digital displays" },
        { title: "Smart Advertising", content: "AI-powered content that adapts to your audience in real-time" },
        { title: "Future Ready", content: "Next-generation signage solutions for modern businesses" }
    ];

    return (
        <div className="min-h-screen py-20 bg-gradient-to-br from-cyan-600 via-orange-400 to-purple-400 text-white overflow-hidden custom-font">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-900/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-900/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-2xl">
                                <Monitor className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-6xl font-black tracking-tight bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                                    AI-ENABLED
                                </h1>
                                <h2 className="text-5xl font-black tracking-tight mt-1">
                                    DIGITAL SIGNAGE
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 max-w-7xl mx-auto px-8 py-4">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Content */}
                    <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="space-y-8">
                            {/* Description */}
                            <div className="space-y-6">
                                <p className="text-xl text-white/90 leading-relaxed font-light">
                                    Signage is an affordable, high-impact solution to elevate your business, workplace, or organization. It's highly effective and perfect for events, exhibitions, malls, showrooms, government, and public spaces — enhancing customer experience while boosting promotions.
                                </p>


                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 cursor-pointer ${activeFeature === index
                                            ? 'bg-white/20 border-white/40 scale-105 shadow-2xl'
                                            : 'bg-white/10 border-white/20 hover:bg-white/15 hover:scale-102'
                                            }`}
                                        onMouseEnter={() => setActiveFeature(index)}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <span className={`text-3xl font-black transition-all duration-300 ${activeFeature === index ? 'text-cyan-300' : 'text-white/40'
                                                    }`}>
                                                    {feature.number}
                                                </span>
                                            </div>
                                            <div className="flex-1 space-y-3">
                                                <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} w-fit shadow-lg`}>
                                                    {feature.icon}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-white mb-2 text-lg leading-tight">
                                                        {feature.title}
                                                    </h3>
                                                    {feature.subtitle && (
                                                        <p className="text-sm text-white/70 mb-2 leading-relaxed">
                                                            {feature.subtitle}
                                                        </p>
                                                    )}
                                                    <p className="text-sm text-cyan-200 font-medium">
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

                    {/* Right Content - Digital Signage Display */}
                    <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="relative h-full flex items-center justify-center">

                            {/* Main Digital Display */}
                            <div className="relative">
                                {/* Display Frame */}
                                <div className="w-80 h-96 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 shadow-2xl border-4 border-gray-800">

                                    {/* Screen */}
                                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-white rounded-2xl relative overflow-hidden shadow-inner">

                                        {/* Dynamic Content Slides */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center space-y-4 p-6">
                                                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto flex items-center justify-center mb-4">
                                                    <span className="text-2xl">👕</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-800">
                                                    {slides[currentSlide].title}
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    {slides[currentSlide].content}
                                                </p>
                                                <div className="flex justify-center space-x-2 mt-4">
                                                    {slides.map((_, index) => (
                                                        <div
                                                            key={index}
                                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-blue-500 w-6' : 'bg-gray-300'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* AI Detection Overlay */}
                                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 animate-pulse">
                                            <Eye className="w-3 h-3" />
                                            <span>AI Active</span>
                                        </div>

                                        {/* Audience Metrics */}
                                        <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-2 rounded-lg text-xs backdrop-blur-sm">
                                            <div className="flex items-center space-x-2">
                                                <Users className="w-4 h-4" />
                                                <span>Viewers: 12</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stand */}
                                <div className="w-12 h-24 bg-gradient-to-b from-gray-700 to-gray-900 mx-auto rounded-b-lg shadow-lg"></div>
                                <div className="w-24 h-4 bg-gradient-to-r from-gray-800 to-gray-900 mx-auto rounded-lg shadow-lg"></div>

                                {/* Floating AI Elements */}
                                <div className="absolute -top-8 -right-8 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-2xl animate-bounce">
                                    <Brain className="w-6 h-6" />
                                </div>


                                {/* Scanning Lines Animation */}
                                <div className="absolute top-20 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse opacity-60"></div>
                                <div className="absolute top-32 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse delay-300 opacity-60"></div>
                            </div>

                            {/*  Background Elements */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-purple-400 rounded-full animate-ping delay-500 opacity-60"></div>
                                <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-ping delay-1000 opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Custom Styles */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
        </div >
    );
}