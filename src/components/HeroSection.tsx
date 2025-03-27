
import React from 'react';
import { ArrowRight, Download, ExternalLink, Server, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Network-themed background */}
      <div className="cyber-grid absolute inset-0 z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px] opacity-50"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-[80px] opacity-40"></div>
      
      {/* Animated network nodes */}
      <div className="network-node w-2 h-2 top-1/4 left-1/3"></div>
      <div className="network-node w-3 h-3 bottom-1/3 right-1/4"></div>
      <div className="network-node w-1.5 h-1.5 top-1/2 right-1/3"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <span className="feature-chip flex items-center gap-2 opacity-0 animate-fade-in py-2">
              <Server size={14} className="text-primary" />
              Rust-Powered Network Monitoring
              <span className="block w-2 h-2 rounded-full bg-primary animate-pulse ml-1"></span>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in animate-delay-100">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
              Real-time Network 
              <span className="block text-primary mt-1">Monitoring Solution</span>
            </span>
          </h1>
          
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            A lightweight, high-performance network monitoring tool built with Rust, 
            designed for speed and reliability. Track your network devices with precision.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in animate-delay-300">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 relative overflow-hidden group shadow-lg shadow-primary/20"
            >
              <a href="#installation" className="flex items-center">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary-foreground/20 to-primary/0 transform -translate-x-full animate-shimmer"></span>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:bg-primary/5 group"
            >
              <a href="#screenshots" className="flex items-center">
                View Screenshots
                <ExternalLink className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              </a>
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center items-center gap-8 opacity-0 animate-fade-in animate-delay-400">
            <div className="flex items-center">
              <div className="network-pulse-dot mr-2"></div>
              <span className="text-sm font-medium">Built with Rust</span>
            </div>
            <div className="flex items-center">
              <div className="network-pulse-dot mr-2"></div>
              <span className="text-sm font-medium">Blazing Fast</span>
            </div>
            <div className="flex items-center">
              <div className="network-pulse-dot mr-2"></div>
              <span className="text-sm font-medium">Open Source</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="flex justify-center mt-12">
        <div className="animate-bounce bg-primary/10 p-2 w-10 h-10 ring-1 ring-primary/50 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Network connection lines animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-px w-full max-w-md top-1/3 left-1/4 bg-gradient-to-r from-transparent via-primary/30 to-transparent data-flow"></div>
        <div className="absolute h-px w-full max-w-md bottom-1/3 right-1/4 bg-gradient-to-r from-transparent via-primary/30 to-transparent data-flow" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
