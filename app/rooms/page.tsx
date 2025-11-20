'use client'

import React from 'react'
import { Rooms } from '@/components/Rooms'
import { RoomDetails } from '@/components/RoomDetails'
import { Pricing } from '@/components/Pricing'

export default function RoomsPage() {
  return (
    <div className="min-h-screen" style={{ paddingTop: '140px' }}>
      <Rooms />
      <RoomDetails />
      <Pricing />
    </div>
  )
}
