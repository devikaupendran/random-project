import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";

const CardLayout = ({ title, subTitle, about, image, reverse, height,animation1 }) => {

    const navigate = useNavigate()
    return (
        <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-5 md:gap-8 xl:gap-10 py-10 xl:py-15`}>
            <motion.div className="md:w-1/2" {...animation1} >
                <img src={image} alt={title} className={`rounded-xl w-full ${height}`} />
            </motion.div>

            <motion.div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left px-4 max-w-prose "{...animation1}>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="mb-3 text-justify text-gray-700 ">{subTitle}</p>
                <p className="mb-6 text-gray-700 text-justify ">{about}</p>
                <button onClick={() => {navigate('/service-details'); scrollTo(0,0)}} 
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-all flex items-center gap-2 cursor-pointer">
                    <span >Read more</span> <BsArrowRight />
                </button>
            </motion.div>
        </div>
    );
};

const ServiceCardLayout = ({ services, limit }) => {
    const displayedServices = limit ? services.slice(0, limit) : services;

    return (
        <>
            {
                displayedServices.map((item, index) => (
                    <CardLayout
                        key={index}
                        title={item.title}
                        subTitle={item.subTitle}
                        about={item.about}
                        image={item.image}
                        reverse={index % 2 !== 0}
                        height={item.height}
                        animation1={item.animation1}
               
                    />
                ))
            }
        </>
    );
};

export default ServiceCardLayout;

