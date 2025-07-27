
import React from 'react';
import { LucideIcon } from 'lucide-react';

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
      className={`feature-card group slide-up opacity-0 delay-${Math.min(index * 100 + 300, 600)}`}
    >
      {/* Icon */}
      <div className="feature-icon group-hover:rotate-6 transition-all duration-300">
        <Icon className="w-8 h-8" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
      </div>

      {/* Content */}
      <h3 className="heading-md mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-300"></div>
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default FeatureCard;
