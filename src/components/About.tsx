import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Experienced in HTML, CSS, JavaScript, PHP, Python, Flask, Node.js, HeidiSQL, and MySQL databases"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Applied ML in sentiment analysis, image processing, and genetic algorithms"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "System Design",
      description: "Built multi-user systems with role-based access and complex calculations"
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
              I'm a Computer Science student from UiTM Kuala Terengganu with strong 
              hands-on experience in full-stack web development, backend systems, and data analysis. 
              My journey has taken me through machine learning projects, system optimization, 
              and building comprehensive product management platforms.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From developing automated examination scheduling systems using Genetic Algorithms 
              to creating sentiment analysis web applications, I'm passionate about solving 
              real-world problems through innovative technology solutions. I'll be available 
              to start my career in October 2025.
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
                  <div className="text-6xl font-bold text-gray-600">MF</div>
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
