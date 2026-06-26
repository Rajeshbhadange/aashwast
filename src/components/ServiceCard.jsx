import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-[#ebf8ff] shadow-sm hover:shadow-md hover:border-[#2563EB]/30 transition-all duration-300 border-border/50">
        <CardHeader>
          <div className="w-14 h-14 rounded-xl bg-[#0D9488]/10 flex items-center justify-center mb-4">
            <Icon className="w-7 h-7 text-[#0D9488]" />
          </div>
          <CardTitle className="text-xl font-semibold text-[#0F172A]">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <CardDescription className="text-base leading-relaxed text-[#0F172A]/70">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button 
            variant="ghost" 
            className="group px-0 text-[#2563EB] hover:text-[#2563EB]/80 hover:bg-transparent"
            asChild
          >
            <a href={link}>
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;