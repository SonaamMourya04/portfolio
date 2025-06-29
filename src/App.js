import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans scroll-smooth">
      <Navbar />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
 