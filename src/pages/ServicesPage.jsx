import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Monitor, Calendar, MessageSquare, TrendingUp, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  // {
  //   id: 'media-monitoring',
  //   icon: Monitor,
  //   title: 'Media Monitoring',
  //   description: 'Stay informed with comprehensive tracking and analysis of your media presence across all channels.',
  //   subsections: [
  //     {
  //       title: 'News Monitoring',
  //       description: 'Real-time tracking of print, digital, and broadcast news mentions with detailed analytics.'
  //     },
  //     {
  //       title: 'Social Media Monitoring',
  //       description: 'Track brand mentions, sentiment, and engagement across all major social platforms.'
  //     },
  //     {
  //       title: 'Brand Reputation Tracking',
  //       description: 'Monitor and analyze your brand perception with actionable insights.'
  //     },
  //     {
  //       title: 'Media Analysis Reports',
  //       description: 'Comprehensive reports with trends, insights, and strategic recommendations.'
  //     },
  //     {
  //       title: 'Sentiment Analysis',
  //       description: 'Advanced AI-powered analysis of public sentiment towards your brand.'
  //     }
  //   ],
  //   benefits: [
  //     'Real-time alerts and notifications',
  //     'Comprehensive coverage across all media types',
  //     'Detailed analytics and reporting',
  //     'Competitive intelligence insights',
  //     'Crisis detection and early warning'
  //   ]
  // },
  {
    id: 'event-management',
    icon: Calendar,
    title: 'Event Management',
    description: 'Flawless execution of corporate events, conferences, and product launches from concept to completion.',
    subsections: [
      {
        title: 'Corporate Events',
        description: 'Professional planning and execution of corporate gatherings, team building, and celebrations.'
      },
      {
        title: 'Conferences & Summits',
        description: 'Large-scale event management with speaker coordination, logistics, and attendee experience.'
      },
      {
        title: 'Product Launches',
        description: 'Strategic launch events that create buzz and drive media coverage.'
      },
      {
        title: 'Virtual & Hybrid Events',
        description: 'Seamless integration of in-person and virtual experiences.'
      },
      {
        title: 'Event Marketing',
        description: 'Comprehensive promotion and attendee engagement strategies.'
      }
    ],
    benefits: [
      'End-to-end event planning and execution',
      'Vendor management and coordination',
      'Budget optimization',
      'On-site event management',
      'Post-event analysis and reporting'
    ]
  },
  {
    id: 'media-consultancy',
    icon: MessageSquare,
    title: 'Media Consultancy',
    description: 'Strategic guidance on media relations, crisis communication, and brand positioning.',
    subsections: [
      {
        title: 'Media Relations Strategy',
        description: 'Build and maintain strong relationships with key media stakeholders.'
      },
      {
        title: 'Crisis Communication',
        description: 'Rapid response and strategic messaging during challenging situations.'
      },
      {
        title: 'Brand Positioning',
        description: 'Develop and communicate your unique value proposition effectively.'
      },
      {
        title: 'Spokesperson Training',
        description: 'Prepare executives for media interactions and public speaking.'
      },
      {
        title: 'Content Strategy',
        description: 'Create compelling narratives that resonate with your target audience.'
      }
    ],
    benefits: [
      'Expert media relations guidance',
      'Crisis preparedness and response',
      'Enhanced brand visibility',
      'Thought leadership development',
      'Strategic messaging frameworks'
    ]
  },
  {
    id: 'business-strategy',
    icon: TrendingUp,
    title: 'Business Strategy',
    description: 'Data-driven strategic planning and market analysis to drive growth and competitive advantage.',
    subsections: [
      {
        title: 'Market Analysis',
        description: 'In-depth research and analysis of market trends, opportunities, and threats.'
      },
      {
        title: 'Competitive Intelligence',
        description: 'Monitor and analyze competitor activities and market positioning.'
      },
      {
        title: 'Growth Strategy',
        description: 'Develop actionable plans for sustainable business expansion.'
      },
      {
        title: 'Digital Transformation',
        description: 'Strategic guidance on technology adoption and process optimization.'
      },
      {
        title: 'Stakeholder Engagement',
        description: 'Build and maintain relationships with key business stakeholders.'
      }
    ],
    benefits: [
      'Data-driven decision making',
      'Market opportunity identification',
      'Competitive advantage development',
      'Strategic roadmap creation',
      'Performance measurement and optimization'
    ]
  }
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - AASHWAST</title>
        <meta name="description" content="Explore AASHWAST's comprehensive services including media monitoring, event management, media consultancy, and business strategy solutions." />
      </Helmet>

      <Header />

      <section className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-black mb-6">Our Services</h1>
            <p className="text-xl text-[#A9A9A9] max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to help your business thrive in today's dynamic landscape
            </p>
          </motion.div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={index % 2 === 0 ? 'py-24 bg-white' : 'py-24 bg-[#F8FAFC]'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#0D9488]/10 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-[#0D9488]" />
                </div>
                <h2 className="text-[#0F172A]">{service.title}</h2>
              </div>
              <p className="text-lg text-[#0F172A]/70 mb-12 max-w-3xl">
                {service.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-[#0F172A]">What We Offer</h3>
                  <div className="space-y-6">
                    {service.subsections.map((subsection, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="bg-[#ebf8ff] border border-gray-100 rounded-xl p-6 shadow-sm"
                      >
                        <h4 className="text-lg font-semibold mb-2 text-[#0F172A]">{subsection.title}</h4>
                        <p className="text-[#0F172A]/70">{subsection.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-[#0F172A]">Key Benefits</h3>
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md">
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-6 h-6 text-[#0D9488] flex-shrink-0 mt-0.5" />
                          <span className="text-[#0F172A]">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Button
                      size="lg"
                      asChild
                      className="w-full mt-8 bg-[#2563EB] text-white hover:bg-[#2563EB]/90"
                    >
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Ready to get started?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 hover:from-amber-600 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;