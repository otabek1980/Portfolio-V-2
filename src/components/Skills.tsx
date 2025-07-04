import { useEffect, useRef, useState } from 'react';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateSkills(true), 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'HTML/CSS', level: 96, color: 'bg-gradient-to-r from-orange-400 to-red-500' },
    { name: 'JavaScript', level: 89, color: 'bg-gradient-to-r from-yellow-400 to-orange-500' },
    { name: 'TypeScript', level: 80, color: 'bg-gradient-to-r from-blue-500 to-indigo-600' },
    { name: 'Tailwind CSS', level: 75, color: 'bg-gradient-to-r from-teal-400 to-cyan-500' },
    { name: 'Git/GitHub', level: 92, color: 'bg-gradient-to-r from-gray-600 to-gray-800' },
    { name: 'UI/UX Design', level: 78, color: 'bg-gradient-to-r from-pink-400 to-rose-500' },
  ];

  const categories = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Zamonaviy web texnologiyalar bilan ishlayman',
      color: 'bg-blue-100 text-blue-600',
      hoverColor: 'group-hover:bg-blue-600 group-hover:text-white'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Foydalanuvchilar uchun qulay interfeys yarataman',
      color: 'bg-purple-100 text-purple-600',
      hoverColor: 'group-hover:bg-purple-600 group-hover:text-white'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Barcha qurilmalar uchun moslashtirilgan dizayn',
      color: 'bg-green-100 text-green-600',
      hoverColor: 'group-hover:bg-green-600 group-hover:text-white'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Eng so\'nggi web standartlari va amaliyotlari',
      color: 'bg-orange-100 text-orange-600',
      hoverColor: 'group-hover:bg-orange-600 group-hover:text-white'
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative">
              Mening ko'nikmalarim
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Front-End dasturlash sohasidagi bilim va tajribalarim
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100 relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`w-14 h-14 rounded-xl ${category.color} ${category.hoverColor} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative z-10`}>
                  <category.icon className="h-7 w-7 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                  {category.description}
                </p>
              </div>
            ))}
          </div>

          <div className={`bg-white rounded-3xl shadow-xl p-8 border border-gray-100 relative overflow-hidden transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center relative">
              Texnik ko'nikmalar
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`space-y-3 group transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${600 + index * 100}ms` : '0ms'
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ 
                          width: animateSkills ? `${skill.level}%` : '0%',
                          transitionDelay: `${800 + index * 100}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;