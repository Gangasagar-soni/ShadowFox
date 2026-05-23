import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useScrollAnimation } from '../../hooks/useScrollAnimations';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    emailjs.init('YOUR_PUBLIC_KEY');
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    emailjs
      .sendForm(
        'service_ab10bka',
        'template_hv03b5i',
        formRef.current,
        'gcBZzPTzxHu4CKwaq'
      )
      .then(
        () => {
          setMessage('Message sent successfully! ✓');
          formRef.current.reset();
          setLoading(false);
          setTimeout(() => setMessage(''), 3000);
        },
        (error) => {
          setMessage('Failed to send message. Please try again.');
          setLoading(false);
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="py-24 px-6 bg-gray-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none"></div>

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
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">
            Have a project in mind? Let's build something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div 
            ref={ref}
            className={`space-y-6 transform transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="space-y-4">
              {[
                { 
                  icon: '📧', 
                  label: 'Email',
                  value: portfolioData.email,
                  href: `mailto:${portfolioData.email}`
                },
                { 
                  icon: '📱', 
                  label: 'Phone',
                  value: portfolioData.phone,
                  href: `tel:${portfolioData.phone}`
                },
                { 
                  icon: '📍', 
                  label: 'Location',
                  value: portfolioData.location
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block p-4 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/15 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <div className="text-cyan-400 font-semibold text-sm">{item.label}</div>
                      <div className="text-gray-300 mt-1 group-hover:text-cyan-300 transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-700">
              <h3 className="text-white font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {portfolioData.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/30 transition-all duration-300 transform hover:scale-110"
                    aria-label={link.name}
                  >
                    {link.icon === 'github' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.372.815 1.102.815 2.222 0 1.606-.015 2.902-.015 3.293 0 .319.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.73V1.73C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.432a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM20.452 20.452h-3.556v-5.604c0-1.336-.026-3.057-1.864-3.057-1.865 0-2.15 1.454-2.15 2.956v5.705H9.37V9h3.414v1.561h.047c.476-.9 1.637-1.847 3.37-1.847 3.605 0 4.27 2.373 4.27 5.457v6.281z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            ref={ref}
            className={`transform transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-12'
            }`}
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              {[
                { name: 'name', placeholder: 'Your Name', type: 'text', required: true },
                { name: 'email', placeholder: 'Your Email', type: 'email', required: true }
              ].map((field, index) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  className={`w-full px-4 py-3 bg-gray-800 border border-cyan-500/30 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 animate-fade-in-up ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                />
              ))}

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="6"
                className={`w-full px-4 py-3 bg-gray-800 border border-cyan-500/30 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none animate-fade-in-up ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '100ms' }}
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 animate-fade-in-up ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '150ms' }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {message && (
                <div
                  className={`px-4 py-3 rounded-lg font-medium text-center ${
                    message.includes('successfully')
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                      : 'bg-red-500/20 text-red-300 border border-red-500/50'
                  } animate-fade-in-up`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
