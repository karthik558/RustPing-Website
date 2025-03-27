
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

interface ScreenshotSet {
  dark: string;
  light: string;
  title: string;
  description: string;
}

const screenshots: ScreenshotSet[] = [
  {
    dark: "/screenshots/authLogin-dark.png",
    light: "/screenshots/authLogin-light.png",
    title: "Authentication",
    description: "Secure your monitoring dashboard with user authentication"
  },
  {
    dark: "/screenshots/loginDark.png",
    light: "/screenshots/loginLight.png",
    title: "Login Screen",
    description: "Clean, simple login interface for quick access"
  },
  {
    dark: "/screenshots/passReset-dark.png",
    light: "/screenshots/passReset-light.png",
    title: "Password Reset",
    description: "Easy password recovery process for users"
  },
  {
    dark: "/screenshots/devDashBoard-dark.png",
    light: "/screenshots/devDashBoard-light.png",
    title: "Device Dashboard",
    description: "Manage all your network devices in one place"
  },
  {
    dark: "/screenshots/dashboardHome-dark.png",
    light: "/screenshots/dashboardHome-light.png",
    title: "Main Dashboard",
    description: "Get an overview of your entire network status"
  },
  {
    dark: "/screenshots/liveLog-dark.png",
    light: "/screenshots/liveLog-light.png",
    title: "Live Logs",
    description: "Monitor real-time events and statuses"
  },
  {
    dark: "/screenshots/failedLog-dark.png",
    light: "/screenshots/failedLog-light.png",
    title: "Failed Logs",
    description: "Quickly identify and troubleshoot issues"
  }
];

const ScreenshotParallax = () => {
  const [mode, setMode] = useState<'dark' | 'light'>(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section id="screenshots" className="py-20 bg-secondary/50 dark:bg-secondary/20">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="feature-chip opacity-0 animate-fade-in">Screenshots</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 opacity-0 animate-fade-in animate-delay-100">
            See RustPing in Action
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200 mb-8">
            Explore the intuitive interface and powerful features of RustPing through these screenshots.
          </p>
          
          <Tabs defaultValue={mode} className="w-full max-w-md mx-auto" onValueChange={(val) => setMode(val as 'dark' | 'light')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger 
                value="dark" 
                className={cn(
                  "data-[state=active]:bg-gray-800 data-[state=active]:text-white"
                )}
              >
                Dark Mode
              </TabsTrigger>
              <TabsTrigger 
                value="light" 
                className={cn(
                  "data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900"
                )}
              >
                Light Mode
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <div 
                className="parallax-container"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div 
                  className="parallax-inner"
                  style={{ 
                    backgroundImage: `url(${mode === 'dark' ? screenshot.dark : screenshot.light})`,
                    transform: hoverIndex === index ? 'translateZ(0) scale(1.05)' : 'translateZ(0)'
                  }}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{screenshot.title}</h3>
                <p className="text-foreground/70 text-sm mt-1">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotParallax;
