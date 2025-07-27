import React, { useEffect, useState } from 'react';
import { Github, Twitter, Heart, Globe, Mail, BookOpen, Code, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [logoSrc, setLogoSrc] = useState('/favicon.png');
   
   useEffect(() => {
     // Check system preference for dark mode on initial load
     const prefersDark = document.documentElement.classList.contains('dark');
     setLogoSrc(prefersDark ? '/favicon.png' : '/favicon-light.png');
 
     // Create a mutation observer to watch for class changes on the html element
     const observer = new MutationObserver((mutations) => {
       mutations.forEach((mutation) => {
         if (mutation.attributeName === 'class') {
           const isDark = document.documentElement.classList.contains('dark');
           setLogoSrc(isDark ? '/favicon.png' : '/favicon-light.png');
         }
       });
     });
 
     observer.observe(document.documentElement, { attributes: true });
 
     return () => {
       observer.disconnect();
     };
   }, []);
   
  return (
    <footer className="footer-modern py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center overflow-hidden group">
                <img 
                  src={logoSrc} 
                  alt="RustPing Logo" 
                  className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold text-gradient">RustPing</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-base mb-6 max-w-md leading-relaxed">
              A powerful, real-time network monitoring tool built with Rust and modern web technologies, 
              focusing on speed, reliability, and ease of use.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/karthik558" 
                 className="w-10 h-10 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110">
                <Github size={18} />
              </a>
              <a href="https://karthiklal.in" 
                 className="w-10 h-10 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110">
                <Globe size={18} />
              </a>
              <a href="mailto:dev@karthiklal.in" 
                 className="w-10 h-10 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110">
                <Mail size={18} />
              </a> 
              <a href="https://linkedin.com/in/karthiklal" 
                 className="w-10 h-10 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com/_karthiklal" 
                 className="w-10 h-10 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-6 text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Features</span>
                </a>
              </li>
              <li>
                <a href="#screenshots" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Screenshots</span>
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Roadmap</span>
                </a>
              </li>
              <li>
                <a href="#installation" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Installation</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="font-semibold mb-6 text-gray-900 dark:text-white">Get Started</h3>
            <ul className="space-y-4">
              <li>
                <a href="#installation" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <Code size={16} className="mr-2 opacity-60" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Installation Guide</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/karthik558/Rust-Ping/blob/main/README.md" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <BookOpen size={16} className="mr-2 opacity-60" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Documentation</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/karthik558/Rust-Ping" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <Github size={16} className="mr-2 opacity-60" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contribute</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/karthik558/Rust-Ping/issues?q=sort%3Aupdated-desc+is%3Aissue+is%3Aopen" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <Mail size={16} className="mr-2 opacity-60" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Report Issues</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="glass-card p-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 mx-1 hover:scale-125 transition-transform duration-300" />
            <span>for the community</span>
          </div>
          <p className="text-gray-500 dark:text-gray-500">
            © {currentYear}. Developed by{' '}
            <a 
              href="https://karthiklal.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:text-primary/80 transition-colors duration-300 hover:underline"
            >
              KARTHIK LAL
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
