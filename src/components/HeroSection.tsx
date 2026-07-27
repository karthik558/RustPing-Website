import React from 'react';
import { ArrowRight, Github, Activity, Shield, CheckCircle, Terminal, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#08080a]">
      {/* Background Soft Radial Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#e04922]/12 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: High Value Corporate Headline */}
          <div className="lg:col-span-7 text-left">
            
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16161c] border border-[#252530] text-[#e04922] text-xs font-mono font-semibold tracking-wide mb-6">
              <span>// PERFORMANCE OBSERVABILITY</span>
            </div>

            {/* Main Headline (Reference Image Layout) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
              Performance,
              <span className="block text-[#e04922] mt-1">
                tuned to the core.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Ultra-fast infrastructure monitoring powered by an asynchronous Rust core engine. Track device ICMP pings, HTTP statuses, and bandwidth metrics with zero bloat.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-12">
              <Button 
                asChild 
                className="bg-[#e04922] hover:bg-[#c83b16] text-white font-semibold text-sm px-6 py-6 rounded-md shadow-lg shadow-[#e04922]/25 flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                <a href="#installation">
                  <span>Get Started Now</span>
                  <ArrowRight size={16} />
                </a>
              </Button>

              <Button 
                asChild 
                variant="outline" 
                className="bg-[#14141a] hover:bg-[#1f1f28] text-slate-200 border-[#252530] font-semibold text-sm px-6 py-6 rounded-md flex items-center gap-2 transition-all"
              >
                <a href="https://github.com/karthik558/Rust-Ping" target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  <span>GitHub Repository</span>
                </a>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1f1f26]">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                <div className="text-xs text-slate-400 font-mono mt-1">Open Source</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#e04922]">&lt; 1ms</div>
                <div className="text-xs text-slate-400 font-mono mt-1">Core Latency</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">24/7</div>
                <div className="text-xs text-slate-400 font-mono mt-1">Continuous Uptime</div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sleek Device Interface Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-[#111115] border border-[#1f1f26] shadow-2xl p-5 relative overflow-hidden group">
              
              {/* Device Window Header */}
              <div className="flex items-center justify-between border-b border-[#1f1f26] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-[11px] font-mono text-slate-400">rust-ping-engine v1.0.0</span>
              </div>

              {/* Status Display Card */}
              <div className="space-y-3 font-mono text-xs">
                
                {/* Active Sensor Item 1 */}
                <div className="p-3.5 rounded-lg bg-[#181820] border border-[#252532] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                    <div>
                      <div className="text-white font-semibold">Google DNS (8.8.8.8)</div>
                      <div className="text-[10px] text-slate-400">Sensors: PING, HTTP, HTTPS</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-bold">12ms OK</span>
                </div>

                {/* Active Sensor Item 2 */}
                <div className="p-3.5 rounded-lg bg-[#181820] border border-[#252532] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                    <div>
                      <div className="text-white font-semibold">Cloudflare DNS (1.1.1.1)</div>
                      <div className="text-[10px] text-slate-400">Sensors: PING, HTTP</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-bold">8ms OK</span>
                </div>

                {/* Active Sensor Item 3 */}
                <div className="p-3.5 rounded-lg bg-[#181820] border border-[#252532] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#e04922]"></div>
                    <div>
                      <div className="text-white font-semibold">Gateway Switch (192.168.1.1)</div>
                      <div className="text-[10px] text-slate-400">Sensors: PING</div>
                    </div>
                  </div>
                  <span className="text-[#e04922] font-bold">RETRYING</span>
                </div>

                {/* Console Log Preview */}
                <div className="p-3 rounded-lg bg-[#0a0a0e] border border-[#1f1f26] text-[11px] text-slate-400 space-y-1">
                  <div className="text-slate-500">// Real-time event stream</div>
                  <div className="text-emerald-400">[16:42:01] 8.8.8.8 -&gt; ICMP Echo Response 11.2ms</div>
                  <div className="text-emerald-400">[16:42:01] 1.1.1.1 -&gt; HTTP 200 OK</div>
                  <div className="text-[#e04922]">[16:42:02] Log Export -&gt; CSV Generated</div>
                </div>

              </div>

              {/* Glowing Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e04922] to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
