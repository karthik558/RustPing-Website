import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div 
      className="group relative p-6 rounded-xl bg-[#121824] border border-slate-800 hover:border-[#d9531e]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#d9531e]/5 flex flex-col justify-between"
    >
      <div>
        {/* Icon Container */}
        <div className="w-12 h-12 rounded-lg bg-[#d9531e]/10 border border-[#d9531e]/20 flex items-center justify-center text-[#d9531e] mb-5 group-hover:bg-[#d9531e] group-hover:text-white transition-all duration-300">
          <Icon size={24} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#d9531e] transition-colors">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Accent Indicator */}
      <div className="w-0 group-hover:w-full h-0.5 bg-[#d9531e] rounded-full mt-6 transition-all duration-300"></div>
    </div>
  );
};

export default FeatureCard;
