import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, MessageCircle, Award, Users, TrendingUp } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const coreValues = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We pursue the highest standards in everything we do, never settling for mediocrity.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of partnership and work closely with our clients to achieve shared success.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We embrace new ideas and technologies to deliver cutting-edge solutions.'
  },
  {
    icon: Target,
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and ethical principles in all our engagements.'
  },
  {
    icon: MessageCircle,
    title: 'Communication',
    description: 'We maintain open, clear, and timely communication with all stakeholders.'
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'We think long-term and help our clients build sustainable competitive advantages.'
  }
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - AASHWAST</title>
        <meta name="description" content="Learn about AASHWAST's vision, mission, values, and our commitment to transforming businesses through strategic thinking and flawless execution." />
      </Helmet>

      <Header />

      <section className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[#0560a1] mb-6">About Aashwast</h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Transforming visions into impactful realities through strategic thinking and exceptional execution
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#0D9488]/10 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-[#0D9488]" />
                </div>
                <h2 className="text-[#0F172A]">Our Vision</h2>
              </div>
              <p className="text-lg text-[#0F172A]/70 leading-relaxed">
               To inspire growth and transformation by combining creativity, strategic thinking, and excellence in execution, empowering individuals, organizations, and businesses to achieve sustainable success and meaningful impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#0D9488]/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-[#0D9488]" />
                </div>
                <h2 className="text-[#0F172A]">Our Mission</h2>
              </div>
              <p className="text-lg text-[#0F172A]/70 leading-relaxed">
                To provide end-to-end solutions in online and offline events, strategic marketing, social media content, consultation, and professional development. We are committed to building strong brands, creating memorable experiences, and developing capable professionals with leadership and managerial excellence.
              </p>
            </motion.div>
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
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0D9488]/10 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-[#0D9488]" />
              </div>
              <h2 className="text-[#0F172A]">Our Brand Message</h2>
            </div>
            <p className="text-xl text-[#0F172A] max-w-4xl mx-auto leading-relaxed mb-8">
              Giving direction to ideas, strength to strategy, and success to execution. We don't just deliver services—we create impact.
            </p>
            {/* <p className="text-2xl md:text-3xl font-semibold text-[#0D9488]" style={{ fontFamily: 'Playfair Display, serif' }}>
              We Think. We Create. We Execute.
            </p> */}
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
            className="mb-16"
          >
            <h2 className="mb-6 text-[#0F172A]">Our Story</h2>
            <div className="space-y-6 text-lg text-[#0F172A]/70 leading-relaxed max-w-4xl">
              <p>
                Founded and led by women, our organization is built on the belief that great ideas deserve great execution. By blending creativity, strategy, and management expertise, we help businesses and organizations bring their vision to life.
              </p>
              <p>
               From event planning and digital marketing to consultation and leadership development, we work as trusted partners in creating meaningful experiences, stronger teams, and lasting success.
              </p>
            </div>
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
            <h2 className="mb-4 text-[#0F172A]">Our Core Values</h2>
            <p className="text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#ebf8ff] rounded-2xl p-8 shadow-sm hover:shadow-md border border-gray-100 transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0D9488]/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-[#0D9488]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#0F172A]">{value.title}</h3>
                <p className="text-[#0F172A]/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-6 text-[#0F172A]">Our Team</h2>
            <p className="text-lg text-[#0F172A]/70 max-w-3xl mx-auto leading-relaxed mb-8">
              AASHWAST is powered by a diverse team of professionals with deep expertise in media, communications, event management, and business strategy. Our team members bring decades of combined experience from leading organizations across industries.
            </p>
            <p className="text-lg text-[#0F172A]/70 max-w-3xl mx-auto leading-relaxed">
              We believe in continuous learning and professional development, ensuring our team stays at the forefront of industry trends and best practices. This commitment to excellence enables us to deliver innovative solutions that drive real business impact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Join us on this journey</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's work together to turn your vision into impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild
                className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 hover:from-amber-600 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;