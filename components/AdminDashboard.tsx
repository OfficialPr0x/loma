'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  XCircle,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Bell
} from 'lucide-react'

interface Booking {
  id: string
  guestName: string
  email: string
  phone: string
  checkIn: string
  checkOut: string
  roomType: string
  guests: number
  totalAmount: number
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  specialRequests: string
  createdAt: string
}

export function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)

  // Mock data - in real app, this would come from API
  useEffect(() => {
    const mockBookings: Booking[] = [
      {
        id: '1',
        guestName: 'Sarah Johnson',
        email: 'sarah.johnson@email.com',
        phone: '+1-555-0123',
        checkIn: '2024-01-15',
        checkOut: '2024-01-18',
        roomType: 'Ocean View Deluxe',
        guests: 2,
        totalAmount: 750,
        status: 'confirmed',
        specialRequests: 'Anniversary celebration',
        createdAt: '2024-01-10'
      },
      {
        id: '2',
        guestName: 'Michael Chen',
        email: 'm.chen@email.com',
        phone: '+65-9123-4567',
        checkIn: '2024-01-20',
        checkOut: '2024-01-25',
        roomType: 'Presidential Villa',
        guests: 4,
        totalAmount: 4250,
        status: 'pending',
        specialRequests: 'Business retreat',
        createdAt: '2024-01-12'
      },
      {
        id: '3',
        guestName: 'Emma Williams',
        email: 'emma.w@email.com',
        phone: '+44-20-7946-0958',
        checkIn: '2024-01-22',
        checkOut: '2024-01-24',
        roomType: 'Beachfront Suite',
        guests: 2,
        totalAmount: 900,
        status: 'completed',
        specialRequests: 'Honeymoon',
        createdAt: '2024-01-08'
      }
    ]
    setBookings(mockBookings)
    setFilteredBookings(mockBookings)
  }, [])

  // Filter bookings
  useEffect(() => {
    let filtered = bookings

    if (searchTerm) {
      filtered = filtered.filter(booking =>
        booking.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.roomType.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(booking => booking.status === statusFilter)
    }

    setFilteredBookings(filtered)
  }, [bookings, searchTerm, statusFilter])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="w-4 h-4" />
      case 'pending': return <Clock className="w-4 h-4" />
      case 'cancelled': return <XCircle className="w-4 h-4" />
      case 'completed': return <CheckCircle className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const stats = {
    totalBookings: bookings.length,
    totalRevenue: bookings.reduce((sum, booking) => sum + booking.totalAmount, 0),
    confirmedBookings: bookings.filter(b => b.status === 'confirmed').length,
    pendingBookings: bookings.filter(b => b.status === 'pending').length
  }

  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-display font-bold text-neutral-800">
                Booking Management
              </h1>
              <p className="text-neutral-600">Manage all guest reservations and inquiries</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-primary flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Export</span>
              </button>
              <div className="relative">
                <Bell className="w-6 h-6 text-neutral-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-600">Total Bookings</p>
                  <p className="text-2xl font-bold text-neutral-800">{stats.totalBookings}</p>
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-500" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-neutral-800">${stats.totalRevenue.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-600">Confirmed</p>
                  <p className="text-2xl font-bold text-neutral-800">{stats.confirmedBookings}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-600">Pending</p>
                  <p className="text-2xl font-bold text-neutral-800">{stats.pendingBookings}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search bookings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </motion.div>

        {/* Bookings Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">Guest</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">Dates</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">Room</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {filteredBookings.map((booking, index) => (
                  <motion.tr
                    key={booking.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="hover:bg-neutral-50"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-neutral-800">{booking.guestName}</p>
                        <p className="text-sm text-neutral-600">{booking.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm text-neutral-800">{booking.checkIn}</p>
                        <p className="text-sm text-neutral-600">to {booking.checkOut}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm text-neutral-800">{booking.roomType}</p>
                        <p className="text-sm text-neutral-600">{booking.guests} guests</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-neutral-800">${booking.totalAmount}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                        {getStatusIcon(booking.status)}
                        <span className="capitalize">{booking.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setSelectedBooking(booking)}
                          className="p-2 text-neutral-600 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-neutral-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-neutral-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Booking Detail Modal */}
        {selectedBooking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedBooking(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-display font-bold text-neutral-800">
                  Booking Details
                </h3>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="p-2 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-600 mb-1">Guest Name</label>
                    <p className="text-neutral-800">{selectedBooking.guestName}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-600 mb-1">Email</label>
                    <p className="text-neutral-800">{selectedBooking.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-600 mb-1">Phone</label>
                    <p className="text-neutral-800">{selectedBooking.phone}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-600 mb-1">Room Type</label>
                    <p className="text-neutral-800">{selectedBooking.roomType}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-600 mb-1">Check-in</label>
                    <p className="text-neutral-800">{selectedBooking.checkIn}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-600 mb-1">Check-out</label>
                    <p className="text-neutral-800">{selectedBooking.checkOut}</p>
                  </div>
                </div>

                {selectedBooking.specialRequests && (
                  <div>
                    <label className="block text-sm font-semibold text-neutral-600 mb-1">Special Requests</label>
                    <p className="text-neutral-800">{selectedBooking.specialRequests}</p>
                  </div>
                )}

                <div className="flex space-x-4">
                  <button className="btn-primary">Confirm Booking</button>
                  <button className="btn-outline">Edit Details</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
