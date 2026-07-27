import React, { useState } from 'react';
import { Eye, Image as ImageIcon } from 'lucide-react';
import ScreenshotModal from './ScreenshotModal';

interface ScreenshotSet {
  dark: string;
  light: string;
  title: string;
  description: string;
}

const screenshots: ScreenshotSet[] = [
  {
    dark: "/screenshots/dashboardHome-dark.png",
    light: "/screenshots/dashboardHome-light.png",
    title: "Main Dashboard",
    description: "Real-time overview of network health, bandwidth, and device statuses."
  },
  {
    dark: "/screenshots/devDashBoard-dark.png",
    light: "/screenshots/devDashBoard-light.png",
    title: "Device Dashboard",
    description: "Manage, filter, and organize subnets and critical infrastructure."
  },
  {
    dark: "/screenshots/liveLog-dark.png",
    light: "/screenshots/liveLog-light.png",
    title: "Live Logs",
    description: "Stream live event updates and track device response times."
  },
  {
    dark: "/screenshots/failedLog-dark.png",
    light: "/screenshots/failedLog-light.png",
    title: "Failed Logs",
    description: "Filter critical alerts and diagnose connection drops instantly."
  },
  {
    dark: "/screenshots/authLogin-dark.png",
    light: "/screenshots/authLogin-light.png",
    title: "Authentication",
    description: "Role-based user security and encrypted session access."
  },
  {
    dark: "/screenshots/passReset-dark.png",
    light: "/screenshots/passReset-light.png",
    title: "Password Recovery",
    description: "Self-service security workflows for system administrators."
  }
];

const ScreenshotParallax = () => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const openScreenshot = (src: string, title: string) => {
    setSelectedScreenshot({ src, title });
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-14 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16161c] border border-[#252530] text-[#e04922] text-xs font-mono font-semibold tracking-wide mb-4">
          <span>// INTERFACE SHOWCASE</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
          Operational clarity.
          <span className="block text-[#e04922] mt-1">
            Crafted for engineers.
          </span>
        </h2>
      </div>

      {/* Screenshot Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {screenshots.map((item, idx) => {
          return (
            <div 
              key={idx}
              className="group rounded-2xl bg-[#111115] border border-[#1f1f26] hover:border-[#e04922]/50 overflow-hidden shadow-2xl transition-all hover:scale-[1.02] cursor-pointer flex flex-col justify-between"
              onClick={() => openScreenshot(item.dark, item.title)}
            >
              <div className="relative h-48 bg-[#08080a] overflow-hidden border-b border-[#1f1f26]">
                <img 
                  src={item.dark} 
                  alt={item.title}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/favicon.png';
                    (e.target as HTMLImageElement).className = 'w-16 h-16 m-auto opacity-30';
                  }}
                />
                <div className="absolute inset-0 bg-[#e04922]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3.5 py-2 bg-[#08080a]/90 text-[#f25d38] rounded-md border border-[#e04922]/40 text-xs font-mono font-semibold flex items-center gap-2 shadow-xl">
                    <Eye size={14} />
                    <span>Expand View</span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-white text-base mb-1 group-hover:text-[#e04922] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {selectedScreenshot && (
        <ScreenshotModal
          isOpen={!!selectedScreenshot}
          onClose={() => setSelectedScreenshot(null)}
          imageSrc={selectedScreenshot.src}
          title={selectedScreenshot.title}
        />
      )}
    </div>
  );
};

export default ScreenshotParallax;
