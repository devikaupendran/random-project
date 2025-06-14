import React from "react";
import { FaApple, FaAndroid, FaReact, FaWindows, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SiIos } from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";
import { BsFacebook, BsInstagram, BsLinkedin, BsMessenger } from "react-icons/bs";

const ServiceDetailsPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative bg-black text-white min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 opacity-50" />
        <div className="relative z-10 p-8 max-w-7xl mx-auto">

          <div className="mt-24">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight ">
              Building Powerful Mobile Experiences <br /> with Tricta Technologies
            </h1>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-white text-black p-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Build Smarter. Launch Faster. Succeed Bigger.</h2>
        <p className="mb-8">
          At Tricta Technologies, we craft advanced mobile applications that are fast, scalable,
          and future-ready. In an increasingly mobile-first world, your business needs more than
          just an app — it needs a powerful, intelligent digital experience in every user’s pocket.
        </p>

        {/* Core Platforms */}
        <h3 className="text-xl font-bold mb-4">What We Do Best – Mobile App Development</h3>
        <p className="mb-4">
          We offer end-to-end mobile app development services that transform your ideas into
          robust, user-focused digital products.
        </p>
        <div className="flex flex-wrap gap-10 mb-8">
          <FaWindows size={40} className="text-blue-500" />
          <FaAndroid size={40} className="text-green-600" />
          <SiIos size={40} className="text-red-500" />
          <FaReact size={40} className="text-cyan-500" />
        </div>

        {/* Why Choose */}
        <h3 className="text-xl font-bold mb-4">Why Choose Tricta for Mobile App Development?</h3>
        <ul className="list-disc ml-6 space-y-2 mb-8">
          <li><strong>Strategy-Driven Development</strong> – We align your app with your business goals</li>
          <li><strong>User-Centered Design</strong> – Clean, intuitive, and engaging interfaces</li>
          <li><strong>Robust Architecture</strong> – Built for scale, speed, and stability</li>
          <li><strong>Full Lifecycle Support</strong> – From idea to launch and beyond</li>
        </ul>

        {/* Impact Section */}
        <h3 className="text-xl font-bold mb-4">Solutions That Make an Impact</h3>
        <ul className="list-disc ml-6 space-y-2 mb-8">
          <li>📱 Engage customers on their preferred platforms</li>
          <li>⚙️ Automate and optimize business workflows</li>
          <li>🛠 Support internal tools and operations</li>
          <li>🌐 Expand digital touchpoints and global reach</li>
        </ul>

        {/* CTA Section */}
        <h3 className="text-2xl font-bold mb-4">Let’s Code Your Success Together</h3>
        <p className="mb-4">
          At Tricta, we’re more than developers — we’re your technology partner. Whether you’re
          reimagining customer experiences or building the next big thing, we’re here to bring your
          vision to life.
        </p>
        <p className="font-bold mb-2">📞 Contact Us Today</p>
        <p className="mb-6">Let’s talk about how Tricta can take your mobile app idea to the next level.</p>
        <button className="flex items-center gap-2 text-orange-600 font-semibold border border-orange-600 px-4 py-2 rounded hover:bg-orange-50">
          View Our Portfolio <FiArrowRight />
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <h4 className="text-2xl font-bold mb-2">Ready to <span className="text-orange-500">Get Started?</span></h4>
            <p className="text-sm mb-4 max-w-sm">
              Experience the future of business operations with Tricta—AI-powered automation delivering
              increased speed, security, and adaptability, driving unmatched productivity gains.
            </p>
            <button className="bg-orange-500 px-5 py-2 rounded text-white font-semibold">Get in touch</button>
          </div>

          <div>
            <h5 className="font-bold mb-2">Location</h5>
            <p className="text-sm">
              Module No-7 (a), Gayatri Top Floor,<br />
              Technopark Campus<br />
              Trivandrum 695581
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-2">Contact Us</h5>
            <div className="flex space-x-4 text-xl">
              <BsFacebook />
              <BsInstagram />
              <BsLinkedin />
              <BsMessenger />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <div className="mb-2">© 2025 Tricta Technologies. All Rights Reserved.</div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Products</a>
            <a href="#" className="hover:underline">About us</a>
            <a href="#" className="hover:underline">Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServiceDetailsPage;
