import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.documentElement.classList.add('dark');

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Screenshots', href: '#screenshots' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Installation', href: '#installation' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled 
        ? "bg-[#08080a]/95 backdrop-blur-md border-[#1f1f26] shadow-2xl py-2.5" 
        : "bg-[#08080a]/85 backdrop-blur-sm border-[#1f1f26]/60 py-3.5"
    )}>
      <div className="section-container">
        <div className="flex justify-between items-center h-12">
          
          {/* Brand Logo - Enlarged transparent logo without container box or border */}
          <a href="#" className="flex items-center group">
            <img 
              src="/logo_rust.png"
              alt="RustPing" 
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-[#e04922] hover:bg-[#16161c] rounded-md transition-all font-mono"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-[#14141a] hover:bg-[#1f1f28] text-slate-200 border-[#252530] text-xs font-semibold px-4 py-2 rounded-md transition-all font-mono"
              asChild
            >
              <a href="https://github.com/karthik558/Rust-Ping" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                <Github size={14} />
                <span>GitHub</span>
                <ExternalLink size={11} className="opacity-60" />
              </a>
            </Button>
            
            <Button 
              size="sm"
              className="bg-[#e04922] hover:bg-[#c83b16] text-white text-xs font-semibold px-5 py-2 rounded-md shadow-md shadow-[#e04922]/25 transition-all hover:scale-[1.02] font-mono"
              asChild
            >
              <a href="#installation">Deploy Now</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-md bg-[#14141a] border border-[#252530] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#111115] border border-[#1f1f26] rounded-xl shadow-2xl space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#e04922] hover:bg-[#16161c] rounded-md transition-colors font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#1f1f26] flex flex-col gap-2">
              <Button 
                variant="outline" 
                className="w-full bg-[#14141a] border-[#252530] text-slate-200 justify-center text-xs py-2.5 rounded-md font-mono"
                asChild
              >
                <a href="https://github.com/karthik558/Rust-Ping" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={14} />
                  <span>GitHub Repository</span>
                  <ExternalLink size={11} className="opacity-60" />
                </a>
              </Button>
              
              <Button 
                className="w-full bg-[#e04922] hover:bg-[#c83b16] text-white justify-center text-xs py-2.5 font-semibold shadow-md shadow-[#e04922]/25 rounded-md font-mono"
                asChild
              >
                <a href="#installation" onClick={() => setIsMenuOpen(false)}>Deploy Now</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
