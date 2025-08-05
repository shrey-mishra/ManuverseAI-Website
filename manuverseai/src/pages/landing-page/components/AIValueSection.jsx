import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const AIValueSection = () => {
  const valueMetrics = [
    {
      icon: 'TrendingUp',
      title: 'Productivity Gains',
      percentage: '40-60%',
      description: 'Increase in overall manufacturing productivity through AI optimization'
    },
    {
      icon: 'Target',
      title: 'Enhanced Competitiveness',
      percentage: '50%',
      description: 'Improvement in market competitiveness through intelligent automation'
    },
    {
      icon: 'CheckCircle',
      title: 'Better Business Practices',
      percentage: '70%',
      description: 'Enhancement in business process efficiency and decision-making'
    },
    {
      icon: 'DollarSign',
      title: 'Cost Reduction',
      percentage: '25-35%',
      description: 'Reduction in operational costs through predictive maintenance and optimization'
    }
  ];

  const valueChainSteps = [
    {
      icon: 'Package',
      title: 'Material Planning',
      improvements: ['Demand forecasting accuracy', 'Inventory optimization', 'Supplier management'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Truck',
      title: 'Supply Chain',
      improvements: ['Real-time tracking', 'Risk assessment', 'Route optimization'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Cog',
      title: 'Production',
      improvements: ['Process optimization', 'Quality control', 'Predictive maintenance'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: 'Shield',
      title: 'Quality',
      improvements: ['Defect detection', 'Compliance monitoring', 'Automated testing'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'Settings',
      title: 'Assembly',
      improvements: ['Workflow optimization', 'Resource allocation', 'Efficiency tracking'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'Send',
      title: 'Delivery',
      improvements: ['Logistics optimization', 'Customer satisfaction', 'Performance analytics'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-industrial">
      <div className="container mx-auto px-6">
        {/* How We Help Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-Driven Value Creation for Your Business
          </p>
        </motion.div>

        {/* Expected Value of AI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Expected Value of Artificial Intelligence
            </h3>
            <p className="text-muted-foreground">
              Measurable improvements across key business metrics through AI implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueMetrics?.map((metric, index) => (
              <motion.div
                key={metric?.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                  <Icon name={metric?.icon} size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{metric?.percentage}</div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{metric?.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{metric?.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Value Chain */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              AI Delivers Value Across the Entire Value Chain
            </h3>
            <p className="text-muted-foreground">
              Comprehensive improvements from material planning to delivery optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueChainSteps?.map((step, index) => (
              <motion.div
                key={step?.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step?.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step?.color} rounded-lg flex items-center justify-center shadow-glow`}>
                      <Icon name={step?.icon} size={20} color="white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{step?.title}</h4>
                  </div>

                  <div className="space-y-2">
                    {step?.improvements?.map((improvement, improvementIndex) => (
                      <div key={improvementIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{improvement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Unlock AI Value in Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get a personalized assessment of how AI can transform your specific manufacturing processes and deliver measurable ROI.
            </p>
            <button className="px-8 py-3 bg-gradient-cyan text-primary-foreground rounded-lg font-semibold shadow-cta hover:shadow-glow-strong transition-all duration-300 flex items-center justify-center space-x-2 mx-auto">
              <Icon name="Calculator" size={20} />
              <span>Calculate Your AI ROI</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIValueSection;