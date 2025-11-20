'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Heart, Globe, Award, Users } from 'lucide-react'

export function AboutStory() {
  const { language } = useLanguage()

  const milestones = [
    {
      year: '2008',
      title: language === 'en' ? 'The Beginning' : 'จุดเริ่มต้น',
      description: language === 'en' 
        ? 'Loma Beach Resort opened its doors with a vision to create the ultimate tropical paradise experience.'
        : 'โลมา บีช รีสอร์ท เปิดประตูต้อนรับด้วยวิสัยทัศน์ในการสร้างประสบการณ์สวรรค์เขตร้อนที่สมบูรณ์แบบ',
      icon: Heart
    },
    {
      year: '2012',
      title: language === 'en' ? 'International Recognition' : 'การยอมรับระดับนานาชาติ',
      description: language === 'en'
        ? 'Awarded "Best Beach Resort in Thailand" by Travel & Leisure Magazine.'
        : 'ได้รับรางวัล "รีสอร์ทริมชายหาดที่ดีที่สุดในประเทศไทย" จากนิตยสาร Travel & Leisure',
      icon: Award
    },
    {
      year: '2018',
      title: language === 'en' ? 'Expansion' : 'การขยายตัว',
      description: language === 'en'
        ? 'Added the Presidential Villa and world-class spa facilities to our luxury offerings.'
        : 'เพิ่มวิลล่าประธานาธิบดีและสิ่งอำนวยความสะดวกสปาระดับโลกให้กับบริการหรูหราของเรา',
      icon: Globe
    },
    {
      year: '2024',
      title: language === 'en' ? 'Digital Innovation' : 'นวัตกรรมดิจิทัล',
      description: language === 'en'
        ? 'Launched our new website and booking system to enhance guest experience.'
        : 'เปิดตัวเว็บไซต์และระบบจองใหม่เพื่อยกระดับประสบการณ์ของแขก',
      icon: Users
    }
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
            {language === 'en' ? 'Our Story' : 'เรื่องราวของเรา'}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'From humble beginnings to becoming Thailand\'s premier beachfront destination'
              : 'จากจุดเริ่มต้นที่เรียบง่ายสู่การเป็นจุดหมายปลายทางริมชายหาดชั้นนำของประเทศไทย'
            }
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
                      <div className={`flex items-center space-x-4 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary-500 mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-display font-semibold text-neutral-800 mb-3">
                            {milestone.title}
                          </h3>
                          <p className="text-neutral-600 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary-500 rounded-full z-10"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-display font-bold mb-6">
              {language === 'en' ? 'Our Mission' : 'พันธกิจของเรา'}
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              {language === 'en'
                ? 'To provide an unparalleled luxury beachfront experience that celebrates the natural beauty of Thailand while delivering world-class service that creates lasting memories for our guests.'
                : 'เพื่อมอบประสบการณ์ริมชายหาดหรูหราที่ไม่มีใครเทียบได้ ซึ่งเฉลิมฉลองความงามตามธรรมชาติของประเทศไทย พร้อมให้บริการระดับโลกที่สร้างความทรงจำที่ยั่งยืนให้กับแขกของเรา'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
