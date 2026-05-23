import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimations';
import { portfolioData } from '../../data/portfolioData';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation();

  const allExperience = [
    ...portfolioData.experience.map(exp => ({ ...exp, type: 'work' })),
    ...portfolioData.education.map(edu => ({ ...edu, type: 'education' }))
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 opacity-20"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {allExperience.map((item, index) => (
              <div
                key={item.id}
                ref={ref}
                className={`transform transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left side - on mobile and even indexes */}
                  <div className={index % 2 === 0 ? 'md:text-right' : 'md:order-2'}>
                    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                      <div className="flex md:justify-end items-start gap-4">
                        <div className="md:order-2">
                          <div className={`text-3xl mb-2 ${item.type === 'work' ? '💼' : '🎓'}`}></div>
                        </div>
                        <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                          {item.type === 'work' ? (
                            <>
                              <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-purple-400 text-sm font-medium mt-1">
                                {item.company}
                              </p>
                              <p className="text-gray-400 text-sm mt-2">
                                {item.duration}
                              </p>
                              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                                {item.description}
                              </p>
                              {item.technologies && (
                                <div className={`flex gap-2 mt-4 flex-wrap ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                  {item.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded hover:border-cyan-500/50 transition-colors"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <>
                              <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                {item.degree}
                              </h3>
                              <p className="text-purple-400 text-sm font-medium mt-1">
                                {item.institution}
                              </p>
                              <p className="text-gray-400 text-sm mt-2">
                                {item.year}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center - Timeline dot (hidden on mobile) */}
                  <div className="hidden md:flex justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-gray-950 shadow-lg shadow-cyan-500/50"></div>
                  </div>

                  {/* Right side (empty on even, filled on odd) */}
                  <div className={index % 2 === 0 ? 'hidden md:block' : 'hidden'}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Path Info */}
        <div 
          ref={ref}
          className={`mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl transform transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-lg font-bold text-cyan-400 mb-3">📈 Career Growth</h3>
          <p className="text-gray-300 leading-relaxed">
            With experience in both frontend and backend development, I've built a strong foundation in the MERN stack. 
            I'm continuously learning new technologies and best practices to stay updated with the fast-evolving web development landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
