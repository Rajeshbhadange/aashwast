import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#f5f5f5]/95 backdrop-blur-md shadow-sm border-b border-gray-200/50' 
          : 'bg-[#f5f5f5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
          <Link to="/" className="logo-link logo-container logo-hover-scale logo-glow logo-animation">
            <img 
              src="https://horizons-cdn.hostinger.com/9f69b16c-5d81-4987-8690-e98de4801667/419d213ed223bb0eba9c636a1a6502fe.png" 
              alt="AASHWAST Enterprises Private Limited - Blue shield with hands holding globe icon"
              className="logo-image h-[40px] md:h-[60px] lg:h-[80px]"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 relative pb-1.5 px-2 py-1 rounded-t-md ${
                  location.pathname === link.path
                    ? 'text-[#2563EB]'
                    : 'text-[#0F172A] hover:text-[#2563EB] hover:bg-[#F8FAFC]'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2563EB] rounded-t-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90 transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow-md"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-[#0F172A] hover:bg-[#F8FAFC]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[#f5f5f5] text-[#0F172A] border-l border-gray-200">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors p-2 rounded-md ${
                      location.pathname === link.path
                        ? 'text-[#2563EB] bg-[#2563EB]/5'
                        : 'text-[#0F172A] hover:text-[#2563EB] hover:bg-[#F8FAFC]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button 
                  asChild
                  className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90 mt-4 shadow-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;