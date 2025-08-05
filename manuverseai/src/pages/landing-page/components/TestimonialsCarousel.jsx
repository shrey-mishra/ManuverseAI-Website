import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "VP Manufacturing Operations",
      company: "Tata Motors",
      industry: "Automotive",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `ManuVerseAI transformed our Pune facility completely. We achieved 52% throughput increase within 90 days of implementation. The predictive maintenance alone saved us ₹3.2 crores in the first year by preventing major equipment failures.`,
      metrics: {
        throughput: "52%",
        savings: "₹3.2Cr",
        timeline: "90 Days"
      },
      linkedinVerified: true
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      position: "Head of Manufacturing Excellence",
      company: "Dr. Reddy\'s Laboratories",
      industry: "Pharmaceuticals",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `The AI-driven quality control system has been revolutionary for our pharmaceutical manufacturing. We've achieved 99.8% compliance scores and reduced batch failures by 65%. The ROI was evident within 6 months.`,
      metrics: {
        compliance: "99.8%",
        reduction: "65%",
        roi: "6 Months"
      },
      linkedinVerified: true
    },
    {
      id: 3,
      name: "Vikram Singh",
      position: "Director of Operations",
      company: "Mahindra Aerospace",
      industry: "Aerospace",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `Precision is everything in aerospace manufacturing. ManuVerseAI's real-time analytics helped us achieve 99.9% accuracy in our critical components. The decision-making speed improved by 85%, crucial for our tight delivery schedules.`,
      metrics: {
        accuracy: "99.9%",
        speed: "85%",
        delivery: "100%"
      },
      linkedinVerified: true
    },
    {
      id: 4,
      name: "Anita Patel",
      position: "Manufacturing Director",
      company: "Britannia Industries",
      industry: "FMCG",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `Our FMCG production lines now operate at 58% higher efficiency. The demand forecasting accuracy improved to 87%, significantly reducing waste and inventory costs. The platform paid for itself in just 4 months.`,
      metrics: {
        efficiency: "58%",
        accuracy: "87%",
        payback: "4 Months"
      },
      linkedinVerified: true
    }
  ];

  const companyLogos = [
    { name: "Tata Motors", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop" },
    { name: "Dr. Reddy\'s", logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&h=60&fit=crop" },
    { name: "Mahindra", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
    { name: "Britannia", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop" },
    { name: "Bajaj Auto", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
    { name: "Sun Pharma", logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&h=60&fit=crop" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

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
            Trusted by{' '}
            <span className="text-gradient-cyan">Industry Leaders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            See how leading manufacturing enterprises are transforming their operations with ManuVerseAI
          </motion.p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-card"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Quote" size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium text-accent">{testimonials?.[currentTestimonial]?.industry}</span>
                        <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Verified Client</span>
                        {testimonials?.[currentTestimonial]?.linkedinVerified && (
                          <Icon name="CheckCircle" size={16} className="text-primary" />
                        )}
                      </div>
                      <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed">
                        "{testimonials?.[currentTestimonial]?.content}"
                      </blockquote>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Image
                        src={testimonials?.[currentTestimonial]?.avatar}
                        alt={testimonials?.[currentTestimonial]?.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonials?.[currentTestimonial]?.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonials?.[currentTestimonial]?.position}</div>
                      <div className="text-sm font-medium text-primary">{testimonials?.[currentTestimonial]?.company}</div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Results</h4>
                  {Object.entries(testimonials?.[currentTestimonial]?.metrics)?.map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-muted/50 rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">{key?.replace(/([A-Z])/g, ' $1')?.trim()}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted/50 transition-colors duration-300"
            >
              <Icon name="ChevronLeft" size={20} className="text-muted-foreground" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted/50 transition-colors duration-300"
            >
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">Trusted by Leading Enterprises</h3>
            <p className="text-muted-foreground">500+ manufacturing companies across India</p>
          </div>
          
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-80 transition-opacity duration-300">
            {companyLogos?.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <Image
                  src={company?.logo}
                  alt={company?.name}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Collective Impact</h3>
            <p className="text-muted-foreground">Combined results across all our enterprise clients</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">₹2,500Cr+</div>
              <div className="text-sm text-muted-foreground">Total Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Manufacturing Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;