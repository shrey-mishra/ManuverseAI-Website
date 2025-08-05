import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SolutionShowcase = () => {
  const [activeCard, setActiveCard] = useState(null);

  const aiCapabilities = [
    {
      id: 'predictive-maintenance',
      icon: 'Wrench',
      title: 'Predictive Maintenance',
      description: 'AI-powered equipment monitoring prevents failures before they happen',
      features: [
        'Real-time equipment health monitoring',
        'Failure prediction with 95% accuracy',
        'Automated maintenance scheduling',
        'Reduce downtime by 70%'
      ],
      color: 'from-blue-500 to-cyan-500',
      stats: '70% Less Downtime'
    },
    {
      id: 'quality-optimization',
      icon: 'CheckCircle',
      title: 'Quality Optimization',
      description: 'Intelligent quality control with real-time defect detection and prevention',
      features: [
        'Computer vision quality inspection',
        'Real-time defect pattern analysis',
        'Automated quality adjustments',
        'Improve first-pass yield by 40%'
      ],
      color: 'from-green-500 to-emerald-500',
      stats: '40% Better Quality'
    },
    {
      id: 'supply-chain',
      icon: 'Truck',
      title: 'Supply Chain Intelligence',
      description: 'Optimize inventory, demand forecasting, and supplier management',
      features: [
        'Demand forecasting with ML',
        'Inventory optimization',
        'Supplier risk assessment',
        'Reduce inventory costs by 25%'
      ],
      color: 'from-purple-500 to-violet-500',
      stats: '25% Cost Reduction'
    },
    {
      id: 'real-time-analytics',
      icon: 'BarChart3',
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards with actionable insights for instant decisions',
      features: [
        'Live production monitoring',
        'KPI tracking and alerts',
        'Predictive analytics',
        'Make decisions 90% faster'
      ],
      color: 'from-orange-500 to-red-500',
      stats: '90% Faster Decisions'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Unified AI{' '}
            <span className="text-gradient-cyan">Intelligence Platform</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Transform your manufacturing operations with our comprehensive AI capabilities. Hover over each card to explore detailed features.
          </motion.p>
        </div>

        {/* 3D Floating Cards */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {aiCapabilities?.map((capability, index) => (
              <motion.div
                key={capability?.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveCard(capability?.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="relative bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${capability?.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${capability?.color} rounded-2xl flex items-center justify-center shadow-glow`}>
                        <Icon name={capability?.icon} size={28} color="white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{capability?.stats}</div>
                        <div className="text-sm text-muted-foreground">Average Improvement</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3">{capability?.title}</h3>
                    <p className="text-muted-foreground mb-6">{capability?.description}</p>

                    {/* Features List */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: activeCard === capability?.id ? 'auto' : 0,
                        opacity: activeCard === capability?.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 pt-4 border-t border-border">
                        {capability?.features?.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: activeCard === capability?.id ? 1 : 0,
                              x: activeCard === capability?.id ? 0 : -20
                            }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Hover Indicator */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeCard === capability?.id ? 0 : 1 }}
                      className="flex items-center space-x-2 text-primary mt-4"
                    >
                      <span className="text-sm font-medium">Hover to explore features</span>
                      <Icon name="MousePointer" size={16} />
                    </motion.div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Icon name={capability?.icon} size={120} className="text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Connection Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"
          >
            <div className="w-24 h-24 bg-gradient-cyan rounded-full flex items-center justify-center shadow-glow border-4 border-background">
              <Icon name="Zap" size={32} color="#0A1628" />
            </div>
            
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              <path
                d="M 192 192 L 100 100"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <path
                d="M 192 192 L 284 100"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <path
                d="M 192 192 L 100 284"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <path
                d="M 192 192 L 284 284"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              See These Capabilities in Action
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a personalized demo to see how ManuVerseAI can transform your specific manufacturing challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-cyan text-primary-foreground rounded-lg font-semibold shadow-cta hover:shadow-glow-strong transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="Play" size={20} />
                <span>Watch Demo Video</span>
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="Calendar" size={20} />
                <span>Schedule Live Demo</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionShowcase;