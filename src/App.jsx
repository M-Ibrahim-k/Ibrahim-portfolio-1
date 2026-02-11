import React, { useState } from "react";
import { motion } from "framer-motion";

// Importing images
import leftAboutImg from "./assets/left-about-img.png";
import homeRightBg from "./assets/home-right-bg.png";
import rightClientImg from "./assets/right-client-img.png";
import homebg from "./assets/layer-home-bg.jpeg";
import ibbiCV from "./assets/ibbi-cv.jpeg";
import nourDoc1 from "./assets/nour-doc-1.jpeg";
import nourDoc2 from "./assets/nour-doc-2.jpeg";
import nourDoc3 from "./assets/nour-doc-3.jpeg";
import nourDoc4 from "./assets/nour-doc-4.jpeg";
import nourDoc5 from "./assets/nour-doc-5.jpeg";
import smartAnimal1 from "./assets/smart-animal-1.jpeg";
import smartAnimal2 from "./assets/smart-animal-2.jpeg";
import smartAnimal3 from "./assets/smart-animal-3.jpeg";
import visaAssistant1 from "./assets/visa-assistant-1.jpeg";
import visaAssistant2 from "./assets/visa-assistant-2.jpeg";
import visaAssistant3 from "./assets/visa-assistant-3.jpeg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" }
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openProjectSlider = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectSlider = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const projects = [
    {
      id: 'nour-doc',
      title: 'Nour Doc',
      description: 'Medical consultation app with complete UI/UX design',
      category: 'Healthcare',
      tags: ['UI/UX Design', 'Healthcare'],
      images: [
        { src: nourDoc1, title: "Main Interface", desc: "Primary app interface design" },
        { src: nourDoc2, title: "User Dashboard", desc: "Patient dashboard and navigation" },
        { src: nourDoc3, title: "Consultation Flow", desc: "Doctor-patient interaction design" },
        { src: nourDoc4, title: "Appointment System", desc: "Booking and scheduling interface" },
        { src: nourDoc5, title: "Profile & Settings", desc: "User profile management" }
      ]
    },
    {
      id: 'smart-animal',
      title: 'Smart Animal',
      description: 'Pet care and management app with smart features',
      category: 'Pet Care',
      tags: ['Mobile Design', 'Pet Care'],
      images: [
        { src: smartAnimal1, title: "Home Dashboard", desc: "Pet overview and quick actions" },
        { src: smartAnimal2, title: "Pet Profile", desc: "Detailed pet information and health" },
        { src: smartAnimal3, title: "Care Schedule", desc: "Feeding and care reminders" }
      ]
    },
    {
      id: 'visa-assistant',
      title: 'Visa Assistant',
      description: 'Travel visa application and tracking system',
      category: 'Travel',
      tags: ['UI/UX Design', 'Travel'],
      images: [
        { src: visaAssistant1, title: "AI Dashboard", desc: "Visa application overview and status" },
        { src: visaAssistant2, title: "Application Dashboard", desc: "Secure document management system" },
        { src: visaAssistant3, title: "Dashboard Overview", desc: "Real-time application tracking" }
      ]
    }
  ];
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-black'} font-sans ${isDarkMode ? 'selection:bg-primary selection:text-black' : 'selection:bg-orange-500 selection:text-white'} transition-colors duration-300`}>
        {/* HEADER */}
        <header className={`flex justify-between items-center px-4 md:px-10 py-3 md:py-5 ${isDarkMode ? 'bg-black/80 text-white border-white/10' : 'bg-white/90 text-black border-black/10'} border-b fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300`}>
          {/* Logo Section */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className={`${isDarkMode ? 'bg-primary' : 'bg-orange-500'} p-1.5 rounded-sm transition-transform duration-300 group-hover:rotate-45`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="black"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              Ibrahim Khan.
            </span>
          </div>

          {/* Navigation Links with Line Underneath */}
          <nav className="hidden md:flex flex-col items-center relative">
            <ul className="flex gap-8 text-sm font-bold uppercase tracking-wider mb-3">
              <li className="relative">
                <span
                  className={`cursor-pointer transition-all duration-300 ${
                    activeSection === 'home' ? (isDarkMode ? 'text-primary' : 'text-orange-500') : `${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`
                  }`}
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </span>
              </li>
              <li className="relative">
                <span
                  className={`cursor-pointer transition-all duration-300 ${
                    activeSection === 'portfolio' ? (isDarkMode ? 'text-primary' : 'text-orange-500') : `${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`
                  }`}
                  onClick={() => scrollToSection('portfolio')}
                >
                  Project
                </span>
              </li>
              <li className="relative">
                <span
                  className={`cursor-pointer transition-all duration-300 ${
                    activeSection === 'about' ? (isDarkMode ? 'text-primary' : 'text-orange-500') : `${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`
                  }`}
                  onClick={() => scrollToSection('about')}
                >
                  About
                </span>
              </li>
            </ul>
            {/* The Straight Line centered under the links */}
            <div className="relative w-80 h-[2px]">
              {/* Base line with gradient */}
              <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-transparent via-white/30 to-transparent' : 'bg-gradient-to-r from-transparent via-black/30 to-transparent'}`}></div>
              {/* Active section indicator on the same line */}
              {activeSection === 'home' && (
                <motion.div 
                  layoutId="activeIndicator"
                  className={`absolute top-0 left-[calc(50%-160px)] w-10 h-[2px] ${isDarkMode ? 'bg-primary shadow-[0_0_8px_rgba(201,243,29,0.6)]' : 'bg-orange-500 shadow-[0_0_8px_rgba(255,107,53,0.6)]'}`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {activeSection === 'portfolio' && (
                <motion.div 
                  layoutId="activeIndicator"
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-14 h-[2px] ${isDarkMode ? 'bg-primary shadow-[0_0_8px_rgba(201,243,29,0.6)]' : 'bg-orange-500 shadow-[0_0_8px_rgba(255,107,53,0.6)]'}`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {activeSection === 'about' && (
                <motion.div 
                  layoutId="activeIndicator"
                  className={`absolute top-0 right-[calc(50%-160px)] w-12 h-[2px] ${isDarkMode ? 'bg-primary shadow-[0_0_8px_rgba(201,243,29,0.6)]' : 'bg-orange-500 shadow-[0_0_8px_rgba(255,107,53,0.6)]'}`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </div>
          </nav>

          {/* Theme Toggle & Contact Button */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} flex items-center justify-center transition-all duration-300`}
            >
              {isDarkMode ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* Contact Button */}
            <button 
              className={`${isDarkMode ? 'bg-primary' : 'bg-orange-500'} text-black px-6 py-2.5 text-xs font-black flex items-center gap-2 hover:bg-white hover:scale-105 transition-all duration-300`}
              onClick={() => scrollToSection('contact')}
            >
              CONTACT
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>
        </header>
        {/* HOME SECTION */}
        <section 
          id="home"
          className={`min-h-screen snap-start snap-always relative ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-black'} flex flex-col justify-center px-4 md:px-10 py-20 overflow-hidden transition-colors duration-300`}
        >
          {/* Layered Backgrounds */}
          <div className="absolute inset-0 z-0">
            <img
              src={homebg}
              alt="home layer bg"
              className={`absolute inset-0 w-full h-full object-cover ${isDarkMode ? 'opacity-20' : 'opacity-10'}`}
            />
            <div className={`absolute inset-0 ${isDarkMode ? 'opacity-30' : 'opacity-20'} pointer-events-none`}>
              <img
                src={homeRightBg}
                alt=""
                className="absolute right-0 top-0 h-full object-cover"
              />
            </div>
          </div>

          <motion.div {...fadeInUp} className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="space-y-4 mb-8 md:mb-12">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 md:gap-8">
                <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold tracking-tighter uppercase">
                  DESIGN
                </h1>
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 md:gap-8 lg:ml-32">
                <div className="flex gap-2 md:gap-3">
                  <div className={`w-6 h-6 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full ${isDarkMode ? 'bg-primary' : 'bg-orange-500'} animate-pulse`}></div>
                  <div className={`w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full ${isDarkMode ? 'bg-primary/70' : 'bg-orange-400'} animate-pulse delay-150`}></div>
                  <div className={`w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full ${isDarkMode ? 'bg-primary/40' : 'bg-orange-300'} animate-pulse delay-300`}></div>
                </div>
                <h1 className={`text-4xl md:text-7xl lg:text-9xl font-bold tracking-tighter uppercase ${isDarkMode ? 'text-primary' : 'text-orange-500'}`}>
                  PARTNER
                </h1>
              </div>
            </div>

            <p className={`max-w-2xl text-base md:text-lg lg:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-8 md:mb-12`}>
              I believe in the power of innovation and creativity to transform
              your ideas into exceptional digital experiences that drive real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                className={`group relative px-8 py-4 ${isDarkMode ? 'bg-primary' : 'bg-orange-500'} text-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 flex items-center justify-center gap-2`}
                onClick={() => scrollToSection('contact')}
              >
                Let's Talk
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </button>
              
              <button 
                className={`group relative px-8 py-4 border ${isDarkMode ? 'border-white/20 text-white hover:border-primary hover:text-primary' : 'border-black/20 text-black hover:border-orange-500 hover:text-orange-500'} font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2`}
                onClick={() => scrollToSection('portfolio')}
              >
                View Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </button>
            </div>
          </motion.div>
        </section>

        {/* ABOUT ME SECTION */}
        <section 
          id="about"
          className={`min-h-screen w-full snap-start snap-always relative ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col px-4 md:px-10 py-20 overflow-y-auto transition-colors duration-300`}
        >
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto w-full my-auto">
            {/* Header Part */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-4 md:mb-6 gap-4">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Passion For  
                  <span className={`${isDarkMode ? 'text-primary' : 'text-orange-500'}`}> Innovation</span>
                </h2>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
              {/* Image Side */}
              <motion.div 
                {...fadeInUp}
                className="relative group max-w-md mx-auto lg:mx-0 order-2 lg:order-1"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={leftAboutImg}
                    alt="About Ibrahim"
                    className={`w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 border ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-black/20' : 'from-white/20'} to-transparent`}></div>
                </div>
                <div className={`absolute -inset-4 ${isDarkMode ? 'bg-primary/5' : 'bg-orange-500/5'} blur-3xl ${isDarkMode ? 'group-hover:bg-primary/10' : 'group-hover:bg-orange-500/10'} transition-all -z-10 rounded-lg`}></div>
              </motion.div>

              {/* Text Side */}
              <motion.div {...fadeInUp} className="space-y-4 order-1 lg:order-2">
                {/* Description */}
                <div className="space-y-3">
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-base md:text-lg leading-relaxed`}>
                    Driven by a passion for design and user experience, I create unique digital experiences that make an impact online.
                  </p>
                </div>

                {/* Skills/Expertise */}
                <div className="space-y-3">
                  <h3 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {['End-to-End UX Design', 'Product Thinking', 'User-Centered Design', 'Wireframing & Prototyping', 'Cross-Functional Collaboration', 'Developer Handoff','Design Systems'].map((skill, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1.5 ${isDarkMode ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-black/5 border-black/10 text-gray-700'} border rounded-full text-xs md:text-sm font-medium ${isDarkMode ? 'hover:border-primary/50 hover:text-primary' : 'hover:border-orange-500/50 hover:text-orange-500'} transition-all`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats Row */}
                <div className={`grid grid-cols-2 gap-4 py-4 border-y ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                  {[
                    { label: "Design Projects", val: "10" },
                    { label: "Happy Clients", val: "5" },
                    { label: "Years Experience", val: "2" },
                    { label: "Design Tools", val: "7" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center lg:text-left">
                      <h4 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-primary' : 'text-orange-500'} mb-1`}>
                        {stat.val}+
                      </h4>
                      <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => scrollToSection('portfolio')}
                    className={`group relative px-6 py-3 ${isDarkMode ? 'bg-primary' : 'bg-orange-500'} text-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 text-sm`}
                  >
                    View My Work
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </button>
                  
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className={`group relative px-6 py-3 border ${isDarkMode ? 'border-white/20 text-white hover:border-primary hover:text-primary' : 'border-black/20 text-black hover:border-orange-500 hover:text-orange-500'} font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 text-sm`}
                  >
                    Get In Touch
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
        {/* SERVICES SECTION */}
        <section 
          id="services"
          className={`min-h-screen w-full snap-start snap-always flex flex-col justify-center px-4 md:px-10 py-20 ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-black'} transition-colors duration-300`}
        >
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 uppercase tracking-tighter">
              Solutions
            </h2>
            
            <div className={`border-t ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
              {[
                {
                  title: "UI/UX Design",
                  description: "Designing intuitive interfaces that enhance user experience and drive engagement",
                  technologies: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
                },
                {
                  title: "Design Project Management",
                  description: "End-to-End Project Ownership, Timeline & Milestone Planning,Feedback & Iteration Management",
                  technologies: ["User Research", "Wireframing", "Prototyping", "Visual Design"]

                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  {...fadeInUp}
                  className={`group border-b ${isDarkMode ? 'border-white/10 hover:bg-white/5' : 'border-black/10 hover:bg-black/5'} transition-all cursor-pointer`}
                >
                  <div className="py-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold group-hover:translate-x-6 transition-transform mb-4">
                        {} {service.title}
                      </h3>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg mb-4 max-w-2xl`}>
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className={`px-3 py-1 ${isDarkMode ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-black/5 border-black/10 text-gray-700'} border rounded-full text-sm`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`w-14 h-14 border ${isDarkMode ? 'border-white/10 group-hover:bg-primary group-hover:text-black' : 'border-black/10 group-hover:bg-orange-500 group-hover:text-white'} rounded-full flex items-center justify-center transition-all text-2xl flex-shrink-0`}>
                      ↗
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section 
          id="testimonials"
          className={`min-h-screen snap-start snap-always relative ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-black'} flex flex-col px-4 md:px-10 py-20 overflow-y-auto transition-colors duration-300`}
        >
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto w-full my-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    What my clients say
                  </h2>
                </div>
                
                <blockquote className={`text-lg md:text-xl font-medium leading-relaxed ${isDarkMode ? 'text-gray-300 border-primary' : 'text-gray-700 border-orange-500'} italic border-l-4 pl-4 md:pl-6`}>
                  "Ibrahim has a strong product-first mindset. He transformed
                  complex requirements into clean, scalable UI that fit our tech
                  roadmap perfectly. His attention to detail is exceptional."
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${isDarkMode ? 'bg-primary/20' : 'bg-orange-500/20'} rounded-full flex items-center justify-center`}>
                    <span className={`${isDarkMode ? 'text-primary' : 'text-orange-600'} font-bold text-lg`}>AM</span>
                  </div>
                  <div>
                    <div className={`text-lg md:text-xl font-bold uppercase tracking-wide ${isDarkMode ? 'text-white' : 'text-black'}`}>
                      Atif Malik
                    </div>
                    <div className={`${isDarkMode ? 'text-primary' : 'text-orange-500'} text-xs md:text-sm font-bold uppercase tracking-widest`}>
                      CEO, M3Hive
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={`${isDarkMode ? 'text-primary' : 'text-orange-500'}`}>
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  ))}
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ml-2 text-sm`}>5.0</span>
                </div>
              </div>

              <motion.div {...fadeInUp} className="relative flex justify-center lg:justify-end">
                <div className="relative rotate-3 hover:rotate-0 transition-transform duration-500 group">
                  <img
                    src={rightClientImg}
                    alt="Client Atif Malik"
                    className={`w-64 md:w-80 h-[350px] md:h-[450px] object-cover rounded-lg grayscale group-hover:grayscale-0 border-2 ${isDarkMode ? 'border-white/10' : 'border-black/10'} transition-all`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-black/40' : 'from-white/40'} to-transparent rounded-lg`}></div>
                  <div className={`absolute -inset-4 ${isDarkMode ? 'bg-primary/5 group-hover:bg-primary/10' : 'bg-orange-500/5 group-hover:bg-orange-500/10'} blur-3xl transition-all -z-10 rounded-lg`}></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section 
          id="portfolio"
          className={`min-h-screen snap-start snap-always relative ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col justify-center px-4 md:px-10 py-20 overflow-hidden transition-colors duration-300`}
        >
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 uppercase tracking-tighter">
              My Work
            </h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  {...fadeInUp}
                  className="group"
                >
                  <div className={`relative overflow-hidden rounded-lg border ${isDarkMode ? 'border-white/10 hover:border-primary/50' : 'border-black/10 hover:border-orange-500/50'} transition-all`}>
                    <img 
                      src={project.images[0].src} 
                      alt={`${project.title} - ${project.images[0].title}`}
                      className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Stronger gradient for better text visibility */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-black via-black/60' : 'from-white via-white/60'} to-transparent`}></div>
                    
                    {/* Image Count Badge */}
                    <div className={`absolute top-4 right-4 ${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-md px-3 py-1.5 rounded-full border ${isDarkMode ? 'border-white/20' : 'border-black/20'}`}>
                      <span className={`${isDarkMode ? 'text-white' : 'text-black'} text-xs font-bold`}>{project.images.length} Images</span>
                    </div>
                    
                    {/* Project Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-2 drop-shadow-lg`}>{project.title}</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-4 font-medium drop-shadow-md`}>{project.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${
                              tagIndex === 0 
                                ? `${isDarkMode ? 'bg-primary/30 border-primary/50 text-primary' : 'bg-orange-500/30 border-orange-500/50 text-orange-700'}` 
                                : `${isDarkMode ? 'bg-white/20 border-white/30 text-white' : 'bg-black/20 border-black/30 text-black'}`
                            } border`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Fancy Interactive Element */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 ${isDarkMode ? 'bg-primary/30 group-hover:bg-primary/40' : 'bg-orange-500/30 group-hover:bg-orange-500/40'} backdrop-blur-sm rounded-full flex items-center justify-center transition-all border ${isDarkMode ? 'border-primary/40' : 'border-orange-500/40'}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={`${isDarkMode ? 'text-primary' : 'text-orange-600'}`}>
                              <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z"/>
                            </svg>
                          </div>
                          <div>
                            <p className={`${isDarkMode ? 'text-white' : 'text-black'} font-bold text-sm drop-shadow-md`}>View Project</p>
                            <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} text-xs font-medium`}>{project.images.length} screens</p>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => openProjectSlider(project)}
                          className={`group/btn relative w-14 h-14 border-2 ${isDarkMode ? 'border-white/30 hover:border-primary hover:bg-primary/20' : 'border-black/30 hover:border-orange-500 hover:bg-orange-500/20'} backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden`}
                        >
                          <div className={`absolute inset-0 ${isDarkMode ? 'bg-primary/0 group-hover/btn:bg-primary/30' : 'bg-orange-500/0 group-hover/btn:bg-orange-500/30'} transition-all duration-300`}></div>
                          <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2.5" 
                            className={`${isDarkMode ? 'text-white group-hover/btn:text-primary' : 'text-black group-hover/btn:text-orange-600'} transition-all duration-300 group-hover/btn:scale-110`}
                          >
                            <path d="M7 17L17 7M17 7H7M17 7V17"/>
                          </svg>
                          <div className={`absolute inset-0 rounded-full border-2 ${isDarkMode ? 'border-primary/0 group-hover/btn:border-primary/50' : 'border-orange-500/0 group-hover/btn:border-orange-500/50'} group-hover/btn:scale-110 transition-all duration-300`}></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>


        {/* CONTACT SECTION */}
        <section 
          id="contact"
          className={`min-h-screen snap-start snap-always ${isDarkMode ? 'bg-black text-white border-white/10' : 'bg-white text-black border-black/10'} flex flex-col justify-center px-4 md:px-10 py-20 border-t transition-colors duration-300`}
        >
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto w-full">
            {/* Section Header */}
            <div className="text-center mb-8">
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black ${isDarkMode ? 'text-primary' : 'text-orange-500'} tracking-tighter uppercase mb-4`}>
                LET'S TALK
              </h2>
              
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto leading-relaxed mb-6`}>
                Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div {...fadeInUp} className="space-y-6">
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>Get In Touch</h3>
                
                <div className="space-y-4">
                  <div className={`flex items-center gap-4 p-4 ${isDarkMode ? 'bg-white/5 border-white/10 hover:border-primary/50' : 'bg-black/5 border-black/10 hover:border-orange-500/50'} border rounded-lg transition-all`}>
                    <div className={`w-12 h-12 ${isDarkMode ? 'bg-primary/20' : 'bg-orange-500/20'} rounded-full flex items-center justify-center`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={`${isDarkMode ? 'text-primary' : 'text-orange-500'}`}>
                        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Email</p>
                      <a 
                        href="mailto:Muhammad.ibrahim.k@protonmail.com"
                        className={`${isDarkMode ? 'text-white hover:text-primary' : 'text-black hover:text-orange-500'} transition-colors font-medium`}
                      >
                        Muhammad.ibrahim.k@protonmail.com
                      </a>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 p-4 ${isDarkMode ? 'bg-white/5 border-white/10 hover:border-primary/50' : 'bg-black/5 border-black/10 hover:border-orange-500/50'} border rounded-lg transition-all`}>
                    <div className={`w-12 h-12 ${isDarkMode ? 'bg-primary/20' : 'bg-orange-500/20'} rounded-full flex items-center justify-center`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={`${isDarkMode ? 'text-primary' : 'text-orange-500'}`}>
                        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Phone</p>
                      <a 
                        href="tel:+923112707222"
                        className={`${isDarkMode ? 'text-white hover:text-primary' : 'text-black hover:text-orange-500'} transition-colors font-medium`}
                      >
                        +92 311 2707222
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="space-y-6">
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>Quick Response</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  I typically respond within 24 hours. Whether you have a project in mind, 
                  need a consultation, or just want to say hello, I'd love to hear from you.
                </p>
                
                {/* <div className="flex flex-wrap gap-4">
                  <div className={`px-4 py-2 ${isDarkMode ? 'bg-primary/10 border-primary/20' : 'bg-orange-500/10 border-orange-500/20'} border rounded-full`}>
                    <span className={`${isDarkMode ? 'text-primary' : 'text-orange-600'} text-sm font-medium`}>Available for Projects</span>
                  </div>
                  <div className={`px-4 py-2 ${isDarkMode ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-black/5 border-black/10 text-gray-700'} border rounded-full`}>
                    <span className="text-sm">Remote Friendly</span>
                  </div>
                </div> */}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-8">
                  <a
                    href="mailto:Muhammad.ibrahim.k@protonmail.com"
                    className={`inline-flex items-center gap-2 px-6 py-3 ${isDarkMode ? 'bg-primary' : 'bg-orange-500'} text-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 text-sm`}
                  >
                    Start a Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </a>
                  
                  <a
                    href={ibbiCV}
                    download="Ibrahim_Khan_CV.jpeg"
                    className={`inline-flex items-center gap-2 px-6 py-3 border-2 ${isDarkMode ? 'border-white/20 text-white hover:border-primary hover:text-primary hover:bg-primary/10' : 'border-black/20 text-black hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10'} font-bold uppercase tracking-wider transition-all duration-300 text-sm`}
                  >
                    Download CV
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className={`min-h-screen snap-start snap-always flex flex-col justify-between px-4 md:px-10 pt-20 pb-0 overflow-hidden relative ${isDarkMode ? 'border-white/10 bg-black text-white' : 'border-black/10 bg-gray-50 text-black'} border-t transition-colors duration-300`}>
          <motion.div {...fadeInUp} className="flex-grow flex flex-col justify-center items-center max-w-7xl mx-auto w-full py-10">
            <div className="text-center space-y-8 w-full">
              <h3 className={`text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} uppercase tracking-widest`}>
                Let's Build Something Great
              </h3>
              
              <div className="flex justify-center">
                <div className="space-y-4">
                  <h4 className={`text-lg font-bold ${isDarkMode ? 'text-primary' : 'text-orange-500'} uppercase`}>Contact</h4>
                  <div className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-center`}>
                    <p>
                      <a href="mailto:Muhammad.ibrahim.k@protonmail.com" className={`${isDarkMode ? 'hover:text-primary' : 'hover:text-orange-500'} transition-colors`}>
                        Muhammad.ibrahim.k@protonmail.com
                      </a>
                    </p>
                    <p>
                      <a href="tel:+923112707222" className={`${isDarkMode ? 'hover:text-primary' : 'hover:text-orange-500'} transition-colors`}>
                        +92 311 2707222
                      </a>
                    </p>
                    <p>
                      <a href="https://www.linkedin.com/in/muhammad-ibrahimkhan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'hover:text-primary' : 'hover:text-orange-500'} transition-colors`}>
                        LinkedIn - Ibrahim Khan 
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div {...fadeInUp} className="w-full pb-0">
            <div className={`border-t ${isDarkMode ? 'border-white/10' : 'border-black/10'} pt-6 pb-0`}>
              <h1 className={`text-[12vw] md:text-[15vw] font-black leading-none tracking-tighter text-center uppercase opacity-80 ${isDarkMode ? 'hover:text-primary' : 'hover:text-orange-500'} transition-all duration-700 cursor-default`}>
                IBRAHIM
              </h1>
              <div className={`flex flex-col md:flex-row justify-between items-center mt-4 mb-0 text-xs ${isDarkMode ? 'text-gray-600' : 'text-gray-500'} tracking-[0.3em] uppercase`}>
                <p>© 2026 Ibrahim Khan. All Rights Reserved</p>
                <p className="mt-2 md:mt-0">Designed and Developed by MUHAMMAD IBRAHIM KHAN</p>
              </div>
            </div>
          </motion.div>
        </footer>

        {/* Project Slider Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-2 md:p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`relative w-full h-full max-w-7xl max-h-[98vh] ${isDarkMode ? 'bg-black/90 border-white/10' : 'bg-white/95 border-black/10'} border rounded-lg overflow-hidden flex flex-col`}
            >
              {/* Header - Compact */}
              <div className={`flex justify-between items-center px-4 py-3 md:px-6 md:py-4 border-b ${isDarkMode ? 'border-white/10' : 'border-black/10'} flex-shrink-0`}>
                <div>
                  <h2 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{selectedProject.title}</h2>
                  <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{selectedProject.description}</p>
                </div>
                <button 
                  onClick={closeProjectSlider}
                  className={`w-8 h-8 md:w-10 md:h-10 ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} rounded-full flex items-center justify-center transition-all flex-shrink-0`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
                    <path d="M18 6L6 18M6 6L18 18"/>
                  </svg>
                </button>
              </div>

              {/* Image Display - Much Larger */}
              <div className="relative flex-grow flex items-center justify-center overflow-hidden">
                <div className={`w-full h-full flex items-center justify-center ${isDarkMode ? 'bg-black/50' : 'bg-gray-100'} p-2 md:p-4`}>
                  <img 
                    src={selectedProject.images[currentImageIndex].src}
                    alt={selectedProject.images[currentImageIndex].title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 ${isDarkMode ? 'bg-black/70 hover:bg-black/90' : 'bg-white/70 hover:bg-white/90'} backdrop-blur-sm rounded-full flex items-center justify-center transition-all group/arrow`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`${isDarkMode ? 'text-white group-hover/arrow:text-primary' : 'text-black group-hover/arrow:text-orange-500'} transition-colors`}>
                        <path d="M15 18L9 12L15 6"/>
                      </svg>
                    </button>
                    <button 
                      onClick={nextImage}
                      className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 ${isDarkMode ? 'bg-black/70 hover:bg-black/90' : 'bg-white/70 hover:bg-white/90'} backdrop-blur-sm rounded-full flex items-center justify-center transition-all group/arrow`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`${isDarkMode ? 'text-white group-hover/arrow:text-primary' : 'text-black group-hover/arrow:text-orange-500'} transition-colors`}>
                        <path d="M9 18L15 12L9 6"/>
                      </svg>
                    </button>
                  </>
                )}

                {/* Dot Indicators */}
                <div className={`absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 ${isDarkMode ? 'bg-black/70' : 'bg-white/70'} backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full`}>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`transition-all rounded-full ${
                          index === currentImageIndex 
                            ? `w-6 md:w-8 h-2 md:h-3 ${isDarkMode ? 'bg-primary' : 'bg-orange-500'}` 
                            : `w-2 md:w-3 h-2 md:h-3 ${isDarkMode ? 'bg-white/40 hover:bg-white/60' : 'bg-black/40 hover:bg-black/60'}`
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Info - Compact */}
              <div className={`px-4 py-3 md:px-6 md:py-4 border-t ${isDarkMode ? 'border-white/10' : 'border-black/10'} flex-shrink-0`}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-sm md:text-base font-bold ${isDarkMode ? 'text-white' : 'text-black'} truncate`}>
                      {selectedProject.images[currentImageIndex].title}
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-xs md:text-sm line-clamp-1`}>
                      {selectedProject.images[currentImageIndex].desc}
                    </p>
                  </div>
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-xs md:text-sm font-medium flex-shrink-0`}>
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
