import { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "sonammourya7683@gmail.com",
      link: "mailto:sonammourya7683@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Sonam Mourya",
      link: "https://linkedin.com/in/sonam-mourya-204562255/",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "SonaamMourya04",
      link: "https://github.com/SonaamMourya04",
      color: "from-gray-500 to-gray-700"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "New Delhi, India",
      link: "#",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-1200"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-300"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <HiSparkles className="text-3xl text-yellow-400 animate-spin hover:animate-pulse cursor-pointer" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-pulse hover:animate-none transition-all duration-300">
              Let's Connect
            </h2>
            <HiSparkles className="text-3xl text-yellow-400 animate-spin hover:animate-pulse cursor-pointer" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's collaborate and create something
            <span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text font-semibold"> amazing together!</span>
          </p>
        </div>

        <div className="flex justify-center">
          {/* Hidden Contact Information - keeping for functionality but not displaying */}
          <div className="hidden">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.link} style={{ display: 'none' }}>
                {info.label}: {info.value}
              </a>
            ))}
          </div>

          {/* Contact Illustration - Centered */}
          <div className={`max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-3xl"></div>

              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/50">
                <div className="text-center space-y-8">
                  {/* Main Contact Illustration */}
                  <div className="relative">
                    <div className="text-9xl animate-pulse">📞</div>

                    {/* Floating Contact Elements */}
                    <div className="absolute -top-6 -left-6 text-3xl animate-bounce delay-100">📧</div>
                    <div className="absolute -top-4 -right-8 text-2xl animate-pulse delay-300">💬</div>
                    <div className="absolute -bottom-4 -left-4 text-2xl animate-bounce delay-500">📱</div>
                    <div className="absolute -bottom-6 -right-6 text-2xl animate-pulse delay-700">🌐</div>
                  </div>

                  {/* Contact Icons */}
                  <div className="flex justify-center space-x-6 py-6">
                    <a
                      href="mailto:sonammourya7683@gmail.com"
                      className="group w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                      title="Email Me"
                    >
                      <FaEnvelope className="text-white text-xl group-hover:animate-bounce" />
                    </a>

                    <a
                      href="https://linkedin.com/in/sonam-mourya-204562255/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                      title="LinkedIn Profile"
                    >
                      <FaLinkedin className="text-white text-xl group-hover:animate-bounce" />
                    </a>

                    <a
                      href="https://github.com/SonaamMourya04"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                      title="GitHub Profile"
                    >
                      <FaGithub className="text-white text-xl group-hover:animate-bounce" />
                    </a>
                  </div>

                  {/* Contact Message */}
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-white">Let's Connect!</h3>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-lg mx-auto">
                      Ready to collaborate on your next project? I'm always excited to work on
                      innovative solutions and bring creative ideas to life.
                    </p>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className={`text-center mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by Sonam Mourya
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
