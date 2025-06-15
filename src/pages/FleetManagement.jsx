import React, { useState, useEffect } from 'react';
import { FaTruck, FaRoute, FaWrench, FaDollarSign, FaUser, FaCar, FaCloudDownloadAlt, FaBell } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FiFileText, FiMapPin } from "react-icons/fi";
import { IoIosHelpCircle } from "react-icons/io";

export default function FleetManagement() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % 11);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            icon: <FaRoute className="w-6 h-6" />,
            title: "Manage Trips",
            description: "It helps manage different types of trips assigned to drivers.",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <FaWrench className="w-6 h-6" />,
            title: "Service & Maintenance",
            description: "To track the service and maintenance history, as well as upcoming services and maintenance.",
            color: "from-red-500 to-pink-500"
        },
        {
            icon: <FaDollarSign className="w-6 h-6" />,
            title: "Income & Expense",
            description: "To track all income and expenses incurred during trips, service and maintenance, other income sources, EMI, etc.",
            color: "from-pink-500 to-purple-500"
        },
        {
            icon: <FaUser className="w-6 h-6" />,
            title: "Driver Management",
            description: "To track and manage drivers.",
            color: "from-purple-500 to-indigo-500"
        },
        {
            icon: <FaCar className="w-6 h-6" />,
            title: "Vehicle Details",
            description: "Detailed information about the vehicle.",
            color: "from-indigo-500 to-blue-500"
        },
        {
            icon: <SlCalender className="w-6 h-6" />,
            title: "Calendar",
            description: "Shows daily trips, service and maintenance in a calendar view format.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <FaDollarSign className="w-6 h-6" />,
            title: "Trips Amount Due",
            description: "To manage outstanding payments for trips.",
            color: "from-cyan-500 to-teal-500"
        },
        {
            icon: <IoIosHelpCircle className="w-6 h-6" />,
            title: "Enquiry",
            description: "To manage the enquiries received related to the upcoming trips.",
            color: "from-teal-500 to-green-500"
        },
        {
            icon: <FaCloudDownloadAlt className="w-6 h-6" />,
            title: "Download Upcoming Trip Sheet",
            description: "Owners can download the detailed document of upcoming trips.",
            color: "from-green-500 to-lime-500"
        },
        {
            icon: <FiFileText className="w-6 h-6" />,
            title: "Download Upcoming Trip Sheet",
            description: "Each travels can add their own logo for their 'owner' and 'driver' apps.",
            color: "from-lime-500 to-yellow-500"
        },
        {
            icon: <FaBell className="w-6 h-6" />,
            title: "Reminders & Notifications",
            description: "It keeps reminding the driver's on the trips assigned. Give notifications for the service and lots more.",
            color: "from-yellow-500 to-orange-500"
        }
    ];


    return (
        <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-gray-950 to-teal-900 text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-teal-900/50 to-transparent"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 p-6">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-white/20 to-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <FaTruck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold tracking-wider">FLEET</h1>
                        <div className="flex items-center space-x-2 -mt-2">
                            <span className="text-lg font-light">MANAGEMENT</span>
                            <span className="text-lg font-light">SYSTEM</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col gap-12">

                    {/* Mockup First */}
                    <div className={`order-1 lg:order-none transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="relative h-full flex items-center justify-center">
                            {/* Background Tech Pattern */}
                            <div className="absolute inset-0 opacity-30">
                                <div className="w-full h-full bg-gradient-to-br from-teal-900/50 to-transparent rounded-2xl"></div>
                            </div>

                            {/* Fleet Dashboard */}
                            <div className="relative z-10 w-full max-w-md">
                                <div className="bg-gradient-to-br from-orange-500/30 to-orange-700/20 backdrop-blur-lg p-6 rounded-2xl border border-white/30 shadow-2xl">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-lg font-bold">Fleet Dashboard</h3>
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                                            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-600"></div>
                                        </div>
                                    </div>

                                    {/* Stats Cards */}
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        <div className="bg-gradient-to-r from-blue-500/30 to-cyan-500/30 p-3 rounded-lg backdrop-blur-sm">
                                            <div className="text-xs text-white/70">Active Trips</div>
                                            <div className="text-xl font-bold">24</div>
                                        </div>
                                        <div className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 p-3 rounded-lg backdrop-blur-sm">
                                            <div className="text-xs text-white/70">Vehicles</div>
                                            <div className="text-xl font-bold">18</div>
                                        </div>
                                        <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 p-3 rounded-lg backdrop-blur-sm">
                                            <div className="text-xs text-white/70">Drivers</div>
                                            <div className="text-xl font-bold">32</div>
                                        </div>
                                        <div className="bg-gradient-to-r from-orange-500/30 to-red-500/30 p-3 rounded-lg backdrop-blur-sm">
                                            <div className="text-xs text-white/70">Revenue</div>
                                            <div className="text-xl font-bold">₹2.4L</div>
                                        </div>
                                    </div>

                                    {/* Recent Activity */}
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-semibold text-white/80">Recent Activity</h4>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2 text-xs">
                                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                <span>Trip #1234 completed</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-xs">
                                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                                <span>Vehicle service due</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-xs">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                <span>New enquiry received</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full shadow-lg animate-bounce">
                                    <FiMapPin className="w-5 h-5" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-teal-500 to-cyan-500 p-3 rounded-full shadow-lg animate-pulse">
                                    <tru className="w-5 h-5" />
                                </div>

                                {/* Mobile App Mockup */}
                                <div className="absolute hidden md:block top-4 -left-10 w-16 h-28 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-gray-600 shadow-xl opacity-80">
                                    <div className="w-full h-4 bg-gradient-to-r from-orange-400 to-teal-400 rounded-t-lg"></div>
                                    <div className="p-2 space-y-1">
                                        <div className="w-full h-1 bg-white/30 rounded"></div>
                                        <div className="w-3/4 h-1 bg-white/20 rounded"></div>
                                        <div className="w-1/2 h-1 bg-white/20 rounded"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Route Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                                <defs>
                                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#0891b2" stopOpacity="0.6" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M 50,50 Q 200,100 350,150 T 450,200"
                                    stroke="url(#routeGradient)"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="10,5"
                                    className="animate-pulse"
                                />
                            </svg>
                        </div>
                    </div>


                    {/* Features Section */}
                    <div className={`order-2 lg:order-none transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="space-y-8">
                            <div className="flex justify-center">
                                <p className="text-xl text-white/90 leading-relaxed font-light xl:max-w-[700px] text-center">
                                    Fleet Management App is a Vehicle Information Management System to manage and control the data and information regarding Trips, Vehicles, and Drivers.
                                </p>
                            </div>

                            {/* Fixed Grid Layout */}
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                                {
                                    features.map((feature, index) => (
                                        <div
                                            key={index}
                                            onMouseEnter={() => setActiveFeature(index)}
                                            className={`p-4 rounded-xl border backdrop-blur-sm transform transition-all duration-300 cursor-pointer 
                        ${activeFeature === index
                                                    ? 'bg-white/20 border-white/40 scale-105 shadow-xl'
                                                    : 'bg-white/10 border-white/20 hover:bg-white/15 hover:scale-105 hover:shadow-lg'
                                                }`}
                                        >
                                            <div className="flex  items-start space-x-4">
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
                                    ))
                                }
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
                .animate-fade-in {
                  animation: fade-in 1s ease-out forwards;
                }
                .scale-102 {
                  transform: scale(1.02);
                }
              `}</style>
        </div>
    );


}