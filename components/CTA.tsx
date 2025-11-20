'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Calendar, Phone, Mail, MapPin } from 'lucide-react'

export function CTA() {
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: '+66 123 456 789',
      action: 'tel:+66123456789',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'info@lomabeachresort.com',
      action: 'mailto:info@lomabeachresort.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: '123 Beach Road, Koh Samui',
      action: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 relative overflow-hidden">
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
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready for Paradise?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Book your dream vacation today and experience the magic of Loma Beach Resort
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Booking CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Calendar className="w-16 h-16 text-white mx-auto lg:mx-0 mb-6" />
              <h3 className="text-2xl font-display font-bold mb-4">
                Book Your Stay
              </h3>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                Secure your spot at paradise with our easy online booking system. 
                Best rates guaranteed when you book directly with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="bg-white text-primary-600 hover:bg-neutral-100 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
                >
                  Book Now
                </Link>
                <Link
                  href="/rooms"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
                >
                  View Rooms
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-center mb-8">
              Get in Touch
            </h3>
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={method.title}
                  href={method.action}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{method.title}</h4>
                    <p className="opacity-90">{method.description}</p>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        {/* Special Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-bold mb-4">
              🌟 Special Offer
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Book 3 nights or more and get 20% off your stay + complimentary airport transfer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book?offer=extended"
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Claim Offer
              </Link>
              <span className="text-sm opacity-75 self-center">
                *Valid until December 31, 2024
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
