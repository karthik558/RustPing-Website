import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#08080a] border-t border-[#1f1f26] text-slate-400 py-14">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo_rust.png" alt="RustPing Logo" className="h-14 sm:h-16 w-auto object-contain" />
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed mb-6">
              An ultra-fast, real-time network monitoring platform built with Rust and web technologies, engineered for operational clarity and zero latency.
            </p>

            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/karthik558/Rust-Ping" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#14141a] border border-[#252530] text-xs font-semibold text-slate-300 hover:text-white hover:border-[#e04922]/50 hover:bg-[#1a1a24] transition-all font-mono"
              >
                <Github size={15} />
                <span>GitHub Repository</span>
                <ExternalLink size={11} className="opacity-60" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase font-mono tracking-wider mb-4 text-[#e04922]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a href="#features" className="hover:text-[#e04922] transition-colors">Features</a>
              </li>
              <li>
                <a href="#screenshots" className="hover:text-[#e04922] transition-colors">Screenshots</a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-[#e04922] transition-colors">Roadmap</a>
              </li>
              <li>
                <a href="#installation" className="hover:text-[#e04922] transition-colors">Installation</a>
              </li>
            </ul>
          </div>

          {/* Open Source / License */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase font-mono tracking-wider mb-4 text-[#e04922]">
              Open Source
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Released under the MIT License. Free software for developers and system administrators.
            </p>
            <a 
              href="https://github.com/karthik558/Rust-Ping/blob/main/LICENSE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-[#e04922] font-mono hover:underline inline-flex items-center gap-1"
            >
              <span>Read License Details</span>
              <span>→</span>
            </a>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-[#1f1f26] text-center text-xs font-mono text-slate-500">
          © {currentYear} RustPing. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
