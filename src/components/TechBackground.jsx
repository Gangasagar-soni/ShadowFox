import React, { useState, useEffect } from 'react';

const TechBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Tech elements with different speeds for parallax effect
  const techElements = [
    { id: 1, symbol: '</>', top: '10%', left: '5%', delay: 0, size: 'lg' },
    { id: 2, symbol: '{ }', top: '20%', left: '85%', delay: 0.5, size: 'md' },
    { id: 3, symbol: '[ ]', top: '60%', left: '10%', delay: 1, size: 'md' },
    { id: 4, symbol: '()', top: '75%', left: '80%', delay: 1.5, size: 'sm' },
    { id: 5, symbol: '→', top: '40%', left: '15%', delay: 0.8, size: 'md' },
    { id: 6, symbol: '◆', top: '55%', left: '75%', delay: 1.2, size: 'sm' },
    { id: 7, symbol: '≈', top: '30%', left: '45%', delay: 0.3, size: 'md' },
    { id: 8, symbol: '∞', top: '70%', left: '50%', delay: 1.8, size: 'sm' },
  ];

  // Particle nodes
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    initialTop: Math.random() * 100,
    initialLeft: Math.random() * 100,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2,
  }));

  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-5xl',
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950 to-slate-900"></div>

      {/* Animated grid background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(34, 211, 238, 0.1) 25%, rgba(34, 211, 238, 0.1) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, 0.1) 75%, rgba(34, 211, 238, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(34, 211, 238, 0.1) 25%, rgba(34, 211, 238, 0.1) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, 0.1) 75%, rgba(34, 211, 238, 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
          backgroundPosition: `0 ${scrollY * 0.5}px`,
          transition: 'background-position 0.1s linear',
        }}
      ></div>

      {/* Radial gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"
           style={{ transform: `translateY(${scrollY * 0.3}px)` }}></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"
           style={{ transform: `translateY(${scrollY * 0.4}px)` }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"
           style={{ transform: `translateY(${scrollY * 0.2}px)` }}></div>

      {/* Tech symbols - floating and scrolling */}
      {techElements.map((element) => (
        <div
          key={element.id}
          className={`absolute font-bold text-cyan-400/30 hover:text-cyan-400/60 transition-all duration-300 ${sizeClasses[element.size]}`}
          style={{
            top: element.top,
            left: element.left,
            transform: `translateY(${scrollY * (0.1 + element.delay * 0.05)}px) rotate(${scrollY * 0.5}deg)`,
            animation: `float 6s ease-in-out ${element.delay}s infinite`,
            filter: `drop-shadow(0 0 ${10 + scrollY * 0.01}px rgba(34, 211, 238, 0.3))`,
            textShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
          }}
        >
          {element.symbol}
        </div>
      ))}

      {/* Animated particles/nodes */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
          style={{
            top: `${particle.initialTop}%`,
            left: `${particle.initialLeft}%`,
            animation: `tech-particle ${particle.duration}s linear ${particle.delay}s infinite`,
            transform: `translateY(${scrollY * 0.15}px)`,
            boxShadow: '0 0 10px rgba(34, 211, 238, 0.6)',
          }}
        ></div>
      ))}

      {/* Connected nodes effect */}
      <svg className="absolute inset-0 w-full h-full opacity-5" style={{ pointerEvents: 'none' }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Animated connection lines */}
        <line
          x1="10%"
          y1={`${20 + scrollY * 0.1}%`}
          x2="40%"
          y2={`${50 - scrollY * 0.05}%`}
          stroke="rgba(34, 211, 238, 0.3)"
          strokeWidth="2"
          filter="url(#glow)"
        />
        <line
          x1="60%"
          y1={`${30 + scrollY * 0.08}%`}
          x2="90%"
          y2={`${60 - scrollY * 0.1}%`}
          stroke="rgba(168, 85, 247, 0.3)"
          strokeWidth="2"
          filter="url(#glow)"
        />
        <line
          x1="50%"
          y1={`${70 + scrollY * 0.12}%`}
          x2="20%"
          y2={`${90 - scrollY * 0.06}%`}
          stroke="rgba(34, 211, 238, 0.2)"
          strokeWidth="1.5"
          filter="url(#glow)"
        />
      </svg>

      {/* Mouse-following glow effect */}
      <div
        className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-0 pointer-events-none transition-opacity duration-300"
        style={{
          left: `${mousePos.x - 192}px`,
          top: `${mousePos.y - 192}px`,
          opacity: 0.02,
        }}
      ></div>

      <style jsx>{`
        @keyframes tech-particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default TechBackground;
