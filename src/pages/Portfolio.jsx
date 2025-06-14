import React, { useState } from 'react';
import { portfolio } from './../assets/assets';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import TextAnimation from '../components/TextAnimation';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredPortfolioData =
        selectedCategory === 'All'
            ? portfolio
            : portfolio.filter((product) => product.category === selectedCategory);

    const categories = ['All', ...new Set(portfolio.map((product) => product.category))];

    return (
        <div className="w-full px-4 md:px-20 pt-[100px] pb-[60px]">
            {/* Header */}
            <div className="text-center mb-12">
                <TextAnimation text="Our Portfolio" className="text-[40px] md:text-[60px] lg:text-[70px] font-semibold mb-4" />
                <p className="max-w-[400px] md:max-w-[700px] mx-auto text-gray-600 text-[10px] md:text-lg">
                    A collection of innovative solutions and projects we've proudly built over the years at Tricta — where passion meets purpose in every line of code.
                </p>
            </div>

            {/* Category Filter */}
            <div className="text-center mb-12">
                <div className="flex flex-wrap justify-center gap-3 md:gap-5">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-5 py-2 md:px-7 md:py-3 rounded-full text-sm md:text-[16px] font-medium transition-all cursor-pointer
                            ${selectedCategory === category ? 'text-custom' : 'text-gray-700'}`}
                        >
                            {category}
                        </button>
                    ))
                    }
                </div>
            </div>

            {/* Portfolio Grid */}
            <div key={selectedCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {
                        filteredPortfolioData.map((item, index) => (
                            <motion.a
                                key={item.title + index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between transition hover:shadow-lg cursor-pointer"
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                            >
                                <img src={item.image} alt={item.title} className="w-full h-[180px] md:h-[250px] object-cover" />
                                <div className="flex justify-between items-center p-2 md:p-5">
                                    <div className="mb-4">
                                        <p className="text-xs md:text-sm font-light text-custom mb-1"> {item.category} </p>
                                        <h2 className="text-sm lg:text-xl font-semibold mb-1">{item.title}</h2>
                                        <p className="text-xs md:text-sm hidden md:block font-light text-left text-gray-600">{item.subTitle}</p>
                                    </div>

                                    {/* Show arrow only on large screens */}
                                    <div className="hidden lg:block z-20">
                                        <div className="border border-gray-200 rounded-full p-2 bg-custom">
                                            <MdOutlineKeyboardArrowRight color="white" className="text-2xl" />
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Portfolio;
