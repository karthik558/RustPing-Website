import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Layers,
  Network,
  BarChart3,
  Terminal,
  Settings,
  Plug,
  Users,
  Sun,
  Moon,
  LogOut,
  RefreshCw,
  Bell,
  Plus,
  Search,
  Pencil,
  Trash2,
  Download,
  ArrowRight,
  ArrowLeft,
  Check,
  Radio,
  Server,
  Activity,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";

interface DeviceItem {
  id: number;
  name: string;
  ip: string;
  category: string;
  sensors: string[];
  status: "OPERATIONAL" | "OFFLINE";
  pingUp: boolean;
  httpUp: boolean;
  bandwidth: string;
}

const initialDevices: DeviceItem[] = [
  { id: 1, name: "Google DNS", ip: "8.8.8.8", category: "DNS Server", sensors: ["Ping", "Http", "Https"], status: "OPERATIONAL", pingUp: true, httpUp: true, bandwidth: "685.00 Mbps" },
  { id: 2, name: "Cloudflare DNS", ip: "1.1.1.1", category: "DNS Server", sensors: ["Ping", "Https", "Http"], status: "OPERATIONAL", pingUp: true, httpUp: true, bandwidth: "760.46 Mbps" },
  { id: 3, name: "Antivirus Server", ip: "8.8.4.4", category: "Antivirus Server", sensors: ["Ping", "Http", "Https"], status: "OPERATIONAL", pingUp: true, httpUp: true, bandwidth: "563.54 Mbps" },
  { id: 4, name: "Google DNS [1]", ip: "4.2.2.2", category: "DNS Server", sensors: ["Ping", "Http"], status: "OFFLINE", pingUp: false, httpUp: false, bandwidth: "N/A" },
  { id: 5, name: "CCTV Server", ip: "204.106.240.53", category: "CCTV", sensors: ["Ping"], status: "OPERATIONAL", pingUp: true, httpUp: false, bandwidth: "N/A" },
  { id: 6, name: "test", ip: "192.154.55.1", category: "Network", sensors: ["Ping"], status: "OFFLINE", pingUp: false, httpUp: false, bandwidth: "N/A" },
  { id: 7, name: "test1", ip: "192.168.5.5", category: "Network", sensors: ["Ping"], status: "OFFLINE", pingUp: false, httpUp: false, bandwidth: "N/A" },
  { id: 8, name: "test3", ip: "192.168.1.45", category: "Network", sensors: ["Ping"], status: "OFFLINE", pingUp: false, httpUp: false, bandwidth: "N/A" },
];

export default function Demo() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeNav, setActiveNav] = useState<"overview" | "devices" | "topology" | "reports" | "logs" | "settings" | "integrations" | "operators" | "login">("overview");
  const [devices, setDevices] = useState<DeviceItem[]>(initialDevices);

  // Devices page state
  const [deviceSearch, setDeviceSearch] = useState("");
  const [deviceFilter, setDeviceFilter] = useState<"ALL" | "ONLINE" | "OFFLINE">("ALL");

  // Add Device Modal State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newDeviceName, setNewDeviceName] = useState("");
  const [newDeviceIp, setNewDeviceIp] = useState("");
  const [newDeviceCategory, setNewDeviceCategory] = useState("DNS Server");

  // Event stream state
  const [logSearch, setLogSearch] = useState("");
  const [logFilter, setLogFilter] = useState<"ALL" | "SUCCESS" | "FAILURES">("ALL");
  const [logs, setLogs] = useState([
    { time: "21:25:17", status: "OK", host: "Google DNS (8.8.8.8)", ping: "PING Up", http: "HTTP Up", speed: "685.00 Mbps" },
    { time: "21:25:17", status: "OK", host: "Cloudflare DNS (1.1.1.1)", ping: "PING Up", http: "HTTP Up", speed: "760.46 Mbps" },
    { time: "21:25:17", status: "OK", host: "Antivirus Server (8.8.4.4)", ping: "PING Up", http: "HTTP Up", speed: "563.54 Mbps" },
    { time: "21:25:17", status: "OK", host: "Google DNS [1] (4.2.2.2)", ping: "PING Down", http: "HTTP Down", speed: "N/A" },
    { time: "21:25:17", status: "OK", host: "CCTV Server (204.106.240.53)", ping: "PING Up", http: "HTTP N/A", speed: "N/A" },
    { time: "21:25:17", status: "OK", host: "test (192.154.55.1)", ping: "PING Down", http: "HTTP N/A", speed: "N/A" },
    { time: "21:25:17", status: "OK", host: "test1 (192.168.5.5)", ping: "PING Down", http: "HTTP N/A", speed: "N/A" },
    { time: "21:25:17", status: "OK", host: "test3 (192.168.1.45)", ping: "PING Down", http: "HTTP N/A", speed: "N/A" },
  ]);

  // Topology view state
  const [topologyLayout, setTopologyLayout] = useState<"Ring" | "Star Hub" | "Grid Mesh" | "Tree">("Ring");

  // Simulated live log ticker
  useEffect(() => {
    const timer = setInterval(() => {
      const target = devices[Math.floor(Math.random() * devices.length)];
      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
      const isUp = target.status === "OPERATIONAL";

      const newLog = {
        time: timeStr,
        status: "OK",
        host: `${target.name} (${target.ip})`,
        ping: isUp ? "PING Up" : "PING Down",
        http: target.sensors.includes("Http") ? (isUp ? "HTTP Up" : "HTTP Down") : "HTTP N/A",
        speed: isUp && target.bandwidth !== "N/A" ? target.bandwidth : "N/A",
      };

      setLogs((prev) => [newLog, ...prev.slice(0, 30)]);
    }, 2500);

    return () => clearInterval(timer);
  }, [devices]);

  // Filtered devices list
  const filteredDevices = useMemo(() => {
    return devices.filter((d) => {
      const matchSearch =
        deviceSearch.trim() === "" ||
        d.name.toLowerCase().includes(deviceSearch.toLowerCase()) ||
        d.ip.includes(deviceSearch) ||
        d.category.toLowerCase().includes(deviceSearch.toLowerCase());

      const matchFilter =
        deviceFilter === "ALL" ||
        (deviceFilter === "ONLINE" && d.status === "OPERATIONAL") ||
        (deviceFilter === "OFFLINE" && d.status === "OFFLINE");

      return matchSearch && matchFilter;
    });
  }, [devices, deviceSearch, deviceFilter]);

  const handleAddDevice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDeviceName || !newDeviceIp) {
      toast.error("Please provide both name and IP address.");
      return;
    }
    const newDev: DeviceItem = {
      id: Date.now(),
      name: newDeviceName,
      ip: newDeviceIp,
      category: newDeviceCategory,
      sensors: ["Ping", "Http"],
      status: "OPERATIONAL",
      pingUp: true,
      httpUp: true,
      bandwidth: "450.00 Mbps",
    };
    setDevices([newDev, ...devices]);
    setShowAddModal(false);
    setNewDeviceName("");
    setNewDeviceIp("");
    toast.success(`Device "${newDev.name}" added to RustPing monitors.`);
  };

  // Theme Styling Classes
  const isDark = theme === "dark";
  const bgMain = isDark ? "bg-[#080909] text-[#f3f1eb]" : "bg-[#f4f4f0] text-[#111313]";
  const sidebarBg = isDark ? "bg-[#080909] border-[#1a1d1b]" : "bg-[#ffffff] border-[#e0e0d8]";
  const cardBg = isDark ? "bg-[#0b0c0c] border-[#1f2321]" : "bg-[#ffffff] border-[#e2e2da] shadow-sm";
  const mutedText = isDark ? "text-[#777e79]" : "text-[#686f6a]";
  const acidAccent = isDark ? "#d7ff43" : "#7a8a00";

  return (
    <div className={`min-h-screen flex ${bgMain} font-sans transition-colors duration-200 select-none`}>
      {/* 1. LEFT SIDEBAR NAVIGATION (Identical to Screenshots) */}
      <aside className={`w-[240px] flex-shrink-0 border-r flex flex-col justify-between p-5 ${sidebarBg} z-30`}>
        <div className="space-y-8">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#d7ff43] text-[#080909] grid place-items-center font-bold">
              <Radio size={18} strokeWidth={2.5} />
            </div>
            <div className="font-mono text-sm font-extrabold tracking-widest flex items-center gap-1 text-white">
              <span>RUST</span>
              <span className="text-[#858b87] font-semibold">PING</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="space-y-1 font-mono text-xs">
            <button
              onClick={() => setActiveNav("overview")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded transition-all ${
                activeNav === "overview"
                  ? isDark
                    ? "bg-[#161817] text-white font-bold border-l-2 border-[#d7ff43]"
                    : "bg-[#e8e8df] text-black font-bold border-l-2 border-[#7a8a00]"
                  : `${mutedText} hover:text-white hover:bg-[#111312]`
              }`}
            >
              <span className="flex items-center gap-3">
                <LayoutDashboard size={15} className={activeNav === "overview" ? "text-[#d7ff43]" : ""} />
                Overview
              </span>
            </button>

            <button
              onClick={() => setActiveNav("devices")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded transition-all ${
                activeNav === "devices"
                  ? isDark
                    ? "bg-[#161817] text-white font-bold border-l-2 border-[#d7ff43]"
                    : "bg-[#e8e8df] text-black font-bold border-l-2 border-[#7a8a00]"
                  : `${mutedText} hover:text-white hover:bg-[#111312]`
              }`}
            >
              <span className="flex items-center gap-3">
                <Layers size={15} className={activeNav === "devices" ? "text-[#d7ff43]" : ""} />
                Devices
              </span>
              <span className="text-[10px] bg-[#1a1d1b] px-1.5 py-0.5 rounded text-[#858b87]">{devices.length}</span>
            </button>

            <button
              onClick={() => setActiveNav("topology")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded transition-all ${
                activeNav === "topology"
                  ? isDark
                    ? "bg-[#161817] text-white font-bold border-l-2 border-[#d7ff43]"
                    : "bg-[#e8e8df] text-black font-bold border-l-2 border-[#7a8a00]"
                  : `${mutedText} hover:text-white hover:bg-[#111312]`
              }`}
            >
              <span className="flex items-center gap-3">
                <Network size={15} className={activeNav === "topology" ? "text-[#d7ff43]" : ""} />
                Topology Map
              </span>
            </button>

            <button
              onClick={() => setActiveNav("reports")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded transition-all ${
                activeNav === "reports"
                  ? isDark
                    ? "bg-[#161817] text-white font-bold border-l-2 border-[#d7ff43]"
                    : "bg-[#e8e8df] text-black font-bold border-l-2 border-[#7a8a00]"
                  : `${mutedText} hover:text-white hover:bg-[#111312]`
              }`}
            >
              <span className="flex items-center gap-3">
                <BarChart3 size={15} className={activeNav === "reports" ? "text-[#d7ff43]" : ""} />
                Reports
              </span>
            </button>

            <button
              onClick={() => setActiveNav("logs")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded transition-all ${
                activeNav === "logs"
                  ? isDark
                    ? "bg-[#161817] text-white font-bold border-l-2 border-[#d7ff43]"
                    : "bg-[#e8e8df] text-black font-bold border-l-2 border-[#7a8a00]"
                  : `${mutedText} hover:text-white hover:bg-[#111312]`
              }`}
            >
              <span className="flex items-center gap-3">
                <Terminal size={15} className={activeNav === "logs" ? "text-[#d7ff43]" : ""} />
                Event stream
              </span>
            </button>

            <button
              onClick={() => setActiveNav("settings")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded transition-all ${
                activeNav === "settings"
                  ? isDark
                    ? "bg-[#161817] text-white font-bold border-l-2 border-[#d7ff43]"
                    : "bg-[#e8e8df] text-black font-bold border-l-2 border-[#7a8a00]"
                  : `${mutedText} hover:text-white hover:bg-[#111312]`
              }`}
            >
              <span className="flex items-center gap-3">
                <Settings size={15} />
                Settings
              </span>
            </button>

            <button
              onClick={() => setActiveNav("integrations")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded transition-all ${
                activeNav === "integrations"
                  ? isDark
                    ? "bg-[#161817] text-white font-bold border-l-2 border-[#d7ff43]"
                    : "bg-[#e8e8df] text-black font-bold border-l-2 border-[#7a8a00]"
                  : `${mutedText} hover:text-white hover:bg-[#111312]`
              }`}
            >
              <span className="flex items-center gap-3">
                <Plug size={15} />
                Integrations
              </span>
            </button>

            <button
              onClick={() => setActiveNav("operators")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded transition-all ${
                activeNav === "operators"
                  ? isDark
                    ? "bg-[#161817] text-white font-bold border-l-2 border-[#d7ff43]"
                    : "bg-[#e8e8df] text-black font-bold border-l-2 border-[#7a8a00]"
                  : `${mutedText} hover:text-white hover:bg-[#111312]`
              }`}
            >
              <span className="flex items-center gap-3">
                <Users size={15} />
                Operators
              </span>
            </button>
          </nav>
        </div>

        {/* Bottom Sidebar Profile & Theme Controls */}
        <div className="space-y-4 pt-6 border-t border-[#1a1d1b] font-mono text-xs">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded ${mutedText} hover:text-white hover:bg-[#111312] transition-colors`}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
            <span>{isDark ? "Light mode" : "Dark mode"}</span>
          </button>

          <button
            onClick={() => setActiveNav("login")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded ${mutedText} hover:text-white hover:bg-[#111312] transition-colors`}
          >
            <LogOut size={15} />
            <span>Sign out</span>
          </button>

          {/* User Badge Profile */}
          <div className="flex items-center gap-3 pt-2">
            <div className="w-8 h-8 rounded bg-[#d7ff43] text-[#080909] font-bold grid place-items-center text-sm font-mono">
              A
            </div>
            <div>
              <div className="font-bold text-xs">admin</div>
              <div className="text-[10px] text-[#777e79]">Admin Operator</div>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. MAIN WORKSPACE */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Bar */}
        <header className={`h-14 border-b flex items-center justify-between px-8 ${sidebarBg} font-mono text-xs`}>
          <div className="flex items-center gap-2">
            <span className="text-[#777e79]">RUSTPING</span>
            <span className="text-[#777e79]">&gt;</span>
            <span className="font-bold uppercase tracking-wider">
              {activeNav === "overview" && "DASHBOARD"}
              {activeNav === "devices" && "DEVICES"}
              {activeNav === "topology" && "MAP"}
              {activeNav === "reports" && "REPORTS"}
              {activeNav === "logs" && "LOGS"}
              {activeNav === "settings" && "SETTINGS"}
              {activeNav === "integrations" && "INTEGRATIONS"}
              {activeNav === "operators" && "OPERATORS"}
              {activeNav === "login" && "AUTHENTICATION"}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-[#5ff49a] animate-pulse" />
              <span className="text-[#777e79]">Engine online</span>
            </div>

            <button
              onClick={() => toast.success("Refreshed engine telemetry state!")}
              className={`p-2 rounded border ${cardBg} hover:border-[#d7ff43] transition-colors`}
              title="Refresh"
            >
              <RefreshCw size={14} />
            </button>

            <button
              onClick={() => toast.info("No unread operator notifications.")}
              className={`p-2 rounded border ${cardBg} hover:border-[#d7ff43] relative transition-colors`}
              title="Notifications"
            >
              <Bell size={14} />
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 absolute top-1.5 right-1.5" />
            </button>

            <Link to="/" className="ml-3 text-xs font-mono text-[#d7ff43] hover:underline flex items-center gap-1 font-bold">
              <ArrowLeft size={13} /> Exit Demo
            </Link>
          </div>
        </header>

        {/* 3. PAGE CONTENT VIEWS */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* VIEW 1: OVERVIEW DASHBOARD */}
          {activeNav === "overview" && (
            <div className="space-y-8">
              {/* Header Title */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#d7ff43] uppercase block mb-1">
                    LIVE OPERATIONS
                  </span>
                  <h1 className="text-3xl font-extrabold tracking-tight">Network overview</h1>
                  <p className="text-xs text-[#777e79] mt-1 font-mono">
                    Every monitored signal, ordered for action.
                  </p>
                </div>

                <button
                  onClick={() => setShowAddModal(true)}
                  className="px-4 py-2 bg-[#d7ff43] hover:bg-[#c2ed33] text-[#080909] font-mono font-bold text-xs rounded transition-all flex items-center gap-2 self-start sm:self-auto shadow-sm"
                >
                  <Plus size={15} /> Add device
                </button>
              </div>

              {/* 4 Stat Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className={`p-5 rounded border ${cardBg} flex flex-col justify-between`}>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono text-[#777e79] uppercase tracking-wider">TOTAL DEVICES</span>
                    <div className="w-8 h-8 rounded border border-[#242827] grid place-items-center text-[#d7ff43]">
                      <Server size={15} />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-3xl font-mono font-bold">8</div>
                    <span className="text-[10px] font-mono text-[#5ff49a] mt-1 block">+8 active monitors</span>
                  </div>
                </div>

                <div className={`p-5 rounded border ${cardBg} flex flex-col justify-between`}>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono text-[#777e79] uppercase tracking-wider">OPERATIONAL</span>
                    <div className="w-8 h-8 rounded border border-[#242827] grid place-items-center text-[#d7ff43]">
                      <Activity size={15} />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-3xl font-mono font-bold">4</div>
                    <span className="text-[10px] font-mono text-[#5ff49a] mt-1 block">50% network health</span>
                  </div>
                </div>

                <div className={`p-5 rounded border ${cardBg} flex flex-col justify-between`}>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono text-[#777e79] uppercase tracking-wider">INCIDENTS</span>
                    <div className="w-8 h-8 rounded border border-red-500/20 text-red-400 grid place-items-center">
                      <AlertCircle size={15} />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-3xl font-mono font-bold text-[#ff4d4d]">04</div>
                    <span className="text-[10px] font-mono text-red-400 mt-1 block">Requires attention</span>
                  </div>
                </div>

                <div className={`p-5 rounded border ${cardBg} flex flex-col justify-between`}>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono text-[#777e79] uppercase tracking-wider">UPTIME</span>
                    <div className="w-8 h-8 rounded border border-[#242827] grid place-items-center text-[#d7ff43]">
                      <CheckCircle2 size={15} />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-3xl font-mono font-bold">99.9<span className="text-lg">%</span></div>
                    <span className="text-[10px] font-mono text-[#d7ff43] mt-1 block">30D rolling average</span>
                  </div>
                </div>
              </div>

              {/* Middle Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Columns (Throughput & Latency) */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Throughput Card */}
                  <div className={`p-6 rounded border ${cardBg}`}>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[10px] font-mono text-[#d7ff43] uppercase tracking-wider">NETWORK LOAD</span>
                        <h3 className="text-xl font-bold mt-1">Throughput</h3>
                      </div>
                      <span className="text-[10px] font-mono text-[#777e79] border border-[#242827] px-2.5 py-1 rounded">LAST 12 HOURS</span>
                    </div>

                    {/* Bar Chart Visualization */}
                    <div className="h-44 flex items-end gap-2 pt-4 border-b border-[#1f2321] pb-2">
                      {[30, 42, 36, 52, 45, 68, 55, 78, 64, 88, 72, 95, 82, 98, 88, 70, 78].map((height, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-[#d7ff43]/20 to-[#d7ff43] rounded-t hover:brightness-125 transition-all" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-[#777e79] mt-2">
                      <span>06:00</span>
                      <span>12:00</span>
                      <span>18:00</span>
                      <span>NOW</span>
                    </div>
                  </div>

                  {/* Global Latency Card */}
                  <div className={`p-6 rounded border ${cardBg}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] font-mono text-[#d7ff43] uppercase tracking-wider">PERFORMANCE</span>
                        <h3 className="text-xl font-bold mt-1">Global Latency</h3>
                      </div>
                      <span className="text-[10px] font-mono text-[#777e79] border border-[#242827] px-2.5 py-1 rounded">24 HOURS</span>
                    </div>

                    <div className="h-28 flex items-end gap-3 pt-2">
                      {[15, 22, 18, 30, 25, 40, 28, 85, 45, 32, 24, 18, 22, 16].map((h, i) => (
                        <div key={i} className={`flex-1 rounded-t ${h > 60 ? "bg-red-400" : "bg-[#d7ff43]"}`} style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Columns (Health Ring & Traffic) */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Overall Health Ring */}
                  <div className={`p-6 rounded border ${cardBg} flex flex-col justify-between`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] font-mono text-[#d7ff43] uppercase tracking-wider">FLEET STATE</span>
                        <h3 className="text-xl font-bold mt-1">Overall health</h3>
                      </div>
                      <span className="text-[10px] font-mono text-[#777e79] border border-[#242827] px-2.5 py-1 rounded">LIVE</span>
                    </div>

                    {/* Donut Health Gauge Ring */}
                    <div className="py-6 flex flex-col items-center justify-center">
                      <div className="relative w-40 h-40 grid place-items-center rounded-full border-8 border-[#1f2321]">
                        <div className="absolute inset-0 rounded-full border-8 border-[#d7ff43] clip-half" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 50%)" }} />
                        <div className="text-center">
                          <span className="text-3xl font-mono font-extrabold">50<small className="text-lg">%</small></span>
                          <span className="block text-[9px] font-mono text-[#777e79] uppercase tracking-wider">HEALTHY</span>
                        </div>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="flex justify-center gap-6 pt-4 border-t border-[#1f2321] text-xs font-mono">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#d7ff43]" /> Online 4
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#ff4d4d]" /> Offline 4
                      </span>
                    </div>
                  </div>

                  {/* Network Traffic */}
                  <div className={`p-6 rounded border ${cardBg}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] font-mono text-[#d7ff43] uppercase tracking-wider">BANDWIDTH</span>
                        <h3 className="text-xl font-bold mt-1">Network Traffic</h3>
                      </div>
                      <span className="text-[10px] font-mono text-[#777e79] border border-[#242827] px-2.5 py-1 rounded">LIVE</span>
                    </div>

                    <div className="h-28 flex items-end gap-1">
                      {[20, 35, 45, 30, 60, 50, 75, 40, 65, 80, 55, 90, 70, 85].map((h, i) => (
                        <div key={i} className="flex-1 bg-[#d7ff43] clip-wave" style={{ height: `${h}%`, opacity: 0.85 }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 2: DEVICES TABLE */}
          {activeNav === "devices" && (
            <div className="space-y-6">
              {/* Header Title */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#d7ff43] uppercase block mb-1">
                    INVENTORY / {devices.length < 10 ? `0${devices.length}` : devices.length}
                  </span>
                  <h1 className="text-3xl font-extrabold tracking-tight">Monitored devices</h1>
                  <p className="text-xs text-[#777e79] mt-1 font-mono">
                    Manage every target and the checks assigned to it.
                  </p>
                </div>

                <button
                  onClick={() => setShowAddModal(true)}
                  className="px-4 py-2 bg-[#d7ff43] hover:bg-[#c2ed33] text-[#080909] font-mono font-bold text-xs rounded transition-all flex items-center gap-2 self-start sm:self-auto shadow-sm"
                >
                  <Plus size={15} /> Add device
                </button>
              </div>

              {/* Search & Filter Bar */}
              <div className={`p-4 rounded border ${cardBg} flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs`}>
                <div className="relative flex-1 max-w-md">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#777e79]" />
                  <input
                    type="text"
                    placeholder="Search name, IP, or category"
                    value={deviceSearch}
                    onChange={(e) => setDeviceSearch(e.target.value)}
                    className={`w-full pl-9 pr-3 py-2 rounded border focus:outline-none focus:border-[#d7ff43] ${
                      isDark ? "bg-[#141615] border-[#242827] text-white" : "bg-[#ffffff] border-[#d8d8d0] text-black"
                    }`}
                  />
                </div>

                <div className="flex items-center gap-1 border border-[#242827] p-1 rounded bg-[#141615]">
                  <button
                    onClick={() => setDeviceFilter("ALL")}
                    className={`px-3 py-1.5 rounded transition-all ${
                      deviceFilter === "ALL" ? "bg-[#d7ff43] text-[#080909] font-bold" : "text-[#777e79] hover:text-white"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setDeviceFilter("ONLINE")}
                    className={`px-3 py-1.5 rounded transition-all ${
                      deviceFilter === "ONLINE" ? "bg-[#d7ff43] text-[#080909] font-bold" : "text-[#777e79] hover:text-white"
                    }`}
                  >
                    Online
                  </button>
                  <button
                    onClick={() => setDeviceFilter("OFFLINE")}
                    className={`px-3 py-1.5 rounded transition-all ${
                      deviceFilter === "OFFLINE" ? "bg-[#d7ff43] text-[#080909] font-bold" : "text-[#777e79] hover:text-white"
                    }`}
                  >
                    Offline
                  </button>
                </div>
              </div>

              {/* Devices Table */}
              <div className={`rounded border overflow-hidden ${cardBg} font-mono text-xs`}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-[#242827] text-[#777e79] bg-[#121413]">
                        <th className="py-3.5 px-5">DEVICE</th>
                        <th className="py-3.5 px-5">ADDRESS</th>
                        <th className="py-3.5 px-5">CATEGORY</th>
                        <th className="py-3.5 px-5">SENSORS</th>
                        <th className="py-3.5 px-5">STATUS</th>
                        <th className="py-3.5 px-5 text-right">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1f2321]">
                      {filteredDevices.map((d) => (
                        <tr key={d.id} className="hover:bg-[#141615] transition-colors">
                          <td className="py-3.5 px-5 font-bold flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${d.status === "OPERATIONAL" ? "bg-[#d7ff43]" : "bg-[#ff4d4d]"}`} />
                            {d.name}
                          </td>
                          <td className="py-3.5 px-5 text-[#858b87]">{d.ip}</td>
                          <td className="py-3.5 px-5">{d.category}</td>
                          <td className="py-3.5 px-5">
                            <div className="flex gap-1.5">
                              {d.sensors.map((s) => (
                                <span key={s} className="px-2 py-0.5 rounded text-[10px] border border-[#242827] bg-[#161817] text-[#858b87]">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="py-3.5 px-5 font-bold">
                            {d.status === "OPERATIONAL" ? (
                              <span className="text-[#d7ff43] flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#d7ff43]" /> OPERATIONAL
                              </span>
                            ) : (
                              <span className="text-[#ff4d4d] flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d4d]" /> OFFLINE
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-5 text-right">
                            <div className="flex justify-end gap-2 text-[#777e79]">
                              <button onClick={() => toast.info(`Editing target ${d.name}`)} className="p-1 hover:text-white border border-[#242827] rounded">
                                <Pencil size={13} />
                              </button>
                              <button
                                onClick={() => {
                                  setDevices(devices.filter((item) => item.id !== d.id));
                                  toast.info(`Deleted monitor ${d.name}`);
                                }}
                                className="p-1 hover:text-red-400 border border-[#242827] rounded"
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 3: TOPOLOGY MAP */}
          {activeNav === "topology" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#d7ff43] uppercase block mb-1">
                    TOPOLOGY
                  </span>
                  <h1 className="text-3xl font-extrabold tracking-tight">Network Map</h1>
                  <p className="text-xs text-[#777e79] mt-1 font-mono">
                    Visual relationship of monitored infrastructure.
                  </p>
                </div>

                {/* Layout Switcher */}
                <div className="flex items-center gap-1 border border-[#242827] p-1 rounded bg-[#141615] font-mono text-xs self-start sm:self-auto">
                  {(["Ring", "Star Hub", "Grid Mesh", "Tree"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setTopologyLayout(l)}
                      className={`px-3 py-1.5 rounded transition-all ${
                        topologyLayout === l ? "bg-[#d7ff43] text-[#080909] font-bold" : "text-[#777e79] hover:text-white"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Topology Interactive Ring Diagram Canvas */}
              <div className={`p-12 rounded border ${cardBg} min-h-[560px] flex items-center justify-center relative overflow-hidden`}>
                <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                  {/* Central Core Box */}
                  <div className="z-20 px-6 py-4 rounded border-2 border-[#d7ff43] bg-[#0b0c0c] flex items-center gap-3 shadow-[0_0_30px_rgba(215,255,67,0.2)]">
                    <Network size={22} className="text-[#d7ff43]" />
                    <span className="font-mono text-sm font-extrabold tracking-wider text-white">CORE RING</span>
                  </div>

                  {/* Octagonal Ring Connections & Nodes */}
                  {devices.map((d, index) => {
                    const angle = (index / devices.length) * 2 * Math.PI - Math.PI / 2;
                    const radius = 200;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                      <div
                        key={d.id}
                        className="absolute flex items-center gap-2 px-3 py-1.5 rounded border border-[#242827] bg-[#121413] font-mono text-xs shadow-md hover:scale-105 transition-transform"
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                        }}
                      >
                        <span className="w-2 h-2 rounded-full" style={{ background: d.status === "OPERATIONAL" ? "#d7ff43" : "#ff4d4d" }} />
                        <span className="font-bold">{d.name}</span>
                        <span className="text-[10px]" style={{ color: d.status === "OPERATIONAL" ? "#d7ff43" : "#ff4d4d" }}>
                          ● {d.status}
                        </span>
                      </div>
                    );
                  })}

                  {/* SVG Connecting Ring Line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
                    <circle cx="250" cy="250" r="200" fill="none" stroke="#d7ff43" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 4: REPORTS */}
          {activeNav === "reports" && (
            <div className="space-y-6 font-mono">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] tracking-widest text-[#d7ff43] uppercase block mb-1">
                    ANALYTICS
                  </span>
                  <h1 className="text-3xl font-extrabold font-sans tracking-tight">SLA & Reports</h1>
                  <p className="text-xs text-[#777e79] mt-1">
                    Performance tracking and historical uptime metrics.
                  </p>
                </div>

                <button
                  onClick={() => toast.success("Generated SLA PDF report.")}
                  className="px-4 py-2 bg-transparent hover:bg-[#161817] text-white border border-[#242827] font-bold text-xs rounded transition-all flex items-center gap-2 self-start sm:self-auto"
                >
                  <Download size={14} /> Download PDF
                </button>
              </div>

              {/* SLA 30 Days Card */}
              <div className={`p-6 rounded border ${cardBg}`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] text-[#777e79] uppercase tracking-wider">RELIABILITY</span>
                    <h3 className="text-lg font-bold font-sans mt-0.5">Service Level Agreement (30 Days)</h3>
                  </div>
                  <span className="text-xs text-[#d7ff43] border border-[#242827] px-2.5 py-1 rounded">99.9%</span>
                </div>

                {/* 30 Vertical SLA Status Bars */}
                <div className="h-28 flex items-center gap-1.5 pt-2">
                  {Array.from({ length: 45 }).map((_, i) => {
                    const isIncident = i === 14 || i === 28;
                    return (
                      <div
                        key={i}
                        className={`flex-1 h-full rounded-xs transition-opacity hover:opacity-100 ${
                          isIncident ? "bg-[#ff4d4d]" : "bg-[#d7ff43]"
                        }`}
                        title={`Day ${i + 1}: ${isIncident ? "96.4% (Incident recorded)" : "100% Uptime"}`}
                      />
                    );
                  })}
                </div>
                <div className="flex justify-between text-[10px] text-[#777e79] mt-3">
                  <span>30 days ago</span>
                  <span>Today</span>
                </div>
              </div>

              {/* 3 Bottom Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-6 rounded border ${cardBg}`}>
                  <span className="text-[10px] text-[#777e79] uppercase tracking-wider">NETWORK LATENCY</span>
                  <h4 className="text-base font-bold font-sans mt-1 mb-4">Global Ping Response</h4>
                  <div className="h-28 flex items-end gap-1">
                    {[12, 18, 25, 15, 30, 45, 80, 50, 35, 20, 15, 22].map((h, i) => (
                      <div key={i} className="flex-1 bg-[#d7ff43] rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>

                <div className={`p-6 rounded border ${cardBg}`}>
                  <span className="text-[10px] text-[#777e79] uppercase tracking-wider">BANDWIDTH</span>
                  <h4 className="text-base font-bold font-sans mt-1 mb-4">Aggregated Throughput</h4>
                  <div className="h-28 flex items-end gap-1">
                    {[20, 35, 45, 55, 70, 65, 85, 75, 90, 80, 95].map((h, i) => (
                      <div key={i} className="flex-1 bg-[#60a5fa] rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>

                <div className={`p-6 rounded border ${cardBg}`}>
                  <span className="text-[10px] text-[#777e79] uppercase tracking-wider">INVENTORY</span>
                  <h4 className="text-base font-bold font-sans mt-1 mb-4">Category Distribution</h4>
                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between mb-1"><span>DNS Server</span><span className="font-bold">3</span></div>
                      <div className="h-1.5 bg-[#191c1b] rounded overflow-hidden"><div className="h-full bg-[#d7ff43]" style={{ width: "75%" }} /></div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1"><span>Network</span><span className="font-bold">3</span></div>
                      <div className="h-1.5 bg-[#191c1b] rounded overflow-hidden"><div className="h-full bg-[#d7ff43]" style={{ width: "75%" }} /></div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1"><span>Antivirus Server</span><span className="font-bold">1</span></div>
                      <div className="h-1.5 bg-[#191c1b] rounded overflow-hidden"><div className="h-full bg-[#d7ff43]" style={{ width: "25%" }} /></div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1"><span>CCTV</span><span className="font-bold">1</span></div>
                      <div className="h-1.5 bg-[#191c1b] rounded overflow-hidden"><div className="h-full bg-[#d7ff43]" style={{ width: "25%" }} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 5: EVENT STREAM LOGS */}
          {activeNav === "logs" && (
            <div className="space-y-6 font-mono text-xs">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] tracking-widest text-[#d7ff43] uppercase block mb-1">
                    DIAGNOSTICS
                  </span>
                  <h1 className="text-3xl font-extrabold font-sans tracking-tight">Live event stream</h1>
                  <p className="text-xs text-[#777e79] mt-1">
                    Raw evidence from every active network check.
                  </p>
                </div>

                <div className="flex items-center gap-3 self-start sm:self-auto">
                  <button
                    onClick={() => {
                      setLogs([]);
                      toast.info("Cleared event stream.");
                    }}
                    className="px-4 py-2 bg-transparent text-red-400 border border-red-500/40 hover:bg-red-500/10 font-bold rounded transition-all"
                  >
                    Clear Logs
                  </button>

                  <button
                    onClick={() => toast.success("Exported telemetry logs to CSV.")}
                    className="px-4 py-2 bg-transparent text-white border border-[#242827] hover:bg-[#161817] font-bold rounded transition-all flex items-center gap-2"
                  >
                    <Download size={14} /> Export CSV
                  </button>
                </div>
              </div>

              {/* Search & Filter Row */}
              <div className={`p-4 rounded border ${cardBg} flex flex-col md:flex-row md:items-center justify-between gap-4`}>
                <div className="relative flex-1 max-w-md">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#777e79]" />
                  <input
                    type="text"
                    placeholder="Search event stream..."
                    value={logSearch}
                    onChange={(e) => setLogSearch(e.target.value)}
                    className={`w-full pl-9 pr-3 py-2 rounded border focus:outline-none focus:border-[#d7ff43] ${
                      isDark ? "bg-[#141615] border-[#242827] text-white" : "bg-[#ffffff] border-[#d8d8d0] text-black"
                    }`}
                  />
                </div>

                <div className="flex items-center gap-1 border border-[#242827] p-1 rounded bg-[#141615]">
                  <button
                    onClick={() => setLogFilter("ALL")}
                    className={`px-3 py-1.5 rounded transition-all ${
                      logFilter === "ALL" ? "bg-[#d7ff43] text-[#080909] font-bold" : "text-[#777e79] hover:text-white"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setLogFilter("SUCCESS")}
                    className={`px-3 py-1.5 rounded transition-all ${
                      logFilter === "SUCCESS" ? "bg-[#d7ff43] text-[#080909] font-bold" : "text-[#777e79] hover:text-white"
                    }`}
                  >
                    Success
                  </button>
                  <button
                    onClick={() => setLogFilter("FAILURES")}
                    className={`px-3 py-1.5 rounded transition-all ${
                      logFilter === "FAILURES" ? "bg-[#d7ff43] text-[#080909] font-bold" : "text-[#777e79] hover:text-white"
                    }`}
                  >
                    Failures
                  </button>
                </div>
              </div>

              {/* Stream Logs Table */}
              <div className={`rounded border overflow-hidden ${cardBg}`}>
                <div className="p-4 border-b border-[#242827] flex justify-between items-center text-[#777e79]">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d7ff43] animate-pulse" />
                    <span className="text-[#d7ff43] font-bold">STREAM ACTIVE</span>
                  </span>
                  <span>1104 entries</span>
                </div>

                <div className="divide-y divide-[#1f2321]">
                  {logs.map((l, index) => (
                    <div key={index} className="p-3.5 flex flex-wrap items-center justify-between gap-4 hover:bg-[#141615] transition-colors">
                      <div className="flex items-center gap-6">
                        <span className="text-[#777e79]">{l.time}</span>
                        <span className="px-2 py-0.5 rounded bg-[#161817] text-[#d7ff43] font-bold text-[10px]">{l.status}</span>
                        <span className="font-bold text-white">{l.host}</span>
                      </div>
                      <div className="flex items-center gap-8 text-[#777e79]">
                        <span>{l.ping}</span>
                        <span>{l.http}</span>
                        <span className="text-white w-24 text-right">{l.speed}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* VIEW 6: SETTINGS, INTEGRATIONS, OPERATORS */}
          {(activeNav === "settings" || activeNav === "integrations" || activeNav === "operators") && (
            <div className="space-y-6 font-mono">
              <div>
                <span className="text-[10px] tracking-widest text-[#d7ff43] uppercase block mb-1">
                  CONFIGURATION
                </span>
                <h1 className="text-3xl font-extrabold font-sans tracking-tight capitalize">{activeNav}</h1>
                <p className="text-xs text-[#777e79] mt-1">
                  Manage cluster settings, notification hooks, and access tokens.
                </p>
              </div>

              <div className={`p-8 rounded border ${cardBg} max-w-xl space-y-4`}>
                <div className="text-sm font-bold text-white">RustPing Core Engine Config</div>
                <div className="p-4 rounded border border-[#242827] bg-[#141615] space-y-2 text-xs">
                  <div className="flex justify-between"><span>ICMP Interval:</span><span className="text-[#d7ff43]">2000 ms</span></div>
                  <div className="flex justify-between"><span>HTTP Timeout:</span><span className="text-[#d7ff43]">5000 ms</span></div>
                  <div className="flex justify-between"><span>Async Tokio Workers:</span><span className="text-[#d7ff43]">16 Threads</span></div>
                </div>
                <button onClick={() => toast.success("Configuration saved.")} className="px-4 py-2 bg-[#d7ff43] text-[#080909] font-bold text-xs rounded">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* VIEW 7: AUTHENTICATION / LOGIN SCREEN (Matching loginDark.png) */}
          {activeNav === "login" && (
            <div className="fixed inset-0 z-50 flex">
              {/* Left Dark Half */}
              <div className="w-1/2 bg-[#080909] text-[#f3f1eb] p-16 flex flex-col justify-between border-r border-[#1f2321]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#d7ff43] text-[#080909] grid place-items-center font-bold">
                    <Radio size={18} strokeWidth={2.5} />
                  </div>
                  <div className="font-mono text-sm font-extrabold tracking-widest flex items-center gap-1 text-white">
                    <span>RUST</span>
                    <span className="text-[#858b87]">PING</span>
                  </div>
                </div>

                <div className="max-w-md space-y-6">
                  <span className="text-[10px] font-mono text-[#d7ff43] tracking-widest uppercase">
                    ■ SECURE NETWORK CONSOLE
                  </span>
                  <h1 className="text-6xl font-extrabold leading-[1.05] tracking-tight">
                    Signal is waiting.<br />
                    <span className="text-[#d7ff43]">Step inside.</span>
                  </h1>
                  <p className="text-sm text-[#777e79] font-mono leading-relaxed">
                    One protected surface for the health, history, and control of your network.
                  </p>
                </div>

                <div className="p-4 rounded border border-[#242827] bg-[#0c0e0d] font-mono text-xs flex items-center gap-4">
                  <div className="w-8 h-8 rounded bg-[#161918] grid place-items-center text-[#d7ff43]">
                    <Activity size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#777e79] uppercase">SERVICE STATUS</div>
                    <div className="font-bold text-white">Monitoring engine ready</div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#d7ff43] ml-auto" />
                </div>
              </div>

              {/* Right Paper Half */}
              <div className="w-1/2 bg-[#f3f1eb] text-[#111313] p-16 flex flex-col justify-center">
                <div className="max-w-sm mx-auto w-full space-y-6 font-mono">
                  <div>
                    <span className="text-[10px] text-[#78851b] tracking-widest uppercase">AUTHENTICATION / 01</span>
                    <h2 className="text-4xl font-extrabold font-sans mt-1">Welcome back.</h2>
                    <p className="text-xs text-[#767872] mt-2">Use your RustPing operator credentials.</p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setActiveNav("overview");
                      toast.success("Welcome back, Admin!");
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div>
                      <label className="block text-[#111313] font-bold mb-1.5">Username</label>
                      <input
                        type="text"
                        defaultValue="admin"
                        className="w-full p-3 rounded bg-[#e8e8df] border border-[#d2d2c8] font-mono text-black focus:outline-none focus:border-[#7a8a00]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#111313] font-bold mb-1.5">Password</label>
                      <input
                        type="password"
                        defaultValue="••••••••"
                        className="w-full p-3 rounded bg-[#e8e8df] border border-[#d2d2c8] font-mono text-black focus:outline-none focus:border-[#7a8a00]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#d7ff43] hover:bg-[#c2ed33] text-[#080909] font-bold text-xs rounded transition-all flex items-center justify-center gap-2 mt-4"
                    >
                      Enter console <ArrowRight size={14} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Add Device Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className={`w-full max-w-md p-6 rounded border ${cardBg} space-y-4 shadow-2xl font-mono text-xs`}>
            <div className="flex justify-between items-center border-b border-[#242827] pb-3">
              <span className="font-bold text-sm text-white">Add Monitored Device</span>
              <button onClick={() => setShowAddModal(false)} className="text-[#777e79] hover:text-white">✕</button>
            </div>

            <form onSubmit={handleAddDevice} className="space-y-4">
              <div>
                <label className="block text-[#858b87] mb-1">DEVICE NAME</label>
                <input
                  type="text"
                  placeholder="e.g. Core Gateway"
                  value={newDeviceName}
                  onChange={(e) => setNewDeviceName(e.target.value)}
                  className={`w-full p-2.5 rounded border focus:outline-none focus:border-[#d7ff43] ${
                    isDark ? "bg-[#141615] border-[#242827] text-white" : "bg-white border-[#d0d0c8]"
                  }`}
                />
              </div>

              <div>
                <label className="block text-[#858b87] mb-1">IP ADDRESS</label>
                <input
                  type="text"
                  placeholder="e.g. 8.8.8.8"
                  value={newDeviceIp}
                  onChange={(e) => setNewDeviceIp(e.target.value)}
                  className={`w-full p-2.5 rounded border focus:outline-none focus:border-[#d7ff43] ${
                    isDark ? "bg-[#141615] border-[#242827] text-white" : "bg-white border-[#d0d0c8]"
                  }`}
                />
              </div>

              <div>
                <label className="block text-[#858b87] mb-1">CATEGORY</label>
                <select
                  value={newDeviceCategory}
                  onChange={(e) => setNewDeviceCategory(e.target.value)}
                  className={`w-full p-2.5 rounded border focus:outline-none focus:border-[#d7ff43] ${
                    isDark ? "bg-[#141615] border-[#242827] text-white" : "bg-white border-[#d0d0c8]"
                  }`}
                >
                  <option value="DNS Server">DNS Server</option>
                  <option value="Antivirus Server">Antivirus Server</option>
                  <option value="CCTV">CCTV</option>
                  <option value="Network">Network</option>
                  <option value="Router">Router</option>
                  <option value="Storage Server">Storage Server</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-[#242827] rounded text-[#858b87]">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-[#d7ff43] text-[#080909] font-bold rounded">
                  Add Device
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
