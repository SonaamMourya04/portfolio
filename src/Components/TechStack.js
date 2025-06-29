import React, { useState } from "react";

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const techCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "🎨",
      color: "from-blue-500 to-purple-600",
      technologies: [
        {
          name: "React",
          icon: "⚛️",
          level: 90,
          description: "Building dynamic user interfaces with hooks and state management"
        },
        {
          name: "JavaScript (ES6+)",
          icon: "🟨",
          level: 85,
          description: "Modern JavaScript with async/await, destructuring, and modules"
        },
        {
          name: "HTML5 & CSS3",
          icon: "🎨",
          level: 95,
          description: "Semantic HTML and modern CSS with Flexbox and Grid"
        },
        {
          name: "Tailwind CSS",
          icon: "💨",
          level: 80,
          description: "Utility-first CSS framework for rapid UI development"
        },
        {
          name: "Responsive Design",
          icon: "📱",
          level: 90,
          description: "Mobile-first approach with cross-browser compatibility"
        },
        {
          name: "Shimmer UI",
          icon: "✨",
          level: 85,
          description: "Loading animation patterns for enhanced user experience"
        }
      ]
    },

    database: {
      title: "Database & Storage",
      icon: "🗄️",
      color: "from-orange-500 to-red-600",
      technologies: [
        {
          name: "MySQL",
          icon: "🐬",
          level: 70,
          description: "Relational database management system"
        },
        {
          name: "Firebase",
          icon: "🔥",
          level: 65,
          description: "Real-time database and authentication platform"
        }
      ]
    },
    tools: {
      title: "Tools & Technologies",
      icon: "🛠️",
      color: "from-purple-500 to-pink-600",
      technologies: [
        {
          name: "Git & GitHub",
          icon: "📚",
          level: 85,
          description: "Version control and collaborative development"
        },
        {
          name: "VS Code",
          icon: "💻",
          level: 95,
          description: "Primary code editor with extensions and customization"
        }
      ]
    }
  };

  const SkillBar = ({ level, color }) => (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div 
        className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${level}%` }}
      ></div>
    </div>
  );

  return (
    <section id="techstack" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of the technologies, frameworks, and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(techCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600 hover:border-gray-500'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories[activeCategory].technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-gray-600"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{tech.icon}</span>
                  <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Proficiency</div>
                  <div className="text-lg font-bold text-indigo-400">{tech.level}%</div>
                </div>
              </div>

              <SkillBar level={tech.level} color={techCategories[activeCategory].color} />

              <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>




      </div>
    </section>
  );
};

export default TechStack;
