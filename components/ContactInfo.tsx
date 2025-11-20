'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Wifi, Car, Utensils } from 'lucide-react'

export function ContactInfo() {
  const { language } = useLanguage()

  const contactDetails = [
    {
      icon: MapPin,
      title: language === 'en' ? 'Address' : 'ที่อยู่',
      details: [
        '123 Beach Road',
        'Koh Samui, Thailand 84320',
        language === 'en' ? 'Near Chaweng Beach' : 'ใกล้ชายหาดเฉวง'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: language === 'en' ? 'Phone Numbers' : 'เบอร์โทรศัพท์',
      details: [
        '+66 123 456 789',
        '+66 123 456 790',
        language === 'en' ? '24/7 Concierge' : 'คอนเซียร์จ 24/7'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: language === 'en' ? 'Email Addresses' : 'ที่อยู่อีเมล',
      details: [
        'info@lomabeachresort.com',
        'reservations@lomabeachresort.com',
        'concierge@lomabeachresort.com'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: language === 'en' ? 'Operating Hours' : 'เวลาทำการ',
      details: [
        language === 'en' ? 'Reception: 24/7' : 'แผนกต้อนรับ: 24/7',
        language === 'en' ? 'Spa: 8 AM - 10 PM' : 'สปา: 8:00 - 22:00',
        language === 'en' ? 'Restaurant: 6 AM - 11 PM' : 'ร้านอาหาร: 6:00 - 23:00'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const quickServices = [
    {
      icon: Wifi,
      title: language === 'en' ? 'Free WiFi' : 'WiFi ฟรี',
      description: language === 'en' ? 'High-speed internet throughout the resort' : 'อินเทอร์เน็ตความเร็วสูงทั่วทั้งรีสอร์ท'
    },
    {
      icon: Car,
      title: language === 'en' ? 'Airport Transfer' : 'รับส่งสนามบิน',
      description: language === 'en' ? 'Complimentary shuttle service' : 'บริการรับส่งฟรี'
    },
    {
      icon: Utensils,
      title: language === 'en' ? 'Room Service' : 'บริการห้องพัก',
      description: language === 'en' ? '24/7 dining and beverage service' : 'บริการอาหารและเครื่องดื่ม 24/7'
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
            {language === 'en' ? 'Contact Information' : 'ข้อมูลติดต่อ'}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'All the ways you can reach us and get the information you need'
              : 'ทุกวิธีที่คุณสามารถติดต่อเราและรับข้อมูลที่ต้องการ'
            }
          </p>
        </motion.div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon
            return (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${detail.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-neutral-800 mb-4">
                  {detail.title}
                </h3>
                <div className="space-y-2">
                  {detail.details.map((item, idx) => (
                    <p key={idx} className="text-neutral-600 text-sm">
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Quick Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8 text-neutral-800">
            {language === 'en' ? 'Quick Services' : 'บริการด่วน'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-neutral-50 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h4 className="font-semibold text-neutral-800 mb-2">{service.title}</h4>
                  <p className="text-sm text-neutral-600">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-display font-bold mb-4">
              🚨 {language === 'en' ? 'Emergency Contact' : 'ติดต่อฉุกเฉิน'}
            </h3>
            <p className="text-lg mb-4 opacity-90">
              {language === 'en'
                ? 'For urgent matters or emergencies, call our 24/7 emergency line'
                : 'สำหรับเรื่องเร่งด่วนหรือเหตุฉุกเฉิน โทรสายด่วน 24/7 ของเรา'
              }
            </p>
            <div className="text-3xl font-bold">+66 123 456 999</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
