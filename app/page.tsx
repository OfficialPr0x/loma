'use client'

import React from 'react'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Rooms } from '@/components/Rooms'
import { ImageGallery } from '@/components/ImageGallery'
import { Testimonials } from '@/components/Testimonials'
import { SimpleMap } from '@/components/SimpleMap'
import { CTA } from '@/components/CTA'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Rooms />
      <ImageGallery />
      <Testimonials />
      <SimpleMap />
      <CTA />
    </div>
  )
}
