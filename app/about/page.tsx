'use client'

import React from 'react'
import { AboutHero } from '@/components/AboutHero'
import { AboutStory } from '@/components/AboutStory'
import { Team } from '@/components/Team'

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: '140px' }}>
      <AboutHero />
      <AboutStory />
      <Team />
    </div>
  )
}
