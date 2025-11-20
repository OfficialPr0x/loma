'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth) {
      router.push('/admin/dashboard')
    } else {
      router.push('/admin/login')
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="loading-dots mx-auto mb-4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  )
}
