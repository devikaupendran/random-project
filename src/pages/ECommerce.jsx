import React, { useState, useEffect } from 'react';
import { ShoppingCart, Brain, Search, MessageCircle, DollarSign, Shield, TrendingUp, Users, Package, Bot, Sparkles, ChevronRight, PlayCircle, Zap } from 'lucide-react';

export default function Ecommerce() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);
    const [animationPhase, setAnimationPhase] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const featureInterval = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % 8);
        }, 2500);

        const animationInterval = setInterval(() => {
            setAnimationPhase(prev => (prev + 1) % 4);
        }, 3000);

        return () => {
            clearInterval(featureInterval);
            clearInterval(animationInterval);
        };
    }, []);

    const features = [
        {
            number: "01",
            title: "Personalized Recommendations",
            icon: <Sparkles className="w-6 h-6" />,
            color: "from-purple-500 to-indigo-600",
            description: "AI-driven product suggestions tailored to individual preferences"
        },
        {
            number: "02",
            title: "AI-Powered Search",
            icon: <Search className="w-6 h-6" />,
            color: "from-blue-500 to-cyan-600",
            description: "Intelligent search that understands context and intent"
        },
        {
            number: "03",
            title: "Chatbots and Virtual Assistants",
            icon: <MessageCircle className="w-6 h-6" />,
            color: "from-green-500 to-emerald-600",
            description: "24/7 customer support with natural language processing"
        },
        {
            number: "04",
            title: "Dynamic Pricing",
            icon: <DollarSign className="w-6 h-6" />,
            color: "from-yellow-500 to-orange-600",
            description: "Real-time price optimization based on market conditions"
        },
        {
            number: "05",
            title: "Fraud Detection",
            icon: <Shield className="w-6 h-6" />,
            color: "from-red-500 to-pink-600",
            description: "Advanced security measures to protect transactions"
        },
        {
            number: "06",
            title: "Predictive Analytics",
            icon: <TrendingUp className="w-6 h-6" />,
            color: "from-indigo-500 to-purple-600",
            description: "Forecast trends and customer behavior patterns"
        },
        {
            number: "07",
            title: "Enhanced Customer Engagement Analytics",
            icon: <Users className="w-6 h-6" />,
            color: "from-cyan-500 to-blue-600",
            description: "Deep insights into customer interactions and preferences"
        },
        {
            number: "08",
            title: "Inventory and Supply Chain Optimization",
            icon: <Package className="w-6 h-6" />,
            color: "from-orange-500 to-red-600",
            description: "Smart inventory management with demand forecasting"
        }
    ];


    return (
        <div className="min-h-screen py-20 bg-gradient-to-br from-gray-100 via-purple-50 to-indigo-100 text-gray-900 overflow-hidden relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-blue-300 to-cyan-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* SPINNING SQUARE Shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-[200px] w-16 h-16 border-2 border-purple-300 rotate-45 animate-spin-slow opacity-60"></div>
                <div className="absolute top-1/3 right-[250px] w-16 h-16 border-2 border-purple-300 rotate-45 animate-spin-slow opacity-60"></div>
                <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-purple-300 rotate-45 animate-spin-slow opacity-60"></div>
                <div className="absolute top-1/3 right-[100px] w-16 h-16 border-2 border-purple-300 rotate-45 animate-spin-slow opacity-60"></div>
                <div className="absolute bottom-1/3 left-1/5 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce opacity-60"></div>
                <div className="absolute top-2/3 right-1/3 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 transform rotate-45 animate-pulse opacity-60"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                        <div className="flex items-center space-x-6 mb-8">
                            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                <Bot className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h1 className="text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                                    AI-ENABLED
                                </h1>
                                <h2 className="text-6xl font-black tracking-tight text-gray-800 mt-2">
                                    E-COMMERCE
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 max-w-7xl mx-auto px-8 py-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content - Features */}
                    <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="space-y-8">

                            {/* Description */}
                            <div className="space-y-6">
                                <p className="text-xl text-gray-700 leading-relaxed font-light">
                                    Transform your e-commerce business with cutting-edge AI technology. From personalized shopping experiences to intelligent automation, our AI-powered solutions drive growth, enhance customer satisfaction, and optimize operations.
                                </p>


                            </div>

                            {/* Features List */}
                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className={`group p-6 rounded-2xl backdrop-blur-sm border-2 transition-all duration-500 cursor-pointer ${activeFeature === index
                                            ? 'bg-white/90 border-purple-300 scale-105 shadow-2xl'
                                            : 'bg-white/60 border-gray-200 hover:bg-white/80 hover:border-purple-200 hover:scale-102'
                                            }`}
                                        onMouseEnter={() => setActiveFeature(index)}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <span className={`text-3xl font-black transition-all duration-300 ${activeFeature === index ? 'text-purple-600' : 'text-gray-400'
                                                    }`}>
                                                    {feature.number}
                                                </span>
                                            </div>
                                            <div className="flex items-start space-x-4 flex-1">
                                                <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg flex-shrink-0 transform transition-all duration-300 ${activeFeature === index ? 'scale-110 shadow-2xl' : ''
                                                    }`}>
                                                    <div className="text-white">
                                                        {feature.icon}
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-gray-800 mb-2 text-lg leading-tight">
                                                        {feature.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 leading-relaxed">
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

                    {/* Right Content - AI Neural Network Visualization */}
                    <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="relative flex items-center justify-center h-full">

                            {/* Central AI Brain */}
                            <div className="relative">
                                <div className="w-80 h-80 relative">

                                    {/* Central Core */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                        <div className="w-32 h-32 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-600 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                                            <Brain className="w-16 h-16 text-white animate-pulse" />

                                            {/* Pulsing Ring */}
                                            <div className="absolute inset-0 rounded-full border-4 border-white opacity-30 animate-ping"></div>
                                            <div className="absolute inset-2 rounded-full border-2 border-white opacity-50 animate-ping delay-500"></div>
                                        </div>
                                    </div>

                                    {/* Neural Network Nodes */}
                                    {/* Layer 1 - Inner circle */}
                                    {[0, 1, 2, 3, 4, 5].map((i) => {
                                        const angle = (i * 360) / 6;
                                        const radius = 120;
                                        const x = Math.cos((angle * Math.PI) / 180) * radius;
                                        const y = Math.sin((angle * Math.PI) / 180) * radius;

                                        return (
                                            <div
                                                key={`inner-${i}`}
                                                className="absolute w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg z-10 animate-pulse"
                                                style={{
                                                    left: `50%`,
                                                    top: `50%`,
                                                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                                                    animationDelay: `${i * 200}ms`
                                                }}
                                            >
                                                <div className="w-full h-full rounded-full border-2 border-white opacity-60"></div>
                                            </div>
                                        );
                                    })}

                                    {/* Layer 2 - Outer circle */}
                                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                                        const angle = (i * 360) / 8;
                                        const radius = 180;
                                        const x = Math.cos((angle * Math.PI) / 180) * radius;
                                        const y = Math.sin((angle * Math.PI) / 180) * radius;

                                        return (
                                            <div
                                                key={`outer-${i}`}
                                                className="absolute w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg z-10 animate-pulse"
                                                style={{
                                                    left: `50%`,
                                                    top: `50%`,
                                                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                                                    animationDelay: `${i * 300}ms`
                                                }}
                                            >
                                                <div className="w-full h-full rounded-full border border-white opacity-60"></div>
                                            </div>
                                        );
                                    })}

                                    {/* Connection Lines */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-5" viewBox="0 0 320 320">
                                        {/* Connecting lines from center to inner nodes */}
                                        {[0, 1, 2, 3, 4, 5].map((i) => {
                                            const angle = (i * 360) / 6;
                                            const startX = 160;
                                            const startY = 160;
                                            const endX = 160 + Math.cos((angle * Math.PI) / 180) * 120;
                                            const endY = 160 + Math.sin((angle * Math.PI) / 180) * 120;

                                            return (
                                                <line
                                                    key={`line-inner-${i}`}
                                                    x1={startX}
                                                    y1={startY}
                                                    x2={endX}
                                                    y2={endY}
                                                    stroke="url(#gradient1)"
                                                    strokeWidth="2"
                                                    opacity="0.6"
                                                    className="animate-pulse"
                                                    style={{ animationDelay: `${i * 100}ms` }}
                                                />
                                            );
                                        })}

                                        {/* Connecting lines from inner to outer nodes */}
                                        {[0, 1, 2, 3, 4, 5].map((i) => {
                                            const innerAngle = (i * 360) / 6;
                                            const outerAngle = (i * 360) / 8;
                                            const startX = 160 + Math.cos((innerAngle * Math.PI) / 180) * 120;
                                            const startY = 160 + Math.sin((innerAngle * Math.PI) / 180) * 120;
                                            const endX = 160 + Math.cos((outerAngle * Math.PI) / 180) * 180;
                                            const endY = 160 + Math.sin((outerAngle * Math.PI) / 180) * 180;

                                            return (
                                                <line
                                                    key={`line-outer-${i}`}
                                                    x1={startX}
                                                    y1={startY}
                                                    x2={endX}
                                                    y2={endY}
                                                    stroke="url(#gradient2)"
                                                    strokeWidth="1"
                                                    opacity="0.4"
                                                    className="animate-pulse"
                                                    style={{ animationDelay: `${i * 150}ms` }}
                                                />
                                            );
                                        })}

                                        {/* Gradient definitions */}
                                        <defs>
                                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
                                            </linearGradient>
                                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
                                                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    {/* Data Flow Particles */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        {[...Array(12)].map((_, i) => (
                                            <div
                                                key={`particle-${i}`}
                                                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-ping opacity-75"
                                                style={{
                                                    left: `${20 + (i * 6)}%`,
                                                    top: `${30 + (i * 4)}%`,
                                                    animationDelay: `${i * 200}ms`,
                                                    animationDuration: '2s'
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>

                                {/* E-commerce Icons Orbiting */}
                                <div className="absolute inset-0 pointer-events-none">
                                    {[
                                        { icon: <ShoppingCart className="w-5 h-5" />, color: "text-purple-500", delay: 0 },
                                        { icon: <Search className="w-5 h-5" />, color: "text-blue-500", delay: 1000 },
                                        { icon: <DollarSign className="w-5 h-5" />, color: "text-green-500", delay: 2000 },
                                        { icon: <Shield className="w-5 h-5" />, color: "text-red-500", delay: 3000 },
                                        { icon: <Zap className="w-5 h-5" />, color: "text-red-500", delay: 4000 },
                                    ].map((item, i) => (
                                        <div
                                            key={`orbit-${i}`}
                                            className="absolute w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-orbit"
                                            style={{
                                                left: '50%',
                                                top: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                animationDelay: `${item.delay}ms`,
                                                animationDuration: '8s'
                                            }}
                                        >
                                            <div className={item.color}>
                                                {item.icon}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </main>

            {/* Custom Animations */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(200px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(200px) rotate(-360deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-orbit {
          animation: orbit 8s linear infinite;
        }
      `}</style>
        </div>
    );
}