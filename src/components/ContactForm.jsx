import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...data,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      
      toast.success('Message sent successfully', {
        style: { background: '#0D9488', color: 'white', border: 'none' }
      });
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        style: { background: '#EF4444', color: 'white', border: 'none' }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "mt-2 bg-[#F8FAFC] border-[#0D9488]/30 focus-visible:ring-[#2563EB] focus-visible:border-[#2563EB] text-[#0F172A] placeholder:text-[#0F172A]/40 transition-colors";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-[#0F172A] font-medium">Full Name *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Maya Chen"
            className={inputClasses}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="email" className="text-[#0F172A] font-medium">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="maya@example.com"
            className={inputClasses}
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone" className="text-[#0F172A] font-medium">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            className={inputClasses}
            {...register('phone')}
          />
        </div>
        
        <div>
          <Label htmlFor="serviceType" className="text-[#0F172A] font-medium">Service Type *</Label>
          <Select onValueChange={(value) => setValue('serviceType', value)}>
            <SelectTrigger className={inputClasses}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="media-monitoring">Media Monitoring</SelectItem>
              <SelectItem value="event-management">Event Management</SelectItem>
              <SelectItem value="media-consultancy">Media Consultancy</SelectItem>
              <SelectItem value="business-strategy">Business Strategy</SelectItem>
            </SelectContent>
          </Select>
          {errors.serviceType && (
            <p className="text-sm text-destructive mt-1">{errors.serviceType.message}</p>
          )}
        </div>
      </div>
      
      <div>
        <Label htmlFor="message" className="text-[#0F172A] font-medium">Message *</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          rows={6}
          className={inputClasses}
          {...register('message', { 
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters'
            }
          })}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        size="lg"
        disabled={isSubmitting}
        className="w-full md:w-auto bg-[#2563EB] text-white hover:bg-[#2563EB]/90 transition-all duration-200 active:scale-[0.98] shadow-sm"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;