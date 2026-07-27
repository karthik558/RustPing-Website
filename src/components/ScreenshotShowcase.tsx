import React, { useState } from 'react';
import { Eye, Sun, Moon, Maximize2, Layers, Monitor, Shield, FileText, Network, Terminal } from 'lucide-react';
import ScreenshotModal from './ScreenshotModal';

export interface ScreenshotItem {
  id: string;
  category: 'dashboard' | 'devices' | 'logs' | 'reports' | 'topology' | 'auth';
  categoryLabel: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  darkSrc: string;
  lightSrc: string;
  icon: React.ElementType;
}

export const screenshotsData: ScreenshotItem[] = [
  {
    id: 'dashboard',
    category: 'dashboard',
    categoryLabel: 'Main Dashboard',
    number: '01',
    title: 'Main Operational Dashboard',
    subtitle: 'High-level real-time infrastructure status',
    description: 'Monitor active devices, response latency distributions, subnet health scores, and system resource consumption in a single unified view.',
    darkSrc: '/screenshots/dashboardHome-dark.png',
    lightSrc: '/screenshots/dashboardHome-light.png',
    icon: Monitor,
  },
  {
    id: 'devices',
    category: 'devices',
    categoryLabel: 'Device Manager',
    number: '02',
    title: 'Device & Subnet Manager',
    subtitle: 'Granular host inspection & target control',
    description: 'Filter devices by IP subnet or online status, adjust ICMP and HTTP probing intervals, and track per-host latency trends.',
    darkSrc: '/screenshots/devDashBoard-dark.png',
    lightSrc: '/screenshots/devDashBoard-light.png',
    icon: Layers,
  },
  {
    id: 'logs',
    category: 'logs',
    categoryLabel: 'Live Logs',
    number: '03',
    title: 'Real-Time Live Logs',
    subtitle: 'Microsecond packet probe streams',
    description: 'Stream live probe results, response timestamps, and packet loss events as they happen with instant search and status filtering.',
    darkSrc: '/screenshots/liveLog-dark.png',
    lightSrc: '/screenshots/liveLog-light.png',
    icon: Terminal,
  },
  {
    id: 'reports',
    category: 'reports',
    categoryLabel: 'Reports & Analytics',
    number: '04',
    title: 'Reports & Telemetry History',
    subtitle: 'Operational evidence & SLA compliance',
    description: 'Generate incident summaries, review response time histograms, and export structured telemetry logs for auditing and SLA validation.',
    darkSrc: '/screenshots/reports-dark.png',
    lightSrc: '/screenshots/reports-light.png',
    icon: FileText,
  },
  {
    id: 'topology',
    category: 'topology',
    categoryLabel: 'Topology Map',
    number: '05',
    title: 'Network Topology Map',
    subtitle: 'Visual node interconnectivity',
    description: 'Map physical and logical node relationships, gateway routing paths, and dependency chains across your local and cloud subnets.',
    darkSrc: '/screenshots/topology-dark.png',
    lightSrc: '/screenshots/topology-light.png',
    icon: Network,
  },
  {
    id: 'auth',
    category: 'auth',
    categoryLabel: 'Authentication',
    number: '06',
    title: 'Secure Access & Login',
    subtitle: 'Role-based access security',
    description: 'Encrypted authentication flow supporting role-based access controls for system administrators and operations teams.',
    darkSrc: '/screenshots/loginDark.png',
    lightSrc: '/screenshots/loginLight.png',
    icon: Shield,
  },
];

const ScreenshotShowcase: React.FC = () => {
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark');
  const [activeTabId, setActiveTabId] = useState<string>('dashboard');
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const activeItem = screenshotsData.find((item) => item.id === activeTabId) || screenshotsData[0];

  const getCurrentImage = (item: ScreenshotItem) => {
    return themeMode === 'dark' ? item.darkSrc : item.lightSrc;
  };

  const handleOpenModal = (index: number) => {
    setModalIndex(index);
  };

  const handleNextModal = () => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex + 1) % screenshotsData.length);
    }
  };

  const handlePrevModal = () => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex - 1 + screenshotsData.length) % screenshotsData.length);
    }
  };

  return (
    <section className="section section-interface" id="interface">
      <div className="shell">
        {/* Section Intro matching rest of site */}
        <div className="section-intro">
          <div>
            <span className="kicker">02 / OPERATIONAL VIEW</span>
            <h2>Your entire network.<br /><em>One decisive glance.</em></h2>
          </div>
          <div>
            <p>A real product interface—not a wall of charts. RustPing keeps the most important state closest to your attention.</p>
            <div className="showcase-theme-toggle mt-4">
              <button
                onClick={() => setThemeMode('dark')}
                className={`showcase-theme-btn ${themeMode === 'dark' ? 'is-active' : ''}`}
              >
                <Moon size={12} />
                <span>DARK MODE</span>
              </button>
              <button
                onClick={() => setThemeMode('light')}
                className={`showcase-theme-btn ${themeMode === 'light' ? 'is-active is-light' : ''}`}
              >
                <Sun size={12} />
                <span>LIGHT MODE</span>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Window Showcase */}
        <div>
          {/* Navigation Tabs */}
          <div className="showcase-tabs">
            {screenshotsData.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activeTabId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTabId(item.id)}
                  className={`showcase-tab ${isActive ? 'is-active' : ''}`}
                >
                  <Icon size={14} />
                  <span>{item.number}. {item.categoryLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Featured Active Viewer Frame */}
          <div className="dashboard-frame group cursor-pointer" onClick={() => handleOpenModal(screenshotsData.findIndex((s) => s.id === activeItem.id))}>
            <div className="window-bar">
              <div><i /><i /><i /></div>
              <span>rustping / {activeItem.category} ({themeMode})</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenModal(screenshotsData.findIndex((s) => s.id === activeItem.id));
                }}
                className="text-link text-[10px]"
              >
                <Maximize2 size={11} /> Expand view
              </button>
            </div>

            <img
              src={getCurrentImage(activeItem)}
              alt={activeItem.title}
            />

            <div className="screen-label label-one"><span>{activeItem.number}</span> {activeItem.categoryLabel}</div>
            <div className="screen-label label-two"><span>{themeMode.toUpperCase()}</span> SURFACE</div>
          </div>

          <div className="capability-row">
            <div>
              <span>01 / CAPABILITY</span>
              <strong>{activeItem.title}</strong>
              <p>{activeItem.description}</p>
            </div>
            <div>
              <span>02 / PROBE TYPE</span>
              <strong>Async ICMP + HTTP Probing</strong>
              <p>Sub-millisecond latency measurements streamed directly to the operational console.</p>
            </div>
            <div>
              <span>03 / EVIDENCE</span>
              <strong>Exportable Operational History</strong>
              <p>Filter logs and export event telemetry on demand for incident analysis.</p>
            </div>
          </div>
        </div>

        {/* Grid View of All Interface Views matching feature-grid */}
        <div className="gallery-intro">
          <div>
            <span className="kicker">COMPLETE INTERFACE GALLERY</span>
            <h3>Browse All Operational Views</h3>
          </div>
          <div className="gallery-desc">
            <span>Select any card to inspect in full resolution modal</span>
          </div>
        </div>

        <div className="screenshot-grid">
          {screenshotsData.map((item, index) => {
            const Icon = item.icon;
            const isSelected = item.id === activeTabId;
            const imgSrc = getCurrentImage(item);

            return (
              <article
                key={item.id}
                onClick={() => {
                  setActiveTabId(item.id);
                  handleOpenModal(index);
                }}
                className={`screenshot-card ${isSelected ? 'is-selected' : ''}`}
              >
                <div className="screenshot-thumb-wrap">
                  <img
                    src={imgSrc}
                    alt={item.title}
                  />
                  <div className="screen-label" style={{ top: '10px', left: '10px', padding: '6px 10px', fontSize: '8px' }}>
                    <span>{item.number}</span> {item.categoryLabel}
                  </div>
                </div>

                <div className="screenshot-card-body">
                  <div>
                    <span className="screenshot-card-num">{item.number} / TELEMETRY</span>
                    <h4 className="screenshot-card-title">{item.title}</h4>
                    <p className="screenshot-card-text">{item.description}</p>
                  </div>

                  <div className="screenshot-card-footer">
                    <span><Icon size={12} style={{ display: 'inline', marginRight: '6px' }} /> {themeMode.toUpperCase()} MODE</span>
                    <span>EXPAND &rarr;</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal Popup Viewer */}
      {modalIndex !== null && (
        <ScreenshotModal
          isOpen={modalIndex !== null}
          onClose={() => setModalIndex(null)}
          imageSrc={getCurrentImage(screenshotsData[modalIndex])}
          title={screenshotsData[modalIndex].title}
          description={screenshotsData[modalIndex].description}
          currentTheme={themeMode}
          onToggleTheme={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
          onPrev={handlePrevModal}
          onNext={handleNextModal}
          currentIndex={modalIndex}
          totalCount={screenshotsData.length}
        />
      )}
    </section>
  );
};

export default ScreenshotShowcase;
