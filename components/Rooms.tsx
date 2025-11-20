'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Star, Users, Wifi, Car, Coffee, Waves } from 'lucide-react'

export function Rooms() {
  const { t } = useLanguage()

  const rooms = [
    {
      id: 1,
      name: 'Ocean View Deluxe',
      price: 250,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Spacious room with panoramic ocean views and modern amenities',
      capacity: 2,
      amenities: ['Ocean View', 'King Bed', 'Balcony', 'Mini Bar'],
      rating: 4.9,
      reviews: 127,
    },
    {
      id: 2,
      name: 'Beachfront Suite',
      price: 450,
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Luxurious suite with direct beach access and private terrace',
      capacity: 4,
      amenities: ['Beach Access', 'Private Terrace', 'Jacuzzi', 'Butler Service'],
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: 'Presidential Villa',
      price: 850,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Ultimate luxury with private pool and 360-degree ocean views',
      capacity: 6,
      amenities: ['Private Pool', '360° Views', 'Chef Service', 'Helicopter Pad'],
      rating: 5.0,
      reviews: 34,
    },
  ]

  const amenities = [
    { icon: Wifi, name: 'Free WiFi' },
    { icon: Car, name: 'Airport Transfer' },
    { icon: Coffee, name: 'Room Service' },
    { icon: Waves, name: 'Beach Access' },
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
            {t('rooms.title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {t('rooms.subtitle')}
          </p>
        </motion.div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{room.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {t('rooms.from')} ${room.price}/night
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-display font-semibold text-neutral-800">
                    {room.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-neutral-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{room.capacity}</span>
                  </div>
                </div>
                
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {room.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Link
                    href={`/rooms/${room.id}`}
                    className="flex-1 btn-outline text-center"
                  >
                    {t('rooms.view')}
                  </Link>
                  <Link
                    href={`/book?room=${room.id}`}
                    className="flex-1 btn-primary text-center"
                  >
                    {t('rooms.book')}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8 text-neutral-800">
            All Rooms Include
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon
              return (
                <motion.div
                  key={amenity.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-neutral-700 font-medium">{amenity.name}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
