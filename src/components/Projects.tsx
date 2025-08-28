import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "myIASME.com System",
      description: "A comprehensive product management system with key features like product reporting, adding/editing products, dashboards with calculations (profit, sales margin, ROI, stock), winning DNA insights, and product proposals. Built during internship at IASME GROUP.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      liveUrl: "https://myiasme.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Examination Scheduling System",
      description: "An Automated Examination Invigilation Timetabling System using Genetic Algorithm to automate invigilator assignment, improving efficiency and accuracy. Won Best Project Award (COMMAX) and Silver award in GDIID 2025.",
      image: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Genetic Algorithm", "Data Analysis", "Optimization"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "TikTok Sentiment Analysis Web App",
      description: "A Flask-based web application to analyze TikTok reviews' sentiment (Positive, Neutral, Negative) using a trained machine learning model with TF-IDF vectorizer and real-time sentiment predictions with confidence scores.",
      image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Flask", "Machine Learning", "TF-IDF", "HTML", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "E-Kelas Mengaji Website",
      description: "An online platform to facilitate Quranic learning classes, connecting students with qualified tutors. Built with responsive front-end and secure back-end with user authentication and session management.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "E-Kenderaan System",
      description: "Enhanced vehicle booking system with intuitive main page for viewing booking details, car status, and driver assignments. Created comprehensive video tutorial and streamlined booking workflow for LKPP Corporation.",
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Java", "NetBeans", "HeidiSQL", "MySQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my academic and professional projects, featuring machine learning, full-stack development, and system optimization solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 text-gray-800 px-3 py-2 rounded-lg font-medium hover:bg-white transition-colors duration-200 flex items-center space-x-2"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800/90 text-white px-3 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
