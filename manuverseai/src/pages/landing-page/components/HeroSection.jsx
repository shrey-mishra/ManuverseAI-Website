import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Globe3D from '../../../components/Globe3D';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const holographicElements = [
    { icon: 'Cpu', delay: 0.2, position: 'top-20 left-20' },
    { icon: 'Cog', delay: 0.4, position: 'top-32 right-24' },
    { icon: 'Zap', delay: 0.6, position: 'bottom-32 left-32' },
    { icon: 'TrendingUp', delay: 0.8, position: 'bottom-20 right-20' },
  ];

  const techIntegrations = [
    { name: 'MES', icon: 'Settings' },
    { name: 'IoT', icon: 'Wifi' },
    { name: 'ERP', icon: 'Database' },
    { name: 'AI', icon: 'Brain' },
    { name: 'Computer Vision', icon: 'Eye' }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-industrial overflow-hidden flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>
      {/* 3D Holographic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {holographicElements?.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element?.position} w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30`}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={isVisible ? { 
              opacity: [0, 1, 0.7, 1], 
              scale: [0, 1.2, 1], 
              rotate: [0, 360] 
            } : {}}
            transition={{ 
              duration: 2, 
              delay: element?.delay,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <Icon name={element?.icon} size={24} className="text-primary" />
          </motion.div>
        ))}
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Made in India Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2"
            >
              <Icon name="Flag" size={16} className="text-primary" />
              <span className="text-primary font-medium text-sm">Made in India • Indigenous AI Technology</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              <span className="text-gradient-cyan">All Technologies. One Intelligence.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Empower your business with unified, AI-driven predictive decision intelligence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="default"
                size="lg"
                className="font-cta font-semibold shadow-cta bg-gradient-cyan text-primary-foreground hover:shadow-glow-strong"
                iconName="Calendar"
                iconPosition="left"
              >
                Book a Free Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-cta font-semibold border-primary text-primary hover:bg-primary/10"
                iconName="Play"
                iconPosition="left"
              >
                Experience ManuVerseAI
              </Button>
            </motion.div>

            {/* Technology Integration Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="pt-8 border-t border-border"
            >
              <div className="flex flex-wrap items-center gap-6">
                {techIntegrations?.map((tech, index) => (
                  <motion.div
                    key={tech?.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    className="flex items-center space-x-2 bg-muted/30 rounded-lg px-3 py-2"
                  >
                    <Icon name={tech?.icon} size={20} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">{tech?.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Wireframe Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex items-center justify-center"
          >
                         <Globe3D className="w-[500px] h-[500px]" />
            
            {/* Floating automation indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Global automation stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-2"
              >
                <div className="flex items-center space-x-2">
                  <Icon name="Globe" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">Global Automation Network</span>
                </div>
              </motion.div>
              
              {/* AI nodes indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-2"
              >
                <div className="flex items-center space-x-2">
                  <Icon name="Cpu" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">12 AI Hubs Active</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-muted-foreground"
        >
          <span className="text-sm">Discover More</span>
          <Icon name="ChevronDown" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;