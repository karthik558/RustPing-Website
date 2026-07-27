import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  FileText, 
  AlertTriangle, 
  Layers, 
  KeyRound, 
  LogOut, 
  Settings, 
  Download, 
  Calendar, 
  ArrowUpDown,
  Activity,
  CheckCircle,
  HelpCircle,
  Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { toast } from 'sonner';

interface DeviceItem {
  id: number;
  name: string;
  ip: string;
  category: string;
  sensors: string[];
  pingStatus: 'ok' | 'unknown' | 'fail';
  bandwidth: number | null;
  httpStatus: 'ok' | 'unknown' | 'fail';
}

const initialDevices: DeviceItem[] = [
  { id: 1, name: 'Google DNS', ip: '8.8.8.8', category: 'DNS Server', sensors: ['Ping', 'Http', 'Https'], pingStatus: 'ok', bandwidth: 453.90, httpStatus: 'ok' },
  { id: 2, name: 'Cloudflare DNS', ip: '1.1.1.1', category: 'DNS Server', sensors: ['Ping', 'Https', 'Http'], pingStatus: 'ok', bandwidth: 360.62, httpStatus: 'ok' },
  { id: 3, name: 'Antivirus Server', ip: '8.8.4.4', category: 'Antivirus Server', sensors: ['Ping', 'Http', 'Https'], pingStatus: 'ok', bandwidth: 119.57, httpStatus: 'ok' },
  { id: 4, name: 'Google DNS [1]', ip: '4.2.2.2', category: 'DNS Server', sensors: ['Ping', 'Http'], pingStatus: 'ok', bandwidth: 599.76, httpStatus: 'ok' },
  { id: 5, name: 'Adguard Server [1]', ip: '94.140.15.16', category: 'DNS Server', sensors: ['Ping', 'Http'], pingStatus: 'ok', bandwidth: 173.80, httpStatus: 'ok' },
  { id: 6, name: 'Adguard Server [2]', ip: '94.140.14.15', category: 'DNS Server', sensors: ['Ping', 'Http'], pingStatus: 'ok', bandwidth: 337.89, httpStatus: 'ok' },
  { id: 7, name: 'Cisco Virtual Controller', ip: '8.8.8.8', category: 'Access Point', sensors: ['Ping'], pingStatus: 'unknown', bandwidth: null, httpStatus: 'unknown' },
  { id: 8, name: 'NAS', ip: '8.8.4.4', category: 'Storage Server', sensors: ['Ping'], pingStatus: 'unknown', bandwidth: null, httpStatus: 'unknown' },
  { id: 9, name: 'CCTV Server', ip: '8.8.8.8', category: 'CCTV', sensors: ['Ping'], pingStatus: 'unknown', bandwidth: null, httpStatus: 'unknown' },
];

const categoryTabs = [
  'All Devices',
  'DNS Server',
  'Antivirus Server',
  'Access Point',
  'Storage Server',
  'CCTV'
];

const sensorPieData = [
  { name: 'Ping', value: 9, color: '#d9531e' },
  { name: 'Http', value: 6, color: '#10b981' },
  { name: 'Https', value: 3, color: '#f59e0b' },
];

const DashboardDemo = () => {
  const [activeCategory, setActiveCategory] = useState('All Devices');
  const [searchQuery, setSearchQuery] = useState('');
  const [exportFormat, setExportFormat] = useState('TXT');
  const [deviceIpInput, setDeviceIpInput] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Filter devices
  const filteredDevices = useMemo(() => {
    return initialDevices.filter(device => {
      const matchesCategory = activeCategory === 'All Devices' || device.category === activeCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        device.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        device.ip.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Bar chart bandwidth data
  const chartBandwidthData = useMemo(() => {
    return initialDevices.map(d => ({
      name: d.name,
      bandwidth: d.bandwidth || 0
    }));
  }, []);

  const handleGenerateLog = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Log Export Generated (${exportFormat})`, {
      description: `Export file prepared for ${deviceIpInput || 'all selected devices'}.`
    });
  };

  return (
    <div className="w-full">
      {/* Main Dashboard Window Container */}
      <div className="rounded-xl border border-slate-800 bg-[#0d111a] shadow-2xl overflow-hidden font-sans text-slate-200">
        
        {/* TOP NAVBAR (Reference Image Layout) */}
        <div className="bg-[#121824] border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          
          {/* Logo & Brand - Directly rendered without box/border */}
          <div className="flex items-center gap-2">
            <img src="/logo_rust.png" alt="RustPing" className="h-6 w-auto object-contain" />
            <span className="font-bold text-base tracking-tight text-white">RustPing</span>
          </div>

          {/* Search Box & Controls */}
          <div className="flex flex-wrap items-center gap-2 flex-1 max-w-xl mx-auto">
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Filter by name/IP..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#182030] border border-slate-700/80 rounded px-3 py-1.5 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
            
            <button 
              type="button" 
              className="px-2.5 py-1.5 bg-[#182030] hover:bg-slate-700/60 border border-slate-700 rounded text-xs text-slate-300 flex items-center gap-1.5 transition-colors"
            >
              <SlidersHorizontal size={13} />
            </button>
            
            {searchQuery && (
              <button 
                type="button" 
                onClick={() => setSearchQuery('')}
                className="px-2.5 py-1.5 bg-[#182030] hover:bg-slate-700/60 border border-slate-700 rounded text-xs text-slate-300 flex items-center gap-1 transition-colors"
              >
                <X size={13} />
              </button>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <button 
                type="button"
                onClick={() => toast.info('Live logs active')}
                className="px-2.5 py-1.5 bg-[#1d332d] border border-emerald-500/30 hover:bg-[#23423b] text-emerald-400 rounded text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <FileText size={13} />
                <span>Live Logs</span>
              </button>

              <button 
                type="button"
                onClick={() => toast.warning('Showing failed logs')}
                className="px-2.5 py-1.5 bg-[#331d24] border border-red-500/30 hover:bg-[#42232d] text-red-400 rounded text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <AlertTriangle size={13} />
                <span>Failed Logs</span>
              </button>

              <button 
                type="button"
                onClick={() => toast.success('Manage devices modal opened')}
                className="px-2.5 py-1.5 bg-[#d9531e] hover:bg-[#c44715] text-white rounded text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Layers size={13} />
                <span className="hidden sm:inline">Manage Devices</span>
              </button>

              <button 
                type="button"
                onClick={() => toast.info('Password reset request initiated')}
                className="px-2.5 py-1.5 bg-[#182030] hover:bg-slate-700 border border-slate-700 text-slate-200 rounded text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <KeyRound size={13} />
                <span className="hidden md:inline">Reset Password</span>
              </button>

              <button 
                type="button"
                onClick={() => toast.error('Logged out successfully')}
                className="px-2.5 py-1.5 bg-red-600/90 hover:bg-red-600 text-white rounded text-xs font-medium flex items-center gap-1 transition-colors"
              >
                <LogOut size={13} />
                <span className="hidden sm:inline">Logout</span>
              </button>

              <button 
                type="button"
                onClick={() => toast.info('Settings panel')}
                className="p-1.5 text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Settings size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="bg-[#121824] px-4 pt-3 pb-3 border-b border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                  isActive 
                    ? 'bg-[#d9531e] text-white font-semibold shadow-md shadow-[#d9531e]/20' 
                    : 'bg-[#182030] text-slate-300 hover:bg-[#1f2a3f] border border-slate-800'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* DEVICES TABLE */}
        <div className="p-4 overflow-x-auto">
          <div className="rounded border border-slate-800 bg-[#121824] overflow-hidden">
            <Table className="w-full text-xs">
              <TableHeader>
                <TableRow className="border-b border-slate-800 bg-[#161e2e] hover:bg-[#161e2e]">
                  <TableHead className="text-slate-300 font-semibold py-2.5 px-3">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <span>Device Name</span>
                      <ArrowUpDown size={12} className="text-slate-500" />
                    </div>
                  </TableHead>
                  <TableHead className="text-slate-300 font-semibold py-2.5 px-3">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <span>IP Address</span>
                      <ArrowUpDown size={12} className="text-slate-500" />
                    </div>
                  </TableHead>
                  <TableHead className="text-slate-300 font-semibold py-2.5 px-3">Sensors Used</TableHead>
                  <TableHead className="text-slate-300 font-semibold py-2.5 px-3">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <span>Ping Status</span>
                      <ArrowUpDown size={12} className="text-slate-500" />
                    </div>
                  </TableHead>
                  <TableHead className="text-slate-300 font-semibold py-2.5 px-3">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <span>Bandwidth (Mbps)</span>
                      <ArrowUpDown size={12} className="text-slate-500" />
                    </div>
                  </TableHead>
                  <TableHead className="text-slate-300 font-semibold py-2.5 px-3">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <span>HTTP Status</span>
                      <ArrowUpDown size={12} className="text-slate-500" />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDevices.length > 0 ? (
                  filteredDevices.map((device) => (
                    <TableRow 
                      key={device.id} 
                      className="border-b border-slate-800/60 hover:bg-[#1a2334] transition-colors"
                    >
                      <TableCell className="font-medium text-slate-200 py-2.5 px-3">
                        {device.name}
                      </TableCell>
                      <TableCell className="font-mono text-slate-300 py-2.5 px-3">
                        {device.ip}
                      </TableCell>
                      <TableCell className="py-2.5 px-3">
                        <div className="flex items-center gap-1">
                          {device.sensors.map((sensor) => (
                            <span 
                              key={sensor} 
                              className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#1d3557] text-blue-300 border border-blue-500/20"
                            >
                              {sensor}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="py-2.5 px-3">
                        <div className="flex items-center gap-1.5 font-medium">
                          {device.pingStatus === 'ok' ? (
                            <>
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                              <span className="text-emerald-400">OK</span>
                            </>
                          ) : (
                            <>
                              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                              <span className="text-amber-400">Unknown</span>
                            </>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-slate-300 py-2.5 px-3">
                        {device.bandwidth ? device.bandwidth.toFixed(2) : '-'}
                      </TableCell>
                      <TableCell className="py-2.5 px-3">
                        <div className="flex items-center gap-1.5 font-medium">
                          {device.httpStatus === 'ok' ? (
                            <>
                              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                              <span className="text-emerald-400">OK</span>
                            </>
                          ) : (
                            <>
                              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                              <span className="text-amber-400">Unknown</span>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-slate-400">
                      No devices match your search criteria.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* CHARTS GRID (Bandwidth Usage & Sensor Distribution) */}
        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* Bandwidth Usage Chart */}
          <div className="bg-[#121824] border border-slate-800 rounded p-4">
            <h3 className="text-sm font-semibold text-slate-200 mb-4">Bandwidth Usage</h3>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartBandwidthData} margin={{ top: 10, right: 10, left: -20, bottom: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f293d" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#8491a9', fontSize: 10 }}
                    angle={-35}
                    textAnchor="end"
                    interval={0}
                  />
                  <YAxis 
                    tick={{ fill: '#8491a9', fontSize: 10 }}
                    domain={[0, 600]}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#182030', borderColor: '#2d3748', borderRadius: '4px', fontSize: '12px' }}
                    itemStyle={{ color: '#60a5fa' }}
                  />
                  <Bar dataKey="bandwidth" fill="#64748b" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sensor Distribution Chart */}
          <div className="bg-[#121824] border border-slate-800 rounded p-4 flex flex-col">
            <h3 className="text-sm font-semibold text-slate-200 mb-2">Sensor Distribution</h3>
            <div className="h-[220px] flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sensorPieData}
                    cx="50%"
                    cy="45%"
                    innerRadius={0}
                    outerRadius={70}
                    dataKey="value"
                  >
                    {sensorPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#182030', borderColor: '#2d3748', borderRadius: '4px', fontSize: '12px' }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36} 
                    iconType="rect"
                    formatter={(value) => <span className="text-xs text-slate-300 font-medium">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* LOG EXPORT FORM SECTION */}
        <div className="p-4 border-t border-slate-800 bg-[#121824]">
          <div className="border border-slate-800 bg-[#0d111a] rounded p-4">
            <h3 className="text-sm font-semibold text-slate-200 mb-3">Generate Log Export</h3>
            
            <form onSubmit={handleGenerateLog} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Device Names or IP Addresses (comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g., Device1, 192.168.0.100"
                  value={deviceIpInput}
                  onChange={(e) => setDeviceIpInput(e.target.value)}
                  className="w-full bg-[#161d2b] border border-slate-700/80 rounded px-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Start Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="dd/mm/yyyy"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-[#161d2b] border border-slate-700/80 rounded px-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                    <Calendar size={13} className="absolute right-3 top-2.5 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    End Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="dd/mm/yyyy"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full bg-[#161d2b] border border-slate-700/80 rounded px-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                    <Calendar size={13} className="absolute right-3 top-2.5 text-slate-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Export Format
                </label>
                <select
                  value={exportFormat}
                  onChange={(e) => setExportFormat(e.target.value)}
                  className="w-full bg-[#161d2b] border border-slate-700/80 rounded px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                >
                  <option value="TXT">TXT</option>
                  <option value="CSV">CSV</option>
                  <option value="JSON">JSON</option>
                </select>
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="bg-[#d9531e] hover:bg-[#c44715] text-white font-medium text-xs px-4 py-2 rounded flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <Download size={14} />
                  <span>Generate Log</span>
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* FOOTER BAR INSIDE DASHBOARD PREVIEW */}
        <div className="bg-[#0b0e16] border-t border-slate-800 px-4 py-2.5 text-center text-[11px] text-slate-500">
          © Copyright 2025 RustPing. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default DashboardDemo;
