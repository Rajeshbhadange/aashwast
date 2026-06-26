import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Monitor, Calendar, MessageSquare, TrendingUp, Lightbulb, Target, Users, Zap, Network, Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import BenefitCard from '@/components/BenefitCard.jsx';
import AnimatedTimeline from '@/components/AnimatedTimeline.jsx';
import StatisticsSection from '@/components/StatisticsSection.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Monitor,
    title: 'Media Monitoring',
    description: 'Comprehensive tracking and analysis of media coverage across all channels to keep you informed and ahead of the curve.',
    link: '/services#media-monitoring'
  },
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'End-to-end planning and execution of corporate events, conferences, and product launches with meticulous attention to detail.',
    link: '/services#event-management'
  },
  {
    icon: MessageSquare,
    title: 'Media Consultancy',
    description: 'Strategic guidance on media relations, crisis communication, and brand positioning to enhance your public image.',
    link: '/services#media-consultancy'
  },
  {
    icon: TrendingUp,
    title: 'Business Strategy',
    description: 'Data-driven strategic planning and market analysis to drive growth and competitive advantage.',
    link: '/services#business-strategy'
  }
];

const benefits = [
  {
    icon: Lightbulb,
    title: 'Creative Thinking',
    description: 'Innovative solutions that challenge conventional approaches and deliver unique value.'
  },
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Methodical approach to achieving your objectives with measurable milestones.'
  },
  {
    icon: MessageSquare,
    title: 'Media Expertise',
    description: 'Deep understanding of media landscape and proven relationships with key stakeholders.'
  },
  {
    icon: Zap,
    title: 'Professional Execution',
    description: 'Flawless implementation with attention to every detail and deadline.'
  },
  {
    icon: Network,
    title: 'Industry Network',
    description: 'Extensive connections across media, business, and government sectors.'
  },
  {
    icon: Award,
    title: 'Result-Oriented Approach',
    description: 'Focus on delivering tangible outcomes that exceed expectations.'
  }
];

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>AASHWAST</title>
        <meta name="description" content="Transform your ideas into successful businesses with AASHWAST's comprehensive media monitoring, event management, consultancy, and business strategy services." />
      </Helmet>

      <Header />

      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1629787155650-9ce3697dcb38)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-[#0F172A]/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6">
              Turning Vision Into Impact
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              We transform innovative ideas into successful businesses through strategic thinking, creative execution, and unwavering commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90 transition-all duration-200 active:scale-[0.98]"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 hover:from-amber-600 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6 text-[#0F172A]">About AASHWAST</h2>
            <p className="text-xl text-[#0F172A]/70 max-w-3xl mx-auto leading-relaxed mb-8">
              We are a full-service consultancy specializing in media monitoring, event management, strategic communications, and business development. Our mission is to help organizations navigate complex challenges and seize opportunities with confidence.
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-[#0D9488]" style={{ fontFamily: 'Playfair Display, serif' }}>
              We Think. We Create. We Execute.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[#0F172A]">Our Process</h2>
            <p className="text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
              A systematic approach that ensures every project delivers exceptional results
            </p>
          </motion.div>
          <AnimatedTimeline />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[#0F172A]">Our Services</h2>
            <p className="text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your unique needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[#0F172A]">Why Choose AASHWAST</h2>
            <p className="text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
              What sets us apart in delivering exceptional value
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#011621] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-white">Our Impact</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </motion.div>
          <StatisticsSection />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-[#0F172A]">Get In Touch</h2>
            <p className="text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
              Ready to transform your vision into reality? Contact us today
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;