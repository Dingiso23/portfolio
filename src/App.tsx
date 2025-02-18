import React, { useState } from 'react';
import { Github, Linkedin, ExternalLink, Menu, X, Sun, Moon, MapPin } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-sm z-50 transition-colors duration-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">YD</span>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <ScrollLink to="home" smooth={true} duration={500} className="nav-link text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Home</ScrollLink>
                <ScrollLink to="about" smooth={true} duration={500} className="nav-link text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">About</ScrollLink>
                <ScrollLink to="services" smooth={true} duration={500} className="nav-link text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Services</ScrollLink>
                <ScrollLink to="mywork" smooth={true} duration={500} className="nav-link text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">My Work</ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} className="nav-link text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Contact</ScrollLink>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun size={20} className="text-gray-300" /> : <Moon size={20} className="text-gray-700" />}
                </button>

                {/* Mobile Menu Button */}
                <button 
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={24} className="text-gray-700 dark:text-gray-300" /> : <Menu size={24} className="text-gray-700 dark:text-gray-300" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <ScrollLink to="home" smooth={true} duration={500} className="nav-link block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Home</ScrollLink>
                <ScrollLink to="about" smooth={true} duration={500} className="nav-link block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">About</ScrollLink>
                <ScrollLink to="services" smooth={true} duration={500} className="nav-link block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Services</ScrollLink>
                <ScrollLink to="mywork" smooth={true} duration={500} className="nav-link block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">My Work</ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} className="nav-link block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Contact</ScrollLink>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white pt-16">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1509537257950-20f875b03669?auto=format&fit=crop&q=80"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div 
            className="relative z-10 text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Yongama Dingiso</h1>
            <p className="text-xl md:text-2xl mb-8">Data Analyst & Data Scientist</p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/YongamaDingiso" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/yongama-dingiso-b7b906242/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </section>

        <section id="about" ref={aboutRef} className={`py-20 px-4 bg-white dark:bg-gray-800 transition-colors duration-200 ${aboutInView ? 'animate-slide-in' : ''}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.img 
                src="/picture/Yongama.jpg"
                alt="Profile"
                className="rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I'm a dedicated Data Analyst and Data Scientist with a passion for transforming complex data into actionable insights.
                  My expertise lies in statistical analysis, machine learning, and data visualization, helping organizations make data-driven decisions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="font-semibold w-32 dark:text-white">Specialization:</span>
                    <span className="text-gray-600 dark:text-gray-300">Data Analysis & Machine Learning</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold w-32 dark:text-white">Focus Areas:</span>
                    <span className="text-gray-600 dark:text-gray-300">Predictive Analytics, Data Visualization</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold w-32 dark:text-white">Location:</span>
                    <span className="text-gray-600 dark:text-gray-300 flex items-center">
                      <MapPin size={16} className="mr-1 text-indigo-600 dark:text-indigo-400" />
                      Cape Town, Western Cape, South Africa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" ref={servicesRef} className={`py-20 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-200 ${servicesInView ? 'animate-slide-in' : ''}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-xl font-bold mb-4 dark:text-white">Data Collection & Cleaning</h3>
                <p className="text-gray-600 dark:text-gray-300">Efficient data collection and cleaning to ensure data quality and accuracy.</p>
              </motion.div>
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-xl font-bold mb-4 dark:text-white">Data Analysis & Interpretation</h3>
                <p className="text-gray-600 dark:text-gray-300">Comprehensive data analysis and interpretation to drive business decisions.</p>
              </motion.div>
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-xl font-bold mb-4 dark:text-white">Big Data & Cloud Computing</h3>
                <p className="text-gray-600 dark:text-gray-300">Leveraging big data technologies and cloud computing for scalable data solutions.</p>
              </motion.div>
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-xl font-bold mb-4 dark:text-white">AI and Deep Learning</h3>
                <p className="text-gray-600 dark:text-gray-300">Implementing AI and deep learning techniques for advanced data analysis.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="mywork" ref={projectsRef} className={`py-20 px-4 bg-white dark:bg-gray-800 transition-colors duration-200 ${projectsInView ? 'animate-slide-in' : ''}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Featured Projects</h2>
            <Slider {...settings}>
              <motion.div 
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img 
                  src="/picture/weather app.PNG"
                  alt="Weather App"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Weather App</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A comprehensive weather application providing real-time weather data and forecasts using advanced data analysis.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded text-sm">Python</span>
                      <span className="px-2 py-1 bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300 rounded text-sm">API</span>
                    </div>
                    <a href="https://my-wether-app.vercel.app/" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img 
                  src="/picture/Dashboard.PNG"
                  alt="Dashboard"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Analytics Dashboard</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Interactive dashboard for business analytics with real-time data visualization and insights.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300 rounded text-sm">Tableau</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300 rounded text-sm">SQL</span>
                    </div>
                    <a href="https://dashboard-rust-psi.vercel.app/" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img 
                  src="/picture/website.PNG"
                  alt="Wipro Website"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Wipro Website</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Development and analytics implementation for Wipro's web platform.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300 rounded text-sm">Analytics</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded text-sm">Web</span>
                    </div>
                    <a href="https://yongamadingiso.wixsite.com/wipro-2" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img 
                  src="/picture/chatbot.PNG"
                  alt="Chatboard"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Chatboard</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    AI-powered chatboard with advanced natural language processing capabilities.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300 rounded text-sm">ML</span>
                      <span className="px-2 py-1 bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300 rounded text-sm">NLP</span>
                    </div>
                    <a href="https://capaciti-chatbot-assistance.netlify.app/" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </Slider>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-10 text-gray-800 dark:text-white tracking-tight">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Interested in collaborating or exploring my data science projects? Feel free to connect with me!
            </p>

            <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
              <div className="text-left md:w-1/3">
                <p className="text-gray-800 dark:text-white mb-4">Email: <a href="yongamadingiso@!gmail.com" className="underline">yongamadingiso@gmail.com</a></p>
                <p className="text-gray-800 dark:text-white">Phone: 0795942158</p>
              </div>

              <form className="w-full max-w-lg text-left md:w-2/3">
                <div className="mb-4">
                  <label htmlFor="firstName" className="block text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="lastName" className="block text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required></textarea>
                </div>
                <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                  Send Message
                </button>
              </form>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://github.com/YongamaDingiso"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white dark:bg-gray-700 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-transform transform hover:scale-105"
              >
                <Github className="mr-2" size={24} />
                GitHub
              </a>

              <a 
                href="https://www.linkedin.com/in/yongama-dingiso-b7b906242/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white dark:bg-blue-700 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-transform transform hover:scale-105"
              >
                <Linkedin className="mr-2" size={24} />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900 dark:bg-black text-white transition-colors duration-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://github.com/YongamaDingiso" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/yongama-dingiso-b7b906242/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-gray-400">© 2024 Yongama Dingiso. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;