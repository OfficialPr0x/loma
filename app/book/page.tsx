'use client'

import React from 'react'
import { BookingForm } from '@/components/BookingForm'
import { BookingHero } from '@/components/BookingHero'

export default function BookPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: '140px' }}>
      <BookingHero />
      <BookingForm />
    </div>
  )
}
