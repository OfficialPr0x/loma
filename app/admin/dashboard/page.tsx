'use client'

import React from 'react'
import { AdminLayout } from '@/components/AdminLayout'
import { DashboardOverview } from '@/components/DashboardOverview'

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <DashboardOverview />
    </AdminLayout>
  )
}

