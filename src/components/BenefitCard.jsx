import React from 'react';
import { motion } from 'framer-motion';

const BenefitCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#ebf8ff] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#2563EB]/30 border border-transparent transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-[#02283d]/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#02283d]" />
      </div>
      <h4 className="text-lg font-semibold mb-2 text-[#0F172A]">{title}</h4>
      <p className="text-[#0F172A]/70 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default BenefitCard;