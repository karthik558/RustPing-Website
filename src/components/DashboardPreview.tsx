
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Activity, CheckCircle, XCircle, AlertCircle, Wifi, Globe, Server } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample data for the dashboard
const deviceData = [
  { id: 1, name: 'Main Router', status: 'online', type: 'network', latency: 5, uptime: 99.98 },
  { id: 2, name: 'Web Server', status: 'online', type: 'server', latency: 12, uptime: 99.95 },
  { id: 3, name: 'Database Server', status: 'warning', type: 'server', latency: 28, uptime: 99.82 },
  { id: 4, name: 'Company Website', status: 'online', type: 'website', latency: 85, uptime: 100 },
  { id: 5, name: 'Backup Server', status: 'offline', type: 'server', latency: 0, uptime: 95.43 },
  { id: 6, name: 'Cloud Storage', status: 'online', type: 'service', latency: 42, uptime: 99.91 },
];

const chartData = [
  { name: '00:00', latency: 12 },
  { name: '04:00', latency: 15 },
  { name: '08:00', latency: 28 },
  { name: '12:00', latency: 19 },
  { name: '16:00', latency: 22 },
  { name: '20:00', latency: 16 },
  { name: 'Now', latency: 8 },
];

const DashboardPreview = () => {
  const [selectedTab, setSelectedTab] = useState('devices');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online':
        return <CheckCircle className="text-green-500" size={18} />;
      case 'offline':
        return <XCircle className="text-red-500" size={18} />;
      case 'warning':
        return <AlertCircle className="text-yellow-500" size={18} />;
      default:
        return <Activity className="text-slate" size={18} />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'network':
        return <Wifi size={18} />;
      case 'server':
        return <Server size={18} />;
      case 'website':
      case 'service':
        return <Globe size={18} />;
      default:
        return <Server size={18} />;
    }
  };

  return (
    <section id="dashboard" className="py-20 bg-secondary/50 dark:bg-navy-light/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="feature-chip opacity-0 animate-fade-in">Interactive Dashboard</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 opacity-0 animate-fade-in animate-delay-100">
            Real-time Network Monitoring
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            View and manage all your network devices from one intuitive dashboard with comprehensive visualization tools.
          </p>
        </div>

        <div className="max-w-5xl mx-auto glass-card rounded-xl overflow-hidden shadow-xl opacity-0 animate-fade-in animate-delay-300">
          {/* Dashboard Header */}
          <div className="bg-white dark:bg-navy p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-rustred rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <h3 className="font-semibold">RustPing Dashboard</h3>
            </div>
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Dashboard Tabs */}
          <div className="flex border-b border-border">
            {['devices', 'performance', 'logs'].map((tab) => (
              <button
                key={tab}
                className={cn(
                  "py-3 px-6 font-medium text-sm transition-colors hover:bg-muted/50",
                  selectedTab === tab 
                    ? "border-b-2 border-rustred text-rustred" 
                    : "text-foreground/70"
                )}
                onClick={() => setSelectedTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            {selectedTab === 'devices' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Devices Status</h4>
                  <span className="text-xs text-foreground/60">Last updated: Just now</span>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-border">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">Device</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">Latency (ms)</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">Uptime (%)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {deviceData.map((device) => (
                        <tr key={device.id} className="hover:bg-muted/30 transition-colors">
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-secondary dark:bg-navy-light flex items-center justify-center mr-3">
                                {getTypeIcon(device.type)}
                              </div>
                              <div>
                                <div className="font-medium">{device.name}</div>
                                <div className="text-xs text-foreground/60">{device.type}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="flex items-center">
                              {getStatusIcon(device.status)}
                              <span className="ml-1.5 text-sm capitalize">{device.status}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">
                            {device.status !== 'offline' ? `${device.latency} ms` : '—'}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">
                            {device.uptime}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {selectedTab === 'performance' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Average Latency (ms)</h4>
                  <span className="text-xs text-foreground/60">Last 24 hours</span>
                </div>
                
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ccc" />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          borderRadius: '8px',
                          border: 'none',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }}
                        labelStyle={{ fontWeight: 'bold' }}
                      />
                      <Bar dataKey="latency" radius={[4, 4, 0, 0]}>
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.name === 'Now' ? '#E43A24' : '#8491A9'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {selectedTab === 'logs' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">System Logs</h4>
                  <span className="text-xs text-foreground/60">Last updated: Just now</span>
                </div>
                
                <div className="bg-black/90 text-green-400 font-mono text-xs p-4 rounded-lg h-64 overflow-y-auto">
                  <p>[2023-04-15 08:01:32] INFO: System started</p>
                  <p>[2023-04-15 08:01:33] INFO: Loaded 6 devices for monitoring</p>
                  <p>[2023-04-15 08:01:35] INFO: Starting monitoring services</p>
                  <p>[2023-04-15 08:02:01] INFO: Ping check for "Main Router": Successful (5ms)</p>
                  <p>[2023-04-15 08:02:01] INFO: HTTP check for "Company Website": 200 OK (85ms)</p>
                  <p>[2023-04-15 08:02:02] INFO: Ping check for "Web Server": Successful (12ms)</p>
                  <p>[2023-04-15 08:02:02] INFO: Ping check for "Database Server": Successful (28ms)</p>
                  <p>[2023-04-15 08:02:03] WARN: High latency detected for "Database Server"</p>
                  <p>[2023-04-15 08:02:04] INFO: Ping check for "Cloud Storage": Successful (42ms)</p>
                  <p>[2023-04-15 08:02:05] ERROR: Ping check for "Backup Server": Failed</p>
                  <p>[2023-04-15 08:02:05] INFO: Attempting retry for "Backup Server"</p>
                  <p>[2023-04-15 08:02:10] ERROR: Retry failed for "Backup Server"</p>
                  <p>[2023-04-15 08:02:10] ALERT: "Backup Server" marked as offline</p>
                  <p>[2023-04-15 08:02:30] INFO: Starting next monitoring cycle</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
