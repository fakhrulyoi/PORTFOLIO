import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "myIASME.com System",
      description: "A comprehensive product management system developed during internship at IASME GROUP. Features multi-user system with 4 distinct user roles, product reporting, dashboards with complex calculations (profit, sales margin, ROI, stock tracking), winning DNA insights, and product proposals. Deployed using GBNetwork hosting.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "GBNetwork Hosting"],
      liveUrl: "https://myiasme.com",
      githubUrl: "#",
      awards: []
    },
    {
      title: "Examination Invigilation Timetabling System",
      description: "Automated scheduling system using Genetic Algorithm to optimize invigilator assignments for examinations. Ensures equitable workload distribution while considering constraints like availability, subject expertise, and exam times. Significantly improved efficiency and accuracy in examination management.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Genetic Algorithm", "Data Analysis", "Optimization", "Scheduling"],
      liveUrl: "#",
      githubUrl: "#",
      awards: ["Best Project Award (COMMAX)", "Silver Award - GDIID 2025"]
    },
    {
      title: "TikTok Sentiment Analysis Web App",
      description: "Flask-based web application for analyzing TikTok reviews' sentiment (Positive, Neutral, Negative). Integrates pre-trained ML model with TF-IDF vectorizer providing real-time predictions with confidence scores. Features responsive design and dynamic UI updates through JSON API.",
      image: "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Flask", "Machine Learning", "TF-IDF", "HTML", "Tailwind CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      awards: []
    },
    {
      title: "E-Kelas Mengaji Website",
      description: "Online platform facilitating Quranic learning classes, connecting students with qualified tutors. Built with responsive front-end using HTML, CSS, and JavaScript. Secure back-end with PHP and MySQL enables user authentication, session management, and class scheduling.",
      image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      awards: []
    },
    {
      title: "E-Kenderaan System",
      description: "Vehicle booking system developed for LKPP Corporation with intuitive interface for viewing booking details, car status, and driver assignments. Created comprehensive 6-minute video tutorial and streamlined booking workflow with real-time status updates for staff and administrators.",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Java", "NetBeans", "HeidiSQL", "MySQL", "GitKraken"],
      liveUrl: "#",
      githubUrl: "#",
      awards: []
    },
    {
      title: "AI Chatbot & Agent Collection",
      description: "Multiple AI-powered solutions including YPAS organizational chatbot, Mobile Legends strategy agent, conversational calculator, and MyHotel recommendation system. Built using Dify AI platform with intelligent conversation flows and real-time responses.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Dify AI", "Chatbot Development", "AI Agents", "Conversation Flow", "API Integration"],
      liveUrl: "#",
      githubUrl: "#",
      awards: []
    },
    {
      title: "Sistem Analisis Personaliti IASME",
      description: "A comprehensive personality analysis system featuring numerology metaphysics and MBTI personality tests. Interactive web application with modern UI design that helps users discover their personality traits and characteristics through various assessment methods.",
      image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "Personality Testing", "UI/UX Design"],
      liveUrl: "https://fakhrulyoi.github.io/Sistem-Analisis-Personaliti/",
      githubUrl: "https://github.com/fakhrulyoi/Sistem-Analisis-Personaliti",
      awards: []
    },
    {
      title: "YummyKuantan E-Commerce",
      description: "A beautiful e-commerce website for handcrafted cakes delivery service in Kuantan. Features responsive design, product catalog, custom cake ordering system, and elegant user interface. Built with modern web technologies for optimal user experience.",
      image: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "E-Commerce", "Responsive Design"],
      liveUrl: "https://fakhrulyoi.github.io/YUMMYKUANTAN/",
      githubUrl: "https://github.com/fakhrulyoi/YUMMYKUANTAN",
      awards: []
    },
    {
      title: "Interactive Love Letter App",
      description: "A creative and interactive web application for sending personalized messages. Features beautiful animations, interactive elements, and romantic theme with modern design. Demonstrates creativity in frontend development and user engagement techniques.",
      image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "Animations", "Interactive Design"],
      liveUrl: "https://fakhrulyoi.github.io/surat/",
      githubUrl: "https://github.com/fakhrulyoi/surat",
      awards: []
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
                {project.awards.length > 0 && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      🏆 Award Winner
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    {project.liveUrl !== "#" ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 text-gray-800 px-3 py-2 rounded-lg font-medium hover:bg-white transition-colors duration-200 flex items-center space-x-2"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="bg-gray-500/90 text-white px-3 py-2 rounded-lg font-medium flex items-center space-x-2 cursor-not-allowed">
                        <ExternalLink size={16} />
                        <span>Private</span>
                      </span>
                    )}
                    {project.githubUrl !== "#" ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800/90 text-white px-3 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    ) : (
                      <span className="bg-gray-500/90 text-white px-3 py-2 rounded-lg font-medium flex items-center space-x-2 cursor-not-allowed">
                        <Github size={16} />
                        <span>Private</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                </div>
                
                {project.awards.length > 0 && (
                  <div className="mb-3">
                    {project.awards.map((award, awardIndex) => (
                      <div key={awardIndex} className="flex items-center text-sm text-amber-600 mb-1">
                        <span className="mr-2">🏆</span>
                        <span className="font-medium">{award}</span>
                      </div>
                    ))}
                  </div>
                )}
                
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