import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { X, Plus, Minus, RotateCw, ChevronLeft, ChevronRight, Sun, Moon, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScreenshotModalProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  description?: string;
  currentTheme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalCount?: number;
  onClose: () => void;
}

const ScreenshotModal = ({
  isOpen,
  imageSrc,
  title,
  description,
  currentTheme = 'dark',
  onToggleTheme,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
  onClose,
}: ScreenshotModalProps) => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Reset zoom and rotation when modal opens or image changes
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setRotation(0);
      setIsAnimating(true);
      
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, imageSrc]);

  const handleZoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setScale(1);
    setRotation(0);
  };

  const handleRotate = () => {
    setRotation(prevRotation => (prevRotation + 90) % 360);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === '+') {
      handleZoomIn();
    } else if (e.key === '-') {
      handleZoomOut();
    } else if (e.key === 'r' || e.key === 'R') {
      handleRotate();
    } else if (e.key === '0') {
      handleResetZoom();
    } else if (e.key === 'ArrowLeft' && onPrev) {
      onPrev();
    } else if (e.key === 'ArrowRight' && onNext) {
      onNext();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className={cn(
          "p-0 border border-[#343a36] max-w-[96vw] max-h-[96vh] w-[1400px] h-[92vh] bg-[#090b0b] text-white shadow-2xl overflow-hidden flex flex-col rounded-xl",
          isAnimating ? "animate-scale-in" : ""
        )}
        onKeyDown={handleKeyDown}
      >
        {/* Header Bar */}
        <div className="flex justify-between items-center px-6 py-4 bg-[#0e1010] border-b border-[#242827] z-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d7ff43] shadow-[0_0_8px_#d7ff43]" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-mono text-sm font-semibold text-white tracking-wide">{title}</h3>
                {currentIndex !== undefined && totalCount !== undefined && (
                  <span className="text-[10px] font-mono text-[#858b87] bg-[#191c1b] px-2 py-0.5 rounded border border-[#242827]">
                    {currentIndex + 1} / {totalCount}
                  </span>
                )}
              </div>
              {description && (
                <p className="text-xs text-[#858b87] font-sans truncate max-w-md hidden sm:block">
                  {description}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#161918] hover:bg-[#202523] text-xs font-mono text-[#d5d7d4] border border-[#2e3431] transition-all"
                title={`Switch to ${currentTheme === 'dark' ? 'Light' : 'Dark'} mode screenshot`}
              >
                {currentTheme === 'dark' ? (
                  <>
                    <Sun size={13} className="text-[#d7ff43]" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={13} className="text-[#5ff49a]" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            )}

            <div className="h-5 w-px bg-[#242827] mx-1 hidden sm:block" />

            {/* Zoom Controls */}
            <button 
              onClick={handleZoomOut}
              className="p-1.5 rounded-md bg-[#161918] hover:bg-[#202523] text-[#a6aba7] hover:text-white border border-[#2e3431] transition-colors"
              title="Zoom Out (-)"
            >
              <Minus size={15} />
            </button>
            
            <button 
              onClick={handleResetZoom}
              className="px-2 py-1.5 rounded-md bg-[#161918] hover:bg-[#202523] text-xs font-mono text-[#a6aba7] hover:text-white border border-[#2e3431] transition-colors"
              title="Reset Zoom (0)"
            >
              {Math.round(scale * 100)}%
            </button>

            <button 
              onClick={handleZoomIn}
              className="p-1.5 rounded-md bg-[#161918] hover:bg-[#202523] text-[#a6aba7] hover:text-white border border-[#2e3431] transition-colors"
              title="Zoom In (+)"
            >
              <Plus size={15} />
            </button>
            
            <button 
              onClick={handleRotate}
              className="p-1.5 rounded-md bg-[#161918] hover:bg-[#202523] text-[#a6aba7] hover:text-white border border-[#2e3431] transition-colors"
              title="Rotate (R)"
            >
              <RotateCw size={15} />
            </button>

            <DialogClose asChild>
              <button 
                className="p-1.5 rounded-md bg-[#161918] hover:bg-red-500/20 text-[#a6aba7] hover:text-red-400 border border-[#2e3431] hover:border-red-500/40 transition-colors ml-2"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </DialogClose>
          </div>
        </div>
        
        {/* Main Image Viewport */}
        <div className="relative flex-1 bg-[#060707] overflow-hidden flex items-center justify-center p-4">
          {/* Navigation Prev Button */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#0e1010]/80 hover:bg-[#161918] text-white border border-[#343a36] hover:border-[#d7ff43] shadow-2xl transition-all"
              title="Previous Screenshot (Left Arrow)"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Navigation Next Button */}
          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#0e1010]/80 hover:bg-[#161918] text-white border border-[#343a36] hover:border-[#d7ff43] shadow-2xl transition-all"
              title="Next Screenshot (Right Arrow)"
            >
              <ChevronRight size={22} />
            </button>
          )}

          <div className="w-full h-full overflow-auto flex items-center justify-center">
            <div 
              className="transition-transform duration-200 ease-out cursor-grab active:cursor-grabbing max-w-full max-h-full"
              style={{ 
                transform: `scale(${scale}) rotate(${rotation}deg)`,
              }}
            >
              <img 
                src={imageSrc} 
                alt={title}
                className="max-w-full max-h-[75vh] object-contain rounded-md shadow-2xl border border-[#242827]"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Footer Hint Bar */}
        <div className="px-6 py-2.5 bg-[#0e1010] border-t border-[#242827] flex justify-between items-center text-[11px] font-mono text-[#777d79]">
          <span className="hidden sm:inline">
            Keyboard Shortcuts: <kbd className="bg-[#191c1b] px-1.5 py-0.5 rounded text-[#d5d7d4] border border-[#242827]">←</kbd> <kbd className="bg-[#191c1b] px-1.5 py-0.5 rounded text-[#d5d7d4] border border-[#242827]">→</kbd> Navigate | <kbd className="bg-[#191c1b] px-1.5 py-0.5 rounded text-[#d5d7d4] border border-[#242827]">+</kbd> <kbd className="bg-[#191c1b] px-1.5 py-0.5 rounded text-[#d5d7d4] border border-[#242827]">-</kbd> Zoom | <kbd className="bg-[#191c1b] px-1.5 py-0.5 rounded text-[#d5d7d4] border border-[#242827]">R</kbd> Rotate
          </span>
          <span className="text-[#d7ff43] font-medium ml-auto">
            RustPing Telemetry Surface
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScreenshotModal;
