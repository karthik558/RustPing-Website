
import React from 'react';
import { GitPullRequest, Code, Github, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PullRequestBanner = () => {
  return (
    <section className="py-12 bg-primary/5 dark:bg-primary/10">
      <div className="section-container">
        <div className="dashboard-card p-8 relative overflow-hidden border-dashed border-2 border-primary/30">
          <div className="absolute -top-10 -right-10 h-40 w-40 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <GitPullRequest size={20} className="text-primary" />
                <span className="text-sm font-semibold text-primary">100% Free & Open Source</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Contribute to RustPing</h3>
              <p className="text-foreground/70 mb-4">
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
                className="flex items-center gap-2"
                onClick={() => window.open('https://github.com/karthik558/Rust-Ping', '_blank')}
              >
                <Github size={18} />
                <span>View on GitHub</span>
              </Button>
              <Button 
                className="flex items-center gap-2"
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
