'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Calendar, Users, Star, Shield } from 'lucide-react'

export function BookingHero() {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: Calendar,
      title: 'Easy Booking',
      description: 'Simple 3-step booking process',
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Dedicated concierge team',
    },
    {
      icon: Star,
      title: 'Best Rates',
      description: 'Guaranteed lowest prices',
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: 'SSL encrypted transactions',
    },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            {t('booking.title')}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t('booking.subtitle')}
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm opacity-90">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
