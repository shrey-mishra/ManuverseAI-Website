import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechnologyIntegration = () => {
  const [activeConnection, setActiveConnection] = useState(0);

  const integrations = [
    {
      id: 'erp',
      name: 'ERP Systems',
      icon: 'Database',
      description: 'Seamless integration with SAP, Oracle, Microsoft Dynamics',
      position: 'top-16 left-16',
      color: 'from-blue-500 to-cyan-500',
      connections: ['Financial Data', 'Resource Planning', 'Inventory Management']
    },
    {
      id: 'mes',
      name: 'MES Platforms',
      icon: 'Cog',
      description: 'Connect with Wonderware, GE Digital, Siemens MES',
      position: 'top-16 right-16',
      color: 'from-green-500 to-emerald-500',
      connections: ['Production Control', 'Quality Management', 'Workflow Optimization']
    },
    {
      id: 'iot',
      name: 'IoT Devices',
      icon: 'Wifi',
      description: 'Real-time data from sensors, PLCs, and smart devices',
      position: 'bottom-16 left-16',
      color: 'from-purple-500 to-violet-500',
      connections: ['Sensor Data', 'Equipment Status', 'Environmental Monitoring']
    },
    {
      id: 'crm',
      name: 'CRM Systems',
      icon: 'Users',
      description: 'Customer insights from Salesforce, HubSpot, Dynamics',
      position: 'bottom-16 right-16',
      color: 'from-orange-500 to-red-500',
      connections: ['Customer Demand', 'Order Management', 'Service History']
    }
  ];

  const dataFlows = [
    'Real-time Production Data',
    'Quality Metrics',
    'Equipment Performance',
    'Supply Chain Status',
    'Customer Demand Signals',
    'Financial KPIs'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnection((prev) => (prev + 1) % integrations?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
            Unified{' '}
            <span className="text-gradient-cyan">Technology Integration</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Connect all your manufacturing technologies under one intelligent platform without disrupting existing operations
          </motion.p>
        </div>

        {/* 3D Integration Visualization */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-96 bg-card border border-border rounded-2xl overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.1)_0%,transparent_70%)]"></div>
            
            {/* Central AI Hub */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-32 h-32 bg-gradient-cyan rounded-full flex items-center justify-center shadow-glow border-4 border-background">
                <Icon name="Brain" size={48} color="#0A1628" />
              </div>
            </motion.div>

            {/* Integration Points */}
            {integrations?.map((integration, index) => (
              <motion.div
                key={integration?.id}
                className={`absolute ${integration?.position} cursor-pointer`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveConnection(index)}
              >
                <div className={`relative w-20 h-20 bg-gradient-to-br ${integration?.color} rounded-2xl flex items-center justify-center shadow-glow border-2 ${activeConnection === index ? 'border-primary' : 'border-transparent'}`}>
                  <Icon name={integration?.icon} size={28} color="white" />
                  
                  {/* Active Pulse */}
                  {activeConnection === index && (
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-primary rounded-2xl"
                    ></motion.div>
                  )}
                </div>

                {/* Label */}
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-sm font-semibold text-foreground whitespace-nowrap">{integration?.name}</div>
                </div>
              </motion.div>
            ))}

            {/* Data Flow Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.2"/>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Connection Lines */}
              <motion.path
                d="M 192 192 L 100 80"
                stroke="url(#flowGradient)"
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <motion.path
                d="M 192 192 L 284 80"
                stroke="url(#flowGradient)"
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
              />
              <motion.path
                d="M 192 192 L 100 304"
                stroke="url(#flowGradient)"
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1 }}
              />
              <motion.path
                d="M 192 192 L 284 304"
                stroke="url(#flowGradient)"
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1.5 }}
              />
            </svg>

            {/* Floating Data Particles */}
            {[...Array(6)]?.map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-2 h-2 bg-primary rounded-full"
                animate={{
                  x: [Math.random() * 400, Math.random() * 400],
                  y: [Math.random() * 300, Math.random() * 300],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>

          {/* Integration Details */}
          <motion.div
            key={activeConnection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-start space-x-4">
              <div className={`w-16 h-16 bg-gradient-to-br ${integrations?.[activeConnection]?.color} rounded-xl flex items-center justify-center shadow-glow`}>
                <Icon name={integrations?.[activeConnection]?.icon} size={24} color="white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">{integrations?.[activeConnection]?.name}</h3>
                <p className="text-muted-foreground mb-4">{integrations?.[activeConnection]?.description}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {integrations?.[activeConnection]?.connections?.map((connection, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-muted/50 rounded-lg p-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{connection}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Data Flow Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Real-time Data Flows</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {dataFlows?.map((flow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-glow transition-all duration-300"
              >
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Icon name="Activity" size={16} className="text-primary" />
                </div>
                <div className="text-sm font-medium text-foreground">{flow}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Integration Benefits</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the power of unified manufacturing intelligence with seamless system integration
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={28} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">Zero Disruption</div>
              <div className="text-muted-foreground">Integrate without stopping production or changing existing workflows</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={28} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent mb-2">Enterprise Security</div>
              <div className="text-muted-foreground">Bank-grade encryption and compliance with industry standards</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={28} className="text-success" />
              </div>
              <div className="text-2xl font-bold text-success mb-2">Instant ROI</div>
              <div className="text-muted-foreground">See measurable improvements within 30 days of deployment</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyIntegration;