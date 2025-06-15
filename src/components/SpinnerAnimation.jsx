import React from 'react';

export default function SpinnerAnimation() {
  return (
    <div className="flex items-center  min-[200px]">
      <div className="relative">
        {/* Animated star with 8 rays */}
        <div className="animate-spin duration-[8s] linear infinite">
          <svg 
            width="200" 
            height="200" 
            viewBox="0 0 200 200" 
            className="animate-pulse duration-[10s] ease-in-out infinite"
          >
            {/* Generate 8 rays positioned around the center */}
            {Array.from({ length: 8 }, (_, i) => {
              const angle = (i * 45) * (Math.PI / 180); // Convert to radians
              const x1 = 100; // Center x
              const y1 = 100; // Center y
              const x2 = 100 + Math.cos(angle) * 80; // End point x
              const y2 = 100 + Math.sin(angle) * 80; // End point y
              
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="drop-shadow-lg"
                />
              );
            })}
          </svg>
        </div>
        
        {/* Glowing center point */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
        </div>
        
        {/* Outer glow ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48  rounded-full animate-pulse duration-[5s]"></div>
      </div>
    </div>
  );
}