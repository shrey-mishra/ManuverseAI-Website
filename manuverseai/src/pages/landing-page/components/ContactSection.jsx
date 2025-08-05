import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const contactInfo = {
    office: 'ManuverseAI\n\nSector 150, Noida, G.B Nagar-201310\n\nIndia',
    email: 'info@manuverseai.com',
    phone: '+91 8148785048',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM\n\nSaturday - Sunday: Closed'
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-card border border-border rounded-2xl p-12">
              <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={40} className="text-success" />
              </div>
              
              <h2 className="text-3xl font-bold text-foreground mb-4">Message Sent Successfully!</h2>
              <p className="text-muted-foreground mb-8">
                Thank you for contacting ManuVerseAI. Our team will get back to you within 24 hours to discuss your requirements.
              </p>

              <button 
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 bg-gradient-cyan text-primary-foreground rounded-lg font-semibold shadow-cta hover:shadow-glow-strong transition-all duration-300"
              >
                Send Another Message
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

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
            Connect With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your manufacturing operations? Get in touch with our AI experts to explore how ManuVerseAI can drive your business forward.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
                <Icon name="Mail" size={24} className="text-primary" />
                <span>Get in Touch</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Your Name *"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData?.name}
                    onChange={(e) => handleInputChange('name', e?.target?.value)}
                    required
                  />
                  
                  <Input
                    label="Your Email *"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData?.email}
                    onChange={(e) => handleInputChange('email', e?.target?.value)}
                    required
                  />
                </div>

                <Input
                  label="Your Phone Number"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                />

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Message *</label>
                  <textarea
                    value={formData?.message}
                    onChange={(e) => handleInputChange('message', e?.target?.value)}
                    placeholder="Tell us about your manufacturing challenges and how we can help..."
                    rows={6}
                    className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  className="font-cta font-semibold shadow-cta bg-gradient-cyan text-primary-foreground"
                  iconName="Send"
                  iconPosition="left"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Our Office</h4>
                      <p className="text-muted-foreground whitespace-pre-line">{contactInfo?.office}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a href={`mailto:${contactInfo?.email}`} className="text-primary hover:underline">
                        {contactInfo?.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <a href={`tel:${contactInfo?.phone}`} className="text-primary hover:underline">
                        {contactInfo?.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                      <p className="text-muted-foreground whitespace-pre-line">{contactInfo?.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-card border border-border rounded-lg text-left hover:bg-muted/50 transition-colors duration-300 flex items-center space-x-3">
                    <Icon name="Calendar" size={18} className="text-primary" />
                    <span className="text-foreground">Schedule a Demo</span>
                  </button>
                  <button className="w-full px-4 py-3 bg-card border border-border rounded-lg text-left hover:bg-muted/50 transition-colors duration-300 flex items-center space-x-3">
                    <Icon name="Download" size={18} className="text-primary" />
                    <span className="text-foreground">Download Brochure</span>
                  </button>
                  <button className="w-full px-4 py-3 bg-card border border-border rounded-lg text-left hover:bg-muted/50 transition-colors duration-300 flex items-center space-x-3">
                    <Icon name="MessageCircle" size={18} className="text-primary" />
                    <span className="text-foreground">Start WhatsApp Chat</span>
                  </button>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Icon name="Clock" size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Quick Response Time</h4>
                <p className="text-sm text-muted-foreground">We typically respond to all inquiries within 2-4 hours during business hours.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;