import React, { useState, useEffect, useRef } from 'react';
import CountUpModule from 'react-countup';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

const CountUp = CountUpModule.default || CountUpModule;

const StatCounter = ({ end, suffix = '', label, icon: Icon = Circle, duration = 2.5 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const currentRef = ref.current;

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
        {Icon && <Icon className="w-8 h-8 text-secondary" />}
      </div>

      <div className="text-4xl md:text-4xl font-bold text-white mb-2">
        {isVisible ? (
          <CountUp end={end} duration={duration} suffix={suffix} />
        ) : (
          '0'
        )}
      </div>

      <p className="text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
};

export default StatCounter;
