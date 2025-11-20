'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Wifi, Car, Coffee, Waves, Users, Bed, Bath, Square } from 'lucide-react'

export function RoomDetails() {
  const roomTypes = [
    {
      name: 'Ocean View Deluxe',
      size: '45 sqm',
      capacity: '2 guests',
      bed: '1 King Bed',
      bathroom: '1 Bathroom',
      price: 250,
      features: [
        'Panoramic ocean views',
        'Private balcony',
        'King-size bed',
        'Mini bar',
        'Air conditioning',
        'Flat-screen TV',
        'Free WiFi',
        'Daily housekeeping',
      ],
      images: [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
    },
    {
      name: 'Beachfront Suite',
      size: '85 sqm',
      capacity: '4 guests',
      bed: '1 King Bed + 1 Sofa Bed',
      bathroom: '2 Bathrooms',
      price: 450,
      features: [
        'Direct beach access',
        'Private terrace',
        'Jacuzzi',
        'Butler service',
        'Living area',
        'Kitchenette',
        'Premium amenities',
        'Concierge service',
      ],
      images: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
    },
    {
      name: 'Presidential Villa',
      size: '200 sqm',
      capacity: '6 guests',
      bed: '2 King Beds + 2 Single Beds',
      bathroom: '3 Bathrooms',
      price: 850,
      features: [
        'Private infinity pool',
        '360-degree ocean views',
        'Chef service',
        'Helicopter pad access',
        'Multiple terraces',
        'Full kitchen',
        'Home theater',
        'Personal butler',
      ],
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ],
    },
  ]

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Room Details & Amenities
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Every room is designed with your comfort and luxury in mind
          </p>
        </motion.div>

        <div className="space-y-16">
          {roomTypes.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Images */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-2 h-96">
                    <img
                      src={room.images[0]}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="space-y-2">
                      <img
                        src={room.images[1]}
                        alt={room.name}
                        className="w-full h-48 object-cover"
                      />
                      <img
                        src={room.images[2]}
                        alt={room.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary-500 text-white px-4 py-2 rounded-full font-semibold">
                    From ${room.price}/night
                  </div>
                </div>

                {/* Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-4 text-neutral-800">
                    {room.name}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Square className="w-5 h-5 text-primary-500" />
                      <span className="text-neutral-600">{room.size}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-primary-500" />
                      <span className="text-neutral-600">{room.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bed className="w-5 h-5 text-primary-500" />
                      <span className="text-neutral-600">{room.bed}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bath className="w-5 h-5 text-primary-500" />
                      <span className="text-neutral-600">{room.bathroom}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-neutral-800">Features & Amenities</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {room.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-neutral-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 btn-outline">
                      View Gallery
                    </button>
                    <button className="flex-1 btn-primary">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
