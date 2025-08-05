import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { name: 'About Us', href: '/about', icon: 'Users' },
    { name: 'What We Do', href: '/services', icon: 'Cog' },
    { name: 'Solutions', href: '/solutions', icon: 'Zap' },
    { name: 'Industries', href: '/industries', icon: 'Factory' },
    { name: 'Contact', href: '/contact', icon: 'Mail' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-cyan rounded-lg flex items-center justify-center shadow-glow">
                  <Icon name="Zap" size={24} color="#0A1628" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground font-cta">ManuVerseAI</span>
                <span className="text-xs text-muted-foreground font-accent">Made in India</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <a
                key={item?.name}
                href={item?.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth group"
              >
                <Icon 
                  name={item?.icon} 
                  size={18} 
                  className="group-hover:text-primary transition-smooth" 
                />
                <span className="font-medium">{item?.name}</span>
              </a>
            ))}
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <div className="text-right">
                <div className="text-xs text-accent font-accent font-light">Limited Slots</div>
                <div className="text-sm text-muted-foreground">Book Today</div>
              </div>
              <Button 
                variant="default" 
                className="font-cta font-semibold shadow-cta hover:shadow-glow-strong bg-gradient-cyan text-primary-foreground"
                iconName="Calendar"
                iconPosition="left"
              >
                Book Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-slide-in">
            <div className="px-6 py-4 space-y-4">
              {navigationItems?.map((item) => (
                <a
                  key={item?.name}
                  href={item?.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-smooth py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-medium">{item?.name}</span>
                </a>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-sm text-accent font-accent font-light">Limited Demo Slots</div>
                    <div className="text-xs text-muted-foreground">Secure your consultation</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">90%</div>
                    <div className="text-xs text-muted-foreground">Faster Decisions</div>
                  </div>
                </div>
                <Button 
                  variant="default" 
                  fullWidth
                  className="font-cta font-semibold shadow-cta bg-gradient-cyan text-primary-foreground"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;