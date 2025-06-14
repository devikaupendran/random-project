import React from "react";
import { servicesData } from './../assets/assets';
import { Link } from "react-router-dom";
import ServiceCardLayout from "./ServiceCardLayout";

const ServicesSection = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 mt-[100px] mb-[86px]">
            <div className="flex flex-col justify-center items-center gap-1 mb-5">
                <h1 className="text-[40px] font-bold text-center ">What we offer</h1>
                <p className="max-w-[700px] text-center">When ideas dream, innovation awakens. When innovation acts, transformation begins. At Tricta Technologies, we turn bold visions into real-world solutions. Bring your ideas to life with us — where innovation meets execution.</p>
            </div>

            <ServiceCardLayout services={servicesData} limit={3} /> {/* You can pass any limit or omit it */}


            <Link to={'/services'} className="text-center mt-10 block">
                <button onClick={() => scrollTo(0, 0)}
                    className="border border-black px-9 py-2  hover:bg-black hover:text-white transition-all duration-700 cursor-pointer">
                    View All
                </button>
            </Link>
        </div>
    );
};

export default ServicesSection;
