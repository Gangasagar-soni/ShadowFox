import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimations';
import { portfolioData } from '../../data/portfolioData';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-gray-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Showcasing my best work and technical expertise</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              ref={ref}
              className={`group transform transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-cyan-500/20 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                      {project.id === 1 ? '🏨' : project.id === 2 ? '🎬' : '🚀'}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-xs font-semibold">
                      Featured Project
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full hover:border-purple-500/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 text-cyan-400 rounded-lg hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 text-sm font-medium group/link"
                      >
                        <span>🌐</span>
                        <span className="group-hover/link:text-cyan-300 transition-colors">Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300 text-sm font-medium group/link"
                      >
                        <span>💻</span>
                        <span className="group-hover/link:text-white transition-colors">Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Info */}
        <div 
          ref={ref}
          className={`mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl transform transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Each project represents my commitment to writing clean, efficient, and scalable code. 
              I focus on creating user-centric solutions that solve real-world problems.
            </p>
            <p className="text-gray-400 text-sm">
              Check out my GitHub for more projects and open-source contributions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
