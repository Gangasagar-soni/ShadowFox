import React from 'react';
import { useParallax } from '../../hooks/useScrollAnimations';
import { portfolioData } from '../../data/portfolioData';
import profile from '../../assets/photo.jpg';

const Hero = () => {
  const [ref, offset] = useParallax();

  return (
    <div 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)' }}
    >
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="z-10 px-6 py-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Welcome to my portfolio
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Hi, I'm {portfolioData.name.split(' ')[0]}
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-fade-in-up" style={{ animationDelay: '0.6s' }}></div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              {portfolioData.subtitle}
            </p>

            <p className="text-lg text-gray-400 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '1s' }}>
              Building beautiful, scalable web applications with modern technologies. Specialized in the MERN stack.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
              {portfolioData.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
                  aria-label={link.name}
                >
                  {link.icon === 'github' ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.372.815 1.102.815 2.222 0 1.606-.015 2.902-.015 3.293 0 .319.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.73V1.73C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.432a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM20.452 20.452h-3.556v-5.604c0-1.336-.026-3.057-1.864-3.057-1.865 0-2.15 1.454-2.15 2.956v5.705H9.37V9h3.414v1.561h.047c.476-.9 1.637-1.847 3.37-1.847 3.605 0 4.27 2.373 4.27 5.457v6.281z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative hidden md:flex justify-center animate-fade-in-down" style={{ animationDelay: '0.6s' }}>
            <div className="relative w-80 h-80">
              {/* Glowing background circles */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl opacity-25 blur-2xl animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-15 blur-xl animate-pulse animation-delay-2000"></div>
              
              {/* Profile image */}
              <img
                src={profile}
                alt="Profile"
                className="relative w-full h-full rounded-3xl object-cover border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/50"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
