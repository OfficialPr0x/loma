'use client'

import React from 'react'
import { ContactHero } from '@/components/ContactHero'
import { ContactForm } from '@/components/ContactForm'
import { ContactInfo } from '@/components/ContactInfo'

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: '140px' }}>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </div>
  )
}
