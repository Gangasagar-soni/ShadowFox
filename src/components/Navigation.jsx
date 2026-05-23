import React, { useState, useEffect } from 'react';

const Navigation = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-950/95 backdrop-blur-md shadow-lg shadow-cyan-500/10' 
        : 'bg-gray-950/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent hover:from-cyan-400 hover:to-purple-400 transition-all duration-300">
              GS
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top fade-in duration-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
