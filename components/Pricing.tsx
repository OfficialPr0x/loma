'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Calendar, Users } from 'lucide-react'

export function Pricing() {
  const pricingPlans = [
    {
      name: 'Standard Package',
      price: 250,
      period: 'per night',
      description: 'Perfect for couples seeking a romantic getaway',
      features: [
        'Ocean View Deluxe Room',
        'Welcome drink upon arrival',
        'Daily breakfast for 2',
        'Free WiFi',
        'Airport transfer (one way)',
        'Daily housekeeping',
        'Beach access',
        'Pool access',
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Premium Package',
      price: 450,
      period: 'per night',
      description: 'Ideal for families and groups wanting extra space',
      features: [
        'Beachfront Suite',
        'Welcome drink & fruit basket',
        'Daily breakfast for 4',
        'Complimentary mini bar',
        'Round-trip airport transfer',
        'Butler service',
        'Private beach access',
        'Spa discount (20%)',
        'Concierge service',
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Luxury Package',
      price: 850,
      period: 'per night',
      description: 'Ultimate luxury experience for special occasions',
      features: [
        'Presidential Villa',
        'Champagne welcome',
        'Chef-prepared meals',
        'Premium mini bar',
        'Helicopter transfer',
        'Personal butler',
        'Private infinity pool',
        'Full spa access',
        'Private chef service',
        'Concierge service',
      ],
      popular: false,
      color: 'from-amber-500 to-orange-500',
    },
  ]

  const seasonalRates = [
    { period: 'High Season (Dec-Mar)', multiplier: 1.5, description: 'Peak travel season' },
    { period: 'Shoulder Season (Apr-Jun, Oct-Nov)', multiplier: 1.2, description: 'Great weather, fewer crowds' },
    { period: 'Low Season (Jul-Sep)', multiplier: 1.0, description: 'Best value, tropical weather' },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            No hidden fees, no surprises. What you see is what you pay.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card p-8 relative ${plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <Calendar className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-display font-bold text-center mb-2 text-neutral-800">
                {plan.name}
              </h3>
              <p className="text-neutral-600 text-center mb-6">
                {plan.description}
              </p>

              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-neutral-800 mb-1">
                  ${plan.price}
                </div>
                <div className="text-neutral-500">
                  {plan.period}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.popular
                  ? 'bg-primary-500 hover:bg-primary-600 text-white'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
              }`}>
                Book Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Seasonal Rates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8 text-neutral-800">
            Seasonal Rates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasonalRates.map((rate, index) => (
              <motion.div
                key={rate.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-neutral-800 mb-2">
                    {rate.period}
                  </h4>
                  <div className="text-2xl font-bold text-primary-500 mb-2">
                    {rate.multiplier === 1.0 ? 'Base Rate' : `${rate.multiplier}x`}
                  </div>
                  <p className="text-sm text-neutral-600">
                    {rate.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-primary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-display font-bold mb-4">
              💰 Best Rate Guarantee
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Find a lower rate elsewhere? We'll match it and give you an additional 10% off.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-500 hover:bg-neutral-100 font-semibold px-8 py-3 rounded-lg transition-colors">
                Book Direct & Save
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-semibold px-8 py-3 rounded-lg transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
