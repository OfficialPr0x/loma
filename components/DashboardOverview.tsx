'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Bed, 
  Star,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

export function DashboardOverview() {
  const stats = [
    {
      name: 'Total Bookings',
      value: '247',
      change: '+12%',
      changeType: 'positive',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Revenue',
      value: '$89,420',
      change: '+8.2%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Active Guests',
      value: '156',
      change: '+23%',
      changeType: 'positive',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Occupancy Rate',
      value: '87%',
      change: '+5.1%',
      changeType: 'positive',
      icon: Bed,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const recentBookings = [
    {
      id: 'LB-2024-001',
      guest: 'Sarah Johnson',
      room: 'Ocean View Deluxe',
      checkIn: '2024-01-15',
      checkOut: '2024-01-18',
      status: 'confirmed',
      amount: 750
    },
    {
      id: 'LB-2024-002',
      guest: 'Michael Chen',
      room: 'Presidential Villa',
      checkIn: '2024-01-20',
      checkOut: '2024-01-25',
      status: 'pending',
      amount: 4250
    },
    {
      id: 'LB-2024-003',
      guest: 'Emma Williams',
      room: 'Beachfront Suite',
      checkIn: '2024-01-22',
      checkOut: '2024-01-24',
      status: 'completed',
      amount: 900
    },
    {
      id: 'LB-2024-004',
      guest: 'David Kim',
      room: 'Ocean View Deluxe',
      checkIn: '2024-01-25',
      checkOut: '2024-01-28',
      status: 'cancelled',
      amount: 750
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="w-4 h-4" />
      case 'pending': return <Clock className="w-4 h-4" />
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'cancelled': return <XCircle className="w-4 h-4" />
      default: return <AlertCircle className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold logo-text">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening at <span className="font-semibold">LOMA BEACH</span> today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    {stat.changeType === 'positive' ? (
                      <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">vs last month</span>
                  </div>
                </div>
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-display font-bold text-gray-900">Recent Bookings</h2>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {recentBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="font-semibold text-gray-900">{booking.guest}</p>
                      <p className="text-sm text-gray-600">{booking.room}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>{booking.checkIn} - {booking.checkOut}</span>
                    <span>${booking.amount}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                    {getStatusIcon(booking.status)}
                    <span className="capitalize">{booking.status}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <h2 className="text-xl font-display font-bold text-gray-900 mb-6">Quick Actions</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors text-left">
              <Calendar className="w-8 h-8 text-primary-600 mb-2" />
              <p className="font-semibold text-gray-900">New Booking</p>
              <p className="text-sm text-gray-600">Create reservation</p>
            </button>
            
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-left">
              <Users className="w-8 h-8 text-green-600 mb-2" />
              <p className="font-semibold text-gray-900">Check-in</p>
              <p className="text-sm text-gray-600">Guest arrival</p>
            </button>
            
            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left">
              <Bed className="w-8 h-8 text-blue-600 mb-2" />
              <p className="font-semibold text-gray-900">Room Status</p>
              <p className="text-sm text-gray-600">Update availability</p>
            </button>
            
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-left">
              <Star className="w-8 h-8 text-purple-600 mb-2" />
              <p className="font-semibold text-gray-900">Reviews</p>
              <p className="text-sm text-gray-600">Guest feedback</p>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
      >
        <h2 className="text-xl font-display font-bold text-gray-900 mb-6">Performance Metrics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">4.9/5</h3>
            <p className="text-gray-600">Average Rating</p>
            <p className="text-sm text-green-600 mt-1">+0.2 from last month</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">92%</h3>
            <p className="text-gray-600">Guest Satisfaction</p>
            <p className="text-sm text-blue-600 mt-1">+3% from last month</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">$362</h3>
            <p className="text-gray-600">Avg Revenue/Booking</p>
            <p className="text-sm text-purple-600 mt-1">+$12 from last month</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

