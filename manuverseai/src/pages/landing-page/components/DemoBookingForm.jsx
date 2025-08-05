import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const DemoBookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    companySize: '',
    currentChallenges: '',
    preferredDate: '',
    preferredTime: '',
    communicationPreference: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [detectedCompany, setDetectedCompany] = useState(null);

  const industries = [
    'Automotive',
    'Pharmaceuticals',
    'Aerospace',
    'FMCG',
    'Textiles',
    'Electronics',
    'Chemical',
    'Steel & Metal',
    'Food & Beverage',
    'Other'
  ];

  const companySizes = [
    '50-200 employees',
    '200-500 employees',
    '500-1000 employees',
    '1000-5000 employees',
    '5000+ employees'
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Simulate company detection on email input
    if (field === 'email' && value?.includes('@')) {
      const domain = value?.split('@')?.[1];
      if (domain) {
        setTimeout(() => {
          const mockCompanies = {
            'tatamotors.com': { name: 'Tata Motors', industry: 'Automotive', size: '5000+ employees' },
            'drreddys.com': { name: 'Dr. Reddy\'s Laboratories', industry: 'Pharmaceuticals', size: '1000-5000 employees' },
            'mahindra.com': { name: 'Mahindra Group', industry: 'Automotive', size: '5000+ employees' },
            'britannia.co.in': { name: 'Britannia Industries', industry: 'FMCG', size: '1000-5000 employees' }
          };
          
          const detected = mockCompanies?.[domain];
          if (detected) {
            setDetectedCompany(detected);
            setFormData(prev => ({
              ...prev,
              company: detected?.name,
              industry: detected?.industry,
              companySize: detected?.size
            }));
          }
        }, 1000);
      }
    }
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
              
              <h2 className="text-3xl font-bold text-foreground mb-4">Demo Scheduled Successfully!</h2>
              <p className="text-muted-foreground mb-8">
                Thank you for booking a demo with ManuVerseAI. Our manufacturing AI expert will contact you within 2 hours to confirm your session.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">What to Expect in Your Demo</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                    <span className="text-sm text-muted-foreground">Personalized AI solution walkthrough for your industry</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                    <span className="text-sm text-muted-foreground">Live ROI calculation based on your specific metrics</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                    <span className="text-sm text-muted-foreground">Implementation roadmap and timeline discussion</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                    <span className="text-sm text-muted-foreground">Q&A session with our manufacturing AI experts</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Add to Calendar
                </Button>
                <Button
                  variant="default"
                  className="bg-gradient-cyan text-primary-foreground"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Join WhatsApp Updates
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

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
            Book Your{' '}
            <span className="text-gradient-cyan">Free Demo</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Schedule a personalized demonstration of ManuVerseAI tailored to your manufacturing challenges
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-card border border-border rounded-2xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                    <Icon name="User" size={20} className="text-primary" />
                    <span>Personal Information</span>
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData?.fullName}
                      onChange={(e) => handleInputChange('fullName', e?.target?.value)}
                      required
                    />
                    
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData?.email}
                      onChange={(e) => handleInputChange('email', e?.target?.value)}
                      required
                    />
                  </div>

                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData?.phone}
                    onChange={(e) => handleInputChange('phone', e?.target?.value)}
                    description="We'll send WhatsApp updates if you prefer"
                    required
                  />
                </div>

                {/* Company Information */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                    <Icon name="Building2" size={20} className="text-primary" />
                    <span>Company Information</span>
                  </h3>

                  {detectedCompany && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4"
                    >
                      <div className="flex items-center space-x-2 text-primary">
                        <Icon name="CheckCircle" size={16} />
                        <span className="text-sm font-medium">Company detected: {detectedCompany?.name}</span>
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Company Name"
                      type="text"
                      placeholder="Your company name"
                      value={formData?.company}
                      onChange={(e) => handleInputChange('company', e?.target?.value)}
                      required
                    />
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Industry</label>
                      <select
                        value={formData?.industry}
                        onChange={(e) => handleInputChange('industry', e?.target?.value)}
                        className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select your industry</option>
                        {industries?.map(industry => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Size</label>
                    <select
                      value={formData?.companySize}
                      onChange={(e) => handleInputChange('companySize', e?.target?.value)}
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select company size</option>
                      {companySizes?.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Scheduling */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                    <Icon name="Calendar" size={20} className="text-primary" />
                    <span>Preferred Schedule</span>
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Preferred Date"
                      type="date"
                      value={formData?.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e?.target?.value)}
                      min={new Date()?.toISOString()?.split('T')?.[0]}
                      required
                    />
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Preferred Time</label>
                      <select
                        value={formData?.preferredTime}
                        onChange={(e) => handleInputChange('preferredTime', e?.target?.value)}
                        className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select time slot</option>
                        {timeSlots?.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Current Challenges */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Current Manufacturing Challenges</label>
                  <textarea
                    value={formData?.currentChallenges}
                    onChange={(e) => handleInputChange('currentChallenges', e?.target?.value)}
                    placeholder="Describe your main manufacturing challenges (optional)"
                    rows={4}
                    className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                {/* Communication Preference */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Preferred Communication</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="communication"
                        value="email"
                        checked={formData?.communicationPreference === 'email'}
                        onChange={(e) => handleInputChange('communicationPreference', e?.target?.value)}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-foreground">Email</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="communication"
                        value="whatsapp"
                        checked={formData?.communicationPreference === 'whatsapp'}
                        onChange={(e) => handleInputChange('communicationPreference', e?.target?.value)}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-foreground">WhatsApp</span>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  className="font-cta font-semibold shadow-cta bg-gradient-cyan text-primary-foreground"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  {isSubmitting ? 'Scheduling Demo...' : 'Schedule Free Demo'}
                </Button>
              </form>
            </motion.div>

            {/* Demo Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">What You'll Get</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Personalized Demo</div>
                      <div className="text-sm text-muted-foreground">Tailored to your industry and challenges</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Calculator" size={20} className="text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">ROI Analysis</div>
                      <div className="text-sm text-muted-foreground">Custom calculations for your facility</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Users" size={20} className="text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Expert Consultation</div>
                      <div className="text-sm text-muted-foreground">Direct access to our AI specialists</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="FileText" size={20} className="text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Implementation Plan</div>
                      <div className="text-sm text-muted-foreground">Detailed roadmap for your transformation</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
                <div className="text-center">
                  <Icon name="Clock" size={32} className="text-primary mx-auto mb-3" />
                  <div className="text-lg font-semibold text-foreground mb-2">Limited Slots Available</div>
                  <div className="text-sm text-muted-foreground mb-4">Only 12 demo slots remaining this week</div>
                  <div className="text-xs text-accent font-medium">Book now to secure your spot</div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-3">Recent Bookings</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Automotive company from Chennai - 2 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Pharma manufacturer from Hyderabad - 4 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>FMCG company from Mumbai - 6 hours ago</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBookingForm;