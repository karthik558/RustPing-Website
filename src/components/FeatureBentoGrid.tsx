import React from 'react';
import { Activity, Zap, Shield, FileCode, CheckCircle2, Layers } from 'lucide-react';

const FeatureBentoGrid = () => {
  return (
    <section id="features" className="py-24 bg-[#08080a] border-t border-[#1f1f26]">
      <div className="section-container">
        
        {/* Section Header (Reference Image Layout) */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16161c] border border-[#252530] text-[#e04922] text-xs font-mono font-semibold tracking-wide mb-4">
            <span>// CORE ARCHITECTURE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Speed where you feel it.
            <span className="block text-slate-400 font-semibold mt-1">
              Efficiency where you don't.
            </span>
          </h2>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Bento Card 1: Performance without compromise */}
          <div className="p-8 rounded-2xl bg-[#111115] border border-[#1f1f26] hover:border-[#e04922]/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#e04922]/10 border border-[#e04922]/20 flex items-center justify-center text-[#e04922] mb-6">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e04922] transition-colors">
                Performance without compromise
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Engineered with Rust's async tokio runtime to handle thousands of concurrent subnet ping checks with minimal CPU overhead.
              </p>
            </div>

            {/* Custom Rust Progress Indicators */}
            <div className="space-y-3 pt-4 border-t border-[#1f1f26] font-mono text-xs">
              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Async I/O Concurrency</span>
                  <span className="text-[#e04922] font-bold">10,000+ checks/sec</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#1c1c24] overflow-hidden">
                  <div className="h-full w-[95%] bg-[#e04922] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 mb-1">
                  <span>Memory Footprint</span>
                  <span className="text-emerald-400 font-bold">&lt; 15 MB RAM</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#1c1c24] overflow-hidden">
                  <div className="h-full w-[20%] bg-emerald-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Millisecond intelligence */}
          <div className="p-8 rounded-2xl bg-[#111115] border border-[#1f1f26] hover:border-[#e04922]/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#e04922]/10 border border-[#e04922]/20 flex items-center justify-center text-[#e04922] mb-6">
                <Activity size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e04922] transition-colors">
                Millisecond intelligence
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Continuous round-trip latency tracking with instant anomaly detection and automatic retry logic for transient drops.
              </p>
            </div>

            {/* Gradient Rust Bar Visualization */}
            <div className="pt-4 border-t border-[#1f1f26]">
              <div className="flex items-end justify-between gap-2 h-20 px-2">
                <div className="w-full h-[35%] bg-gradient-to-t from-[#e04922]/40 to-[#e04922] rounded-t"></div>
                <div className="w-full h-[50%] bg-gradient-to-t from-[#e04922]/40 to-[#e04922] rounded-t"></div>
                <div className="w-full h-[40%] bg-gradient-to-t from-[#e04922]/40 to-[#e04922] rounded-t"></div>
                <div className="w-full h-[75%] bg-gradient-to-t from-[#e04922]/40 to-[#e04922] rounded-t"></div>
                <div className="w-full h-[60%] bg-gradient-to-t from-[#e04922]/40 to-[#e04922] rounded-t"></div>
                <div className="w-full h-[90%] bg-gradient-to-t from-[#e04922]/40 to-[#e04922] rounded-t"></div>
                <div className="w-full h-[100%] bg-gradient-to-t from-[#e04922]/40 to-[#e04922] rounded-t"></div>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Built to Rust Standards */}
          <div className="p-8 rounded-2xl bg-[#111115] border border-[#1f1f26] hover:border-[#e04922]/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#e04922]/10 border border-[#e04922]/20 flex items-center justify-center text-[#e04922] mb-6">
                <Shield size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e04922] transition-colors">
                Built to Rust Standards
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Memory-safe without garbage collection pauses. Designed for zero-downtime mission-critical server environments.
              </p>
            </div>

            {/* Status Checklist Box */}
            <div className="space-y-2 pt-4 border-t border-[#1f1f26] font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Memory safety guaranteed by Rust compiler</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Zero garbage collection latency pauses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Multi-threaded thread safety</span>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Comprehensive Event Logs */}
          <div className="p-8 rounded-2xl bg-[#111115] border border-[#1f1f26] hover:border-[#e04922]/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#e04922]/10 border border-[#e04922]/20 flex items-center justify-center text-[#e04922] mb-6">
                <FileCode size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e04922] transition-colors">
                Comprehensive Event Logs
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Filter logs by IP ranges, device name, or date window, and export directly in CSV, TXT, or JSON formats.
              </p>
            </div>

            {/* Code Snippet Box */}
            <div className="p-3.5 rounded-xl bg-[#08080c] border border-[#1f1f26] font-mono text-xs space-y-1.5">
              <div className="text-[#e04922]">$ rustping export --format csv --out logs.csv</div>
              <div className="text-slate-400">[SUCCESS] 1,420 status events exported.</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureBentoGrid;
