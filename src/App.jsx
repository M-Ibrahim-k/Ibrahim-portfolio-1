import React from "react";
import { motion } from "framer-motion";

// Importing images
import leftAboutImg from "./assets/left-about-img.png";
import homeRightBg from "./assets/home-right-bg.png";
import homeLeftBg from "./assets/home-left-bg.svg";
import rightClientImg from "./assets/right-client-img.png";
import homebg from "./assets/layer-home-bg.jpeg";
function App() {
  return (
    <div className="bg-black text-white font-sans selection:bg-primary selection:text-black">
      {/* HEADER */}
      <header className="flex justify-between items-center px-10 py-5 bg-black/80 text-white border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer group">
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
            <li className="text-primary cursor-pointer">Home</li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              Project
            </li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              About
            </li>
          </ul>
          {/* The Straight Line centered under the links */}
          <div className="h-[1px] w-80 bg-white/20"></div>
        </nav>

        {/* Contact Button */}
        <button className="bg-primary text-black px-6 py-2.5 text-xs font-black flex items-center gap-2 hover:bg-white hover:scale-105 transition-all duration-300">
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
      <section className="relative bg-black text-white min-h-screen flex flex-col justify-center px-10 overflow-hidden">
        {/* Layered Backgrounds */}
        <div className="absolute inset-0 z-0">
          {/* Your New Background with 30% Opacity */}
          <img
            src={homebg}
            alt="home layer bg"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />

          {/* Existing Right Background Pattern */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <img
              src={homeRightBg}
              alt=""
              className="absolute right-0 top-0 h-full object-cover"
            />
          </div>
        </div>

        {/* Content - Ensure z-10 to stay above backgrounds */}
        <div className="relative z-10 max-w-6xl">
          <div className="flex items-center gap-4 mb-0">
            <p className="text-sm font-medium tracking-wide">
              Hey There! Ibrahim Here
            </p>
            <div className="h-[1px] w-15 bg-white/20"></div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-8">
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase">
                DESIGN
              </h1>
            </div>

            <div className="flex items-center gap-8 md:ml-32">
              <div className="flex -space-x-4">
                <img
                  src={homeLeftBg}
                  alt="star-icon"
                  className="w-full h-16 md:w-full md:h-24"
                />
              </div>
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase text-primary">
                PARTNER
              </h1>
            </div>
          </div>

          <p className="mt-12 max-w-xl text-lg text-gray-400 leading-relaxed">
            I believe in the power of innovation and creativity to transform
            your ideas into exceptional digital experiences.
          </p>

          <div className="mt-12">
            <button className="group relative w-32 h-32 border border-white/10 rounded-full flex items-center justify-center transition-all hover:border-primary">
              <span className="text-sm font-bold group-hover:text-primary">
                LET'S TALK ↗
              </span>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-primary rounded-t-full shadow-[0_0_10px_#C9F31D]"></div>
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section className="bg-black text-white py-24 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-bold tracking-widest uppercase">
                  About Me
                </span>
                <div className="h-[1px] w-12 bg-white/20"></div>
              </div>
              <h2 className="text-6xl font-bold leading-tight max-w-2xl">
                Passion For <br />
                Innovation
              </h2>
            </div>
            <div className="text-primary pt-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <img
                src={leftAboutImg}
                alt="About Ibrahim"
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm"
              />
              <div className="absolute -inset-2 bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all"></div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-lg">
                <p>
                  My journey began with a simple yet powerful idea: To
                  revolutionize the digital landscape through innovative
                  solutions and exceptional creativity.
                </p>
                <p>
                  Driven by a passion for design and technology, I set out to
                  create unique digital experiences that make an impact online.
                </p>
              </div>

              <div className="flex gap-12 py-8 border-y border-white/10">
                {[
                  { label: "Projects Completed", val: "10" },
                  { label: "Happy Clients", val: "10" },
                  ,
                ].map((stat, i) => (
                  <React.Fragment key={i}>
                    <div>
                      <h4 className="text-4xl font-bold text-primary">
                        {stat.val}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                    </div>
                    {i < 2 && <div className="w-[1px] bg-white/10"></div>}
                  </React.Fragment>
                ))}
              </div>

              <button className="group relative w-28 h-28 border border-white/10 rounded-full flex items-center justify-center overflow-hidden transition-all hover:border-primary">
                <span className="text-[10px] font-bold tracking-widest group-hover:text-primary">
                  ABOUT ME ↗
                </span>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-primary rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-black text-white py-24 overflow-hidden">
        <div className="flex whitespace-nowrap mb-20 opacity-20">
          <h1 className="text-8xl font-black uppercase tracking-tighter animate-scroll">
            Designer <span className="text-primary">+</span> Digital{" "}
            <span className="text-primary">+</span> Creative{" "}
            <span className="text-primary">+</span>
            Designer <span className="text-primary">+</span> Digital{" "}
            <span className="text-primary">+</span> Creative{" "}
            <span className="text-primary">+</span>
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-bold tracking-widest uppercase">
                Services
              </span>
              <div className="h-[1px] w-12 bg-white/20"></div>
            </div>
            <h2 className="text-6xl font-bold">Solutions</h2>
          </div>

          <div className="border-t border-white/10">
            {["Branding & Identity", "UX/UI Design"].map((title, i) => (
              <div
                key={i}
                className="group flex justify-between items-center py-10 border-b border-white/10 hover:bg-white/5 transition-all cursor-pointer px-4"
              >
                <div className="flex items-center gap-8">
                  <span className="text-xl font-bold text-gray-500 group-hover:text-primary transition-colors">
                    0{i + 1}.
                  </span>
                  <h3 className="text-3xl font-bold group-hover:translate-x-4 transition-transform duration-300">
                    {title}
                  </h3>
                </div>
                <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="group-hover:stroke-black transition-colors"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="portfolio py-16 text-center bg-black">
        <h2 className="text-4xl font-bold">Portfolio</h2>
        <div className="img-group mt-8 grid grid-cols-2 gap-6 max-w-7xl mx-auto px-10">
          <div className="h-64 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-gray-500">
            Project Slot 1
          </div>
          <div className="h-64 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-gray-500">
            Project Slot 2
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-xl cursor-pointer hover:text-primary transition-colors">
            ALL Projects
          </h4>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-black text-white py-24 px-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-bold tracking-widest uppercase">
                  Testimonials
                </span>
                <div className="h-[1px] w-12 bg-white/20"></div>
              </div>
              <h2 className="text-6xl font-bold leading-tight text-wrap">
                What my clients say
              </h2>
            </div>
            <p className="text-2xl font-medium leading-relaxed text-gray-300 max-w-lg italic">
              "Ibrahim has a strong product-first mindset. He transformed complex requirements into clean, scalable UI that fit our tech roadmap."
            </p>
            <div>
              <div className="text-xl font-bold uppercase tracking-wide">
                Atif Malik
              </div>
              <div className="text-primary text-sm font-bold mt-1 uppercase tracking-widest">
                CEO, M3Hive
              </div>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative rotate-6 hover:rotate-0 transition-transform duration-500 group">
              <img
                src={rightClientImg}
                alt="Client"
                className="w-80 h-[450px] object-cover rounded-sm grayscale group-hover:grayscale-0 border-2 border-white/10 transition-all"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST PROJECTS SECTION */}
      <section className="latest-projects py-16 text-center bg-black">
        <p className="text-xl text-primary font-medium">Working</p>
        <h2 className="text-4xl font-bold">Latest Projects</h2>
        <div className="mt-8 grid grid-cols-2 gap-6 max-w-7xl mx-auto px-10">
          <div className="h-48 bg-white/5 rounded-lg border border-white/10"></div>
          <div className="h-48 bg-white/5 rounded-lg border border-white/10"></div>
        </div>
        <div className="mt-8">
          <h4 className="text-xl cursor-pointer hover:text-primary transition-colors">
            View All
          </h4>
        </div>
      </section>

      {/* LETS TALK SECTION */}
      <section className="bg-black text-white py-32 px-10 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-8xl font-black text-primary tracking-tighter uppercase">
            LET'S TALK
          </h2>
          <a
            href="mailto:ibbrahimkhan@gmail.com"
            className="block text-4xl md:text-6xl font-bold hover:text-primary transition-colors duration-300 tracking-tight"
          >
            Muhammad.ibrahim.k@protonmail.com
          </a>
          <div className="flex justify-center pt-12">
            <button className="group relative w-28 h-28 border border-white/10 rounded-full flex items-center justify-center overflow-hidden transition-all hover:border-primary">
              <span className="text-[10px] font-bold tracking-widest group-hover:text-primary">
                CONTACT ↗
              </span>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-primary rounded-full shadow-[0_0_15px_#C9F31D]"></div>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-24 pb-12 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-start mb-8">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
              © 2026 All rights for Ibrahim Khan
            </p>
          </div>
          <div className="border-t border-white/10 pt-4">
            <h1 className="text-[15vw] font-black leading-none tracking-tighter text-center uppercase">
              IBRAHIM
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
