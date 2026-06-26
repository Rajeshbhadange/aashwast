import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - AASHWAST</title>
        <meta name="description" content="Get in touch with AASHWAST. Contact us for media monitoring, event management, media consultancy, and business strategy services." />
      </Helmet>

      <Header />

      <section className="py-20 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your vision into reality? Get in touch with our team today
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-8 text-[#0F172A]">Send us a message</h2>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-8 text-[#0F172A]">Contact Information</h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#0D9488]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-[#0F172A]">Phone</p>
                    <p className="text-[#0F172A]/70">+91 90498 24666</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0D9488]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-[#0F172A]">Email</p>
                    <p className="text-[#0F172A]/70">aashwastepl@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0D9488]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-[#0F172A]">Office Address</p>
                    <p className="text-[#0F172A]/70">
                      Abhalmaya, Behind Godvari Chakki, Vyanktesh colony,<br />
                      Yashwant Nagar, Jalgaon, Maharashtra 425002<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0D9488]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#0D9488]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-[#0F172A]">Business Hours</p>
                    <p className="text-[#0F172A]/70">
                      24/7 Support Available
                      {/* Monday - Saturday: 9:00 AM - 6:00 PM<br /> */}
                      {/* Saturday: 10:00 AM - 2:00 PM<br /> */}
                      {/* Sunday: Closed */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-[#0F172A]">Office Location</h3>
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=20.991452,75.5530432&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Office Location Map"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;