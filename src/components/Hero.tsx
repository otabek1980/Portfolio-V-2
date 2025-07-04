import React, { useEffect, useState } from 'react';
import { Download, ArrowRight, Github, Instagram, MessageCircle, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 2}s`
      }}
    />
  ));

  return (
    <section id="hero" className="pt-20 pb-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            {/* Animated profile picture */}
            <div className={`w-32 h-32 mx-auto mb-8 relative group transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                  <span className="text-4xl font-bold text-gray-800 group-hover:scale-110 transition-transform duration-300">OX</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
              </div>
              <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-bounce" />
            </div>
            
            {/* Animated heading */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                <span className="block animate-fade-in-up">Salom, Men</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                  Otabek Xodjayev
                </span>
              </h1>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 relative">
                <span className="relative z-10">Front-End Developer & IT Enthusiast</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg scale-0 hover:scale-100 transition-transform duration-300 -z-10"></div>
              </p>
            </div>
            
            <div className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                2 yil tajribaga ega Front-End dasturchi. Zamonaviy web texnologiyalar bilan ishlayman va 
                IT sohasidagi bilimlarimni Telegram kanalimda baham ko'raman.
              </p>
            </div>
          </div>

          {/* Animated buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              <span className="relative z-10">Resume yuklash</span>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
              className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10">Bog'lanish</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
            </button>
          </div>

          {/* Animated social links */}
          <div className={`flex justify-center space-x-6 transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { icon: Github, href: 'https://github.com/otabek1980', color: 'hover:bg-gray-900 hover:text-white' },
              { icon: Instagram, href: 'https://www.instagram.com/webbuilduz/', color: 'hover:bg-pink-500 hover:text-white' },
              { icon: MessageCircle, href: 'https://t.me/Sentabr052007', color: 'hover:bg-blue-500 hover:text-white' }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${social.color} relative overflow-hidden`}
                style={{ animationDelay: `${1200 + index * 100}ms` }}
              >
                <social.icon className="h-6 w-6 text-gray-700 group-hover:text-current transition-colors duration-300 relative z-10" />
                <div className="absolute inset-0 bg-current scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full opacity-10"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;