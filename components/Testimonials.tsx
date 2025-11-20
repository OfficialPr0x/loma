'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export function Testimonials() {
  const { language } = useLanguage()

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'Absolutely magical experience! The beachfront location is breathtaking and the service is impeccable. We felt like royalty during our entire stay.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      rating: 5,
      text: 'The Presidential Villa exceeded all expectations. Private pool, stunning views, and the staff went above and beyond to make our anniversary unforgettable.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Emma Williams',
      location: 'London, UK',
      rating: 5,
      text: 'Perfect blend of luxury and nature. Waking up to ocean sounds and having breakfast on our private balcony was pure bliss. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'David Kim',
      location: 'Seoul, South Korea',
      rating: 5,
      text: 'The attention to detail is remarkable. From the welcome drink to the turndown service, every moment was crafted to perfection. We\'ll definitely be back!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'Lisa Rodriguez',
      location: 'Barcelona, Spain',
      rating: 5,
      text: 'Loma Beach Resort is a true paradise. The beachfront suite was incredible, and the staff made us feel like family. An unforgettable honeymoon!',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'James Thompson',
      location: 'Melbourne, Australia',
      rating: 5,
      text: 'Outstanding service and beautiful accommodations. The resort perfectly balances luxury with the natural beauty of Thailand. A must-visit destination!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
  ]

  const thaiTestimonials = [
    {
      name: 'สมชาย ใจดี',
      location: 'กรุงเทพฯ, ประเทศไทย',
      rating: 5,
      text: 'ประสบการณ์ที่ยอดเยี่ยมมาก! ที่พักริมชายหาดสวยงาม บริการดีเยี่ยม รู้สึกเหมือนเป็นราชาในช่วงที่พัก',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'นางสาวสมใจ รักดี',
      location: 'เชียงใหม่, ประเทศไทย',
      rating: 5,
      text: 'วิลล่าประธานาธิบดีเกินความคาดหวัง สระว่ายน้ำส่วนตัว วิวสวยงาม และพนักงานบริการเกินคาด',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
    {
      name: 'คุณสมศักดิ์ เก่งดี',
      location: 'ภูเก็ต, ประเทศไทย',
      rating: 5,
      text: 'ผสมผสานความหรูหราและธรรมชาติได้อย่างสมบูรณ์แบบ ตื่นขึ้นมาด้วยเสียงคลื่นและทานอาหารเช้าที่ระเบียงส่วนตัว',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    },
  ]

  const currentTestimonials = language === 'th' ? thaiTestimonials : testimonials

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
            What Our Guests Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied guests
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 relative"
            >
              <Quote className="w-8 h-8 text-primary-200 absolute top-4 left-4" />
              
              <div className="flex items-center mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-neutral-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-neutral-800">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-300 fill-current" />
              ))}
            </div>
            <h3 className="text-3xl font-display font-bold mb-2">4.9/5</h3>
            <p className="text-lg opacity-90 mb-4">Based on 500+ guest reviews</p>
            <p className="text-sm opacity-75">
              Rated #1 Beach Resort in Thailand by TripAdvisor
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
