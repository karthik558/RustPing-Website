import React from 'react';
import { CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoadmapItemProps {
  number: string;
  title: string;
  description: string;
  status: 'complete' | 'upcoming' | 'planned';
}

const statusMap = {
  complete: {
    icon: CheckCircle2,
    chip: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    label: 'RELEASED',
  },
  upcoming: {
    icon: Clock,
    chip: 'text-[#e04922] bg-[#e04922]/10 border-[#e04922]/30',
    label: 'IN DEVELOPMENT',
  },
  planned: {
    icon: Calendar,
    chip: 'text-slate-400 bg-[#181820] border-[#252530]',
    label: 'PLANNED',
  },
};

const RoadmapItem = ({ number, title, description, status }: RoadmapItemProps) => {
  const { icon: Icon, chip, label } = statusMap[status];
  
  return (
    <div className="p-6 rounded-2xl bg-[#111115] border border-[#1f1f26] hover:border-[#e04922]/40 transition-all flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="font-mono text-xs font-bold text-[#e04922] px-2.5 py-1 rounded bg-[#e04922]/10 border border-[#e04922]/20">
            {number}
          </span>
          <span className={cn("text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border tracking-wider", chip)}>
            {label}
          </span>
        </div>

        <h3 className="font-bold text-white text-lg mb-2 group-hover:text-[#e04922] transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-400 text-xs leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-[#1f1f26] flex items-center gap-2 text-[11px] font-mono text-slate-500">
        <Icon size={13} className={status === 'complete' ? 'text-emerald-400' : status === 'upcoming' ? 'text-[#e04922]' : 'text-slate-500'} />
        <span>Status: {status.toUpperCase()}</span>
      </div>
    </div>
  );
};

const RoadmapSection = () => {
  const roadmapItems = [
    {
      number: '01',
      title: 'Real-time Async ICMP Engine',
      description: 'Tokio-powered async probing for ultra-low latency status checks across subnets.',
      status: 'complete' as const,
    },
    {
      number: '02',
      title: 'Interactive Log Export System',
      description: 'Filter logs by IP/date ranges and export directly in CSV, TXT, or JSON formats.',
      status: 'complete' as const,
    },
    {
      number: '03',
      title: 'Role-Based Authentication (RBAC)',
      description: 'Multi-user login with encrypted session tokens and permission access control.',
      status: 'upcoming' as const,
    },
    {
      number: '04',
      title: 'GUI Subnet & Device Manager',
      description: 'Add, edit, and organize network devices directly through the Web UI without editing JSON.',
      status: 'upcoming' as const,
    },
    {
      number: '05',
      title: 'TCP & UDP Port Checking',
      description: 'Expanded protocol support for custom service ports, database engines, and game servers.',
      status: 'planned' as const,
    },
    {
      number: '06',
      title: 'Automated Telegram & Webhook Alerts',
      description: 'Instant notifications dispatched when monitored subnets or devices change state.',
      status: 'planned' as const,
    },
  ];

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-14 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16161c] border border-[#252530] text-[#e04922] text-xs font-mono font-semibold tracking-wide mb-4">
          <span>// PRODUCT EVOLUTION</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
          Strategic evolution,
          <span className="block text-[#e04922] mt-1">
            built for scale.
          </span>
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmapItems.map((item) => (
          <RoadmapItem
            key={item.number}
            number={item.number}
            title={item.title}
            description={item.description}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
};

export default RoadmapSection;
