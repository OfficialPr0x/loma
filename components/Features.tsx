'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Waves, Crown, Heart, Wifi, Car, Utensils } from 'lucide-react'

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Waves,
      title: t('features.beachfront.title'),
      description: t('features.beachfront.desc'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Crown,
      title: t('features.luxury.title'),
      description: t('features.luxury.desc'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Heart,
      title: t('features.service.title'),
      description: t('features.service.desc'),
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: Wifi,
      title: 'Free WiFi',
      description: 'High-speed internet throughout the resort',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Car,
      title: 'Airport Transfer',
      description: 'Complimentary shuttle service to and from the airport',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Utensils,
      title: 'Fine Dining',
      description: 'World-class restaurant with fresh local ingredients',
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white via-purple-50/30 to-secondary-50/30 relative overflow-hidden">
      {/* Vaporwave Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-logo-gradient rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-ocean-gradient rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-sunset-gradient rounded-full blur-2xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold logo-text mb-6">
            Why Choose LOMA BEACH?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Where tropical paradise meets retro-futuristic vibes. Experience the perfect blend of 
            luxury, comfort, and that unmistakable "LIFE'S A BEACH" energy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="vaporwave-card p-8 text-center group hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-4 text-neutral-800">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-display font-bold mb-4">
              Ready to Experience Paradise?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Book your stay today and discover why guests return year after year
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/book" className="bg-white text-primary-500 hover:bg-neutral-100 font-medium px-8 py-3 rounded-lg transition-colors">
                Book Now
              </a>
              <a href="/rooms" className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-medium px-8 py-3 rounded-lg transition-colors">
                View Rooms
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
