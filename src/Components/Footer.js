import { FaHeart, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Shimmer animation CSS classes - Pure Tailwind
  const shimmerClasses = "animate-pulse bg-gray-700";

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - About */}
          <div className="space-y-4">
            {isLoading ? (
              // Shimmer Loading State
              <>
                <div className={`h-6 w-32 rounded ${shimmerClasses}`}></div>
                <div className="space-y-2">
                  <div className={`h-4 w-full rounded ${shimmerClasses}`}></div>
                  <div className={`h-4 w-3/4 rounded ${shimmerClasses}`}></div>
                  <div className={`h-4 w-5/6 rounded ${shimmerClasses}`}></div>
                </div>
                <div className="flex space-x-4">
                  <div className={`w-10 h-10 rounded-full ${shimmerClasses}`}></div>
                  <div className={`w-10 h-10 rounded-full ${shimmerClasses}`}></div>
                  <div className={`w-10 h-10 rounded-full ${shimmerClasses}`}></div>
                </div>
              </>
            ) : (
              // Actual Content
              <>
                <h3 className="text-xl font-bold text-white">Sonam Mourya</h3>
                <p className="text-gray-400 leading-relaxed">
                  Computer Science student passionate about creating innovative web solutions
                  and building the future through code.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="mailto:sonammourya7683@gmail.com"
                    className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors duration-300"
                    title="Email"
                  >
                    <FaEnvelope className="text-white text-sm" />
                  </a>
                  <a
                    href="https://linkedin.com/in/sonam-mourya-204562255/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300"
                    title="LinkedIn"
                  >
                    <FaLinkedin className="text-white text-sm" />
                  </a>
                  <a
                    href="https://github.com/SonaamMourya04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300"
                    title="GitHub"
                  >
                    <FaGithub className="text-white text-sm" />
                  </a>
                </div>
              </>
            )}
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4">
            {isLoading ? (
              // Shimmer Loading State
              <>
                <div className={`h-6 w-24 rounded ${shimmerClasses}`}></div>
                <div className="space-y-2">
                  <div className={`h-4 w-20 rounded ${shimmerClasses}`}></div>
                  <div className={`h-4 w-24 rounded ${shimmerClasses}`}></div>
                  <div className={`h-4 w-16 rounded ${shimmerClasses}`}></div>
                  <div className={`h-4 w-18 rounded ${shimmerClasses}`}></div>
                </div>
              </>
            ) : (
              // Actual Content
              <>
                <h3 className="text-xl font-bold text-white">Quick Links</h3>
                <div className="space-y-2">
                  <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-300">
                    About Me
                  </a>
                  <a href="#techstack" className="block text-gray-400 hover:text-white transition-colors duration-300">
                    Tech Stack
                  </a>
                  <a href="#projects" className="block text-gray-400 hover:text-white transition-colors duration-300">
                    Projects
                  </a>
                  <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-300">
                    Contact
                  </a>
                </div>
              </>
            )}
          </div>

          {/* Right Column - Projects */}
          <div className="space-y-4">
            {isLoading ? (
              // Shimmer Loading State
              <>
                <div className={`h-6 w-32 rounded ${shimmerClasses}`}></div>
                <div className="space-y-2">
                  <div className={`h-4 w-48 rounded ${shimmerClasses}`}></div>
                  <div className={`h-4 w-44 rounded ${shimmerClasses}`}></div>
                  <div className={`h-4 w-28 rounded ${shimmerClasses}`}></div>
                </div>
              </>
            ) : (
              // Actual Content
              <>
                <h3 className="text-xl font-bold text-white">Featured Projects</h3>
                <div className="space-y-2">
                  <a
                    href="https://cinesphere-ab97c.firebaseapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    CineSphere - AI Movie Platform
                  </a>
                  <a
                    href="https://foodhouse-8b803.firebaseapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    FoodHouse - Food Delivery UI
                  </a>
                  <a
                    href="https://github.com/SonaamMourya04/Youtube-Clone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    YouTube Clone
                  </a>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>by Sonam Mourya</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FaArrowUp className="text-sm" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
