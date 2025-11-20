'use client'

import React, { useState } from 'react'
import { X, Phone, Mail, Globe, Clock, Star } from 'lucide-react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-logo-gradient text-white py-3 px-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container-custom">
        {/* Main announcement message */}
        <div className="flex items-center justify-center mb-2">
          <div className="flex items-center space-x-2 text-sm font-medium animate-pulse">
            <Star className="w-4 h-4 text-yellow-300" />
            <span>🌴 LIMITED TIME: Book now and get 20% off your stay! Paradise awaits at LOMA BEACH RESORT! 🌴</span>
            <Star className="w-4 h-4 text-yellow-300" />
          </div>
        </div>

        {/* Contact info and controls */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs">
          {/* Left side - Contact info */}
          <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>+66 123 456 789</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span>info@lomabeachresort.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>Check-in: 2:00 PM | Check-out: 11:00 AM</span>
            </div>
          </div>

          {/* Right side - Language and close */}
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <div className="flex items-center space-x-1">
              <Globe className="w-3 h-3" />
              <span>ไทย</span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="Close announcement"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}