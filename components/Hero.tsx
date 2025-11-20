'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, Star, MapPin, Calendar } from 'lucide-react'

export function Hero() {
  const stats = [
    { icon: Star, value: '4.9', label: 'Guest Rating' },
    { icon: MapPin, value: 'Beachfront', label: 'Location' },
    { icon: Calendar, value: '365', label: 'Days Open' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tropical-gradient" style={{ paddingTop: '140px' }}>
      {/* Background Image with Vaporwave Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Loma Beach Resort"
          className="w-full h-full object-cover mix-blend-overlay opacity-60"
        />
      </div>

      {/* Floating Elements - Logo Inspired */}
      <div className="absolute inset-0 z-20">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 360, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary-500/30 to-purple-500/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-secondary-500/30 to-primary-500/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, -180, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-secondary-500/30 rounded-full blur-xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-30 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-8"
          >
            <img
              src="https://res.cloudinary.com/dyrwj6iwl/image/upload/v1759378267/9080e45a-a2e2-482f-9a9b-d47f64395464-removebg-preview_if3dsc.png"
              alt="Loma Beach Resort Logo"
              className="w-32 h-32 md:w-48 md:h-48 mx-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="logo-text text-white drop-shadow-2xl">LIFE'S A BEACH</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              LOMA BEACH RESORT
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
              Where tropical dreams meet vaporwave reality. Experience paradise with a retro-futuristic twist on Thailand's most stunning beaches.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <Link href="/book" className="btn-primary text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-primary-500/25">
              🌴 Book Your Paradise
            </Link>
            <Link href="/rooms" className="btn-outline text-lg px-10 py-4 rounded-full border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm">
              ✨ Explore the Vibe
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-neutral-300">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}