
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [logoSrc, setLogoSrc] = useState('/favicon.png');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    // Check system preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    setLogoSrc(prefersDark ? '/favicon.png' : '/favicon-light.png');
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    setLogoSrc(!isDarkMode ? '/favicon.png' : '/favicon-light.png');
  };

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Installation', href: '#installation' },
  ];

  return (
    <nav className={cn("nav-glass transition-all duration-500", isScrolled && "shadow-xl")}>
      <div className="section-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-all duration-300">
              <img 
                src={logoSrc}
                alt="RustPing Logo" 
                className="w-6 h-6 object-contain transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-gradient">RustPing</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode} 
              className="w-10 h-10 rounded-xl hover:bg-primary/10 transition-colors duration-300"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="btn-modern btn-ghost"
              asChild
            >
              <a href="https://github.com/karthik558/Rust-Ping" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={16} />
                <span className="hide-mobile">GitHub</span>
                <ExternalLink size={12} className="opacity-60" />
              </a>
            </Button>
            
            <Button 
              className="btn-modern btn-primary"
              asChild
            >
              <a href="#installation">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode} 
              className="w-10 h-10 rounded-xl"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            
            <Button 
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-xl"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="glass-card mt-4 p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full btn-modern btn-ghost justify-center"
                  asChild
                >
                  <a href="https://github.com/karthik558/Rust-Ping" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github size={16} />
                    View on GitHub
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                </Button>
                
                <Button 
                  className="w-full btn-modern btn-primary justify-center"
                  asChild
                >
                  <a href="#installation">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
