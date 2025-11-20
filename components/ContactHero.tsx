'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function ContactHero() {
  const { language } = useLanguage()

  const contactMethods = [
    {
      icon: Phone,
      title: language === 'en' ? 'Call Us' : 'โทรหาเรา',
      description: language === 'en' ? 'Speak directly with our team' : 'พูดคุยโดยตรงกับทีมของเรา',
      value: '+66 123 456 789',
      action: 'tel:+66123456789'
    },
    {
      icon: Mail,
      title: language === 'en' ? 'Email Us' : 'ส่งอีเมล',
      description: language === 'en' ? 'Get a detailed response' : 'ได้รับคำตอบที่ละเอียด',
      value: 'info@lomabeachresort.com',
      action: 'mailto:info@lomabeachresort.com'
    },
    {
      icon: MapPin,
      title: language === 'en' ? 'Visit Us' : 'เยี่ยมเรา',
      description: language === 'en' ? 'Come experience paradise' : 'มาสัมผัสสวรรค์',
      value: '123 Beach Road, Koh Samui',
      action: '#'
    },
    {
      icon: Clock,
      title: language === 'en' ? '24/7 Support' : 'สนับสนุน 24/7',
      description: language === 'en' ? 'Always here to help' : 'พร้อมช่วยเหลือเสมอ',
      value: language === 'en' ? 'Round the clock' : 'ตลอด 24 ชั่วโมง',
      action: '#'
    }
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
          className="text-center text-white mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            {language === 'en' ? 'Get in Touch' : 'ติดต่อเรา'}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'We\'re here to help make your dream vacation a reality. Reach out to us anytime.'
              : 'เราอยู่ที่นี่เพื่อช่วยให้วันหยุดในฝันของคุณเป็นจริง ติดต่อเราได้ตลอดเวลา'
            }
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.title}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                <p className="text-sm opacity-90 mb-3">{method.description}</p>
                <p className="text-white font-medium">{method.value}</p>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
