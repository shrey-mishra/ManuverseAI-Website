import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SolutionBenefits = () => {
  const solutions = [
    {
      icon: 'TrendingUp',
      title: 'Predictive Analytics',
      metric: '90%',
      description: 'Reduce decision-making time by up to 90% with AI-powered predictive models that anticipate disruptions and identify opportunities before they occur.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Settings',
      title: 'Process Optimization',
      metric: '50-60%',
      description: 'Achieve 50-60% throughput increases by optimizing manufacturing processes with real-time AI monitoring and adjustment recommendations.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Shield',
      title: 'Quality Improvement',
      metric: '30-40%',
      description: 'Increase first-pass yield by 30-40% with AI-powered quality control systems that detect and prevent defects before they occur.',
      color: 'from-purple-500 to-violet-500'
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
            Our AI-Powered Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering measurable improvements with specific metrics that transform your manufacturing operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions?.map((solution, index) => (
            <motion.div
              key={solution?.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden h-full">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution?.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center h-full flex flex-col">
                  <div className={`w-20 h-20 bg-gradient-to-br ${solution?.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={solution?.icon} size={32} color="white" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">{solution?.title}</h3>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">{solution?.metric}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">Improvement</div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed flex-grow">{solution?.description}</p>

                  {/* Floating Background Icon */}
                  <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <Icon name={solution?.icon} size={100} className="text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Commitment</h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We are committed to helping businesses unlock their full potential by providing them with the power of real-time decision intelligence, predictive insights, and technology-driven transformation—all with innovation without disruption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-cyan text-primary-foreground rounded-lg font-semibold shadow-cta hover:shadow-glow-strong transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="BookOpen" size={20} />
                <span>Learn More About Our Solutions</span>
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="Calendar" size={20} />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionBenefits;