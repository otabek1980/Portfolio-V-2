import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, ShoppingCart, BookOpen, Star, Eye } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Zamonaviy onlayn do\'kon platformasi. React va Tailwind CSS bilan yaratilgan.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration'],
      icon: ShoppingCart,
      color: 'bg-blue-500',
      stats: { stars: 24, views: 1200 }
    },
    {
      title: 'Portfolio Website',
      description: 'Shaxsiy portfolio websayt. Modern dizayn va responsive layout.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      icon: Globe,
      color: 'bg-purple-500',
      stats: { stars: 18, views: 890 }
    },
    {
      title: 'Mobile App UI',
      description: 'Mobil ilova uchun zamonaviy va foydalanuvchi-do\'st interfeys.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['React Native', 'UI/UX', 'Mobile Design', 'Figma'],
      icon: Smartphone,
      color: 'bg-green-500',
      stats: { stars: 31, views: 1450 }
    },
    {
      title: 'Learning Platform',
      description: 'Onlayn o\'quv platformasi. Interaktiv darslar va testlar.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
      tags: ['React', 'Node.js', 'MongoDB', 'Authentication'],
      icon: BookOpen,
      color: 'bg-orange-500',
      stats: { stars: 42, views: 2100 }
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative">
              Mening loyihalarim
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Front-End dasturlash sohasidagi amaliy tajribalarim va yaratgan loyihalarim
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100 relative ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project icon */}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-full ${project.color} flex items-center justify-center transition-all duration-300 ${
                    hoveredProject === index ? 'scale-110 rotate-12' : ''
                  }`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Stats overlay */}
                  <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                    hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500" />
                      <span className="text-xs font-medium">{project.stats.stars}</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Eye className="h-3 w-3 text-blue-500" />
                      <span className="text-xs font-medium">{project.stats.views}</span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-4 transition-all duration-300 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex gap-3">
                      <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium hover:bg-white/30 transition-colors duration-300 flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Ko'rish
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium hover:bg-white/30 transition-colors duration-300 flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Kod
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-2">
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 hover:translate-x-1">
                      <ExternalLink className="h-4 w-4" />
                      Ko'rish
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-all duration-300 hover:translate-x-1">
                      <Github className="h-4 w-4" />
                      Kod
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-8">
              <p className="text-gray-600 mb-6 text-lg">
                Ko'proq loyihalarni GitHub profilimda ko'rishingiz mumkin
              </p>
              <a 
                href="https://github.com/otabek1980" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                <Github className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">GitHub da ko'rish</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;