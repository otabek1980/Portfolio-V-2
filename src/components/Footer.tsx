import React from 'react';
import { Heart, Code2, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center gap-3 mb-6 md:mb-0 group cursor-pointer" onClick={scrollToTop}>
              <div className="relative">
                <Code2 className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
              </div>
              <span className="text-2xl font-bold group-hover:text-blue-300 transition-colors duration-300">
                Otabek Xodjayev
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2 group">
                <span className="group-hover:text-white transition-colors duration-300">Muhabbat bilan yasalgan</span>
                <Heart className="h-4 w-4 text-red-500 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>©</span>
                <span>{new Date().getFullYear()}</span>
                <span className="hover:text-white transition-colors duration-300">Otabek Xodjayev</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400 text-sm leading-relaxed">
                  IT sohasiga oid ko'proq ma'lumotlar uchun{' '}
                  <a 
                    href="https://t.me/WebBuildUz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium relative group"
                  >
                    @Webbuild
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                  {' '}kanalimga obuna bo'ling
                </p>
              </div>
              
              <button
                onClick={scrollToTop}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;