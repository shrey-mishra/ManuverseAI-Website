import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CompanyOverview = () => {
  const companyValues = [
    {
      icon: 'Lightbulb',
      title: 'Innovation without Disruption',
      description: 'We enhance, not replace, your existing technology stack.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'BarChart3',
      title: 'Data-Driven Decisions',
      description: 'Leverage real-time analytics for faster, smarter business moves.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Users',
      title: 'Customer-Centricity',
      description: 'Your success is our success; we align our technology to your business goals.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: 'Zap',
      title: 'Simplicity with Power',
      description: 'Complex decision-making simplified through intelligent automation.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6">
        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Who We Are
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              ManuVerseAI is engineered to revolutionize decision-making for enterprises. We empower businesses with cutting-edge Agentic AI, Large Language Models (LLMs), and Predictive Analytics, enabling them to anticipate challenges, optimize operations, and act with precision.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform seamlessly integrates with existing enterprise technologies—ERP, MES, IoT, CRM, and more—unifying fragmented data streams into a powerful decision-making engine. With ManuVerseAI, organizations can predict disruptions, streamline workflows, and drive unprecedented efficiency without the need for disruptive overhauls.
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-glow">
                <Icon name="Eye" size={28} color="white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To build India's first indigenous Enterprise-Grade LLM, setting the standard for predictive intelligence and business automation in global markets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-glow">
                <Icon name="Target" size={28} color="white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To accelerate intelligent decision-making and drive business growth through predictive analytics, advanced AI, and seamless technology integration.
            </p>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-foreground mb-6">Our Values</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyValues?.map((value, index) => (
            <motion.div
              key={value?.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-glow transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${value?.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={value?.icon} size={24} color="white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">{value?.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{value?.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Transformation Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Transforming Enterprise Decision-Making
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover how our AI-powered solutions can revolutionize your business operations and drive unprecedented efficiency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyOverview;