import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard.jsx';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1575029645377-046ad56539ee',
    title: 'National Brand Campaign',
    description: 'Comprehensive media monitoring and analysis for a nationwide product launch',
    category: 'Media Monitoring'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1702389159527-39270023a337',
    title: 'Corporate Summit 2025',
    description: 'End-to-end event management for 500+ attendees with international speakers',
    category: 'Event Management'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1676279168652-90cb5e7c4af7',
    title: 'Crisis Communication Strategy',
    description: 'Strategic media consultancy during critical business transition period',
    category: 'Media Consultancy'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1701492126986-3ad296041f9d',
    title: 'Market Expansion Plan',
    description: 'Business strategy development for entering three new regional markets',
    category: 'Business Strategy'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093',
    title: 'Social Media Sentiment Analysis',
    description: 'Real-time monitoring and reporting of brand perception across platforms',
    category: 'Media Monitoring'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1629787155650-9ce3697dcb38',
    title: 'Product Launch Event',
    description: 'Multi-city launch events with coordinated media coverage',
    category: 'Event Management'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1575029645377-046ad56539ee',
    title: 'Reputation Management',
    description: 'Ongoing media relations and brand positioning consultancy',
    category: 'Media Consultancy'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1702389159527-39270023a337',
    title: 'Digital Transformation',
    description: 'Strategic planning for technology adoption and process optimization',
    category: 'Business Strategy'
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1676279168652-90cb5e7c4af7',
    title: 'Industry Conference',
    description: 'Annual conference planning with 1000+ participants and 50+ sessions',
    category: 'Event Management'
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1701492126986-3ad296041f9d',
    title: 'Competitive Intelligence',
    description: 'Market analysis and competitor monitoring across digital channels',
    category: 'Media Monitoring'
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093',
    title: 'Stakeholder Engagement',
    description: 'Strategic communication planning for investor and partner relations',
    category: 'Media Consultancy'
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1629787155650-9ce3697dcb38',
    title: 'Growth Strategy',
    description: 'Five-year business plan development with market analysis',
    category: 'Business Strategy'
  }
];

const categories = ['All', 'Media Monitoring', 'Event Management', 'Media Consultancy', 'Business Strategy'];

const ProjectGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category)}
            className={`transition-all duration-200 ${
              activeCategory === category 
                ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' 
                : 'hover:bg-muted'
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard {...project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectGallery;