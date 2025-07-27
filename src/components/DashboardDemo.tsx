import React from 'react';
import { RefreshCw, Filter, X, Printer, Fingerprint, Network, Database, Search, Download, Settings, LogOut, Mail, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const deviceData = [
  { id: 1, name: 'MATRIX (NVR)', ip: '192.168.132.200', sensors: 'Ping', pingStatus: 'fail', bandwidth: '-', httpStatus: 'unknown' },
  { id: 2, name: 'HP MFP M438-NDA', ip: '192.168.132.236', sensors: 'Ping', pingStatus: 'unknown', bandwidth: '-', httpStatus: 'unknown' },
  { id: 3, name: 'FILE_ROOM', ip: '192.168.132.227', sensors: 'Ping', pingStatus: 'unknown', bandwidth: '-', httpStatus: 'unknown' },
  { id: 4, name: 'Cisco Switch (Basement Switch-1-Data)', ip: '192.168.132.205', sensors: 'Ping', pingStatus: 'unknown', bandwidth: '-', httpStatus: 'unknown' },
  { id: 5, name: 'Cisco Switch (Basement Switch-2-Data)', ip: '192.168.132.206', sensors: 'Ping', pingStatus: 'unknown', bandwidth: '-', httpStatus: 'unknown' },
  { id: 6, name: 'MY DOMAIN', ip: '8.8.8.8', sensors: 'HTTP', pingStatus: 'ok', bandwidth: '221.56', httpStatus: 'ok' }
];

const categoryData = [
  { name: 'Critical Device', up: 0, down: 1, unknown: 1 },
  { name: 'Printers', up: 0, down: 0, unknown: 1 },
  { name: 'Biometrics', up: 0, down: 0, unknown: 1 },
  { name: 'Switch', up: 0, down: 1, unknown: 2 },
  { name: 'DOMAIN', up: 1, down: 0, unknown: 0 }
];

const bandwidthData = [
  { name: 'MY DOMAIN', value: 221.56 },
  // Other devices have no bandwidth data
];

const sensorData = [
  { name: 'Ping', value: 5, color: '#2e67d3' },
  { name: 'HTTP', value: 1, color: '#4ade80' },
];

const COLORS = ['#2e67d3', '#4ade80', '#f87171', '#fbbf24'];

const DashboardDemo = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/20">
      <div className="section-container">
        <div className="mb-6 text-center px-4">
          <h2 className="text-xl md:text-2xl font-bold">Interactive Dashboard Demo</h2>
          <p className="text-foreground/70 mt-2 text-sm md:text-base">Experience the RustPing interface</p>
        </div>

        <div className="dashboard-card dark:bg-gray-900 overflow-hidden p-2 md:p-4 shadow-md border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30 transition-colors duration-300 mx-4 md:mx-0">
          {/* Animated network lines at the top */}
          <div className="relative h-1 w-full mb-4 bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <div className="absolute inset-0 flex">
              <div className="h-full w-1/3 bg-primary/30 animate-pulse-slow"></div>
              <div className="h-full w-1/5 bg-green-500/30 animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
              <div className="h-full w-1/4 bg-yellow-500/30 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              <div className="h-full w-1/6 bg-red-500/30 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
              <div className="h-full w-1/5 bg-primary/30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            </div>
            <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white via-white/0 to-transparent dark:from-gray-900 dark:via-gray-900/0 animate-pulse-slow"></div>
            <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white via-white/0 to-transparent dark:from-gray-900 dark:via-gray-900/0 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Toolbar */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4 gap-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 overflow-x-auto custom-scrollbar">
              <div className="relative w-full sm:w-auto min-w-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Filter by name/IP..."
                  className="pl-9 pr-4 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 w-full sm:w-64 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button variant="outline" size="sm" className="text-xs sm:text-sm flex-1 sm:flex-none">
                  <Filter className="h-4 w-4 sm:mr-1" />
                  <span className="hidden sm:inline">Filter</span>
                </Button>
                <Button variant="outline" size="sm" className="text-xs sm:text-sm flex-1 sm:flex-none">
                  <X className="h-4 w-4 sm:mr-1" />
                  <span className="hidden sm:inline">Clear</span>
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outline" size="sm" className="text-xs sm:text-sm relative group">
                <RefreshCw className="h-4 w-4 sm:mr-1 group-hover:animate-spin" />
                <span className="hidden sm:inline">Refresh</span>
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full"></span>
              </Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                <Download className="h-4 w-4 sm:mr-1" />
                <span className="hidden sm:inline">Logs</span>
              </Button>
              <Button variant="default" size="sm" className="text-xs sm:text-sm bg-primary hover:bg-primary/90 hidden md:flex">
                <Settings className="h-4 w-4 mr-1" />
                <span>Manage Devices</span>
              </Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm hidden lg:flex">
                <Mail className="h-4 w-4 mr-1" />
                <span>Email Alerts</span>
              </Button>
              <div className="flex items-center gap-1">
                <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium text-sm relative overflow-hidden">
                  <span className="relative z-10">AD</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 to-orange-400 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Device category tabs */}
          <div className="flex mb-4 gap-1 sm:gap-2 border-b border-gray-200 dark:border-gray-700 overflow-x-auto custom-scrollbar">
            <button className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-primary rounded-t-md focus:outline-none relative whitespace-nowrap">
              All Devices
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-blue"></div>
            </button>
            <button className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md focus:outline-none transition-colors whitespace-nowrap">
              Critical Device
            </button>
            <button className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md focus:outline-none transition-colors whitespace-nowrap">
              <Printer className="h-3.5 w-3.5 inline-block mr-1" />
              Printers
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md focus:outline-none transition-colors">
              <Fingerprint className="h-3.5 w-3.5 inline-block mr-1" />
              Biometrics
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md focus:outline-none transition-colors">
              <Network className="h-3.5 w-3.5 inline-block mr-1" />
              Switch
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-md focus:outline-none transition-colors">
              <Database className="h-3.5 w-3.5 inline-block mr-1" />
              DOMAIN
            </button>
          </div>

          {/* Devices table */}
          <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 custom-scrollbar">
            <Table className="w-full min-w-[600px]">
              <TableHeader>
                <TableRow className="bg-gray-50 dark:bg-gray-800">
                  <TableHead className="w-[200px] sm:w-[250px] text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 px-2 sm:px-4 py-2">Device Name</TableHead>
                  <TableHead className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 px-2 sm:px-4 py-2">IP Address</TableHead>
                  <TableHead className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 px-2 sm:px-4 py-2">Sensors</TableHead>
                  <TableHead className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 px-2 sm:px-4 py-2">Ping Status</TableHead>
                  <TableHead className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 px-2 sm:px-4 py-2 hidden sm:table-cell">Bandwidth</TableHead>
                  <TableHead className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 px-2 sm:px-4 py-2 hidden md:table-cell">HTTP Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deviceData.map((device) => (
                  <TableRow key={device.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer group">
                    <TableCell className="font-medium group-hover:text-primary transition-colors px-2 sm:px-4 py-2 text-xs sm:text-sm">
                      <div className="truncate max-w-[150px] sm:max-w-none" title={device.name}>
                        {device.name}
                      </div>
                    </TableCell>
                    <TableCell className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-mono">{device.ip}</TableCell>
                    <TableCell className="px-2 sm:px-4 py-2">
                      <span className="px-1 sm:px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                        {device.sensors}
                      </span>
                    </TableCell>
                    <TableCell className="px-2 sm:px-4 py-2">
                      <div className="flex items-center">
                        <span className={`inline-block w-2 h-2 rounded-full mr-1 sm:mr-2 ${
                          device.pingStatus === 'ok' ? 'bg-green-500' : 
                          device.pingStatus === 'fail' ? 'bg-red-500' : 'bg-yellow-500'
                        } ${device.pingStatus === 'ok' ? 'animate-pulse-slow' : ''}`}></span>
                        <span className="capitalize text-xs sm:text-sm">{device.pingStatus === 'unknown' ? 'Unknown' : device.pingStatus === 'ok' ? 'OK' : 'Fail'}</span>
                      </div>
                    </TableCell>
                    <TableCell className="px-2 sm:px-4 py-2 text-xs sm:text-sm hidden sm:table-cell">{device.bandwidth}</TableCell>
                    <TableCell className="px-2 sm:px-4 py-2 hidden md:table-cell">
                      <div className="flex items-center">
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                          device.httpStatus === 'ok' ? 'bg-green-500' : 
                          device.httpStatus === 'fail' ? 'bg-red-500' : 'bg-yellow-500'
                        } ${device.httpStatus === 'ok' ? 'animate-pulse-slow' : ''}`}></span>
                        <span className="capitalize text-xs sm:text-sm">{device.httpStatus === 'unknown' ? 'Unknown' : device.httpStatus === 'ok' ? 'OK' : 'Fail'}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Charts section with fixed dark mode text */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {/* Bandwidth Usage */}
            <Card className="border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30 transition-colors duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <Activity className="h-4 w-4 mr-2 text-primary" />
                  Bandwidth Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={bandwidthData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.2} />
                      <XAxis 
                        dataKey="name" 
                        tick={{ fontSize: 10, fill: 'var(--foreground)' }} 
                        angle={-45} 
                        textAnchor="end" 
                        height={60} 
                      />
                      <YAxis 
                        tick={{ fontSize: 10, fill: 'var(--foreground)' }} 
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'var(--background)', 
                          color: 'var(--foreground)',
                          borderRadius: '8px',
                          border: '1px solid var(--border)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }}
                        labelStyle={{ color: 'var(--foreground)' }}
                      />
                      <Bar dataKey="value" fill="#2e67d3" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Sensor Distribution - Updated to PIE CHART */}
            <Card className="border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30 transition-colors duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <Network className="h-4 w-4 mr-2 text-primary" />
                  Sensor Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sensorData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {sensorData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'var(--background)', 
                          color: 'var(--foreground)',
                          borderRadius: '8px',
                          border: '1px solid var(--border)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }}
                        formatter={(value, name) => [`${value} devices`, name]}
                        labelStyle={{ color: 'var(--foreground)' }}
                      />
                      <Legend 
                        formatter={(value) => <span style={{ color: 'var(--foreground)' }}>{value}</span>}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Device Category Health */}
            <Card className="border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30 transition-colors duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <Database className="h-4 w-4 mr-2 text-primary" />
                  Device Category Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={categoryData}
                      layout="vertical"
                      margin={{ left: 80 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.2} />
                      <XAxis 
                        type="number" 
                        tick={{ fontSize: 10, fill: 'var(--foreground)' }} 
                      />
                      <YAxis 
                        dataKey="name" 
                        type="category" 
                        tick={{ fontSize: 10, fill: 'var(--foreground)' }} 
                        width={80} 
                      />
                      <Tooltip
                        contentStyle={{ 
                          backgroundColor: 'var(--background)', 
                          color: 'var(--foreground)',
                          borderRadius: '8px',
                          border: '1px solid var(--border)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }}
                        labelStyle={{ color: 'var(--foreground)' }}
                      />
                      <Legend 
                        formatter={(value) => <span style={{ color: 'var(--foreground)' }}>{value}</span>}
                      />
                      <Bar dataKey="up" stackId="a" name="Up" fill="#4ade80" />
                      <Bar dataKey="down" stackId="a" name="Down" fill="#f87171" />
                      <Bar dataKey="unknown" stackId="a" name="Unknown" fill="#fbbf24" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="default" className="shadow-md bg-primary hover:bg-primary/90 transition-all transform hover:scale-105">
            Try RustPing Today
          </Button>
          <p className="mt-3 text-sm text-foreground/70">Monitor your network devices in real-time with our powerful dashboard</p>
        </div>
      </div>
    </section>
  );
};

export default DashboardDemo;
