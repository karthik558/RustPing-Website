import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Simulate fast initial loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate loading progress
        const diff = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + diff, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 300);

      const hideTimer = setTimeout(() => {
        setIsHidden(true);
      }, 800);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [progress]);

  if (isHidden) return null;

  const getStatusText = () => {
    if (progress < 35) return 'INITIALIZING RUST ENGINE...';
    if (progress < 70) return 'LOADING ICMP & SENSOR PROBES...';
    if (progress < 100) return 'CONFIGURING DASHBOARD...';
    return 'SYSTEM READY';
  };

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[9999] bg-[#08080a] flex flex-col items-center justify-center transition-all duration-500 ease-in-out px-4",
        isLoaded ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      )}
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e04922]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
        
        {/* Animated Rust Logo */}
        <div className="relative mb-8 group">
          <img 
            src="/logo_rust.png" 
            alt="RustPing Loading" 
            className="h-16 sm:h-20 w-auto object-contain animate-pulse drop-shadow-[0_0_25px_rgba(224,73,34,0.4)]"
          />
        </div>

        {/* Progress Percentage Display */}
        <div className="font-mono text-3xl font-extrabold text-white mb-3 tracking-tight">
          <span className="text-[#e04922]">{progress}</span>%
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1.5 bg-[#16161c] border border-[#252530] rounded-full overflow-hidden mb-4 shadow-inner">
          <div 
            className="h-full bg-[#e04922] transition-all duration-150 ease-out rounded-full shadow-[0_0_12px_#e04922]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Console Status Text */}
        <div className="font-mono text-[11px] text-slate-400 tracking-wider font-semibold">
          {getStatusText()}
        </div>

      </div>
    </div>
  );
};

export default Preloader;
