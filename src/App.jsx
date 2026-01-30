import React, { useState } from "react";
import { motion } from "framer-motion";

// Importing images
import leftAboutImg from "./assets/left-about-img.png";
import homeRightBg from "./assets/home-right-bg.png";
import homeLeftBg from "./assets/home-left-bg.svg";
import rightClientImg from "./assets/right-client-img.png";
import homebg from "./assets/layer-home-bg.jpeg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" }
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showAllProjects, setShowAllProjects] = useState(false);

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

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };
  return (
    <section>
      <div className="bg-black text-white font-sans selection:bg-primary selection:text-black">
        {/* HEADER */}
        <header className="flex justify-between items-center px-10 py-5 bg-black/80 text-white border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="bg-primary p-1.5 rounded-sm transition-transform duration-300 group-hover:rotate-45">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="black"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Ibrahim Khan.
            </span>
          </div>

          {/* Navigation Links with Line Underneath */}
          <nav className="hidden md:flex flex-col items-center gap-2">
            <ul className="flex gap-8 text-sm font-bold uppercase tracking-wider">
              <li 
                className={`cursor-pointer transition-colors ${
                  activeSection === 'home' ? 'text-primary' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => scrollToSection('home')}
              >
                Home
              </li>
              <li 
                className={`cursor-pointer transition-colors ${
                  activeSection === 'portfolio' ? 'text-primary' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => scrollToSection('portfolio')}
              >
                Project
              </li>
              <li 
                className={`cursor-pointer transition-colors ${
                  activeSection === 'about' ? 'text-primary' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => scrollToSection('about')}
              >
                About
              </li>
            </ul>
            {/* The Straight Line centered under the links */}
            <div className="h-[1px] w-80 bg-white/20"></div>
          </nav>

          {/* Contact Button */}
          <button 
            className="bg-primary text-black px-6 py-2.5 text-xs font-black flex items-center gap-2 hover:bg-white hover:scale-105 transition-all duration-300"
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
        </header>
        {/* HOME SECTION */}
        <section 
          id="home"
          className="min-h-screen snap-start relative bg-black text-white flex flex-col justify-center px-10 py-20 overflow-hidden"
        >
          {/* Layered Backgrounds */}
          <div className="absolute inset-0 z-0">
            <img
              src={homebg}
              alt="home layer bg"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <img
                src={homeRightBg}
                alt=""
                className="absolute right-0 top-0 h-full object-cover"
              />
            </div>
          </div>

          <motion.div {...fadeInUp} className="relative z-10 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm font-bold tracking-widest uppercase text-gray-400">
                Welcome
              </span>
              <div className="h-[1px] w-16 bg-white/20"></div>
            </div>

            <div className="space-y-4 mb-12">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter uppercase">
                  DESIGN
                </h1>
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:ml-32">
                <div className="flex -space-x-4">
                  <img
                    src={homeLeftBg}
                    alt="star-icon"
                    className="w-32 h-10 md:w-40 md:h-12 lg:w-full lg:h-24"
                  />
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter uppercase text-primary">
                  PARTNER
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
              I believe in the power of innovation and creativity to transform
              your ideas into exceptional digital experiences that drive real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                className="group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => scrollToSection('contact')}
              >
                Let's Talk
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </button>
              
              <button 
                className="group relative px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
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
          className="min-h-screen w-full snap-start relative bg-black text-white flex flex-col justify-center px-10 py-20 overflow-hidden"
        >
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto w-full">
            {/* Header Part */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16 gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-400">
                    About Me
                  </span>
                  <div className="h-[1px] w-16 bg-white/20"></div>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Passion For <br />
                  <span className="text-primary">Innovation</span>
                </h2>
              </div>
              <div className="text-primary hidden md:block">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13 3l-2 5h7l-9 13 2-5H4l9-13z" />
                </svg>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Image Side */}
              <motion.div 
                {...fadeInUp}
                className="relative group max-w-lg mx-auto lg:mx-0 order-2 lg:order-1"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={leftAboutImg}
                    alt="About Ibrahim"
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -inset-4 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all -z-10 rounded-lg"></div>
              </motion.div>

              {/* Text Side */}
              <motion.div {...fadeInUp} className="space-y-8 order-1 lg:order-2">
                {/* Description */}
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    My journey began with a simple yet powerful idea: To
                    revolutionize the digital landscape through innovative
                    design solutions and exceptional creativity.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Driven by a passion for design and user experience, I set out to
                    create unique digital experiences that make an impact
                    online. Every project is an opportunity to push boundaries
                    and deliver designs that truly matter.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    With expertise in UI/UX design and branding, I transform complex ideas into elegant,
                    functional designs that resonate with users and create lasting brand impressions.
                  </p>
                </div>

                {/* Skills/Expertise */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Expertise</h3>
                  <div className="flex flex-wrap gap-3">
                    {['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research', 'Branding'].map((skill, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:border-primary/50 hover:text-primary transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
                  {[
                    { label: "Design Projects", val: "25" },
                    { label: "Happy Clients", val: "15" },
                    { label: "Years Experience", val: "3" },
                    { label: "Design Tools", val: "8" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center lg:text-left">
                      <h4 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                        {stat.val}+
                      </h4>
                      <p className="text-sm text-gray-400 uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={() => scrollToSection('portfolio')}
                    className="group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View My Work
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </button>
                  
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="group relative px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get In Touch
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          className="min-h-screen w-full snap-start flex flex-col justify-center px-10 py-20"
        >
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto w-full">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm font-bold tracking-widest uppercase text-gray-400">
                Services
              </span>
              <div className="h-[1px] w-16 bg-white/20"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 uppercase tracking-tighter">
              Solutions
            </h2>
            
            <div className="border-t border-white/10">
              {[
                {
                  title: "UI/UX Design",
                  description: "Designing intuitive interfaces that enhance user experience and drive engagement",
                  technologies: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
                },
                {
                  title: "Branding & Identity",
                  description: "Creating memorable brand experiences that resonate with your audience",
                  technologies: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  {...fadeInUp}
                  className="group border-b border-white/10 hover:bg-white/5 transition-all cursor-pointer"
                >
                  <div className="py-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold group-hover:translate-x-6 transition-transform mb-4">
                        0{i+1}. {service.title}
                      </h3>
                      <p className="text-gray-400 text-lg mb-4 max-w-2xl">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all text-2xl flex-shrink-0">
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
          className="min-h-screen snap-start relative bg-black text-white flex flex-col justify-center px-10 py-20 overflow-hidden"
        >
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-bold tracking-widest uppercase text-gray-400">
                      Testimonials
                    </span>
                    <div className="h-[1px] w-16 bg-white/20"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    What my clients say
                  </h2>
                </div>
                
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300 italic border-l-4 border-primary pl-6">
                  "Ibrahim has a strong product-first mindset. He transformed
                  complex requirements into clean, scalable UI that fit our tech
                  roadmap perfectly. His attention to detail is exceptional."
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">AM</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold uppercase tracking-wide text-white">
                      Atif Malik
                    </div>
                    <div className="text-primary text-sm font-bold uppercase tracking-widest">
                      CEO, M3Hive
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  ))}
                  <span className="text-gray-400 ml-2">5.0</span>
                </div>
              </div>

              <motion.div {...fadeInUp} className="relative flex justify-center lg:justify-end">
                <div className="relative rotate-3 hover:rotate-0 transition-transform duration-500 group">
                  <img
                    src={rightClientImg}
                    alt="Client Atif Malik"
                    className="w-80 h-[450px] object-cover rounded-lg grayscale group-hover:grayscale-0 border-2 border-white/10 transition-all"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
                  <div className="absolute -inset-4 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all -z-10 rounded-lg"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section 
          id="portfolio"
          className="min-h-screen snap-start relative bg-black text-white flex flex-col justify-center px-10 overflow-hidden py-20"
        >
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto w-full">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 uppercase tracking-tighter">Portfolio</h2>
            
            {/* Initial Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div 
                {...fadeInUp}
                className="h-64 md:h-80 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center text-gray-500 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                      <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">E-Commerce Platform</h3>
                  <p className="text-sm text-gray-400">Modern shopping experience with React & Node.js</p>
                </div>
              </motion.div>
              
              <motion.div 
                {...fadeInUp}
                className="h-64 md:h-80 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center text-gray-500 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Task Management App</h3>
                  <p className="text-sm text-gray-400">Productivity tool with real-time collaboration</p>
                </div>
              </motion.div>
            </div>

            {/* Additional Projects (shown when expanded) */}
            {showAllProjects && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
              >
                <motion.div 
                  {...fadeInUp}
                  className="h-64 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center text-gray-500 hover:border-primary/50 transition-all group cursor-pointer"
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">Analytics Dashboard</h3>
                    <p className="text-sm text-gray-400">Data visualization with D3.js</p>
                  </div>
                </motion.div>

                <motion.div 
                  {...fadeInUp}
                  className="h-64 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center text-gray-500 hover:border-primary/50 transition-all group cursor-pointer"
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                        <path d="M12 2L3.09 8.26L12 14L20.91 8.26L12 2ZM21 16L12 22L3 16L12 10L21 16Z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">Social Media App</h3>
                    <p className="text-sm text-gray-400">Connect & share with React Native</p>
                  </div>
                </motion.div>

                <motion.div 
                  {...fadeInUp}
                  className="h-64 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center text-gray-500 hover:border-primary/50 transition-all group cursor-pointer"
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                        <path d="M9 11H7V9H9V11ZM13 11H11V9H13V11ZM17 11H15V9H17V11ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">Booking System</h3>
                    <p className="text-sm text-gray-400">Appointment scheduling platform</p>
                  </div>
                </motion.div>

                <motion.div 
                  {...fadeInUp}
                  className="h-64 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center text-gray-500 hover:border-primary/50 transition-all group cursor-pointer"
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.5 10.84L11.92 12.25L15.92 8.25L18.42 10.75L21 9ZM11 15L6 10L4.5 11.5L9.5 16.5L11 15ZM2 20V18L6 14L7.5 15.5L2 20Z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">Fitness Tracker</h3>
                    <p className="text-sm text-gray-400">Health monitoring with IoT integration</p>
                  </div>
                </motion.div>

                <motion.div 
                  {...fadeInUp}
                  className="h-64 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center text-gray-500 hover:border-primary/50 transition-all group cursor-pointer"
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                        <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2ZM12 7C13.1 7 14 7.9 14 9S13.1 11 12 11 10 10.1 10 9 10.9 7 12 7ZM18 15H6V13.5C6 11.6 9.58 10.5 12 10.5S18 11.6 18 13.5V15Z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">Learning Platform</h3>
                    <p className="text-sm text-gray-400">Online education with video streaming</p>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Toggle Button */}
            <div className="text-center">
              <button 
                onClick={toggleProjects}
                className="group relative inline-flex items-center gap-3 text-xl font-bold cursor-pointer hover:text-primary transition-colors duration-300"
              >
                <span>{showAllProjects ? 'SHOW LESS' : 'ALL PROJECTS'}</span>
                <div className={`w-8 h-8 border border-white/20 rounded-full flex items-center justify-center group-hover:border-primary transition-all ${showAllProjects ? 'rotate-180' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9L12 15L18 9"/>
                  </svg>
                </div>
              </button>
            </div>
          </motion.div>
        </section>


        {/* CONTACT SECTION */}
        <section 
          id="contact"
          className="min-h-screen bg-black text-white flex flex-col justify-center px-10 py-20 border-t border-white/10"
        >
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto w-full">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-sm font-bold tracking-widest uppercase text-gray-400">
                  Contact
                </span>
                <div className="h-[1px] w-16 bg-white/20"></div>
              </div>
              
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-primary tracking-tighter uppercase mb-8">
                LET'S TALK
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
                Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div {...fadeInUp} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-all">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a 
                        href="mailto:Muhammad.ibrahim.k@protonmail.com"
                        className="text-white hover:text-primary transition-colors font-medium"
                      >
                        Muhammad.ibrahim.k@protonmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-all">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a 
                        href="tel:+923112707222"
                        className="text-white hover:text-primary transition-colors font-medium"
                      >
                        +92 311 2707222
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Response</h3>
                <p className="text-gray-400 leading-relaxed">
                  I typically respond within 24 hours. Whether you have a project in mind, 
                  need a consultation, or just want to say hello, I'd love to hear from you.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                    <span className="text-primary text-sm font-medium">Available for Projects</span>
                  </div>
                  <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                    <span className="text-gray-300 text-sm">Remote Friendly</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="mailto:Muhammad.ibrahim.k@protonmail.com"
                className="inline-flex items-center gap-3 px-12 py-6 bg-primary text-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 text-lg"
              >
                Start a Project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="min-h-screen snap-start flex flex-col justify-between px-10 py-20 overflow-hidden relative border-t border-white/10">
          <motion.div {...fadeInUp} className="flex-grow flex flex-col justify-center items-center max-w-7xl mx-auto w-full">
            <div className="text-center space-y-12">
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-sm font-bold tracking-widest uppercase text-gray-400">
                  Connect
                </span>
                <div className="h-[1px] w-16 bg-white/20"></div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest">
                Let's Build Something Great
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-primary uppercase">Contact</h4>
                  <div className="space-y-2 text-gray-400">
                    <p>
                      <a href="mailto:Muhammad.ibrahim.k@protonmail.com" className="hover:text-primary transition-colors">
                        Muhammad.ibrahim.k@protonmail.com
                      </a>
                    </p>
                    <p>
                      <a href="tel:+923112707222" className="hover:text-primary transition-colors">
                        +92 311 2707222
                      </a>
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-primary uppercase">Follow</h4>
                  <div className="flex justify-center md:justify-start gap-4">
                    {['LinkedIn', 'GitHub', 'Twitter'].map((social, i) => (
                      <a 
                        key={i}
                        href="#" 
                        className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                      >
                        <span className="text-xs font-bold text-gray-400 hover:text-primary transition-colors">
                          {social[0]}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div {...fadeInUp} className="w-full">
            <div className="border-t border-white/10 pt-8">
              <h1 className="text-[12vw] md:text-[15vw] font-black leading-none tracking-tighter text-center uppercase opacity-80 hover:text-primary transition-all duration-700 cursor-default">
                IBRAHIM
              </h1>
              <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-xs text-gray-600 tracking-[0.3em] uppercase">
                <p>© 2026 Ibrahim Khan. All Rights Reserved</p>
                <p className="mt-2 md:mt-0">Designed & Developed with ❤️</p>
              </div>
            </div>
          </motion.div>
        </footer>
      </div>
    </section>
  );
}

export default App;
