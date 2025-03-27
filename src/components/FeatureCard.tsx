
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => {
  const delay = 100 + (index * 75);
  
  return (
    <div 
      className="reveal-on-scroll opacity-0 futuristic-card group" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon with animated background */}
      <div className="relative z-10 mb-6">
        <div className="h-12 w-12 rounded-lg relative flex items-center justify-center bg-primary/10 text-primary overflow-hidden group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="h-6 w-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
        </div>
        <div className="absolute h-1.5 w-1.5 rounded-full bg-primary/80 -top-0.5 -right-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
      </div>

      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
      
      <p className="text-foreground/70 text-sm">{description}</p>
      
      {/* Animated corner decoration */}
      <div className={cn(
        "absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        "before:absolute before:bottom-0 before:right-0 before:h-4 before:w-0.5 before:bg-primary before:group-hover:h-8 before:transition-all before:duration-300",
        "after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-4 after:bg-primary after:group-hover:w-8 after:transition-all after:duration-300"
      )}></div>
    </div>
  );
};

export default FeatureCard;
