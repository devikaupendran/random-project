import React from 'react'
import { assets } from '../assets/assets'
import DoorCards from '../components/DoorCards'
import OurTeamMembers from '../components/OurTeamMembers'
import TechnologyStack from '../components/TechnologyStack'
import TextAnimation from '../components/TextAnimation'
import { motion } from 'framer-motion';

const Aboutus = () => {
    return (
        <div className='w-full h-auto  custom-font bg-white'>
            {/* --------------------- header section --------------------- */}
            <div className='relative'>
                {/* Background Image */}
                <img src={assets.aboutusbanner1} alt="contact-us-banner" className='w-full xl:h-[800px] md:h-full h-[300px] object-cover' />
                {/* Overlay */}
                <div className='absolute inset-0 bg-black/60 bg-opacity-50'></div>
                <TextAnimation text="From Vision to Reality..." className="absolute md:top-[20%] left-0 top-[50%] max-w-[300px] md:max-w-full text-[#ededed] " />
            </div>

            <DoorCards />

            {/* --------------------- about section --------------------- */}

            <div className='flex justify-center items-center w-full my-20'>
                <div className='w-full flex flex-col md:flex-row max-w-[1000px] xl:max-w-[1200px] items-center gap-10 p-10'>

                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 60, damping: 20, duration: 1.2, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='w-[300px] xl:w-[380px]  xl:h-80'>
                        <img src={assets.about} alt="about image" className='w-full h-full' />
                    </motion.div>

                    <div className='w-full md:max-w-[500px] xl:max-w-[800px] text-wrap text-justify text-[11px] xl:text-[18px]'>
                        <motion.p
                            initial={{ y: '30%', opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 50, damping: 25, duration: 2 }}
                            viewport={{ once: true }}>

                            At Tricta Technologies Pvt. Ltd., we are a team of creative minds and tech experts dedicated to building smart digital
                            experiences. From web and mobile apps to e-commerce and hosting, we offer end-to-end IT solutions tailored to your needs.
                            Headquartered in India with offices across the US, Canada, Australia, and the Middle East,
                            we serve clients globally with reliable, scalable technology.
                        </motion.p> <br />
                        <motion.p
                            initial={{ y: '30%', opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 50, damping: 25, duration: 2, delay: 0.4 }}
                            viewport={{ once: true }}>
                            We don’t just develop software — we create intelligent ecosystems. By harnessing AI and emerging tech,
                            we help businesses boost efficiency, make smarter decisions, and turn big ideas into powerful digital solutions.
                        </motion.p>
                    </div>
                </div>
            </div>

            <OurTeamMembers />
            <TechnologyStack />
        </div>
    )
}

export default Aboutus