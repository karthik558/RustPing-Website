import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScreenshotShowcase from "@/components/ScreenshotShowcase";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Copy,
  Download,
  Gauge,
  Globe2,
  Menu,
  Network,
  Radio,
  ShieldCheck,
  Terminal,
  X,
  Zap,
} from "lucide-react";

const installCommand =
  "git clone https://github.com/karthik558/Rust-Ping.git && cd Rust-Ping && cargo run --release";

const features = [
  {
    number: "01",
    icon: Zap,
    title: "Fast by design",
    text: "An asynchronous Rust core probes entire subnets without turning your monitoring stack into the bottleneck.",
    visual: "latency",
  },
  {
    number: "02",
    icon: Activity,
    title: "Live state, no noise",
    text: "A focused event stream keeps device state, response time, and failures legible while the network is moving.",
    visual: "chart",
  },
  {
    number: "03",
    icon: Network,
    title: "One view, every target",
    text: "Keep local devices, public endpoints, and HTTP services together in one operational surface.",
    visual: "nodes",
  },
  {
    number: "04",
    icon: Download,
    title: "Evidence on demand",
    text: "Filter and export event history for incident reviews, reporting, and long-term analysis.",
    visual: "export",
  },
];

const roadmap = [
  ["01", "Async ICMP engine", "Released"],
  ["02", "Log export system", "Released"],
  ["03", "Role-based access", "In development"],
  ["04", "Visual device manager", "In development"],
  ["05", "TCP + UDP probes", "Planned"],
  ["06", "Webhook alerts", "Planned"],
];

const faqs = [
  [
    "What can RustPing monitor?",
    "RustPing monitors ICMP response, HTTP endpoint status, and network performance signals across local and remote infrastructure.",
  ],
  [
    "Which systems can run it?",
    "RustPing compiles natively on Linux, Windows, and macOS. A current Rust toolchain is the main requirement.",
  ],
  [
    "Does it require a hosted account?",
    "No. RustPing is self-hosted, so your infrastructure data stays in the environment you control.",
  ],
  [
    "Can I export monitoring history?",
    "Yes. Event history can be filtered and exported in common formats for reporting and incident review.",
  ],
];

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="RustPing home">
      <span className="brand-mark"><Radio size={17} strokeWidth={2.4} /></span>
      <span>RUST<span>PING</span></span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["System", "#system"],
    ["Interface", "#interface"],
    ["Roadmap", "#roadmap"],
    ["Setup", "#setup"],
  ];

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="shell nav-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <Link to="/license">License</Link>
        </nav>
        <a className="button button-small desktop-cta" href="#setup">
          Deploy <ArrowRight size={14} />
        </a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <Link to="/license" onClick={() => setOpen(false)}>License</Link>
        </nav>
      )}
    </header>
  );
}

function MonitorVisual() {
  return (
    <div className="monitor-wrap" aria-label="RustPing live monitoring interface preview">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="status-float status-top">
        <span>Engine status</span>
        <strong>Optimal <i /></strong>
      </div>
      <div className="status-float status-side">
        <span>Probe cycle</span>
        <strong>2.0 sec</strong>
      </div>
      <div className="monitor-window">
        <div className="window-bar">
          <div><i /><i /><i /></div>
          <span>rustping / live-monitor</span>
          <Radio size={13} />
        </div>
        <div className="monitor-head">
          <div>
            <span className="eyebrow">NETWORK OVERVIEW</span>
            <h3>12 devices online</h3>
          </div>
          <div className="health-ring"><span>98</span><small>%</small></div>
        </div>
        <div className="signal-chart">
          {[24, 34, 30, 46, 40, 58, 49, 66, 53, 72, 61, 80, 70, 87, 74, 92].map((height, i) => (
            <i key={i} style={{ height: `${height}%`, animationDelay: `${i * 80}ms` }} />
          ))}
        </div>
        <div className="device-list">
          <div><span><i className="online" /> Core gateway</span><b>3.8 ms</b></div>
          <div><span><i className="online" /> Edge resolver</span><b>8.2 ms</b></div>
          <div><span><i className="warn" /> Backup node</span><b>42.1 ms</b></div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="shell hero-layout">
        <div className="hero-copy reveal">
          <div className="status-chip"><i /> SYSTEM OPERATIONAL</div>
          <h1>
            Know your network.
            <span>Before it knows you.</span>
          </h1>
          <p>
            RustPing turns high-speed infrastructure telemetry into a calm,
            precise view of what is alive, what is slow, and what needs you now.
          </p>
          <div className="hero-actions">
            <a href="#setup" className="button button-primary">Start monitoring <ArrowRight size={17} /></a>
            <a href="#interface" className="text-link">See the interface <ArrowDown size={15} /></a>
          </div>
          <dl className="hero-stats">
            <div><dt>Core</dt><dd>Rust + Tokio</dd></div>
            <div><dt>Response</dt><dd>Real-time</dd></div>
            <div><dt>Deploy</dt><dd>Self-hosted</dd></div>
          </dl>
        </div>
        <MonitorVisual />
      </div>
      <div className="signal-strip">
        <div className="shell">
          <span><Zap size={14} /> Async probing</span>
          <span><Globe2 size={14} /> Cross-platform</span>
          <span><ShieldCheck size={14} /> Self-hosted</span>
          <span><Gauge size={14} /> Low overhead</span>
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ type }: { type: string }) {
  if (type === "latency") return (
    <div className="mini-latency">
      <span>PROBE LATENCY</span>
      <strong>08.2<small>ms</small></strong>
      <div><i /><i /><i /><i /><i /></div>
    </div>
  );
  if (type === "chart") return (
    <div className="mini-chart">
      {[28, 42, 33, 60, 48, 72, 58, 82].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
    </div>
  );
  if (type === "nodes") return (
    <div className="mini-nodes">
      <i /><i /><i /><i /><i /><span />
    </div>
  );
  return (
    <div className="mini-export">
      <span>EVENT EXPORT</span>
      <b>CSV</b><b>JSON</b><b>TXT</b>
    </div>
  );
}

function SystemSection() {
  return (
    <section className="section section-system" id="system">
      <div className="shell">
        <div className="section-intro">
          <div>
            <span className="kicker">01 / THE SYSTEM</span>
            <h2>Speed where it matters.<br /><em>Clarity everywhere else.</em></h2>
          </div>
          <p>From a single gateway to a whole subnet, every signal lands in a system designed for rapid understanding.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ number, icon: Icon, title, text, visual }) => (
            <article className="feature-panel" key={number}>
              <div className="feature-meta">
                <span><Icon size={18} /></span>
                <b>{number}</b>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <FeatureVisual type={visual} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InterfaceSection() {
  return <ScreenshotShowcase />;
}

function RoadmapSection() {
  return (
    <section className="section section-roadmap" id="roadmap">
      <div className="shell">
        <div className="section-intro roadmap-intro">
          <div>
            <span className="kicker">03 / PRODUCT DIRECTION</span>
            <h2>Built in public.<br /><em>Driven by operations.</em></h2>
          </div>
          <p>Each release moves RustPing toward a more complete control surface for modern infrastructure teams.</p>
        </div>
        <div className="roadmap-list">
          {roadmap.map(([number, title, status]) => (
            <div className="roadmap-item" key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <i className={status === "Released" ? "released" : status === "In development" ? "development" : ""}>{status}</i>
              <ArrowRight size={16} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SetupSection() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="section section-setup" id="setup">
      <div className="shell setup-layout">
        <div>
          <span className="kicker">04 / DEPLOYMENT</span>
          <h2>From zero to signal<br />in three steps.</h2>
          <div className="steps">
            <div><span>01</span><p><strong>Build</strong>Compile an optimized release with Cargo.</p></div>
            <div><span>02</span><p><strong>Launch</strong>Start the RustPing service locally.</p></div>
            <div><span>03</span><p><strong>Observe</strong>Open the dashboard and add your targets.</p></div>
          </div>
        </div>
        <div className="setup-terminal">
          <div className="terminal-top"><span><i /><i /><i /></span><b>QUICK START</b></div>
          <div className="terminal-body">
            <span className="prompt">rustping@node:~$</span>
            <code>{installCommand}</code>
            <button onClick={copy}>{copied ? <Check size={15} /> : <Copy size={15} />} {copied ? "Copied" : "Copy command"}</button>
          </div>
          <div className="terminal-output">
            <span>✓ release build complete</span>
            <span>✓ dashboard ready at 127.0.0.1:8000</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section section-faq">
      <div className="shell">
        <span className="kicker">05 / KNOWLEDGE BASE</span>
        <h2>Common questions.</h2>
        <div className="faq-list">
          {faqs.map(([q, a], index) => (
            <div className={`faq-item ${open === index ? "open" : ""}`} key={q}>
              <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
                <span>0{index + 1}</span><strong>{q}</strong><ChevronDown size={18} />
              </button>
              <div><p>{a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <>
      <section className="final-cta">
        <div className="shell">
          <span>READY TO SEE CLEARLY?</span>
          <h2>Put your network<br />on speaking terms.</h2>
          <a className="button button-light" href="#setup">Deploy RustPing <ArrowRight size={17} /></a>
        </div>
      </section>
      <footer>
        <div className="shell footer-main">
          <div><Brand /><p>Precise, self-hosted infrastructure monitoring powered by Rust.</p></div>
          <div className="footer-links">
            <a href="#system">System</a><a href="#interface">Interface</a><a href="#setup">Setup</a><Link to="/license">License</Link>
          </div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} RustPing</span><span>BUILT FOR SIGNAL, NOT NOISE.</span></div>
      </footer>
    </>
  );
}

export default function Index() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <SystemSection />
        <InterfaceSection />
        <RoadmapSection />
        <SetupSection />
        <FaqSection />
        <Footer />
      </main>
    </div>
  );
}
