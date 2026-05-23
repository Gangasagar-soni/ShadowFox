import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimations';
import { portfolioData } from '../../data/portfolioData';
import profile from '../../assets/photo.jpg';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-gray-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            ref={ref}
            className={`relative transform transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
              <img
                src={profile}
                alt="About"
                className="relative w-full rounded-2xl border border-cyan-500/30 shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div 
            ref={ref}
            className={`space-y-6 transform transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                About Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              {portfolioData.bio}
            </p>

            <p className="text-gray-400 text-base leading-relaxed">
              {portfolioData.about}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { label: 'Projects', value: '5+' },
                { label: 'Experience', value: 'fresher' },
                { label: 'Tech Stack', value: '10+' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`p-4 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg transform transition-all duration-1000 hover:border-cyan-500/50 hover:bg-cyan-500/20 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="/Gangasagar_soni.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
