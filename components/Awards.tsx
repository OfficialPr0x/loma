'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Award, Star, Trophy, Medal } from 'lucide-react'

export function Awards() {
  const { language } = useLanguage()

  const awards = [
    {
      year: '2024',
      title: language === 'en' ? 'Best Luxury Beach Resort' : 'รีสอร์ทริมชายหาดหรูหราที่ดีที่สุด',
      organization: 'Travel + Leisure',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      year: '2023',
      title: language === 'en' ? 'Excellence in Service' : 'ความเป็นเลิศในการบริการ',
      organization: 'Condé Nast Traveler',
      icon: Star,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2023',
      title: language === 'en' ? 'Top Spa Resort' : 'รีสอร์ทสปาชั้นนำ',
      organization: 'Spa & Wellness Awards',
      icon: Award,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2022',
      title: language === 'en' ? 'Sustainable Tourism Award' : 'รางวัลการท่องเที่ยวอย่างยั่งยืน',
      organization: 'Green Globe',
      icon: Medal,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            {language === 'en' ? 'Awards & Recognition' : 'รางวัลและการยอมรับ'}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Recognized globally for our commitment to excellence and exceptional guest experiences'
              : 'ได้รับการยอมรับทั่วโลกสำหรับความมุ่งมั่นในการเป็นเลิศและประสบการณ์แขกที่ยอดเยี่ยม'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon
            return (
              <motion.div
                key={`${award.year}-${award.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center group hover:shadow-xl border border-gray-100"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  {award.year}
                </div>
                
                <h3 className="text-lg font-display font-semibold text-neutral-800 mb-3 leading-tight">
                  {award.title}
                </h3>
                
                <p className="text-neutral-600 font-medium">
                  {award.organization}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

