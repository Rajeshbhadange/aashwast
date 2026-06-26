import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialCard = ({ avatar, name, title, review, rating }) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <Card className="bg-card shadow-md hover:shadow-lg transition-shadow duration-300 break-inside-avoid mb-6">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'fill-accent text-accent' : 'text-muted'
              }`}
            />
          ))}
        </div>
        <p className="text-foreground leading-relaxed mb-6 italic">
          "{review}"
        </p>
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 rounded-xl">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="rounded-xl bg-secondary/20 text-secondary font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;