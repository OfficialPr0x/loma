'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Plane, Car, Ship, Clock, Phone, Mail } from 'lucide-react'

export function InteractiveMap() {
  const [activeLocation, setActiveLocation] = useState('resort')

  const locations = {
    resort: {
      name: 'Loma Beach Resort',
      address: '123 Beach Road, Koh Samui, Thailand 84320',
      description: 'Your luxury beachfront destination',
    },
    airport: {
      name: 'Samui Airport',
      address: 'Ko Samui District, Surat Thani 84320',
      description: '15 minutes by car',
    },
    pier: {
      name: 'Nathon Pier',
      address: 'Nathon, Ko Samui District, Surat Thani',
      description: 'Main ferry terminal',
    },
    town: {
      name: 'Chaweng Town',
      address: 'Chaweng, Ko Samui District, Surat Thani',
      description: 'Shopping and nightlife',
    }
  }

  const transportOptions = [
    {
      icon: Car,
      title: 'Airport Transfer',
      description: 'Complimentary shuttle service',
      duration: '15 minutes',
      price: 'Free',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Plane,
      title: 'Helicopter Transfer',
      description: 'Luxury aerial transport',
      duration: '5 minutes',
      price: '$200',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Ship,
      title: 'Boat Transfer',
      description: 'Scenic coastal journey',
      duration: '30 minutes',
      price: '$50',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Location & Directions
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover how easy it is to reach your tropical paradise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-ocean-100 to-secondary-100 rounded-3xl p-8 h-96 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-ocean-200/30 to-secondary-200/30 rounded-3xl">
                <div className="absolute inset-0 opacity-50"></div>
              </div>

              <div className="relative h-full">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <span className="text-2xl">🏖️</span>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-3 py-1 shadow-lg text-sm font-semibold whitespace-nowrap">
                    Loma Beach Resort
                  </div>
                </motion.div>

                <div className="absolute top-8 right-8">
                  <div 
                    className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => setActiveLocation('airport')}
                  >
                    <span className="text-lg">✈️</span>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8">
                  <div 
                    className="w-12 h-12 bg-ocean-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => setActiveLocation('pier')}
                  >
                    <span className="text-lg">🚢</span>
                  </div>
                </div>

                <div className="absolute top-1/3 right-1/4">
                  <div 
                    className="w-12 h-12 bg-coral-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => setActiveLocation('town')}
                  >
                    <span className="text-lg">🏪</span>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              key={activeLocation}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-neutral-100"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-1">
                    {locations[activeLocation as keyof typeof locations].name}
                  </h3>
                  <p className="text-neutral-600 mb-2">
                    {locations[activeLocation as keyof typeof locations].address}
                  </p>
                  <p className="text-sm text-primary-500 font-medium">
                    {locations[activeLocation as keyof typeof locations].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-neutral-800 mb-6">
              Transportation Options
            </h3>
            
            {transportOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-neutral-800 mb-1">
                        {option.title}
                      </h4>
                      <p className="text-neutral-600 mb-3">
                        {option.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1 text-neutral-500">
                          <Clock className="w-4 h-4" />
                          <span>{option.duration}</span>
                        </div>
                        <div className="text-primary-500 font-semibold">
                          {option.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 text-white"
            >
              <h4 className="text-lg font-semibold mb-4">Need Help Getting Here?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+66 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>concierge@lomabeachresort.com</span>
                </div>
              </div>
              <p className="text-sm opacity-90 mt-4">
                Our concierge team is available 24/7 to assist with transportation arrangements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
