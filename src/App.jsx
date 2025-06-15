import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Testimonials from './pages/Testimonials';
// import Products from './pages/Products';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import ScrollToTop from './components/ScrollToTop';
import Helpybo from './pages/Helpybo';
import Envirotrack from './pages/Envirotrack';
import FleetManagement from './pages/FleetManagement';
import AutomatedWeatherStation from './pages/AutomatedWeatherStation';
import DigitalSignage from './pages/DigitalSignage';
import ECommerce from './pages/Ecommerce';



const App = () => {
    return (
        <div>
            <Navbar />
            <ScrollToTop/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                {/* <Route path='/our-products' element={<Products />} /> */}
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/about-us' element={<Aboutus />} />
                <Route path='/contact-us' element={<Contactus />} />
                <Route path='/testimonials' element={<Testimonials />} />
                <Route path='/service-details' element={<ServiceDetailsPage />} />
                <Route path='/helpybo' element={<Helpybo />} />
                <Route path='/envirotrack' element={<Envirotrack />} />
                <Route path='/fleet-management' element={<FleetManagement />} />
                <Route path='/automated-weather-station' element={<AutomatedWeatherStation />} />
                <Route path='/digital-signage' element={<DigitalSignage />} />
                <Route path='/ecommerce' element={<ECommerce />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;