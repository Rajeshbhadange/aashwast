import React from 'react';
import { Briefcase, Users, Calendar, Award } from 'lucide-react';
import StatCounter from '@/components/StatCounter.jsx';

const StatisticsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <StatCounter
        end={500}
        suffix="+"
        label="Projects Completed"
        icon={Briefcase}
      />
      <StatCounter
        end={50}
        suffix="+"
        label="Happy Clients"
        icon={Users}
      />
      <StatCounter
        end={15}
        suffix="+"
        label="Years Experience"
        icon={Calendar}
      />
      <StatCounter
        end={100}
        suffix="%"
        label="Client Satisfaction"
        icon={Award}
      />
    </div>
  );
};

export default StatisticsSection;