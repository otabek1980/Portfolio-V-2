import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Instagram, MessageCircle, Tv, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contacts = [
    {
      icon: Mail,
      title: 'Email',
      value: 'devuzkhodjayev@gmail.com',
      href: 'mailto:devuzkhodjayev@gmail.com',
      color: 'bg-red-100 text-red-600 group-hover:bg-red-500 group-hover:text-white'
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+998 91 912 66 11',
      href: 'tel:+998919126611',
      color: 'bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white'
    },
    {
      icon: MapPin,
      title: 'Joylashuv',
      value: 'Uzbekistan',
      href: '#',
      color: 'bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/otabek1980',
      color: 'bg-gray-900 hover:bg-gray-800 hover:scale-105'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: 'https://www.instagram.com/webbuilduz/',
      color: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 hover:scale-105'
    },
    {
      icon: MessageCircle,
      name: 'Telegram',
      href: 'https://t.me/Sentabr052007',
      color: 'bg-blue-500 hover:bg-blue-600 hover:scale-105'
    },
    {
      icon: Tv,
      name: 'Telegram Kanal',
      href: 'https://t.me/WebBuildUz',
      color: 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:scale-105'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative">
              Bog'lanish
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Savollaringiz bo'lsa yoki loyihalar ustida hamkorlik qilishni istasangiz, men bilan bog'laning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {/* Contact info */}
              <div className={`bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Aloqa ma'lumotlari
                </h3>
                <div className="space-y-4">
                  {contacts.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 transform hover:translate-x-2 hover:shadow-md"
                    >
                      <div className={`p-3 rounded-xl ${contact.color} transition-all duration-300`}>
                        <contact.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {contact.title}
                        </h4>
                        <p className="text-gray-600">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className={`bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Ijtimoiy tarmoqlar
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-xl text-white ${social.color} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <social.icon className="h-5 w-5 relative z-10" />
                      <span className="font-medium relative z-10">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Telegram channel promotion */}
              <div className={`bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 rounded-3xl text-white relative overflow-hidden transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3">
                    Telegram kanalim
                  </h3>
                  <p className="mb-6 opacity-90">
                    @WebBuildUz kanalimda IT sohasiga oid foydali ma'lumotlar va kodlar bilan tanishing!
                  </p>
                  <a
                    href="https://t.me/WebBuildUz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Tv className="h-4 w-4 group-hover:animate-bounce" />
                    Kanalga obuna bo'ling
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className={`bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Xabar yuborish
              </h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 font-medium">Xabaringiz muvaffaqiyatli yuborildi!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 bg-white/50"
                    placeholder="Ismingizni kiriting"
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 bg-white/50"
                    placeholder="Email manzilingizni kiriting"
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                    Xabar
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:border-gray-400 bg-white/50"
                    placeholder="Xabaringizni yozing..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="relative z-10">Yuborilmoqda...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                      <span className="relative z-10">Xabar yuborish</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;