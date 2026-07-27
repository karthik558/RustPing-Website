import React from 'react';
import { GitPullRequest, Github, Heart, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PullRequestBanner = () => {
  return (
    <div className="w-full">
      <div className="rounded-2xl bg-[#111115] border border-[#1f1f26] hover:border-[#e04922]/40 p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all group">
        
        {/* Soft Background Radial Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e04922]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
          <div className="max-w-2xl">
            
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16161c] border border-[#252530] text-[#e04922] text-xs font-mono font-semibold tracking-wide mb-4">
              <span>// OPEN SOURCE COMMUNITY</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Built in the open.
              <span className="block text-[#e04922] mt-1">
                Driven by developers.
              </span>
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xl">
              RustPing is 100% free and open-source software under the MIT License. We welcome feature proposals, bug fixes, and pull requests from global infrastructure engineers.
            </p>

            <div className="flex items-center text-xs font-mono text-slate-400 gap-2">
              <Code2 size={15} className="text-[#e04922]" />
              <span>Maintained by the global Rust & Open Source community</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto">
            <Button 
              variant="outline" 
              className="bg-[#181820] hover:bg-[#20202c] text-slate-200 border-[#252530] font-semibold text-xs px-6 py-6 rounded-md flex items-center justify-center gap-2 transition-all"
              onClick={() => window.open('https://github.com/karthik558/Rust-Ping', '_blank')}
            >
              <Github size={16} />
              <span>View Repository</span>
            </Button>
            
            <Button 
              className="bg-[#e04922] hover:bg-[#c83b16] text-white font-semibold text-xs px-6 py-6 rounded-md flex items-center justify-center gap-2 shadow-lg shadow-[#e04922]/25 transition-all hover:scale-[1.02]"
              onClick={() => window.open('https://github.com/karthik558/Rust-Ping/pulls', '_blank')}
            >
              <GitPullRequest size={16} />
              <span>Open Pull Request</span>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PullRequestBanner;
