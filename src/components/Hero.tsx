import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  onNavClick: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavClick }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 p-1 shadow-xl">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
              JS
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              John Smith
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, functional web experiences with modern technologies. 
            Passionate about clean code, intuitive design, and solving complex problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => onNavClick('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => onNavClick('contact')}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:john@example.com"
              className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => onNavClick('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;