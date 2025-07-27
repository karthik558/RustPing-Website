
import React, { useEffect } from 'react';
import { Activity, Search, Clock, Shield, Database, Layout, MonitorSmartphone, FileCode, Bell, Download, ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import ScreenshotParallax from '@/components/ScreenshotParallax';
import RoadmapSection from '@/components/RoadmapSection';
import PullRequestBanner from '@/components/PullRequestBanner';
import DashboardDemo from '@/components/DashboardDemo';
import Footer from '@/components/Footer';
import InstallationGuideWithCopy from '@/components/InstallationGuideWithCopy';

const Index = () => {
  // Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    {
      icon: Activity,
      title: 'Real-time Device Monitoring',
      description: 'Keep an eye on your network devices with live updates and precise status tracking.',
    },
    {
      icon: Layout,
      title: 'Interactive Dashboard',
      description: 'Visualize your network\'s health with intuitive charts, tables, and indicators.',
    },
    {
      icon: Search,
      title: 'Multiple Sensors',
      description: 'Monitor devices using Ping, HTTP checks, and bandwidth monitoring tools.',
    },
    {
      icon: FileCode,
      title: 'Detailed Logging',
      description: 'Access comprehensive logs for troubleshooting and historical analysis.',
    },
    {
      icon: Clock,
      title: 'Automatic Retry',
      description: 'Handles intermittent network issues gracefully with automatic retries.',
    },
    {
      icon: Download,
      title: 'Log Export',
      description: 'Export logs in CSV or TXT format for offline analysis and reporting.',
    },
    {
      icon: Shield,
      title: 'User Authentication',
      description: 'Secure access with a login system and role-based permissions (upcoming).',
    },
    {
      icon: MonitorSmartphone,
      title: 'Responsive Design',
      description: 'Works seamlessly on various devices, including desktops and tablets.',
    },
    {
      icon: Database,
      title: 'Device Dashboard',
      description: 'Add devices directly from the front-end without editing JSON files.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* Dashboard Demo Section */}
        <section id="demo" className="py-24 bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-800/30">
          <div className="section-container">
            <DashboardDemo />
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-24 bg-white dark:bg-gray-900">
          <div className="section-container">
            <div className="text-center mb-16">
              <div className="glass-card inline-block px-6 py-3 mb-6 fade-in">
                <span className="text-sm font-semibold text-gradient-primary">Powerful Features</span>
              </div>
              <h2 className="heading-lg text-gradient mb-6 slide-up delay-100">
                Everything You Need for
                <span className="block text-gradient-primary">Network Monitoring</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed slide-up delay-200">
                RustPing combines cutting-edge technology with an intuitive interface to deliver 
                comprehensive network monitoring that scales with your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Screenshot Section */}
        <section id="screenshots" className="py-24 bg-gradient-to-br from-primary/5 via-blue-50/30 to-indigo-50/50 dark:from-primary/10 dark:via-blue-950/20 dark:to-indigo-950/30">
          <div className="section-container">
            <ScreenshotParallax />
          </div>
        </section>
        
        {/* Contribution Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="section-container">
            <PullRequestBanner />
          </div>
        </section>
        
        {/* Roadmap Section */}
        <section id="roadmap" className="py-24 bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-800/30">
          <div className="section-container">
            <RoadmapSection />
          </div>
        </section>
        
        {/* Installation Guide */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="section-container">
            <InstallationGuideWithCopy />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-blue-50/30 to-indigo-50/50 dark:from-primary/10 dark:via-blue-950/20 dark:to-indigo-950/30">
          <div className="section-container">
            <div className="text-center">
              <div className="glass-card p-16 max-w-4xl mx-auto relative overflow-hidden group">
                <div className="relative z-10">
                  <h2 className="heading-lg text-gradient mb-6">Ready to Transform Your Network Monitoring?</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of developers and system administrators who trust RustPing 
                    for their network infrastructure monitoring needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      asChild 
                      className="btn-modern btn-primary"
                    >
                      <a href="#installation" className="flex items-center gap-2">
                        Start Monitoring Now
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="btn-modern btn-secondary"
                    >
                      <a href="https://github.com/karthik558/Rust-Ping" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        View Source Code
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Enhanced floating elements */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-full blur-2xl float delay-0"></div>
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-full blur-2xl float delay-300"></div>
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/60 rounded-full float delay-100"></div>
                <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-blue-500/60 rounded-full float delay-400"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
