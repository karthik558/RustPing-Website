
import React from 'react';
import { Check, Clock, AlertCircle, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoadmapItemProps {
  title: string;
  description: string;
  status: 'complete' | 'upcoming' | 'planned';
  index: number;
}

const statusMap = {
  complete: {
    icon: Check,
    chip: 'text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30',
    label: 'Complete',
    border: 'border-green-600 dark:border-green-500',
  },
  upcoming: {
    icon: Clock,
    chip: 'text-blue-700 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30',
    label: 'Upcoming',
    border: 'border-blue-600 dark:border-blue-500',
  },
  planned: {
    icon: Calendar,
    chip: 'text-purple-700 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/30',
    label: 'Planned',
    border: 'border-purple-600 dark:border-purple-500',
  },
};

const RoadmapItem = ({ title, description, status, index }: RoadmapItemProps) => {
  const { icon: Icon, chip, label, border } = statusMap[status];
  
  return (
    <div 
      className={cn(
        "border rounded-md p-4 opacity-0 animate-fade-in-up",
        status === 'complete' ? 'border-green-200 dark:border-green-800/50' : 
        status === 'upcoming' ? 'border-blue-200 dark:border-blue-800/50' : 
        'border-purple-200 dark:border-purple-800/50'
      )}
      style={{ animationDelay: `${100 + index * 100}ms` }}
    >
      <div className="flex items-start">
        <div className={cn(
          "flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 border-2",
          border
        )}>
          <Icon size={16} className={
            status === 'complete' ? 'text-green-600 dark:text-green-400' : 
            status === 'upcoming' ? 'text-blue-600 dark:text-blue-400' : 
            'text-purple-600 dark:text-purple-400'
          } />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="font-semibold">{title}</h3>
            <span className={cn("text-xs px-2 py-0.5 rounded-full", chip)}>{label}</span>
          </div>
          <p className="text-foreground/70 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const RoadmapSection = () => {
  const roadmapItems = [
    {
      title: 'User Authentication',
      description: 'Secure access with a login system and role-based permissions',
      status: 'upcoming' as const,
    },
    {
      title: 'Device Management',
      description: 'Add, remove, and edit devices directly from the dashboard',
      status: 'upcoming' as const,
    },
    {
      title: 'New Sensors (TCP, UDP)',
      description: 'Expand monitoring capabilities with additional protocols',
      status: 'planned' as const,
    },
    {
      title: 'Email/SMS Notifications',
      description: 'Get alerts for critical device status changes',
      status: 'planned' as const,
    },
    {
      title: 'Docker Support',
      description: 'Simplify deployment and portability with containerization',
      status: 'planned' as const,
    },
    {
      title: 'Mobile App',
      description: 'Monitor your network on the go with a dedicated mobile application',
      status: 'planned' as const,
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-secondary/50 dark:bg-secondary/20">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="feature-chip opacity-0 animate-fade-in">Development Roadmap</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 opacity-0 animate-fade-in animate-delay-100">
            What's Coming Next
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            We're constantly improving RustPing with new features and capabilities. Here's what's on our roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {roadmapItems.map((item, index) => (
            <RoadmapItem
              key={index}
              title={item.title}
              description={item.description}
              status={item.status}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
