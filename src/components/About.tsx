import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design Focus",
      description: "Creating intuitive user interfaces with attention to detail"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              digital solutions that make a difference. My journey began with a curiosity for 
              how things work on the web, and it has evolved into a deep love for crafting 
              exceptional user experiences.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or enjoying a good book on software architecture. I believe 
              in continuous learning and staying up-to-date with the latest industry trends.
            </p>
            
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-2 shadow-2xl">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-gray-600">JS</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                <Code className="w-8 h-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
                <Palette className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;