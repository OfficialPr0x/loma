'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Heart, Globe, Star, Users } from 'lucide-react'

export function AboutHero() {
  const { language } = useLanguage()

  const stats = [
    { icon: Heart, value: '15+', label: 'Years of Excellence' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: Star, value: '4.9', label: 'Guest Rating' },
    { icon: Users, value: '10K+', label: 'Happy Guests' },
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
            {language === 'en' ? 'About Loma Beach Resort' : 'เกี่ยวกับโลมา บีช รีสอร์ท'}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
            {language === 'en' 
              ? 'Where luxury meets nature, and every moment becomes a cherished memory'
              : 'ที่ซึ่งความหรูหราพบกับธรรมชาติ และทุกช่วงเวลากลายเป็นความทรงจำอันล้ำค่า'
            }
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
