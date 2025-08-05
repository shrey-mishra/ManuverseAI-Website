import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProblemVisualization = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const problemHotspots = [
    {
      id: 'data-silos',
      position: 'top-20 left-16',
      icon: 'Database',
      title: 'Data Silos',
      description: 'Disconnected systems create information gaps, leading to 40% slower decision-making across manufacturing operations.',
      stats: '40% Slower Decisions'
    },
    {
      id: 'bottlenecks',
      position: 'top-32 right-20',
      icon: 'AlertTriangle',
      title: 'Decision Bottlenecks',
      description: 'Manual processes and delayed insights cause production delays, resulting in 25-30% efficiency losses.',
      stats: '30% Efficiency Loss'
    },
    {
      id: 'quality-gaps',
      position: 'bottom-24 left-24',
      icon: 'XCircle',
      title: 'Quality Gaps',
      description: 'Reactive quality control instead of predictive measures leads to 15-20% higher defect rates.',
      stats: '20% Higher Defects'
    },
    {
      id: 'maintenance',
      position: 'bottom-20 right-16',
      icon: 'Wrench',
      title: 'Unplanned Downtime',
      description: 'Lack of predictive maintenance causes unexpected equipment failures, costing ₹2-5 lakhs per hour.',
      stats: '₹5L/Hour Loss'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            The Manufacturing{' '}
            <span className="text-gradient-cyan">Intelligence Gap</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Click on the hotspots below to explore how disconnected systems are costing your manufacturing operations
          </motion.p>
        </div>

        <div className="relative">
          {/* 3D Factory Floor Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-96 bg-gradient-to-br from-card to-muted rounded-2xl border border-border overflow-hidden"
          >
            {/* Factory Floor Background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            
            {/* Manufacturing Equipment Icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-8 opacity-20">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name="Cog" size={24} className="text-primary" />
                  </div>
                ))}
              </div>
            </div>

            {/* Problem Hotspots */}
            {problemHotspots.map((hotspot) => (
              <motion.div
                key={hotspot.id}
                className={`absolute ${hotspot.position} cursor-pointer`}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
              >
                <div className="relative">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(239, 68, 68, 0.7)',
                        '0 0 0 10px rgba(239, 68, 68, 0)',
                        '0 0 0 0 rgba(239, 68, 68, 0)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center border-2 border-destructive-foreground"
                  >
                    <Icon name={hotspot.icon} size={20} className="text-destructive-foreground" />
                  </motion.div>
                  
                  {/* Tooltip */}
                  {activeHotspot === hotspot.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-16 left-1/2 transform -translate-x-1/2 w-80 bg-card border border-border rounded-lg p-4 shadow-card z-10"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-destructive/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={hotspot.icon} size={20} className="text-destructive" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{hotspot.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{hotspot.description}</p>
                          <div className="inline-flex items-center space-x-2 bg-destructive/10 rounded-full px-3 py-1">
                            <Icon name="TrendingDown" size={14} className="text-destructive" />
                            <span className="text-sm font-medium text-destructive">{hotspot.stats}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Data Flow Lines (Broken) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <pattern id="brokenLine" patternUnits="userSpaceOnUse" width="10" height="2">
                  <rect width="5" height="2" fill="#EF4444" opacity="0.5"/>
                  <rect x="5" width="5" height="2" fill="transparent"/>
                </pattern>
              </defs>
              <path
                d="M 100 100 Q 200 50 300 100 T 500 100"
                stroke="url(#brokenLine)"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M 150 200 Q 250 150 350 200 T 550 200"
                stroke="url(#brokenLine)"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </motion.div>

          {/* Problem Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-destructive" />
              </div>
              <div className="text-2xl font-bold text-destructive mb-2">67%</div>
              <div className="text-sm text-muted-foreground">of manufacturers struggle with delayed decision-making due to data silos</div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingDown" size={24} className="text-destructive" />
              </div>
              <div className="text-2xl font-bold text-destructive mb-2">₹15L</div>
              <div className="text-sm text-muted-foreground">average monthly loss per facility due to inefficient operations</div>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="AlertCircle" size={24} className="text-destructive" />
              </div>
              <div className="text-2xl font-bold text-destructive mb-2">45%</div>
              <div className="text-sm text-muted-foreground">of quality issues could be prevented with predictive AI systems</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemVisualization;