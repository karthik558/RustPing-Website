import React, { useState } from 'react';
import { Globe, Server, Terminal, Code, FileCode, PackageOpen, Monitor, ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CopyButton from './CopyButton';
import { Button } from '@/components/ui/button';

const InstallationGuideWithCopy = () => {
  const [platform, setPlatform] = useState<'linux' | 'windows' | 'macos'>('linux');
  
  return (
    <section id="installation" className="py-24 bg-[#08080a] border-t border-[#1f1f26]">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16161c] border border-[#252530] text-[#e04922] text-xs font-mono font-semibold tracking-wide mb-4">
            <span>// DEPLOYMENT & SETUP</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Deploy in seconds.
            <span className="block text-[#e04922] mt-1">
              Zero configuration overhead.
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111115] rounded-2xl border border-[#1f1f26] shadow-2xl overflow-hidden relative">
            
            {/* Top Glowing Strip */}
            <div className="h-1 w-full bg-gradient-to-r from-[#e04922] via-[#f25d38] to-amber-500"></div>
            
            {/* Platform OS Selector Header */}
            <div className="p-6 md:p-8 border-b border-[#1f1f26]">
              <Tabs defaultValue="linux" onValueChange={(val) => setPlatform(val as any)}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
                    <Server size={18} className="text-[#e04922]" />
                    Target Operating System
                  </h3>

                  <TabsList className="bg-[#16161c] border border-[#252530] p-1 rounded-md">
                    <TabsTrigger 
                      value="linux" 
                      className="data-[state=active]:bg-[#e04922] data-[state=active]:text-white text-slate-400 font-mono text-xs px-5 py-1.5 transition-all rounded-md"
                    >
                      Linux
                    </TabsTrigger>
                    <TabsTrigger 
                      value="windows" 
                      className="data-[state=active]:bg-[#e04922] data-[state=active]:text-white text-slate-400 font-mono text-xs px-5 py-1.5 transition-all rounded-md"
                    >
                      Windows
                    </TabsTrigger>
                    <TabsTrigger 
                      value="macos" 
                      className="data-[state=active]:bg-[#e04922] data-[state=active]:text-white text-slate-400 font-mono text-xs px-5 py-1.5 transition-all rounded-md"
                    >
                      macOS
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="linux" className="mt-0">
                  <LinuxMacOSInstallationSteps platform="linux" />
                </TabsContent>

                <TabsContent value="windows" className="mt-0">
                  <WindowsInstallationSteps />
                </TabsContent>
                
                <TabsContent value="macos" className="mt-0">
                  <LinuxMacOSInstallationSteps platform="macos" />
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Web UI Local URL Access Block */}
            <div className="p-6 md:p-8 bg-[#0a0a0e]">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2 font-mono">
                <Globe size={18} className="text-emerald-400" />
                Access Web UI Dashboard
              </h3>
              <p className="text-slate-400 text-xs mb-3">
                Once the RustPing server binary starts, open your web browser to view the live dashboard:
              </p>
              <div className="bg-[#14141a] border border-[#1f1f26] text-[#f25d38] p-3.5 rounded-xl font-mono text-xs flex items-center justify-between shadow-inner gap-3">
                <span className="select-all font-bold truncate">http://127.0.0.1:8000/</span>
                <CopyButton value="http://127.0.0.1:8000/" />
              </div>
            </div>
          </div>
          
          {/* Action Button Group */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-[#e04922] hover:bg-[#c83b16] text-white font-semibold text-xs px-6 py-6 rounded-md shadow-lg shadow-[#e04922]/25 transition-all hover:scale-[1.02] font-mono"
              asChild
            >
              <a href="#installation">
                <span>Deploy RustPing Now</span>
                <ArrowRight size={14} className="ml-2" />
              </a>
            </Button>

            <Button 
              variant="outline" 
              className="bg-[#111115] border-[#1f1f26] text-slate-300 hover:text-white hover:bg-[#181820] text-xs font-mono px-6 py-6 rounded-md"
              asChild
            >
              <a href="https://github.com/karthik558/Rust-Ping" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <Github size={14} className="text-[#e04922]" />
                <span>View Repository on GitHub</span>
                <ExternalLink size={11} className="opacity-60" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const LinuxMacOSInstallationSteps = ({ platform }: { platform: 'linux' | 'macos' }) => {
  return (
    <div className="space-y-6 py-2">
      <InstallationStep 
        number="01" 
        title="Clone Repository" 
        icon={<FileCode className="h-4 w-4 text-[#e04922]" />}
        command="git clone https://github.com/karthik558/Rust-Ping.git && cd Rust-Ping"
      />
      
      <InstallationStep 
        number="02" 
        title="Build Optimized Release Binary" 
        icon={<PackageOpen className="h-4 w-4 text-[#e04922]" />}
        command="cargo build --release"
        note="Compiles an optimized release executable in target/release."
      />
      
      <InstallationStep 
        number="03" 
        title="Execute Server Engine" 
        icon={<Terminal className="h-4 w-4 text-[#e04922]" />}
        command="./target/release/Rust-Ping"
        additionalCommand="cargo run"
        additionalNote="Or launch directly via Cargo:"
      />
      
      <InstallationStep 
        number="04" 
        title="Launch Web Dashboard" 
        icon={<Monitor className="h-4 w-4 text-[#e04922]" />}
        command="http://127.0.0.1:8000/static/index.html"
        isLink={true}
        note="Navigate to the dashboard URL in your browser."
      />
    </div>
  );
};

const WindowsInstallationSteps = () => {
  return (
    <div className="space-y-6 py-2">
      <InstallationStep 
        number="01" 
        title="Clone Repository" 
        icon={<FileCode className="h-4 w-4 text-[#e04922]" />}
        command="git clone https://github.com/karthik558/Rust-Ping.git && cd Rust-Ping"
      />
      
      <InstallationStep 
        number="02" 
        title="Install Prerequisites (MSYS2 Toolchain)" 
        icon={<PackageOpen className="h-4 w-4 text-[#e04922]" />}
        note="Requires MSYS2 or MinGW-w64 GCC build tools on Windows."
        isLink={true}
        command="https://www.msys2.org/"
        linkText="Download MSYS2 Web Installer"
      />
      
      <InstallationStep 
        number="03" 
        title="Configure GNU Rust Toolchain" 
        icon={<Terminal className="h-4 w-4 text-[#e04922]" />}
        command="rustup default stable-x86_64-pc-windows-gnu"
      />
      
      <InstallationStep 
        number="04" 
        title="Build and Execute Windows Binary" 
        icon={<Terminal className="h-4 w-4 text-[#e04922]" />}
        command="cargo run"
        additionalCommand=".\target\release\Rust-Ping.exe"
        additionalNote="Or launch binary directly:"
      />
    </div>
  );
};

interface InstallationStepProps {
  number: string;
  title: string;
  icon: React.ReactNode;
  command?: string;
  additionalCommand?: string;
  additionalNote?: string;
  note?: string;
  isLink?: boolean;
  linkText?: string;
}

const InstallationStep = ({ 
  number, 
  title, 
  icon, 
  command, 
  additionalCommand, 
  additionalNote, 
  note, 
  isLink = false,
  linkText,
}: InstallationStepProps) => {
  return (
    <div className="relative pl-8 border-l border-[#1f1f26]">
      {/* Step Badge */}
      <div className="absolute -left-3.5 top-0 bg-[#e04922] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold shadow-md">
        {number}
      </div>
      
      <div className="mb-2">
        <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2 mb-1">
          {icon}
          {title}
        </h4>
      
        {note && (
          <p className="text-xs text-slate-400 mb-2.5">
            {note}
          </p>
        )}
      
        {command && (
          <div className="mb-2">
            {isLink ? (
              <a 
                href={command} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-xs font-mono text-[#f25d38] hover:underline"
              >
                {linkText || command}
              </a>
            ) : (
              <div className="bg-[#0a0a0e] text-slate-200 p-3.5 rounded-xl border border-[#1f1f26] font-mono text-xs flex items-center justify-between gap-3">
                <span className="truncate text-emerald-400">$ {command}</span>
                <CopyButton value={command} />
              </div>
            )}
          </div>
        )}
      
        {additionalNote && (
          <p className="text-xs text-slate-400 mt-2.5 mb-1.5">
            {additionalNote}
          </p>
        )}
      
        {additionalCommand && (
          <div className="bg-[#0a0a0e] text-slate-200 p-3.5 rounded-xl border border-[#1f1f26] font-mono text-xs flex items-center justify-between gap-3">
            <span className="truncate text-emerald-400">$ {additionalCommand}</span>
            <CopyButton value={additionalCommand} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallationGuideWithCopy;
