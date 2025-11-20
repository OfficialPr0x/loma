'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Calendar, Users, User, Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export function BookingForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    checkIn: null as Date | null,
    checkOut: null as Date | null,
    guests: 2,
    roomType: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const roomTypes = [
    { value: 'ocean-view', label: 'Ocean View Deluxe - $250/night' },
    { value: 'beachfront-suite', label: 'Beachfront Suite - $450/night' },
    { value: 'presidential-villa', label: 'Presidential Villa - $850/night' },
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        checkIn: null,
        checkOut: null,
        guests: 2,
        roomType: '',
        name: '',
        email: '',
        phone: '',
        specialRequests: '',
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-display font-bold text-neutral-800 mb-4">
              {t('booking.form.success')}
            </h2>
            <p className="text-lg text-neutral-600">
              We've received your booking inquiry and will contact you shortly to confirm your reservation.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Date Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    <Calendar className="w-5 h-5 inline mr-2" />
                    {t('booking.form.checkin')}
                  </label>
                  <DatePicker
                    selected={formData.checkIn}
                    onChange={(date) => handleInputChange('checkIn', date)}
                    selectsStart
                    startDate={formData.checkIn}
                    endDate={formData.checkOut}
                    minDate={new Date()}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholderText="Select check-in date"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    <Calendar className="w-5 h-5 inline mr-2" />
                    {t('booking.form.checkout')}
                  </label>
                  <DatePicker
                    selected={formData.checkOut}
                    onChange={(date) => handleInputChange('checkOut', date)}
                    selectsEnd
                    startDate={formData.checkIn}
                    endDate={formData.checkOut}
                    minDate={formData.checkIn || new Date()}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholderText="Select check-out date"
                  />
                </div>
              </div>

              {/* Guests and Room Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    <Users className="w-5 h-5 inline mr-2" />
                    {t('booking.form.guests')}
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    {t('booking.form.room')}
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => handleInputChange('roomType', e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select room type</option>
                    {roomTypes.map(room => (
                      <option key={room.value} value={room.value}>{room.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    <User className="w-5 h-5 inline mr-2" />
                    {t('booking.form.name')}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    <Mail className="w-5 h-5 inline mr-2" />
                    {t('booking.form.email')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-3">
                  <Phone className="w-5 h-5 inline mr-2" />
                  {t('booking.form.phone')}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-3">
                  <MessageSquare className="w-5 h-5 inline mr-2" />
                  {t('booking.form.special')}
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Any special requests or requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-dots">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('booking.form.submit')}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-neutral-50 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Cancellation</h3>
              <p className="text-sm text-neutral-600">Free cancellation up to 24 hours before check-in</p>
            </div>
            <div className="text-center p-6 bg-neutral-50 rounded-xl">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-secondary-500" />
              </div>
              <h3 className="font-semibold mb-2">Best Rate Guarantee</h3>
              <p className="text-sm text-neutral-600">We'll match any lower rate you find elsewhere</p>
            </div>
            <div className="text-center p-6 bg-neutral-50 rounded-xl">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-accent-500" />
              </div>
              <h3 className="font-semibold mb-2">Instant Confirmation</h3>
              <p className="text-sm text-neutral-600">Receive confirmation within minutes of booking</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
