import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "PHP", level: 85 },
        { name: "Java", level: 80 },
        { name: "HTML/CSS", level: 92 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Flask", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Machine Learning", level: 82 },
        { name: "TensorFlow", level: 75 }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "VSCode", level: 95 },
        { name: "Jupyter Notebook", level: 85 },
        { name: "Git", level: 80 },
        { name: "MyPHPAdmin", level: 88 }
      ]
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "Dify (AI Chatbot)", level: 85 },
        { name: "AI Chatflow", level: 82 },
        { name: "AI Agent", level: 80 },
        { name: "Genetic Algorithms", level: 88 },
        { name: "Sentiment Analysis", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technical skills acquired through academic projects, internships, and hands-on development experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
