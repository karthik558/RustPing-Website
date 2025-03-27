
import React from 'react';
import { Terminal, ArrowRight, Box, Globe, Shield, Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const InstallationGuide = () => {
  return (
    <section id="installation" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="feature-chip opacity-0 animate-fade-in">Installation</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 opacity-0 animate-fade-in animate-delay-100">
            Get Up and Running Quickly
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            Follow these simple steps to install and configure RustPing on your system.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="linux" className="opacity-0 animate-fade-in-up">
            <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex mb-6">
              <TabsTrigger value="linux">Linux/MacOS</TabsTrigger>
              <TabsTrigger value="windows">Windows</TabsTrigger>
            </TabsList>
            
            <TabsContent value="linux" className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Terminal size={18} className="mr-2" />
                    Clone the Repository
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 font-mono text-sm">
                    <p>git clone https://github.com/karthik558/Rust-Ping.git</p>
                    <p>cd Rust-Ping</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Box size={18} className="mr-2" />
                    Build the Project (Release Mode)
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 font-mono text-sm">
                    <p>cargo build --release</p>
                  </div>
                  <p className="text-sm text-foreground/70 mt-2">
                    This creates an optimized executable in the <code>target/release</code> directory.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <ArrowRight size={18} className="mr-2" />
                    Run the Application
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 font-mono text-sm">
                    <p>./target/release/Rust-Ping</p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2"># Or alternatively:</p>
                    <p>cargo run</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Globe size={18} className="mr-2" />
                    Access the Dashboard
                  </h3>
                  <p className="text-sm mb-2">
                    Open your web browser and navigate to:
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 font-mono text-sm">
                    <p>http://127.0.0.1:8000/static/index.html</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="windows" className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Terminal size={18} className="mr-2" />
                    Clone the Repository
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 font-mono text-sm">
                    <p>git clone https://github.com/karthik558/Rust-Ping.git</p>
                    <p>cd Rust-Ping</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Download size={18} className="mr-2" />
                    Install Prerequisites
                  </h3>
                  <p className="text-sm mb-2">
                    1. Install MSYS2 from the <a href="https://www.msys2.org/" className="text-primary hover:underline">MSYS2 website</a>.
                  </p>
                  <p className="text-sm mb-2">
                    2. Install Rust following the instructions on the <a href="https://www.rust-lang.org/tools/install" className="text-primary hover:underline">Rust website</a>.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Shield size={18} className="mr-2" />
                    Set Rustup Default (Important!)
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 font-mono text-sm">
                    <p>rustup default stable-x86_64-pc-windows-gnu</p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2"># Verify with:</p>
                    <p>rustup show</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Box size={18} className="mr-2" />
                    Build the Project
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 font-mono text-sm">
                    <p>cargo build --release</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <ArrowRight size={18} className="mr-2" />
                    Run the Application
                  </h3>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 font-mono text-sm">
                    <p>cargo run</p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2"># Or (better for deployment):</p>
                    <p>.\target\release\Rust-Ping.exe</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Globe size={18} className="mr-2" />
                    Access the Dashboard
                  </h3>
                  <p className="text-sm mb-2">
                    Open your web browser and navigate to:
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 font-mono text-sm">
                    <p>http://127.0.0.1:8000/</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-10 p-4 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-50 dark:bg-gray-900 opacity-0 animate-fade-in-up animate-delay-200">
            <h3 className="text-lg font-semibold mb-2">Default Login Credentials</h3>
            <p className="mb-2">Use these credentials for your first login:</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
                <p className="text-sm font-medium">Username</p>
                <p className="font-mono">admin</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
                <p className="text-sm font-medium">Password</p>
                <p className="font-mono">admin</p>
              </div>
            </div>
            <p className="text-sm text-amber-600 dark:text-amber-500 mt-3 flex items-center">
              <Shield size={14} className="mr-1" />
              Important: Change the default password immediately after your first login for security reasons!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;
