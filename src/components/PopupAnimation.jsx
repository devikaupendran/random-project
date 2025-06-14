import React, { useEffect, useState } from 'react';

const PopupCard = ({ icon, title, className, delay, hideDelay, visible }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        let showTimer, hideTimer;

        if (visible) {
            showTimer = setTimeout(() => setActive(true), delay);
            hideTimer = setTimeout(() => setActive(false), hideDelay);
        } else {
            setActive(false);
        }

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, [visible, delay, hideDelay]);

    return (
        <div
            className={`absolute w-fit p-3 sm:p-4 bg-white/95 rounded-xl shadow-xl border border-white/20 backdrop-blur-md transform transition-all duration-700 ease-out
            ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} ${className}`}
        >
            <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white text-xs sm:text-sm md:text-lg flex-shrink-0">
                    {icon}
                </div>
                <span className="text-gray-800 text-xs sm:text-sm md:text-base font-bold leading-tight hidden md:block">{title}</span>
            </div>
        </div>
    );
};

const PopupAnimation = () => {
    const [visibleKey, setVisibleKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleKey(prev => prev + 1);
        }, 8800); // matches the last fadeOut timing
        return () => clearInterval(interval);
    }, []);

    const originalDelays = [2000, 2800, 300, 2000, 2800, 300, 5200, 5200];
    const newOrder = [2, 5, 0, 3, 1, 4, 6, 7];
    const reorderedFadeInDelays = newOrder.map(index => originalDelays[index]);
    const reorderedFadeOutDelays = reorderedFadeInDelays.map(d => d + 2000);

    return (
        <div className="flex items-center justify-center xl:h-screen px-4 relative my-20 lg:my-0">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 lg:left-55 w-30 h-30 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute top-1/2 lg:right-70 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full opacity-40 animate-bounce"></div>
            <div className="absolute top-5 lg:top-1/2 lg:left-28 left-50 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-25 animate-pulse"></div>
            <div className="absolute top-[500px] xl:top-[600px] left-30 hidden lg:block xl:left-68 w-16 h-16 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full opacity-25 animate-pulse"></div>
            <div className="absolute top-15 right-10 w-20 h-20 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute bottom-15 right-20 w-20 h-20 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full opacity-30 animate-pulse"></div>

            {/* Circle container */}
            <div className="relative w-[240px] sm:w-[460px] md:w-[500px] lg:w-[550px] aspect-square">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-orange-400 to-orange-200 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full bg-white z-10"></div>
                </div>

                {/* Reordered Cards */} 
                <PopupCard
                    key={`3-${visibleKey}`}
                    icon="💼"
                    title="IT Consulting"
                    className="bottom-[15%] right-[-7px] sm:right-[-120px] md:right-[-120px]"
                    delay={reorderedFadeInDelays[0]}
                    hideDelay={reorderedFadeOutDelays[0]}
                    visible={true}
                />
                <PopupCard
                    key={`6-${visibleKey}`}
                    icon="🏦"
                    title="Banking"
                    className="top-[15%] left-[-6px] sm:left-[-120px] md:left-[-110px]"
                    delay={reorderedFadeInDelays[1]}
                    hideDelay={reorderedFadeOutDelays[1]}
                    visible={true}
                />
                <PopupCard
                    key={`1-${visibleKey}`}
                    icon="☁️"
                    title="Cloud Computing"
                    className="top-[-50px] left-1/2 transform -translate-x-1/2"
                    delay={reorderedFadeInDelays[2]}
                    hideDelay={reorderedFadeOutDelays[2]}
                    visible={true}
                />
                <PopupCard
                    key={`4-${visibleKey}`}
                    icon="🩺"
                    title="Healthcare"
                    className="bottom-[-50px] left-1/2 transform -translate-x-1/2"
                    delay={reorderedFadeInDelays[3]}
                    hideDelay={reorderedFadeOutDelays[3]}
                    visible={true}
                />
                <PopupCard
                    key={`2-${visibleKey}`}
                    icon="🚚"
                    title="Logistics"
                    className="top-[15%] right-[-6px] sm:right-[-120px] md:right-[-120px]"
                    delay={reorderedFadeInDelays[4]}
                    hideDelay={reorderedFadeOutDelays[4]}
                    visible={true}
                />
                <PopupCard
                    key={`5-${visibleKey}`}
                    icon="🛒"
                    title="Ecommerce"
                    className="bottom-[15%] left-[-6px] sm:left-[-120px] md:left-[-140px]"
                    delay={reorderedFadeInDelays[5]}
                    hideDelay={reorderedFadeOutDelays[5]}
                    visible={true}
                />
                <PopupCard
                    key={`7-${visibleKey}`}
                    icon="📡"
                    title="IoT Solutions"
                    className="bottom-[15%] right-[-8px] sm:right-[-120px] md:right-[-120px]"
                    delay={reorderedFadeInDelays[6]}
                    hideDelay={reorderedFadeOutDelays[6]}
                    visible={true}
                />
                <PopupCard
                    key={`8-${visibleKey}`}
                    icon="💻"
                    title="Software Development"
                    className="top-[15%] left-[-6px] sm:left-[-120px] md:left-[-140px]"
                    delay={reorderedFadeInDelays[7]}
                    hideDelay={reorderedFadeOutDelays[7]}
                    visible={true}
                />
            </div>
        </div>
    );
};

export default PopupAnimation;
