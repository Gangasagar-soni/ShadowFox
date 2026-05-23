import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimations';
import { portfolioData } from '../../data/portfolioData';

const Certifications = () => {
  const [ref, isVisible] = useScrollAnimation();

  // Group certifications by provider
  const certificationsByProvider = portfolioData.certifications.reduce((acc, cert) => {
    if (!acc[cert.provider]) {
      acc[cert.provider] = [];
    }
    acc[cert.provider].push(cert);
    return acc;
  }, {});

  const providers = Object.keys(certificationsByProvider);

  return (
    <section className="py-24 px-6 bg-gray-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none"></div>

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
            Certifications & Credentials
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Professional certifications and achievements</p>
        </div>

        {/* Certifications Grid by Provider */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {providers.map((provider) => (
            <div
              key={provider}
              ref={ref}
              className={`transform transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Provider Card */}
              <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-cyan-500/20 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 p-6">
                {/* Provider Header */}
                <div className="mb-6 pb-4 border-b border-cyan-500/20">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                    {provider}
                  </h3>
                  <p className="text-cyan-400 text-sm">
                    {certificationsByProvider[provider].length} certification{certificationsByProvider[provider].length !== 1 ? 's' : ''}
                  </p>
                </div>

                {/* Certifications List */}
                <div className="space-y-4">
                  {certificationsByProvider[provider].map((cert, index) => (
                    <div
                      key={cert.id}
                      className={`group flex gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 transform transition-all ${
                        isVisible 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-4'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0 text-4xl">
                        {cert.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                          {cert.name}
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">
                          Certified in {cert.year}
                        </p>
                      </div>

                      {/* Badge */}
                      <div className="flex-shrink-0">
                        <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full">
                          <span className="text-cyan-400 text-xs font-semibold">✓ Verified</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div 
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 transform transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              {portfolioData.certifications.length}
            </div>
            <p className="text-gray-400 text-sm">Total Certifications</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {providers.length}
            </div>
            <p className="text-gray-400 text-sm">Institutions</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              100%
            </div>
            <p className="text-gray-400 text-sm">Completion Rate</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">
              ✓
            </div>
            <p className="text-gray-400 text-sm">All Verified</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
