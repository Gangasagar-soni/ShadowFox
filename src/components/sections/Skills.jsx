import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimations';
import { portfolioData } from '../../data/portfolioData';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();

  const skillIcons = {
    'JavaScript': '⚡',
    'React': '⚛️',
    'Node.js': '🟢',
    'Express.js': '🚀',
    'MongoDB': '🍃',
    'MySQL': '🗄️',
    'HTML5': '🏗️',
    'CSS3': '🎨',
    'Tailwind CSS': '🌊',
    'Responsive Design': '📱',
    'REST API': '🔗',
    'Authentication': '🔐',
    'JWT': '🔑',
    'Database Design': '📊',
    'Git': '🔀',
    'GitHub': '🐙',
    'VS Code': '💻',
    'Postman': '📮'
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>

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
            Skills & Technologies
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Organized by expertise level</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(portfolioData.skillsByCategory).map(([category, skills], categoryIndex) => (
            <div
              key={category}
              ref={ref}
              className={`transform transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-gradient-to-br hover:from-gray-800/50 hover:to-gray-900/50 transition-all duration-300 group">
                {/* Category Title */}
                <h3 className="text-lg font-bold text-cyan-400 mb-4 flex items-center">
                  <span className="mr-2 text-2xl">📚</span>
                  {category}
                </h3>

                {/* Skills List */}
                <div className="space-y-3">
                  {skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`transform transition-all duration-500 ${
                        isVisible 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms` }}
                    >
                      <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group/skill cursor-pointer">
                        <span className="text-xl">{skillIcons[skill] || '✓'}</span>
                        <span className="text-gray-300 group-hover/skill:text-cyan-400 transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Info */}
        <div 
          ref={ref}
          className={`mt-16 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl transform transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Frontend Development', level: 'Advanced', skills: '8+ skills' },
              { title: 'Backend Development', level: 'Advanced', skills: '6+ skills' },
              { title: 'Database & Tools', level: 'Proficient', skills: '6+ tools' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-cyan-400 font-semibold mb-1">{item.title}</div>
                <div className="text-2xl font-bold text-white mb-1">{item.level}</div>
                <div className="text-gray-400 text-sm">{item.skills}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
