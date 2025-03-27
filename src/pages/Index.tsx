
import React, { useEffect } from 'react';
import { Activity, Search, Clock, Shield, Database, Layout, MonitorSmartphone, FileCode, Bell, Download } from 'lucide-react';
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
        
        {/* Free & Open Source Badge */}
        <div className="flex justify-center -mt-10 mb-16">
          <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium flex items-center gap-2 animate-pulse relative overflow-hidden">
            <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
            100% Free & Open Source Software
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent data-flow"></div>
          </div>
        </div>
        
        {/* Dashboard Demo Section */}
        <DashboardDemo />
        
        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="feature-chip opacity-0 animate-fade-in">Powerful Features</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 opacity-0 animate-fade-in animate-delay-100">
                Everything You Need to Monitor Your Network
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
                RustPing combines powerful features with an intuitive interface to provide comprehensive network monitoring.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        
        {/* Screenshot Parallax Section */}
        <ScreenshotParallax />
        
        {/* Pull Request Section */}
        <PullRequestBanner />
        
        {/* Roadmap Section */}
        <RoadmapSection />
        
        {/* Installation Guide */}
        <InstallationGuideWithCopy />
        
        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="section-container">
            <div className="dashboard-card p-10 max-w-4xl mx-auto relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 opacity-0 animate-fade-in">Ready to Monitor Your Network?</h2>
                <p className="text-foreground/70 mb-8 max-w-xl mx-auto opacity-0 animate-fade-in animate-delay-100">
                  Start using RustPing today and take control of your network monitoring with our powerful, real-time solution.
                </p>
                <div className="space-x-4 opacity-0 animate-fade-in animate-delay-200">
                  <a href="#installation" className="dashboard-button py-2.5 px-5 hover:scale-105 transform transition-transform">
                    Get Started
                  </a>
                  <a href="https://github.com/karthik558/Rust-Ping" className="dashboard-button-outline hover:border-primary/50 transition-colors">
                    View on GitHub
                  </a>
                </div>
              </div>
              
              {/* Network-themed background */}
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 filter blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/5 filter blur-3xl"></div>
              
              {/* Network nodes */}
              <div className="absolute top-12 right-20 h-2 w-2 rounded-full bg-primary/30 animate-pulse-slow"></div>
              <div className="absolute bottom-20 left-16 h-1.5 w-1.5 rounded-full bg-primary/40 animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 right-12 h-1 w-1 rounded-full bg-primary/50 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
