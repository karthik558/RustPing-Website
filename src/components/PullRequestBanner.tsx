
import React from 'react';
import { GitPullRequest, Code, Github, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PullRequestBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-primary/10 to-blue-500/5 dark:from-primary/10 dark:via-primary/15 dark:to-blue-500/10">
      <div className="section-container">
        <div className="dashboard-card p-10 relative overflow-hidden border-dashed border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 group">
          <div className="absolute -top-10 -right-10 h-40 w-40 bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="absolute -bottom-10 -left-10 h-32 w-32 bg-gradient-to-tr from-blue-500/5 to-primary/10 rounded-full blur-2xl"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-full bg-primary/10">
                  <GitPullRequest size={18} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">100% Free & Open Source</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">Contribute to RustPing</h3>
              <p className="text-foreground/70 mb-4 text-base">
                RustPing is completely free and open source. We welcome contributions from the community to make it even better.
              </p>
              <div className="flex items-center text-sm text-foreground/60">
                <Heart size={14} className="text-red-500 mr-1" />
                <span>Built with love by the community</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 highlight-on-hover shadow-md hover:shadow-lg border-primary/30 hover:border-primary/50"
                onClick={() => window.open('https://github.com/karthik558/Rust-Ping', '_blank')}
              >
                <Github size={18} />
                <span>View on GitHub</span>
              </Button>
              <Button 
                className="flex items-center gap-2 highlight-on-hover shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transform transition-all duration-300"
                onClick={() => window.open('https://github.com/karthik558/Rust-Ping/pulls', '_blank')}
              >
                <GitPullRequest size={18} />
                <span>Open a Pull Request</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PullRequestBanner;
