
import React from 'react';
import { ArrowRight, Download, ExternalLink, Server, Activity, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-blue-950/20 dark:to-indigo-950/30">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-blue-500/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl float delay-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl float delay-300"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-full blur-3xl rotate-slow"></div>
      
      {/* Animated Dots */}
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-primary/60 rounded-full float"></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-500/60 rounded-full float delay-200"></div>
      <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-indigo-500/60 rounded-full float delay-400"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="glass-card px-6 py-3 fade-in">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <Shield size={16} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-gradient-primary">100% Free & Open Source Software</span>
                <div className="flex items-center gap-1">
                  <Zap size={14} className="text-yellow-500" />
                  <span className="text-xs text-gray-600 dark:text-gray-400">Blazing Fast</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="heading-xl text-gradient mb-8 slide-up delay-100">
            Next-Generation
            <span className="block text-gradient-primary mt-2">Network Monitoring</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed slide-up delay-200">
            Built with <span className="text-gradient-primary font-semibold">Rust</span> for ultimate performance. 
            Monitor your network infrastructure with real-time insights, beautiful dashboards, and enterprise-grade reliability.
          </p>
          
          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 slide-up delay-300">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Activity size={18} className="text-green-500" />
              <span className="font-medium">Real-time Monitoring</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Server size={18} className="text-blue-500" />
              <span className="font-medium">Multi-Protocol Support</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Zap size={18} className="text-yellow-500" />
              <span className="font-medium">Lightning Fast</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scale-in delay-400">
            <Button 
              asChild 
              className="btn-modern btn-primary group"
            >
              <a href="#installation" className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              className="btn-modern btn-secondary group"
            >
              <a href="#demo" className="flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="ghost" 
              className="btn-modern btn-ghost group"
            >
              <a href="https://github.com/karthik558/Rust-Ping" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Download className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                GitHub
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 slide-up delay-500">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-1">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Open Source</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-1">0ms</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-1">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-1">∞</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Scalability</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in delay-600">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
