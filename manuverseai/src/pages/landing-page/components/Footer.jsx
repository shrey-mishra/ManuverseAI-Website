import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Industries', href: '#industries' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Whitepapers', href: '#whitepapers' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'FAQs', href: '#faqs' },
        { name: 'Knowledge Base', href: '#knowledge-base' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', href: '#linkedin' },
    { name: 'Twitter', icon: 'Twitter', href: '#twitter' },
    { name: 'YouTube', icon: 'Youtube', href: '#youtube' },
    { name: 'GitHub', icon: 'Github', href: '#github' }
  ];

  const certifications = [
    { name: 'ISO 27001', icon: 'Shield' },
    { name: 'SOC 2', icon: 'Lock' },
    { name: 'GDPR', icon: 'FileCheck' },
    { name: 'Made in India', icon: 'Flag' }
  ];

  return (
    <footer className="bg-gradient-industrial border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-cyan rounded-lg flex items-center justify-center shadow-glow">
                    <Icon name="Zap" size={28} color="#0A1628" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-foreground font-cta">ManuVerseAI</span>
                  <span className="text-sm text-muted-foreground font-accent">Made in India</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Revolutionizing decision-making for enterprises with cutting-edge AI, predictive analytics, and seamless technology integration.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks?.map((social, index) => (
                  <motion.a
                    key={social?.name}
                    href={social?.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-muted/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon name={social?.icon} size={18} className="text-muted-foreground hover:text-primary transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections?.map((section, sectionIndex) => (
              <motion.div
                key={section?.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">{section?.title}</h3>
                <ul className="space-y-3">
                  {section?.links?.map((link, linkIndex) => (
                    <li key={link?.name}>
                      <a
                        href={link?.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Office Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-border"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Our Office Location</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">ManuverseAI</div>
                    <div className="text-muted-foreground">Sector 150, Noida, G.B Nagar-201310</div>
                    <div className="text-muted-foreground">India</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-primary" />
                  <a href="mailto:info@manuverseai.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@manuverseai.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-primary" />
                  <a href="tel:+918148785048" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 8148785048
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={18} className="text-primary mt-1" />
                  <div className="text-muted-foreground">
                    <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div>Saturday - Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-64 bg-muted/30 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="ManuVerseAI Office Location - Sector 150, Noida"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.158736895434!2d77.41893731508!3d28.45894798248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sSector%20150%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                className="border-0"
              />
            </div>
          </div>
        </motion.div>

        {/* Certifications & Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-8 border-t border-border"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Security & Compliance</h4>
              <div className="flex flex-wrap gap-4">
                {certifications?.map((cert, index) => (
                  <div key={cert?.name} className="flex items-center space-x-2 bg-muted/30 rounded-lg px-3 py-2">
                    <Icon name={cert?.icon} size={16} className="text-primary" />
                    <span className="text-xs text-muted-foreground">{cert?.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="text-sm text-muted-foreground mb-2">Trusted by</div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Manufacturing Enterprises</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-6 border-t border-border"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
              <p className="text-sm text-muted-foreground">
                © {currentYear} ManuVerseAI. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Icon name="Flag" size={16} className="text-accent" />
              <span className="text-sm text-muted-foreground">Proudly Made in India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;