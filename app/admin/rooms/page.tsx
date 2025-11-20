'use client'

import React from 'react'
import { AdminLayout } from '@/components/AdminLayout'
import { RoomManagement } from '@/components/RoomManagement'

export default function RoomsPage() {
  return (
    <AdminLayout>
      <RoomManagement />
    </AdminLayout>
  )
}

