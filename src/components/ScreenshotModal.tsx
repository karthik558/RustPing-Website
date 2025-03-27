
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { X, Plus, Minus, RotateCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScreenshotModalProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  onClose: () => void;
}

const ScreenshotModal = ({ isOpen, imageSrc, title, onClose }: ScreenshotModalProps) => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Reset zoom and rotation when modal opens
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setRotation(0);
      setIsAnimating(true);
      
      // Auto-disable entrance animation after it completes
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleZoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.25, 0.5));
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
    } else if (e.key === 'r') {
      handleRotate();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className={cn(
          "p-0 border-none max-w-[95vw] max-h-[95vh] w-auto h-auto bg-transparent shadow-2xl overflow-hidden",
          isAnimating ? "animate-scale-in" : ""
        )}
        onKeyDown={handleKeyDown}
      >
        <div className="relative w-full h-full">
          {/* Controls overlay */}
          <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-gradient-to-b from-black/70 to-transparent">
            <h2 className="text-white font-medium truncate">{title}</h2>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleZoomOut}
                className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                aria-label="Zoom out"
              >
                <Minus size={16} />
              </button>
              <button 
                onClick={handleZoomIn}
                className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                aria-label="Zoom in"
              >
                <Plus size={16} />
              </button>
              <button 
                onClick={handleRotate}
                className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                aria-label="Rotate"
              >
                <RotateCw size={16} />
              </button>
              <DialogClose asChild>
                <button 
                  className="p-2 rounded-full bg-black/40 hover:bg-red-500 text-white transition-colors ml-2"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </DialogClose>
            </div>
          </div>
          
          {/* Image container */}
          <div className="w-full h-full overflow-auto bg-black/90 flex items-center justify-center">
            <div 
              className="transition-all duration-300 cursor-move"
              style={{ 
                transform: `scale(${scale}) rotate(${rotation}deg)`,
              }}
            >
              <img 
                src={imageSrc} 
                alt={title}
                className="max-w-full max-h-[90vh] object-contain"
                draggable={false}
              />
            </div>
          </div>
          
          {/* Bottom message */}
          <div className="absolute bottom-0 left-0 right-0 text-center text-white/70 text-sm py-2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
            Use + and - keys to zoom, R to rotate
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScreenshotModal;
