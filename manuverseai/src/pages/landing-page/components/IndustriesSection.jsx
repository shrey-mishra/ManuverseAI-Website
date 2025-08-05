import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const IndustriesSection = () => {
  const industries = [
    {
      icon: 'Car',
      title: 'Automotive & Ancillaries',
      description: 'Streamlining production lines, predictive maintenance, and supply chain optimization.',
      features: [
        'Production line optimization',
        'Predictive maintenance systems',
        'Supply chain management',
        'Quality control automation',
        'Just-in-time manufacturing'
      ],
      color: 'from-blue-500 to-cyan-500',
      stats: '45% Efficiency Gain'
    },
    {
      icon: 'Pill',
      title: 'Pharmaceuticals',
      description: 'Ensuring quality control, regulatory compliance, and efficient production processes.',
      features: [
        'Regulatory compliance monitoring',
        'Quality control systems',
        'Batch production optimization',
        'Drug safety analytics',
        'Clinical trial management'
      ],
      color: 'from-green-500 to-emerald-500',
      stats: '99.9% Compliance'
    },
    {
      icon: 'Plane',
      title: 'Aerospace',
      description: 'Enhancing precision manufacturing and supply chain reliability for critical components.',
      features: [
        'Precision manufacturing control',
        'Component traceability',
        'Safety compliance monitoring',
        'Maintenance scheduling',
        'Critical part management'
      ],
      color: 'from-purple-500 to-violet-500',
      stats: '99.99% Reliability'
    },
    {
      icon: 'Package',
      title: 'FMCG',
      description: 'Optimizing production schedules, inventory management, and consumer demand forecasting.',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Production scheduling',
        'Consumer behavior analysis',
        'Distribution planning'
      ],
      color: 'from-orange-500 to-red-500',
      stats: '30% Cost Reduction'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized AI solutions tailored for different manufacturing sectors, delivering measurable results across diverse industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {industries?.map((industry, index) => (
            <motion.div
              key={industry?.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden h-full">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry?.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${industry?.color} rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={industry?.icon} size={28} color="white" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{industry?.stats}</div>
                      <div className="text-sm text-muted-foreground">Avg. Improvement</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">{industry?.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{industry?.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Key Capabilities</h4>
                    {industry?.features?.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating Icon */}
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Icon name={industry?.icon} size={80} className="text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our AI platform is designed to adapt to any manufacturing environment. Let's discuss how we can tailor our solutions for your specific industry needs.
            </p>
            <button className="px-8 py-3 bg-gradient-cyan text-primary-foreground rounded-lg font-semibold shadow-cta hover:shadow-glow-strong transition-all duration-300 flex items-center justify-center space-x-2 mx-auto">
              <Icon name="MessageCircle" size={20} />
              <span>Discuss Your Industry</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;