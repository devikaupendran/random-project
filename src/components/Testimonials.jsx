import React from 'react';
import { testimonials } from '../assets/assets';
import { LuQuote } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-black text-center mb-12">
                    Words from Happy Clients
                </h1>

                {/* Style 2: Quote Style */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        {
                            testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-orange-500 via-orange-400 to-orange-500 backdrop-blur-lg rounded-2xl p-8 text-white relative overflow-hidden"
                                >
                                    <LuQuote className="absolute top-4 right-4 w-12 h-12 text-white/60" />
                                    <div className="relative z-10">
                                        <p className="text-lg mb-6 leading-relaxed max-w-[500px]">"{testimonial.content}"</p>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                                <p className="text-white/80 text-sm">{testimonial.role}</p>
                                            </div>
                                            <div className="flex gap-1 text-yellow-400">
                                                {Array(5).fill(0).map((_, i) => (
                                                    <FaStar key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-white/30"} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Testimonials;
