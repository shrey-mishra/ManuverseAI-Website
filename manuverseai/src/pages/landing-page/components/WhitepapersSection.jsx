import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const WhitepapersSection = () => {
  const whitepapers = [
    {
      icon: 'Factory',
      title: 'The Future of Manufacturing with AI',
      description: 'Explore how AI is transforming the manufacturing landscape and revolutionizing decision-making processes.',
      downloadCount: '2.3K',
      readTime: '15 min',
      category: 'Manufacturing AI',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'TrendingUp',
      title: 'Predictive Analytics in Supply Chain',
      description: 'Learn how predictive analytics can help you anticipate and mitigate supply chain disruptions.',
      downloadCount: '1.8K',
      readTime: '12 min',
      category: 'Supply Chain',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'Brain',
      title: 'Enterprise LLMs: The Next Frontier',
      description: 'Discover how Large Language Models are being tailored for enterprise needs and specific industries.',
      downloadCount: '3.1K',
      readTime: '18 min',
      category: 'AI Innovation',
      color: 'from-purple-500 to-violet-500'
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
            Industry Whitepapers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep insights and research from our AI experts to help you understand the transformative potential of intelligent manufacturing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whitepapers?.map((whitepaper, index) => (
            <motion.div
              key={whitepaper?.title}
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
                <div className={`absolute inset-0 bg-gradient-to-br ${whitepaper?.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${whitepaper?.color} rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={whitepaper?.icon} size={28} color="white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-primary font-semibold">{whitepaper?.category}</div>
                      <div className="text-xs text-muted-foreground">{whitepaper?.readTime} read</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">{whitepaper?.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow mb-6">{whitepaper?.description}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6 pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <Icon name="Download" size={16} className="text-primary" />
                      <span className="text-sm text-muted-foreground">{whitepaper?.downloadCount} downloads</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span className="text-sm text-muted-foreground">{whitepaper?.readTime}</span>
                    </div>
                  </div>

                  {/* Download Button */}
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 border border-primary/30 text-primary rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-glow">
                    <Icon name="Download" size={18} />
                    <span>Download Whitepaper</span>
                  </button>

                  {/* Floating Background Icon */}
                  <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <Icon name={whitepaper?.icon} size={80} className="text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want More Insights?
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our research newsletter and get the latest whitepapers, case studies, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-cyan text-primary-foreground rounded-lg font-semibold shadow-cta hover:shadow-glow-strong transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="Mail" size={20} />
                <span>Subscribe to Newsletter</span>
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="BookOpen" size={20} />
                <span>Browse All Resources</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhitepapersSection;