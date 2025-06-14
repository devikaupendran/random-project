import React from "react";
import { servicesData } from './../assets/assets';
import TextAnimation from "../components/TextAnimation";
import ServiceCardLayout from "../components/ServiceCardLayout";

const Services = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 mt-[100px] mb-[86px]">
            {/* Header */}
            <div className="text-center mb-12">
                <TextAnimation text="Our Services" className="text-[40px] md:text-[60px] lg:text-[70px] font-semibold mb-4 " />
                <p className="max-w-[400px] md:max-w-[700px] mx-auto text-gray-600 text-[11px] md:text-lg">
                    Built for Today, Ready for Tomorrow. Our services are designed to scale with your ambitions and fuel your growth.
                </p>
            </div>

            {/* Service Cards */}
            <ServiceCardLayout services={servicesData} /> 
        </div>
    );
};

export default Services;
