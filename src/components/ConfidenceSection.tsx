import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const confidencePoints = [
  {
    num: '01',
    title: 'Real-time ICMP Ping & HTTP Checks',
    desc: 'Continuous multi-protocol probing across subnets with sub-millisecond precision.',
  },
  {
    num: '02',
    title: 'Multi-Sensor Subnet Monitoring',
    desc: 'Simultaneously monitor DNS servers, access points, storage NAS, and CCTV cameras.',
  },
  {
    num: '03',
    title: 'Automated Event Logging & Export',
    desc: 'Instant event tracking with one-click export to CSV, TXT, or JSON formats.',
  },
  {
    num: '04',
    title: 'Zero Overhead Async Engine',
    desc: 'Built in Rust with Tokio async I/O for ultra-light memory usage and minimal CPU load.',
  },
  {
    num: '05',
    title: 'Role-Based User Security',
    desc: 'Encrypted administrative session management and secure user authentication.',
  },
];

const ConfidenceSection = () => {
  return (
    <section className="py-24 bg-[#08080a] border-t border-[#1f1f26]">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16161c] border border-[#252530] text-[#e04922] text-xs font-mono font-semibold tracking-wide mb-4">
            <span>// RELIABILITY</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Monitor with confidence.
          </h2>
        </div>

        {/* Two Column Layout (Reference Image Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Numbered Checklist */}
          <div className="lg:col-span-7 space-y-6">
            {confidencePoints.map((item) => (
              <div 
                key={item.num}
                className="p-5 rounded-xl bg-[#111115] border border-[#1f1f26] hover:border-[#e04922]/40 transition-all flex items-start gap-4 group"
              >
                <span className="font-mono text-xs font-bold text-[#e04922] px-2 py-1 rounded bg-[#e04922]/10 border border-[#e04922]/20">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-white text-base mb-1 group-hover:text-[#e04922] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Solid Vibrant Rust Accent Box (Reference Image) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#e04922] text-white p-8 sm:p-10 shadow-2xl shadow-[#e04922]/25 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
              
              {/* Top Symbol */}
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center font-bold text-white text-xl mb-6">
                ⚡
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 leading-tight">
                  Your network.<br />
                  Your responsibility.<br />
                  Your peace of mind.
                </h3>
                
                <p className="text-white/90 text-sm leading-relaxed mb-8">
                  RustPing provides deep infrastructure visibility with zero overhead, giving you complete operational clarity when critical subnets change state.
                </p>
              </div>

              <div>
                <a 
                  href="#installation" 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:underline"
                >
                  <span>Deploy RustPing Now</span>
                  <ArrowRight size={14} />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConfidenceSection;
