import React from 'react';
import { assets } from '../assets/assets';

const Innovation = () => {
    return (
        <div className="w-full my-20 px-6 py-5">
            <div className="flex flex-col xl:flex-row items-center justify-between max-w-7xl mx-auto gap-10 xl:gap-20">
                
                {/* -------------- Left Section (Text) -------------- */}
                <div className="flex flex-col gap-5 xl:w-1/2">
                    <h1 className="text-3xl font-semibold leading-snug">
                        What if the right innovation partner could transform the way you do business?
                    </h1>

                    {/* Orange accent bar */}
                    <div className="bg-[#ED4718] h-[4px] w-[200px]"></div>

                    <div className="text-justify leading-7 text-gray-800">
                        <p>
                            In a world where technology evolves daily, staying ahead means more than just keeping up — it means leading the change.
                        </p>
                        <p>
                            At Tricta Technologies, we don’t just provide IT solutions; we craft digital strategies that challenge the status quo, drive innovation, and empower your business to thrive in a connected future. Let’s explore what’s possible together.
                        </p>
                    </div>
                </div>

                {/* -------------- Right Section (Image) -------------- */}
                <div className="xl:w-1/2 w-full max-w-md">
                    <img 
                        src={assets.innovation} 
                        alt="Innovation" 
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Innovation;
