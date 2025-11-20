'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Mail, Phone, Award, Star, Users } from 'lucide-react'

export function Team() {
  const { language } = useLanguage()

  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      position: language === 'en' ? 'General Manager' : 'ผู้จัดการทั่วไป',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: language === 'en' 
        ? 'With over 15 years in luxury hospitality, Sarah ensures every guest receives exceptional service.'
        : 'ด้วยประสบการณ์มากกว่า 15 ปีในด้านการต้อนรับหรูหรา ซาร่าห์ทำให้แน่ใจว่าแขกทุกคนได้รับบริการที่ยอดเยี่ยม',
      email: 'sarah@lomabeachresort.com',
      phone: '+66 123 456 789',
      specialties: [language === 'en' ? 'Guest Relations' : 'ความสัมพันธ์แขก', language === 'en' ? 'Operations' : 'การดำเนินงาน']
    },
    {
      name: 'James Thompson',
      position: language === 'en' ? 'Head Chef' : 'หัวหน้าเชฟ',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: language === 'en'
        ? 'Award-winning chef specializing in Thai fusion cuisine with international influences.'
        : 'เชฟผู้ได้รับรางวัล ผู้เชี่ยวชาญด้านอาหารฟิวชั่นไทยที่มีอิทธิพลจากนานาชาติ',
      email: 'james@lomabeachresort.com',
      phone: '+66 123 456 790',
      specialties: [language === 'en' ? 'Thai Fusion' : 'ฟิวชั่นไทย', language === 'en' ? 'Fine Dining' : 'อาหารหรู']
    },
    {
      name: 'Maria Rodriguez',
      position: language === 'en' ? 'Spa Director' : 'ผู้อำนวยการสปา',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: language === 'en'
        ? 'Wellness expert with certifications in traditional Thai massage and modern spa therapies.'
        : 'ผู้เชี่ยวชาญด้านสุขภาพที่มีใบรับรองในการนวดไทยแบบดั้งเดิมและการบำบัดสปาสมัยใหม่',
      email: 'maria@lomabeachresort.com',
      phone: '+66 123 456 791',
      specialties: [language === 'en' ? 'Thai Massage' : 'นวดไทย', language === 'en' ? 'Wellness' : 'สุขภาพ']
    },
    {
      name: 'David Kim',
      position: language === 'en' ? 'Concierge Manager' : 'ผู้จัดการคอนเซียร์จ',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: language === 'en'
        ? 'Local expert who knows all the hidden gems and can arrange any experience you desire.'
        : 'ผู้เชี่ยวชาญท้องถิ่นที่รู้จักสถานที่ลับๆ และสามารถจัดประสบการณ์ที่คุณต้องการได้',
      email: 'david@lomabeachresort.com',
      phone: '+66 123 456 792',
      specialties: [language === 'en' ? 'Local Tours' : 'ทัวร์ท้องถิ่น', language === 'en' ? 'Events' : 'งานกิจกรรม']
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            {language === 'en' ? 'Meet Our Team' : 'พบกับทีมของเรา'}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'The passionate professionals who make your stay unforgettable'
              : 'ผู้เชี่ยวชาญที่มีความหลงใหลที่ทำให้การพักของคุณยากจะลืม'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center group hover:shadow-2xl"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold text-neutral-800 mb-2">
                {member.name}
              </h3>
              <p className="text-primary-500 font-medium mb-4">
                {member.position}
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {member.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2 text-sm text-neutral-600">
                  <Mail className="w-4 h-4" />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-neutral-600">
                  <Phone className="w-4 h-4" />
                  <span>{member.phone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-500" />
            </div>
            <h4 className="text-2xl font-bold text-neutral-800 mb-2">50+</h4>
            <p className="text-neutral-600">
              {language === 'en' ? 'Years Combined Experience' : 'ปีประสบการณ์รวม'}
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-secondary-500" />
            </div>
            <h4 className="text-2xl font-bold text-neutral-800 mb-2">15+</h4>
            <p className="text-neutral-600">
              {language === 'en' ? 'International Awards' : 'รางวัลระดับนานาชาติ'}
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-coral-500" />
            </div>
            <h4 className="text-2xl font-bold text-neutral-800 mb-2">100%</h4>
            <p className="text-neutral-600">
              {language === 'en' ? 'Guest Satisfaction' : 'ความพึงพอใจของแขก'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
