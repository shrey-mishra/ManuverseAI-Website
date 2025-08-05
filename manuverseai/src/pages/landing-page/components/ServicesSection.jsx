import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'predictive-analytics',
      icon: 'TrendingUp',
      title: 'Predictive Analytics',
      description: 'Forecast potential issues and opportunities before they arise. Our AI models analyze patterns in your historical data to identify trends and predict future outcomes with remarkable accuracy.',
      features: [
        'Historical data pattern analysis',
        'Future outcome prediction',
        'Trend identification',
        'Risk assessment',
        'Opportunity forecasting'
      ],
      color: 'from-blue-500 to-cyan-500',
      stats: '95% Accuracy'
    },
    {
      id: 'agentic-ai',
      icon: 'Bot',
      title: 'Agentic AI',
      description: 'Enable your business systems to act autonomously based on real-time insights. Our intelligent agents can monitor operations, make decisions, and execute actions without human intervention.',
      features: [
        'Autonomous system monitoring',
        'Real-time decision making',
        'Automated action execution',
        'Intelligent workflow management',
        'Continuous learning and adaptation'
      ],
      color: 'from-purple-500 to-violet-500',
      stats: '70% Automation'
    },
    {
      id: 'llm-intelligence',
      icon: 'Brain',
      title: 'LLM-Powered Intelligence',
      description: 'Drive smarter decisions with India-specific large language models. Our LLMs understand industry-specific terminology and regional context to provide insights that are relevant to your business environment.',
      features: [
        'India-specific language models',
        'Industry terminology understanding',
        'Regional context awareness',
        'Business environment insights',
        'Multilingual support'
      ],
      color: 'from-green-500 to-emerald-500',
      stats: 'India-First LLM'
    },
    {
      id: 'data-integration',
      icon: 'Database',
      title: 'Unified Data Integration',
      description: 'Connect all your enterprise applications for seamless data visibility. Break down data silos and create a unified view of your operations, enabling better decision-making across departments.',
      features: [
        'Enterprise application connectivity',
        'Data silo elimination',
        'Unified operational view',
        'Cross-department insights',
        'Real-time data synchronization'
      ],
      color: 'from-orange-500 to-red-500',
      stats: '100+ Integrations'
    }
  ];

  return (
    <section className="py-20 bg-gradient-industrial">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed to transform your business operations and drive intelligent decision-making.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services?.map((service, index) => (
            <motion.div
              key={service?.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveService(service?.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service?.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service?.color} rounded-2xl flex items-center justify-center shadow-glow`}>
                      <Icon name={service?.icon} size={28} color="white" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{service?.stats}</div>
                      <div className="text-sm text-muted-foreground">Performance</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">{service?.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service?.description}</p>

                  {/* Features List */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: activeService === service?.id ? 'auto' : 0,
                      opacity: activeService === service?.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 pt-4 border-t border-border">
                      {service?.features?.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: activeService === service?.id ? 1 : 0,
                            x: activeService === service?.id ? 0 : -20
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
                    animate={{ opacity: activeService === service?.id ? 0 : 1 }}
                    className="flex items-center space-x-2 text-primary mt-4"
                  >
                    <span className="text-sm font-medium">Hover to explore features</span>
                    <Icon name="MousePointer" size={16} />
                  </motion.div>
                </div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Icon name={service?.icon} size={120} className="text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;