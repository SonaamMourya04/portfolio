import React from "react";

const Intro = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-4 pt-20">
      <div className="animate-fade-in-down transition-opacity duration-1000 ease-out">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Sonam Mourya
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          A passionate <span className="text-yellow-300 font-semibold">Web Developer</span> & tech dreamer 💻
          <br />
          Building beautiful UIs and solving real-world problems — one line of code at a time.
        </p>
        <p className="mt-2 text-base md:text-lg italic text-indigo-100">
          "Learning. Building. Growing — until I become the woman I dream to be."
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-100 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Intro;
