import React, { useState, useEffect } from 'react';
import { CiBatteryCharging } from "react-icons/ci";
import { FaWifi, FaSignal } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdNavigation } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

export default function AutomatedWeatherStation() {
    const features = [
        "Real-Time Weather Data",
        "Early Warning Systems",
        "Micro climate Monitoring",
        "Cost-Effectiveness",
        "High Accuracy & Reliability",
        "Integration with AI & Predictive Analytics",
        "Remote Monitoring",
        "Sustainable & Scalable",
        "Disaster Preparedness & Risk Management",
        "Community & Agriculture Benefits",
        "Minimal Human Intervention",
        "Versatile Applications"
    ];
    const [sensorData, setSensorData] = useState({
        temperature: 0,
        humidity: 0,
        windSpeed: 0,
        windDirection: 'N/A',
        location: 'Detecting location...',
        stationId: 'AWS-LOC-2024-001'
    });

    const [currentTime, setCurrentTime] = useState(new Date());
    const [locationStatus, setLocationStatus] = useState('detecting'); // detecting, found, error
    const [userCoords, setUserCoords] = useState(null);

    useEffect(() => {
        // Update time every second
        const timeTimer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timeTimer);
    }, []);

    useEffect(() => {
        // Get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserCoords({ lat: latitude, lon: longitude });

                    try {
                        // Get location name from reverse geocoding
                        const locationResponse = await fetch(
                            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
                        );
                        const locationData = await locationResponse.json();

                        const cityName = locationData.city || locationData.locality || 'Unknown City';
                        const countryName = locationData.countryName || 'Unknown Country';
                        const locationString = `${cityName}, ${countryName}`;

                        // Simulate getting weather data (in a real app, you'd use a weather API)
                        // For demo purposes, generating realistic data based on location
                        const baseTemp = 20 + Math.random() * 15; // 20-35°C range
                        const baseHumidity = 40 + Math.random() * 40; // 40-80% range
                        const baseWindSpeed = 2 + Math.random() * 8; // 2-10 m/s range
                        const windDirections = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
                        const windDirection = windDirections[Math.floor(Math.random() * windDirections.length)];

                        setSensorData(prev => ({
                            ...prev,
                            temperature: baseTemp,
                            humidity: baseHumidity,
                            windSpeed: baseWindSpeed,
                            windDirection: windDirection,
                            location: locationString,
                            stationId: `AWS-${cityName.substring(0, 3).toUpperCase()}-2024-001`
                        }));

                        setLocationStatus('found');

                        // Start real-time data simulation after location is found
                        const dataTimer = setInterval(() => {
                            setSensorData(prev => ({
                                ...prev,
                                temperature: Math.max(prev.temperature - 5, Math.min(prev.temperature + 5, prev.temperature + (Math.random() - 0.5) * 0.5)),
                                humidity: Math.max(30, Math.min(90, prev.humidity + (Math.random() - 0.5) * 2)),
                                windSpeed: Math.max(1, Math.min(15, prev.windSpeed + (Math.random() - 0.5) * 1))
                            }));
                        }, 3000);

                        return () => clearInterval(dataTimer);

                    } catch (error) {
                        console.error('Error fetching location data:', error);
                        setSensorData(prev => ({
                            ...prev,
                            location: `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`,
                            temperature: 22 + Math.random() * 8,
                            humidity: 50 + Math.random() * 30,
                            windSpeed: 3 + Math.random() * 5,
                            windDirection: 'SW'
                        }));
                        setLocationStatus('found');
                    }
                },
                (error) => {
                    console.error('Geolocation error:', error);
                    setLocationStatus('error');
                    // Fallback to default data
                    setSensorData(prev => ({
                        ...prev,
                        location: 'Location Access Denied',
                        temperature: 23.5,
                        humidity: 65,
                        windSpeed: 4.2,
                        windDirection: 'NW'
                    }));
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 300000 // 5 minutes
                }
            );
        } else {
            setLocationStatus('error');
            setSensorData(prev => ({
                ...prev,
                location: 'Geolocation Not Supported',
                temperature: 23.5,
                humidity: 65,
                windSpeed: 4.2,
                windDirection: 'NW'
            }));
        }
    }, []);

    // Convert wind speed to different units for display
    const windSpeedKmh = (sensorData.windSpeed * 3.6).toFixed(1);
    const windSpeedMph = (sensorData.windSpeed * 2.237).toFixed(1);

    const getLocationStatusColor = () => {
        switch (locationStatus) {
            case 'detecting': return 'text-yellow-400';
            case 'found': return 'text-green-400';
            case 'error': return 'text-red-400';
            default: return 'text-gray-400';
        }
    };

    const getLocationStatusIcon = () => {
        switch (locationStatus) {
            case 'detecting': return <MdNavigation className="w-4 h-4 animate-spin" />;
            case 'found': return <FaMapMarkerAlt className="w-4 h-4" />;
            case 'error': return <FaMapMarkerAlt className="w-4 h-4" />;
            default: return <FaMapMarkerAlt className="w-4 h-4" />;
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br pt-30 from-slate-900 via-blue-900 to-indigo-900 text-white p-6">
            <div className="max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Weather Station Overview</h2>
                            <div className="flex items-center space-x-4 text-sm">
                                <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                                    <div className={getLocationStatusColor()}>
                                        {getLocationStatusIcon()}
                                    </div>
                                    <span>Station ID: {sensorData.stationId}</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                                    <FaRegClock className="w-4 h-4 text-blue-400" />
                                    <span>{currentTime.toLocaleTimeString()}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm text-green-400">Active</span>
                        </div>
                    </div>

                    {/* Location and Current Conditions */}
                    <div className="mb-6 bg-white/5 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className={getLocationStatusColor()}>
                                    {getLocationStatusIcon()}
                                </div>
                                <div>
                                    <span className="text-lg font-medium">{sensorData.location}</span>
                                    {userCoords && (
                                        <div className="text-sm text-gray-400 mt-1">
                                            {userCoords.lat.toFixed(4)}°, {userCoords.lon.toFixed(4)}°
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-gray-300">Wind Direction</div>
                                <div className="text-xl font-bold text-cyan-400">{sensorData.windDirection}</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                            <div className="text-center">
                                <div className="text-sm text-gray-300">Wind Speed</div>
                                <div className="text-lg font-bold text-cyan-400">
                                    {sensorData.windSpeed.toFixed(1)} m/s
                                </div>
                                <div className="text-xs text-gray-400">
                                    {windSpeedKmh} km/h | {windSpeedMph} mph
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-sm text-gray-300">Temperature</div>
                                <div className="text-lg font-bold text-orange-400">
                                    {sensorData.temperature.toFixed(1)}°C
                                </div>
                                <div className="text-xs text-gray-400">
                                    {((sensorData.temperature * 9 / 5) + 32).toFixed(1)}°F
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-sm text-gray-300">Humidity</div>
                                <div className="text-lg font-bold text-blue-400">
                                    {sensorData.humidity.toFixed(0)}%
                                </div>
                                <div className="text-xs text-gray-400">
                                    Relative Humidity
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3D Weather Station Model */}
                    <div className="relative flex items-center justify-center">
                        {/* Background grid */}
                        <div className="absolute inset-0 opacity-20">
                            <svg className="w-full h-full">
                                <defs>
                                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#60a5fa" strokeWidth="0.5" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    );
}