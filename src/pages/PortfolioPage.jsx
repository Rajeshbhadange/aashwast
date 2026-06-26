import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectGallery from '@/components/ProjectGallery.jsx';

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - AASHWAST</title>
        <meta name="description" content="Explore AASHWAST's portfolio of successful projects across media monitoring, event management, media consultancy, and business strategy." />
      </Helmet>

      <Header />

      <section className="py-20 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of successful projects that demonstrate our expertise and commitment to excellence
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-lg text-[#0F172A]/70 text-center max-w-3xl mx-auto leading-relaxed">
              Over the years, we have partnered with diverse organizations to deliver impactful solutions across media monitoring, event management, strategic communications, and business development. Each project represents our commitment to understanding client needs and delivering measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PortfolioPage;