import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const BenefitsGrid = () => {
  const industryBenefits = [
    {
      industry: 'Automotive',
      icon: 'Car',
      throughput: '45-55%',
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        { metric: 'Production Speed', value: '50%', icon: 'Zap' },
        { metric: 'Quality Control', value: '35%', icon: 'CheckCircle' },
        { metric: 'Downtime Reduction', value: '60%', icon: 'Clock' },
        { metric: 'Cost Savings', value: '₹2.5Cr', icon: 'TrendingUp' }
      ]
    },
    {
      industry: 'Pharmaceuticals',
      icon: 'Pill',
      throughput: '50-65%',
      color: 'from-green-500 to-emerald-500',
      benefits: [
        { metric: 'Batch Efficiency', value: '58%', icon: 'Activity' },
        { metric: 'Compliance Score', value: '99.8%', icon: 'Shield' },
        { metric: 'Waste Reduction', value: '42%', icon: 'Recycle' },
        { metric: 'Time to Market', value: '30%', icon: 'Clock' }
      ]
    },
    {
      industry: 'Aerospace',
      icon: 'Plane',
      throughput: '40-50%',
      color: 'from-purple-500 to-violet-500',
      benefits: [
        { metric: 'Quality Improvement', value: '45%', icon: 'Award' },
        { metric: 'Precision Accuracy', value: '99.9%', icon: 'Target' },
        { metric: 'Defect Reduction', value: '65%', icon: 'XCircle' },
        { metric: 'Certification Time', value: '40%', icon: 'FileCheck' }
      ]
    },
    {
      industry: 'FMCG',
      icon: 'Package',
      throughput: '55-60%',
      color: 'from-orange-500 to-red-500',
      benefits: [
        { metric: 'Line Speed', value: '55%', icon: 'Gauge' },
        { metric: 'Packaging Efficiency', value: '48%', icon: 'Box' },
        { metric: 'Inventory Turnover', value: '35%', icon: 'RotateCcw' },
        { metric: 'Demand Accuracy', value: '85%', icon: 'TrendingUp' }
      ]
    }
  ];

  const overallMetrics = [
    {
      title: 'Average Throughput Increase',
      value: '50-60%',
      description: 'Across all manufacturing sectors',
      icon: 'TrendingUp',
      color: 'text-primary'
    },
    {
      title: 'Decision Making Speed',
      value: '90%',
      description: 'Faster than traditional methods',
      icon: 'Zap',
      color: 'text-accent'
    },
    {
      title: 'Implementation Time',
      value: '30 Days',
      description: 'Average deployment timeline',
      icon: 'Clock',
      color: 'text-success'
    },
    {
      title: 'ROI Achievement',
      value: '6 Months',
      description: 'Typical payback period',
      icon: 'DollarSign',
      color: 'text-warning'
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
            Measurable{' '}
            <span className="text-gradient-cyan">Results</span>{' '}
            Across Industries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            See how ManuVerseAI delivers industry-specific improvements with quantifiable metrics and proven ROI
          </motion.p>
        </div>

        {/* Overall Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {overallMetrics?.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-glow transition-all duration-300"
            >
              <div className={`w-12 h-12 ${metric?.color?.replace('text-', 'bg-')}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon name={metric?.icon} size={24} className={metric?.color} />
              </div>
              <div className={`text-3xl font-bold ${metric?.color} mb-2`}>{metric?.value}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{metric?.title}</div>
              <div className="text-sm text-muted-foreground">{metric?.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry-Specific Benefits */}
        <div className="grid lg:grid-cols-2 gap-8">
          {industryBenefits?.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-glow transition-all duration-300 group"
            >
              {/* Industry Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry?.color} rounded-2xl flex items-center justify-center shadow-glow`}>
                    <Icon name={industry?.icon} size={28} color="white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{industry?.industry}</h3>
                    <p className="text-muted-foreground">Manufacturing Sector</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">{industry?.throughput}</div>
                  <div className="text-sm text-muted-foreground">Throughput Increase</div>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-4">
                {industry?.benefits?.map((benefit, benefitIndex) => (
                  <motion.div
                    key={benefitIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (index * 0.2) + (benefitIndex * 0.1) }}
                    className="bg-muted/50 rounded-lg p-4 hover:bg-muted/70 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Icon name={benefit?.icon} size={16} className="text-primary" />
                      </div>
                      <div className="text-xl font-bold text-foreground">{benefit?.value}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">{benefit?.metric}</div>
                  </motion.div>
                ))}
              </div>

              {/* Industry Insight */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg"
              >
                <div className="flex items-start space-x-3">
                  <Icon name="Lightbulb" size={20} className="text-primary mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-foreground mb-1">Industry Insight</div>
                    <div className="text-sm text-muted-foreground">
                      {industry?.industry === 'Automotive' && "Predictive maintenance reduces unplanned downtime by 60%, while real-time quality control improves first-pass yield significantly."}
                      {industry?.industry === 'Pharmaceuticals' && "AI-driven batch optimization ensures consistent quality while maintaining strict regulatory compliance across all production processes."}
                      {industry?.industry === 'Aerospace' && "Precision manufacturing with AI quality control achieves 99.9% accuracy, reducing costly rework and certification delays."}
                      {industry?.industry === 'FMCG' && "Demand forecasting and inventory optimization reduce waste while increasing line efficiency and customer satisfaction."}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 500+ manufacturing enterprises already transforming their operations with ManuVerseAI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-cyan text-primary-foreground rounded-lg font-semibold shadow-cta hover:shadow-glow-strong transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="Calculator" size={20} />
                <span>Calculate Your ROI</span>
              </button>
              <button className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="Calendar" size={20} />
                <span>Book Strategy Session</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsGrid;