import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section className="py-20 bg-[#08080a] border-t border-[#1f1f26]">
      <div className="section-container">
        <div className="rounded-2xl bg-[#e04922] text-white p-10 md:p-14 shadow-2xl shadow-[#e04922]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
          
          <div className="relative z-10 max-w-xl">
            <div className="inline-block px-3 py-1 rounded bg-black/20 text-white/90 text-xs font-mono font-semibold tracking-wide mb-4">
              // GET STARTED NOW
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-white">
              Give your infrastructure a better core.
            </h2>
          </div>

          <div className="relative z-10">
            <a 
              href="#installation" 
              className="inline-flex items-center gap-2 bg-white text-[#08080a] hover:bg-slate-100 font-extrabold text-sm px-8 py-4 rounded-md shadow-xl transition-all hover:scale-105 font-mono"
            >
              <span>Deploy Now</span>
              <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
