import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ image, title, description, category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden bg-[#F8FAFC] shadow-sm hover:shadow-md hover:border-[#2563EB]/30 transition-all duration-300 border-transparent">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-[#0D9488] text-white hover:bg-[#0D9488]/90">
              {category}
            </Badge>
          </div>
        </div>
        <CardContent className="flex-1 p-6">
          <h3 className="text-xl font-semibold mb-2 text-[#0F172A]">{title}</h3>
          <p className="text-[#0F172A]/70 leading-relaxed">{description}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button variant="outline" className="w-full group border-[#2563EB]/20 text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-colors">
            View Details
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;