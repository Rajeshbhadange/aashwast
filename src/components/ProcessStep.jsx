import React from 'react';
import { motion } from 'framer-motion';

const ProcessStep = ({ icon: Icon, title, description, index, isLast }) => {
  return (
    <div className="flex flex-col items-center relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.15 }}
        className="relative z-10"
      >
        <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center shadow-lg mb-4">
          <Icon className="w-10 h-10 text-secondary-foreground" />
        </div>
      </motion.div>
      
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border -z-0" 
             style={{ transform: 'translateX(50%)' }} />
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        className="text-center"
      >
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground max-w-[200px]">{description}</p>
      </motion.div>
    </div>
  );
};

export default ProcessStep;