import React from 'react';
import { Lightbulb, Sparkles, Target, ClipboardList, Rocket, Trophy } from 'lucide-react';
import ProcessStep from '@/components/ProcessStep.jsx';

const steps = [
  {
    icon: Lightbulb,
    title: 'Think',
    description: 'Deep analysis of your needs and objectives'
  },
  {
    icon: Sparkles,
    title: 'Conceptualize',
    description: 'Creative ideation and solution design'
  },
  {
    icon: Target,
    title: 'Strategize',
    description: 'Develop comprehensive action plans'
  },
  {
    icon: ClipboardList,
    title: 'Plan',
    description: 'Detailed roadmap and resource allocation'
  },
  {
    icon: Rocket,
    title: 'Execute',
    description: 'Flawless implementation with precision'
  },
  {
    icon: Trophy,
    title: 'Deliver Results',
    description: 'Measurable outcomes and success metrics'
  }
];

const AnimatedTimeline = () => {
  return (
   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50 p-8 rounded-3xl shadow-lg">
  {steps.map((step, index) => (
    <ProcessStep
      key={index}
      icon={step.icon}
      title={step.title}
      description={step.description}
      index={index}
      isLast={index === steps.length - 1}
    />
  ))}
</div>
  );
};

export default AnimatedTimeline;