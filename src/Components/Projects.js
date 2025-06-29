import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaCode, FaStar } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial loading simulation on component mount
    const initialLoadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      clearTimeout(initialLoadTimer);
      observer.disconnect();
    };
  }, []);

  // Shimmer animation classes
  const shimmerClasses = "animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800";

  // Debug logging
  console.log("Projects component render - isLoading:", isLoading);

  const projects = [
    {
      title: "CineSphere",
      emoji: "🎬",
      desc: "An AI-powered movie recommendation platform with intelligent personalized suggestions and seamless user experience.",
      features: [
        "Built CineSphere, an AI-driven movie platform using React.js, Firebase, and the Google Gemini API",
        "Integrated TMDB for real-time movie data and Gemini AI for smart user recommendations",
        "Designed a responsive UI with Tailwind CSS, adding intelligent search and dynamic filtering features",
      ],
      tech: ["React", "Firebase", "TMDB API", "Gemini AI", "Tailwind CSS"],
      video: "/videos/cinesphere-demo.mp4",
      github: "https://github.com/SonaamMourya04/CineSphere",
      live: "https://cinesphere-ab97c.firebaseapp.com",
      category: "AI Web App",
      status: "Completed",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50"
    },
    {
      title: "FoodHouse",
      emoji: "🍽️",
      desc: "Modern food delivery interface featuring advanced filtering systems, restaurant ratings, and optimized loading states for seamless user experience.",
      features: [
        "Developed a full-featured food delivery application using React 18 and modern JavaScript",
        "Implemented responsive UI with Tailwind CSS for optimal viewing across all device sizes",
        "Utilized Redux Toolkit for efficient state management and predictable data flow",
        "Integrated third-party APIs for real-time restaurant and menu data",
        "Implemented user authentication and data persistence with Firebase"
      ],
      tech: ["React", "JavaScript", "Tailwind CSS", "Shimmer UI", "REST API"],
      github: "https://github.com/SonaamMourya04/FoodHouse",
      live: "https://foodhouse-8b803.firebaseapp.com",
      category: "UI/UX",
      status: "Completed",
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-50 to-yellow-50"
    },
    {
      title: "YouTube Clone",
      emoji: "📺",
      desc: "Pixel-perfect YouTube replica with real video streaming, dynamic search functionality, responsive design, and modern UI components that mirror the original platform's user experience.",
      tech: ["React", "YouTube API", "CSS3", "JavaScript"],
      video: "/videos/youtubeclone-demo.mp4",
      github: "https://github.com/SonaamMourya04/Youtube-Clone",
      live: "https://youtube-clone-demo.netlify.app",
      category: "Clone",
      status: "Completed",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50"
    },
  ];

  // Always show shimmer first, then content
  if (isLoading) {
    console.log("Rendering shimmer UI");
    return (
      <section className="py-24 px-6 bg-black relative overflow-hidden" id="projects">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-pink-400 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-1200"></div>
          <div className="absolute bottom-20 right-20 w-5 h-5 bg-purple-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-ping delay-900"></div>
          <div className="absolute bottom-40 left-1/3 w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-1100"></div>
          <div className="absolute bottom-24 right-16 w-3 h-3 bg-orange-400 rounded-full animate-bounce delay-600"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Complete Shimmer UI for entire Projects section */}
          <div className="space-y-20">
            {/* Loading indicator */}
            <div className="text-center">
              <div className="text-white text-lg mb-4">Loading Projects...</div>
            </div>
            {/* Header Shimmer */}
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-gray-700 animate-pulse"></div>
                <div className="h-12 w-80 rounded bg-gray-700 animate-pulse"></div>
                <div className="w-8 h-8 rounded bg-gray-700 animate-pulse"></div>
              </div>
              <div className="space-y-3 max-w-3xl mx-auto">
                <div className="h-6 w-full rounded bg-gray-700 animate-pulse"></div>
                <div className="h-6 w-3/4 mx-auto rounded bg-gray-700 animate-pulse"></div>
              </div>
            </div>

            {/* Projects Grid Shimmer */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 overflow-hidden"
                >
                  {/* Header Shimmer */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-2xl bg-gray-700 animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="h-6 w-32 rounded bg-gray-700 animate-pulse"></div>
                        <div className="flex space-x-2">
                          <div className="h-4 w-16 rounded-full bg-gray-700 animate-pulse"></div>
                          <div className="h-4 w-12 rounded-full bg-gray-700 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description Shimmer */}
                  <div className="space-y-2 mb-6">
                    <div className="h-4 w-full rounded bg-gray-700 animate-pulse"></div>
                    <div className="h-4 w-3/4 rounded bg-gray-700 animate-pulse"></div>
                    <div className="h-4 w-5/6 rounded bg-gray-700 animate-pulse"></div>
                  </div>

                  {/* Features Shimmer */}
                  <div className="mb-6">
                    <div className={`h-4 w-24 rounded mb-3 ${shimmerClasses}`}></div>
                    <div className="space-y-2">
                      <div className={`h-3 w-full rounded ${shimmerClasses}`}></div>
                      <div className={`h-3 w-4/5 rounded ${shimmerClasses}`}></div>
                      <div className={`h-3 w-3/4 rounded ${shimmerClasses}`}></div>
                    </div>
                  </div>

                  {/* Tech Stack Shimmer */}
                  <div className="mb-6">
                    <div className={`h-4 w-20 rounded mb-3 ${shimmerClasses}`}></div>
                    <div className="flex flex-wrap gap-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className={`h-6 w-16 rounded-full ${shimmerClasses}`}></div>
                      ))}
                    </div>
                  </div>

                  {/* Video Shimmer */}
                  <div className={`w-full h-48 rounded-xl mb-6 ${shimmerClasses}`}></div>

                  {/* Buttons Shimmer */}
                  <div className="flex space-x-4">
                    <div className={`flex-1 h-12 rounded-xl ${shimmerClasses}`}></div>
                    <div className={`flex-1 h-12 rounded-xl ${shimmerClasses}`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action Shimmer */}
            <div className="text-center space-y-6">
              <div className={`h-6 w-64 mx-auto rounded ${shimmerClasses}`}></div>
              <div className={`h-12 w-48 mx-auto rounded-full ${shimmerClasses}`}></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden" id="projects">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-16 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-48 right-24 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-800"></div>
        <div className="absolute bottom-40 left-1/3 w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-1100"></div>
        <div className="absolute bottom-24 right-16 w-3 h-3 bg-orange-400 rounded-full animate-bounce delay-600"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {isLoading ? (
          // Complete Shimmer UI for entire Projects section
          <div className="space-y-20">
            {/* Header Shimmer */}
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded ${shimmerClasses}`}></div>
                <div className={`h-12 w-80 rounded ${shimmerClasses}`}></div>
                <div className={`w-8 h-8 rounded ${shimmerClasses}`}></div>
              </div>
              <div className="space-y-3 max-w-3xl mx-auto">
                <div className={`h-6 w-full rounded ${shimmerClasses}`}></div>
                <div className={`h-6 w-3/4 mx-auto rounded ${shimmerClasses}`}></div>
              </div>
            </div>

            {/* Projects Grid Shimmer */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 overflow-hidden"
                >
                  {/* Header Shimmer */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl ${shimmerClasses}`}></div>
                      <div className="space-y-2">
                        <div className={`h-6 w-32 rounded ${shimmerClasses}`}></div>
                        <div className="flex space-x-2">
                          <div className={`h-4 w-16 rounded-full ${shimmerClasses}`}></div>
                          <div className={`h-4 w-12 rounded-full ${shimmerClasses}`}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description Shimmer */}
                  <div className="space-y-2 mb-6">
                    <div className={`h-4 w-full rounded ${shimmerClasses}`}></div>
                    <div className={`h-4 w-3/4 rounded ${shimmerClasses}`}></div>
                    <div className={`h-4 w-5/6 rounded ${shimmerClasses}`}></div>
                  </div>

                  {/* Features Shimmer */}
                  <div className="mb-6">
                    <div className={`h-4 w-24 rounded mb-3 ${shimmerClasses}`}></div>
                    <div className="space-y-2">
                      <div className={`h-3 w-full rounded ${shimmerClasses}`}></div>
                      <div className={`h-3 w-4/5 rounded ${shimmerClasses}`}></div>
                      <div className={`h-3 w-3/4 rounded ${shimmerClasses}`}></div>
                    </div>
                  </div>

                  {/* Tech Stack Shimmer */}
                  <div className="mb-6">
                    <div className={`h-4 w-20 rounded mb-3 ${shimmerClasses}`}></div>
                    <div className="flex flex-wrap gap-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className={`h-6 w-16 rounded-full ${shimmerClasses}`}></div>
                      ))}
                    </div>
                  </div>

                  {/* Video Shimmer */}
                  <div className={`w-full h-48 rounded-xl mb-6 ${shimmerClasses}`}></div>

                  {/* Buttons Shimmer */}
                  <div className="flex space-x-4">
                    <div className={`flex-1 h-12 rounded-xl ${shimmerClasses}`}></div>
                    <div className={`flex-1 h-12 rounded-xl ${shimmerClasses}`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action Shimmer */}
            <div className="text-center space-y-6">
              <div className={`h-6 w-64 mx-auto rounded ${shimmerClasses}`}></div>
              <div className={`h-12 w-48 mx-auto rounded-full ${shimmerClasses}`}></div>
            </div>
          </div>
        ) : (
          // Actual Projects Content
          <>
            {/* Header Section */}
            <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <HiSparkles className="text-3xl text-yellow-400 animate-spin hover:animate-pulse cursor-pointer" />
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-pulse hover:animate-none transition-all duration-300">
                  Featured Projects
                </h2>
                <HiSparkles className="text-3xl text-yellow-400 animate-spin hover:animate-pulse cursor-pointer" />
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Showcasing my passion for creating
                <span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text font-semibold"> innovative digital solutions</span>
              </p>
            </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-105 cursor-pointer overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
              onMouseEnter={() => setActiveProject(idx)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>

              <div className="relative z-10 p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.gradient} text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-2xl`}>
                      {project.emoji}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white font-medium`}>
                          {project.category}
                        </span>
                        <span className="text-xs text-green-400 flex items-center">
                          <FaStar className="mr-1" />
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {project.desc}
                </p>

                {/* Project Features */}
                {project.features && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-2"></span>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="text-sm text-gray-400 flex items-start">
                          <span className="text-indigo-400 mr-2 mt-1">•</span>
                          <span className="group-hover:text-gray-300 transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center">
                    <FaCode className="mr-2" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-600 hover:border-gray-500 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>



                {/* Video Preview */}
                <div className="mb-6 relative group/video">
                  <video
                    className="w-full h-48 rounded-xl border border-gray-600 group-hover:border-gray-500 transition-colors duration-300 object-cover"
                    poster="/api/placeholder/400/200"
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
                    <FaPlay className="text-white text-2xl" />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all duration-300 hover:scale-105 border border-gray-600 hover:border-gray-500"
                  >
                    <FaGithub />
                    <span className="text-sm font-medium">Project Code</span>
                  </a>
                  <a
                    href={project.live}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r ${project.gradient} text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg`}
                  >
                    <FaExternalLinkAlt />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>

                {/* Hover Effect Indicator */}
                <div className={`mt-6 h-1 bg-gradient-to-r ${project.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaGithub className="text-xl" />
            <span>View All Projects on GitHub</span>
          </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
