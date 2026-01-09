import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Mail, Building, Check, ChevronRight } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  date: string;
  time: string;
}

export const CalendarBooking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    serviceType: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const serviceTypes = [
    { id: 'strategy', name: 'AI Strategy Session', duration: '60 min', description: 'Discover how AI can transform your business' },
    { id: 'automation', name: 'Automation Audit', duration: '45 min', description: 'Review your current workflows and identify automation opportunities' },
    { id: 'growth', name: 'Growth Infrastructure', duration: '90 min', description: 'Plan your automated growth infrastructure' },
    { id: 'custom', name: 'Custom Solution', duration: '60 min', description: 'Discuss your specific needs and challenges' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM'
  ];

  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0 && date.getDay() !== 6) { // Exclude weekends
        dates.push(date);
      }
    }
    return dates.slice(0, 8);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-bg-light flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full text-center"
        >
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-accent" />
          </div>
          <h1 className="font-heading text-4xl font-bold text-text-primary mb-4">
            You're all set!
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            We've received your booking request and will send a confirmation email shortly.
            Looking forward to helping you grow.
          </p>
          <a 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Back to Home
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-light py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Book a Consultation
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Schedule a free consultation to discuss how we can help you build automated growth infrastructure.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-md mx-auto">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                  s <= step ? 'bg-accent text-white' : 'bg-bg-light-gray text-text-secondary'
                }`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-1 mx-2 transition-colors ${
                    s < step ? 'bg-accent' : 'bg-border-light'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between max-w-md mx-auto mt-2 text-sm text-text-secondary">
            <span>Service</span>
            <span>Details</span>
            <span>Schedule</span>
          </div>
        </div>

        {/* Form Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-bg-light border border-border-light rounded-xl p-8"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="font-heading text-2xl font-semibold text-text-primary mb-6">
                  What would you like to discuss?
                </h2>
                <div className="grid gap-4">
                  {serviceTypes.map((service) => (
                    <motion.button
                      key={service.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData({ ...formData, serviceType: service.id })}
                      className={`p-6 rounded-lg border-2 text-left transition-all ${
                        formData.serviceType === service.id
                          ? 'border-accent bg-accent/5'
                          : 'border-border-light hover:border-text-primary/20'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-text-primary">{service.name}</h3>
                        <span className="text-sm text-text-secondary">{service.duration}</span>
                      </div>
                      <p className="text-sm text-text-secondary">{service.description}</p>
                    </motion.button>
                  ))}
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={nextStep}
                    disabled={!formData.serviceType}
                    className="px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Contact Details */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="font-heading text-2xl font-semibold text-text-primary mb-6">
                  Your details
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-text-primary mb-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-bg-light-gray border border-border-light rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-text-primary mb-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-bg-light-gray border border-border-light rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-text-primary mb-2">
                      <Building className="w-4 h-4" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-bg-light-gray border border-border-light rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>
                </form>

                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    className="px-8 py-3 bg-bg-light-gray text-text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!formData.name || !formData.email || !formData.company}
                    className="px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Schedule */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="font-heading text-2xl font-semibold text-text-primary mb-6">
                  Choose a time
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="flex items-center gap-2 text-sm font-medium text-text-primary mb-4">
                      <Calendar className="w-4 h-4" />
                      Select a date
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {getAvailableDates().map((date) => (
                        <button
                          key={date.toISOString()}
                          type="button"
                          onClick={() => setFormData({ ...formData, date: date.toISOString().split('T')[0] })}
                          className={`p-3 rounded-lg border transition-all ${
                            formData.date === date.toISOString().split('T')[0]
                              ? 'border-accent bg-accent/5 text-accent font-semibold'
                              : 'border-border-light hover:border-text-primary/20'
                          }`}
                        >
                          <div className="text-sm font-medium">
                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                          </div>
                          <div className="text-lg">
                            {date.getDate()}
                          </div>
                          <div className="text-xs text-text-secondary">
                            {date.toLocaleDateString('en-US', { month: 'short' })}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.date && (
                    <div className="mb-6">
                      <label className="flex items-center gap-2 text-sm font-medium text-text-primary mb-4">
                        <Clock className="w-4 h-4" />
                        Select a time
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({ ...formData, time })}
                            className={`p-3 rounded-lg border transition-all ${
                              formData.time === time
                                ? 'border-accent bg-accent/5 text-accent font-semibold'
                                : 'border-border-light hover:border-text-primary/20'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-3 bg-bg-light-gray text-text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.date || !formData.time || isSubmitting}
                      className="px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
