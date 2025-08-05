import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    productionVolume: '',
    downtimeHours: '',
    qualityIssues: '',
    decisionDelays: '',
    laborCosts: '',
    energyCosts: ''
  });

  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const volume = parseFloat(inputs?.productionVolume) || 0;
      const downtime = parseFloat(inputs?.downtimeHours) || 0;
      const quality = parseFloat(inputs?.qualityIssues) || 0;
      const delays = parseFloat(inputs?.decisionDelays) || 0;
      const labor = parseFloat(inputs?.laborCosts) || 0;
      const energy = parseFloat(inputs?.energyCosts) || 0;

      // ROI Calculation Logic
      const currentLosses = {
        downtimeCost: downtime * 50000, // ₹50k per hour
        qualityCost: quality * 25000, // ₹25k per issue
        delayCost: delays * 15000, // ₹15k per delay
        inefficiencyLoss: (labor + energy) * 0.3 // 30% inefficiency
      };

      const totalCurrentLoss = Object.values(currentLosses)?.reduce((sum, loss) => sum + loss, 0);

      const improvements = {
        downtimeReduction: 0.7, // 70% reduction
        qualityImprovement: 0.6, // 60% improvement
        speedIncrease: 0.9, // 90% faster decisions
        efficiencyGain: 0.5 // 50% efficiency gain
      };

      const annualSavings = {
        downtimeSavings: currentLosses?.downtimeCost * improvements?.downtimeReduction * 12,
        qualitySavings: currentLosses?.qualityCost * improvements?.qualityImprovement * 12,
        speedSavings: currentLosses?.delayCost * improvements?.speedIncrease * 12,
        efficiencySavings: currentLosses?.inefficiencyLoss * improvements?.efficiencyGain * 12
      };

      const totalAnnualSavings = Object.values(annualSavings)?.reduce((sum, saving) => sum + saving, 0);
      const implementationCost = volume * 1000; // ₹1k per unit volume
      const paybackMonths = Math.ceil(implementationCost / (totalAnnualSavings / 12));

      setResults({
        currentLosses,
        totalCurrentLoss,
        annualSavings,
        totalAnnualSavings,
        implementationCost,
        paybackMonths,
        threeYearROI: ((totalAnnualSavings * 3 - implementationCost) / implementationCost) * 100
      });

      setIsCalculating(false);
    }, 2000);
  };

  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000)?.toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000)?.toFixed(1)}L`;
    } else {
      return `₹${amount?.toLocaleString('en-IN')}`;
    }
  };

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
            Calculate Your{' '}
            <span className="text-gradient-cyan">ROI</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Discover your potential savings and ROI with ManuVerseAI's intelligent manufacturing platform
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="Calculator" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Input Your Data</h3>
                  <p className="text-muted-foreground">Enter your current manufacturing metrics</p>
                </div>
              </div>

              <div className="space-y-6">
                <Input
                  label="Monthly Production Volume (Units)"
                  type="number"
                  placeholder="e.g., 10000"
                  value={inputs?.productionVolume}
                  onChange={(e) => handleInputChange('productionVolume', e?.target?.value)}
                  description="Average units produced per month"
                />

                <Input
                  label="Monthly Downtime Hours"
                  type="number"
                  placeholder="e.g., 48"
                  value={inputs?.downtimeHours}
                  onChange={(e) => handleInputChange('downtimeHours', e?.target?.value)}
                  description="Unplanned equipment downtime per month"
                />

                <Input
                  label="Monthly Quality Issues"
                  type="number"
                  placeholder="e.g., 25"
                  value={inputs?.qualityIssues}
                  onChange={(e) => handleInputChange('qualityIssues', e?.target?.value)}
                  description="Number of quality-related incidents per month"
                />

                <Input
                  label="Decision Delays (Hours/Month)"
                  type="number"
                  placeholder="e.g., 120"
                  value={inputs?.decisionDelays}
                  onChange={(e) => handleInputChange('decisionDelays', e?.target?.value)}
                  description="Time lost due to delayed decision-making"
                />

                <Input
                  label="Monthly Labor Costs (₹)"
                  type="number"
                  placeholder="e.g., 2500000"
                  value={inputs?.laborCosts}
                  onChange={(e) => handleInputChange('laborCosts', e?.target?.value)}
                  description="Total labor costs per month"
                />

                <Input
                  label="Monthly Energy Costs (₹)"
                  type="number"
                  placeholder="e.g., 800000"
                  value={inputs?.energyCosts}
                  onChange={(e) => handleInputChange('energyCosts', e?.target?.value)}
                  description="Total energy costs per month"
                />

                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isCalculating}
                  onClick={calculateROI}
                  className="font-cta font-semibold shadow-cta bg-gradient-cyan text-primary-foreground"
                  iconName="TrendingUp"
                  iconPosition="left"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate ROI'}
                </Button>
              </div>
            </motion.div>

            {/* Results Display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-success" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Your ROI Projection</h3>
                  <p className="text-muted-foreground">Potential savings with ManuVerseAI</p>
                </div>
              </div>

              {!results ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="BarChart3" size={48} className="text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">Enter your data and click "Calculate ROI" to see your potential savings</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-success/10 border border-success/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-success">{formatCurrency(results?.totalAnnualSavings)}</div>
                      <div className="text-sm text-muted-foreground">Annual Savings</div>
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">{results?.paybackMonths} Months</div>
                      <div className="text-sm text-muted-foreground">Payback Period</div>
                    </div>
                  </div>

                  {/* ROI Percentage */}
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold text-gradient-cyan mb-2">
                      {results?.threeYearROI?.toFixed(0)}%
                    </div>
                    <div className="text-lg font-semibold text-foreground">3-Year ROI</div>
                  </div>

                  {/* Savings Breakdown */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Annual Savings Breakdown</h4>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={16} className="text-primary" />
                          <span className="text-sm">Downtime Reduction</span>
                        </div>
                        <span className="font-semibold text-foreground">{formatCurrency(results?.annualSavings?.downtimeSavings)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-success" />
                          <span className="text-sm">Quality Improvement</span>
                        </div>
                        <span className="font-semibold text-foreground">{formatCurrency(results?.annualSavings?.qualitySavings)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Icon name="Zap" size={16} className="text-accent" />
                          <span className="text-sm">Faster Decisions</span>
                        </div>
                        <span className="font-semibold text-foreground">{formatCurrency(results?.annualSavings?.speedSavings)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Icon name="TrendingUp" size={16} className="text-warning" />
                          <span className="text-sm">Efficiency Gains</span>
                        </div>
                        <span className="font-semibold text-foreground">{formatCurrency(results?.annualSavings?.efficiencySavings)}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-border">
                    <Button
                      variant="default"
                      size="lg"
                      fullWidth
                      className="font-cta font-semibold shadow-cta bg-gradient-cyan text-primary-foreground"
                      iconName="Calendar"
                      iconPosition="left"
                    >
                      Book Demo to Realize These Savings
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Bottom Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Trusted by 500+ Manufacturing Enterprises</h3>
            <p className="text-muted-foreground mb-6">
              Our ROI calculator is based on real data from successful implementations across various manufacturing sectors
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="text-sm font-medium">Tata Motors</div>
              <div className="text-sm font-medium">Dr. Reddy's Labs</div>
              <div className="text-sm font-medium">Mahindra Aerospace</div>
              <div className="text-sm font-medium">Bajaj Auto</div>
              <div className="text-sm font-medium">Sun Pharma</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;