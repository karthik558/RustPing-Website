
import React from 'react';
import { Github, Twitter, Heart, Globe, Mail, BookOpen, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-100 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-md flex items-center justify-center relative overflow-hidden group">
                <img 
                  src="/favicon.png" 
                  alt="RustPing Logo" 
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <span className="font-semibold text-xl">RustPing</span>
            </div>
            <p className="text-foreground/70 text-sm mb-4 max-w-md">
              A powerful, real-time network monitoring tool built with Rust and the Rocket web framework, focusing on speed, reliability, and ease of use.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors hover:scale-110 transform duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors hover:scale-110 transform duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors hover:scale-110 transform duration-200">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium mb-4 text-sm text-foreground/90 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-foreground/70 hover:text-foreground text-sm transition-colors hover:translate-x-1 inline-block transform duration-200">Features</a>
              </li>
              <li>
                <a href="#screenshots" className="text-foreground/70 hover:text-foreground text-sm transition-colors hover:translate-x-1 inline-block transform duration-200">Screenshots</a>
              </li>
              <li>
                <a href="#roadmap" className="text-foreground/70 hover:text-foreground text-sm transition-colors hover:translate-x-1 inline-block transform duration-200">Roadmap</a>
              </li>
              <li>
                <a href="#installation" className="text-foreground/70 hover:text-foreground text-sm transition-colors hover:translate-x-1 inline-block transform duration-200">Installation</a>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div id="get-started">
            <h3 className="font-medium mb-4 text-sm text-foreground/90 uppercase tracking-wider">Get Started</h3>
            <ul className="space-y-2">
              <li>
                <a href="#installation" className="text-foreground/70 hover:text-foreground text-sm transition-colors flex items-center hover:translate-x-1 transform duration-200">
                  <Code size={14} className="mr-1.5" />
                  <span>Installation Guide</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground text-sm transition-colors flex items-center hover:translate-x-1 transform duration-200">
                  <BookOpen size={14} className="mr-1.5" />
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground text-sm transition-colors flex items-center hover:translate-x-1 transform duration-200">
                  <Github size={14} className="mr-1.5" />
                  <span>Contribute</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground text-sm transition-colors flex items-center hover:translate-x-1 transform duration-200">
                  <Mail size={14} className="mr-1.5" />
                  <span>Report Issues</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-foreground/60 flex items-center">
            Made with <Heart size={14} className="text-red-500 mx-1 hover:scale-125 transition-transform duration-300" /> using Rust and React
          </p>
          <p className="text-xs text-foreground/50 mt-2 md:mt-0">
            © Copyright {currentYear}. All rights reserved. Developed by KARTHIK LAL.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
