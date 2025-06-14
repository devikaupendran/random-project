import React from 'react'
import Header from '../components/Header'
import AboutSection from '../components/AboutSection'
import PopupAnimation from '../components/PopupAnimation'
import ClientsMarquee from '../components/ClientsMarquee'
import ServicesSection from '../components/ServicesSection'
import PortfolioSection from '../components/PortfolioSection'
import Innovation from '../components/Innovation'
import Project from '../components/Project'
import Testimonials from '../components/Testimonials'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='mx-[2%] sm:mx-[3%] md:mx-[4%] lg:mx-[5%] xl:mx-[7%]'>
                <section id="about"><AboutSection /></section>
                <PopupAnimation />
            </div>
            <ClientsMarquee />

            <div className='mx-[2%] sm:mx-[3%] md:mx-[4%] lg:mx-[5%] xl:mx-[7%]'>
                <ServicesSection />
                <Project />
                <PortfolioSection />
                <Innovation />
                <Testimonials/>
            </div>

        </div>
    )
}
export default Home;