import React from 'react';
import TestimonialCard from '@/components/TestimonialCard.jsx';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    title: 'CEO, TechVentures India',
    review: 'AASHWAST transformed our media strategy completely. Their monitoring services helped us stay ahead of market trends and respond to opportunities in real-time.',
    rating: 5,
    avatar: ''
  },
  {
    id: 2,
    name: 'Raj Malhotra',
    title: 'Marketing Director, Coastal Brands',
    review: 'The event management team exceeded all expectations. Our product launch was flawless, and the media coverage was exceptional.',
    rating: 5,
    avatar: ''
  },
  {
    id: 3,
    name: 'Anika Desai',
    title: 'Founder, Meridian Consulting',
    review: 'Their business strategy insights were invaluable during our expansion phase. The team truly understands market dynamics.',
    rating: 5,
    avatar: ''
  },
  {
    id: 4,
    name: 'Vikram Patel',
    title: 'Communications Head, Global Finance Corp',
    review: 'Professional, responsive, and results-driven. AASHWAST has become our trusted partner for all media-related initiatives.',
    rating: 5,
    avatar: ''
  },
  {
    id: 5,
    name: 'Meera Kapoor',
    title: 'Brand Manager, Lifestyle Retail',
    review: 'The media consultancy services helped us navigate a challenging period with grace. Their strategic advice was spot-on.',
    rating: 5,
    avatar: ''
  },
  {
    id: 6,
    name: 'Arjun Singh',
    title: 'VP Operations, Manufacturing Solutions',
    review: 'From concept to execution, AASHWAST delivered excellence. Their attention to detail and commitment to quality is unmatched.',
    rating: 5,
    avatar: ''
  }
];

const TestimonialCarousel = () => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </div>
  );
};

export default TestimonialCarousel;