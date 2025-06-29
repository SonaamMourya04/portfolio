import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"; // Adjust the path as needed

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start loading content when section becomes visible
          setTimeout(() => {
            setIsVisible(true);
            setIsLoading(false); // Content is ready to show
          }, 1000); // Simulate content loading time
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  // Show shimmer while content is loading
  if (isLoading) {
    return (
      <section id="about" className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Shimmer */}
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-gray-700 animate-pulse rounded mx-auto mb-4"></div>
            <div className="w-24 h-1 bg-gray-700 animate-pulse mx-auto mb-6"></div>
            <div className="h-6 w-96 bg-gray-700 animate-pulse rounded mx-auto"></div>
          </div>

          {/* Two Column Shimmer Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column Shimmer */}
            <div className="space-y-8">
              {/* Section 1 */}
              <div className="space-y-4">
                <div className="h-8 w-48 bg-gray-700 animate-pulse rounded"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-700 animate-pulse rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-700 animate-pulse rounded"></div>
                  <div className="h-4 w-4/5 bg-gray-700 animate-pulse rounded"></div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <div className="h-6 w-32 bg-gray-700 animate-pulse rounded"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-700 animate-pulse rounded"></div>
                  <div className="h-4 w-3/4 bg-gray-700 animate-pulse rounded"></div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <div className="h-6 w-40 bg-gray-700 animate-pulse rounded"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-700 animate-pulse rounded"></div>
                  <div className="h-4 w-4/5 bg-gray-700 animate-pulse rounded"></div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <div className="h-6 w-36 bg-gray-700 animate-pulse rounded"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-700 animate-pulse rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-700 animate-pulse rounded"></div>
                </div>
              </div>

              {/* Button Shimmer */}
              <div className="pt-4">
                <div className="h-12 w-48 bg-gray-700 animate-pulse rounded-lg"></div>
              </div>
            </div>

            {/* Right Column Shimmer */}
            <div className="relative">
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/50">
                <div className="text-center space-y-8">
                  {/* Main Icon Shimmer */}
                  <div className="relative">
                    <div className="w-32 h-32 bg-gray-700 animate-pulse rounded-full mx-auto"></div>

                    {/* Floating Elements Shimmer */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-700 animate-pulse rounded"></div>
                    <div className="absolute -top-2 -right-6 w-6 h-6 bg-gray-700 animate-pulse rounded"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gray-700 animate-pulse rounded"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gray-700 animate-pulse rounded"></div>
                  </div>

                  {/* Code Snippet Shimmer */}
                  <div className="bg-gray-900 rounded-lg p-4 space-y-2">
                    <div className="h-4 w-32 bg-gray-700 animate-pulse rounded"></div>
                    <div className="h-4 w-40 bg-gray-700 animate-pulse rounded ml-4"></div>
                    <div className="h-4 w-48 bg-gray-700 animate-pulse rounded ml-4"></div>
                    <div className="h-4 w-36 bg-gray-700 animate-pulse rounded ml-4"></div>
                    <div className="h-4 w-8 bg-gray-700 animate-pulse rounded"></div>
                  </div>

                  {/* Tech Stack Icons Shimmer */}
                  <div className="flex justify-center space-x-4 pt-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="w-12 h-12 bg-gray-700 animate-pulse rounded-lg"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-indigo-400 mr-3">👋</span>
                Hello, I'm Sonam!
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a final-year student at IGDTUW with a passion for creating digital experiences that make a difference. My journey in tech started with curiosity and has evolved into a deep love for problem-solving through code.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="text-purple-400 mr-3">💻</span>
                What I Do
              </h4>
              <p className="text-gray-300 leading-relaxed">
                I specialize in frontend development with React.js, creating responsive and interactive web applications. I have experience integrating AI technologies like Google Gemini API to build intelligent applications that provide personalized user experiences.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="text-green-400 mr-3">🚀</span>
                My Approach
              </h4>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and creating user-first designs. Every project I work on is an opportunity to learn something new and push the boundaries of what's possible with modern web technologies.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="text-orange-400 mr-3">🌟</span>
                Beyond Code
              </h4>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, I contribute to open source projects and participate in community events like SWOC. I believe in collaborative development and knowledge sharing to help grow the developer community.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="/resume/Sonam_Mourya_Resume.pdf"
                download="Sonam_Mourya_Resume.pdf"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column - Girl with Laptop Illustration */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '400ms' }}>
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-3xl"></div>

              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                <div className="text-center space-y-6">
                  {/* Girl Working on Laptop Emoji/Icon */}
                  <div className="relative">
                    <div className="text-9xl animate-pulse">👩‍💻</div>

                    {/* Floating Code Elements */}
                    <div className="absolute -top-4 -left-4 text-2xl animate-bounce delay-100">⚛️</div>
                    <div className="absolute -top-2 -right-6 text-xl animate-pulse delay-300">🔥</div>
                    <div className="absolute -bottom-2 -left-2 text-lg animate-bounce delay-500">💻</div>
                    <div className="absolute -bottom-4 -right-4 text-xl animate-pulse delay-700">🚀</div>
                  </div>

                  {/* Code Snippet Visualization */}
                  <div className="bg-gray-900 rounded-lg p-4 text-left font-mono text-sm">
                    <div className="text-green-400">const developer = {'{'}</div>
                    <div className="text-blue-400 ml-4">name: <span className="text-yellow-400">"Sonam"</span>,</div>
                    <div className="text-blue-400 ml-4">skills: <span className="text-purple-400">["React", "JS", "AI"]</span>,</div>
                    <div className="text-blue-400 ml-4">passion: <span className="text-red-400">true</span></div>
                    <div className="text-green-400">{'};'}</div>
                  </div>

                  {/* Tech Stack Icons */}
                  <div className="flex justify-center space-x-4 pt-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform duration-300" title="React">
                      ⚛️
                    </div>
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black text-xl font-bold hover:scale-110 transition-transform duration-300" title="JavaScript">
                      JS
                    </div>
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform duration-300" title="Firebase">
                      🔥
                    </div>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center text-white text-xl font-bold hover:scale-110 transition-transform duration-300" title="Tailwind CSS">
                      TW
                    </div>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform duration-300" title="Git">
                      📚
                    </div>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform duration-300" title="REST API">
                      🔗
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
