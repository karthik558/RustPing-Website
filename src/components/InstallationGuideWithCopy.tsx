
import React, { useState } from 'react';
import { Globe, Server, Terminal, Code, FileCode, PackageOpen, Monitor } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CopyButton from './CopyButton';
import { Button } from '@/components/ui/button';

const InstallationGuideWithCopy = () => {
  const [platform, setPlatform] = useState<'windows' | 'linux' | 'macos'>('linux');
  
  return (
    <section id="installation" className="py-20 bg-secondary/20">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="feature-chip opacity-0 animate-fade-in flex items-center justify-center mx-auto gap-2">
            <Terminal size={14} className="text-primary" />
            Installation Guide
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 opacity-0 animate-fade-in animate-delay-100">
            Get Started with RustPing
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            Follow these steps to install and run RustPing on your system.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden relative opacity-0 animate-fade-in animate-delay-300">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
            
            {/* Platform selector */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <Tabs defaultValue="linux" onValueChange={(val) => setPlatform(val as any)}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium flex items-center">
                    <Server size={18} className="mr-2 text-primary" />
                    Select Your Platform
                  </h3>
                  <TabsList className="grid grid-cols-3 w-auto">
                    <TabsTrigger value="windows" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                      Windows
                    </TabsTrigger>
                    <TabsTrigger value="linux" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                      Linux
                    </TabsTrigger>
                    <TabsTrigger value="macos" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                      macOS
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="windows" className="mt-0">
                  <WindowsInstallationSteps />
                </TabsContent>
                
                <TabsContent value="linux" className="mt-0">
                  <LinuxMacOSInstallationSteps platform="linux" />
                </TabsContent>
                
                <TabsContent value="macos" className="mt-0">
                  <LinuxMacOSInstallationSteps platform="macos" />
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Web UI access */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <Globe size={18} className="mr-2 text-primary" />
                Access the Web Interface
              </h3>
              <p className="text-foreground/70 mb-4">
                Once RustPing is running, you can access the web interface by opening your browser and navigating to:
              </p>
              <div className="bg-gray-900 text-white p-3 rounded-md font-mono text-sm relative overflow-hidden">
                <span className="block overflow-x-auto whitespace-nowrap">
                  http://127.0.0.1:8000/
                </span>
                <CopyButton
                  value="http://127.0.0.1:8000/"
                  className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
                />
              </div>
              <p className="text-amber-600 dark:text-amber-400 text-sm mt-2">
                Note: For Windows, the trailing "/" might be needed if you're directly running the executable.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-foreground/60 mb-6">
              For additional configuration options and advanced usage, please refer to the
              <a href="https://github.com/karthik558/Rust-Ping" className="text-primary hover:underline ml-1">
                documentation
              </a>.
            </p>
            <Button 
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <a href="https://github.com/karthik558/Rust-Ping" className="inline-flex items-center">
                <Code size={16} className="mr-2" />
                View Source Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const LinuxMacOSInstallationSteps = ({ platform }: { platform: 'linux' | 'macos' }) => {
  const title = platform === 'linux' ? 'Linux' : 'macOS';
  
  return (
    <div className="space-y-6 py-2">
      <InstallationStep 
        number={1} 
        title="Clone the Repository" 
        icon={<FileCode className="h-5 w-5 text-primary" />}
        command="git clone https://github.com/karthik558/Rust-Ping.git && cd Rust-Ping"
      />
      
      <InstallationStep 
        number={2} 
        title="Build the Project (Release Mode)" 
        icon={<PackageOpen className="h-5 w-5 text-primary" />}
        command="cargo build --release"
        note="This creates an optimized executable in the target/release directory."
      />
      
      <InstallationStep 
        number={3} 
        title="Run the Application" 
        icon={<Terminal className="h-5 w-5 text-primary" />}
        command={`./target/release/Rust-Ping`}
        additionalCommand="cargo run"
        additionalNote="Alternatively use cargo:"
      />
      
      <InstallationStep 
        number={4} 
        title="Access the Dashboard" 
        icon={<Monitor className="h-5 w-5 text-primary" />}
        command="http://127.0.0.1:8000/static/index.html"
        isLink={true}
        note="Open your web browser and navigate to this URL."
      />
    </div>
  );
};

const WindowsInstallationSteps = () => {
  return (
    <div className="space-y-6 py-2">
      <InstallationStep 
        number={1} 
        title="Clone the Repository" 
        icon={<FileCode className="h-5 w-5 text-primary" />}
        command="git clone https://github.com/karthik558/Rust-Ping.git && cd Rust-Ping"
      />
      
      <InstallationStep 
        number={2} 
        title="Install MSYS2" 
        icon={<PackageOpen className="h-5 w-5 text-primary" />}
        note="Follow the instructions on the MSYS2 website to install it. This provides the necessary build tools."
        isLink={true}
        command="https://www.msys2.org/"
        linkText="MSYS2 website"
      />
      
      <InstallationStep 
        number={3} 
        title="Rust Installation (if not already installed)" 
        icon={<PackageOpen className="h-5 w-5 text-primary" />}
        note="Follow the instructions on Rust website to install Rust."
        isLink={true}
        command="https://www.rust-lang.org/tools/install"
        linkText="Rust website"
      />
      
      <InstallationStep 
        number={4} 
        title="Alternative MinGW Installation (if msys2 not working)" 
        icon={<PackageOpen className="h-5 w-5 text-primary" />}
        note="Download and install MinGW-w64 from the MinGW-w64 installer."
        isLink={true}
        command="https://github.com/Vuniverse0/mingwInstaller/releases/download/1.2.1/mingwInstaller.exe"
        linkText="MinGW-w64 installer"
      />
      
      <InstallationStep 
        number={5} 
        title="Add MinGW to PATH" 
        icon={<Terminal className="h-5 w-5 text-primary" />}
        note="Ensure the bin directory of your MinGW-w64 installation is added to your system's PATH environment variable. It should look similar to this:"
        command="C:\Program Files\mingw-w64\x86_64-8.1.0-posix-seh-rt_v6-rev0\mingw64\bin"
      />
      
      <InstallationStep 
        number={6} 
        title="Set Rustup Default (Important!)" 
        icon={<Terminal className="h-5 w-5 text-primary" />}
        command="rustup default stable-x86_64-pc-windows-gnu"
        additionalCommand="rustup show"
        additionalNote="Verify with:"
      />
      
      <InstallationStep 
        number={7} 
        title="Open a New Command Prompt" 
        icon={<Terminal className="h-5 w-5 text-primary" />}
        note="Open a new command prompt or PowerShell window after installing MSYS2 and setting the Rustup default. This ensures the environment variables are loaded correctly. Navigate to project directory:"
        command="cd Rust-Ping"
      />
      
      <InstallationStep 
        number={8} 
        title="Build the Project" 
        icon={<PackageOpen className="h-5 w-5 text-primary" />}
        command="cargo build --release"
      />
      
      <InstallationStep 
        number={9} 
        title="Run the Application" 
        icon={<Terminal className="h-5 w-5 text-primary" />}
        command="cargo run"
        additionalCommand=".\target\release\Rust-Ping.exe"
        additionalNote="or (better for deployment):"
      />
      
      <InstallationStep 
        number={10} 
        title="Access the Dashboard" 
        icon={<Monitor className="h-5 w-5 text-primary" />}
        command="http://127.0.0.1:8000/"
        isLink={true}
        note="Open your web browser and navigate to this URL. (Note the trailing / might be needed if you're directly running the executable)."
      />
    </div>
  );
};

interface InstallationStepProps {
  number: number;
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
    <div className="relative pl-8 border-l border-gray-200 dark:border-gray-700">
      {/* Step number bubble */}
      <div className="absolute -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">
        {number}
      </div>
      
      <div className="mb-2">
        <h4 className="text-md font-medium flex items-center gap-2">
          {icon}
          {title}
        </h4>
      </div>
      
      {note && (
        <p className="text-sm text-foreground/70 mb-2">
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
              className="inline-flex items-center text-primary hover:underline"
            >
              {linkText || command}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          ) : (
            <div className="bg-gray-900 text-white p-2.5 rounded-md font-mono text-sm relative overflow-hidden">
              <span className="block overflow-x-auto whitespace-nowrap pr-8">
                {command}
              </span>
              <CopyButton
                value={command}
                className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
              />
            </div>
          )}
        </div>
      )}
      
      {additionalNote && (
        <p className="text-sm text-foreground/70 mt-2 mb-1">
          {additionalNote}
        </p>
      )}
      
      {additionalCommand && (
        <div className="bg-gray-900 text-white p-2.5 rounded-md font-mono text-sm relative overflow-hidden">
          <span className="block overflow-x-auto whitespace-nowrap pr-8">
            {additionalCommand}
          </span>
          <CopyButton
            value={additionalCommand}
            className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
          />
        </div>
      )}
    </div>
  );
};

export default InstallationGuideWithCopy;
