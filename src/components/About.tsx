import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Trophy, Code, Tv } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: Calendar,
      title: 'Yosh mutaxassis',
      description: '2007 yil 5-sentabrda tug\'ilgan. Yoshligimdan boshlab IT sohasiga qiziqish bildirganman va bu sohadagi bilimlarimni muntazam ravishda oshirib boraman.',
      color: 'bg-blue-100 text-blue-600',
      delay: '0ms'
    },
    {
      icon: Trophy,
      title: 'Maktab yutuqlarim',
      description: 'Maktabda informatika olimpiadasida faxrli 3-o\'rinni qo\'lga kiritganman. Bu mening dasturlash sohasidagi birinchi katta yutuqim bo\'ldi.',
      color: 'bg-green-100 text-green-600',
      delay: '200ms'
    },
    {
      icon: Code,
      title: 'Dasturlash tajribasi',
      description: '2 yil davomida Front-End dasturchi sifatida faol o\'qib va amaliy loyihalar ustida ishlaganman. Zamonaviy web texnologiyalarni o\'rganishda davom etmoqdaman.',
      color: 'bg-purple-100 text-purple-600',
      delay: '400ms'
    },
    {
      icon: Tv,
      title: 'Bilim ulashish',
      description: '@Webbuild Telegram kanalimda IT sohasiga oid foydali ma\'lumotlar va turli xil kodlar bilan o\'rtoqlashaman.',
      color: 'bg-orange-100 text-orange-600',
      delay: '600ms'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative">
              Men haqimda
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Dasturlash sohasiga ishtiyoqli yosh mutaxassis, doimiy o'rganish
              va rivojlanishga intilaman
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isVisible ? feature.delay : '0ms'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-xl ${feature.color} group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                    <feature.icon className="h-6 w-6 relative z-10" />
                    <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                      {feature.title === 'Bilim ulashish' && (
                        <a
                          href="https://t.me/WebBuildUz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium ml-1 relative group/link"
                        >
                          @Webbuild
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/link:w-full transition-all duration-300"></span>
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 text-center relative overflow-hidden transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
                Mening maqsadim
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                </div>
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Dasturlash sohasida chuqur bilimga ega bo'lish, zamonaviy
                texnologiyalarni o'rganish va o'z tajribalarimni boshqalar bilan
                baham ko'rish orqali IT jamiyatiga hissa qo'shish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;