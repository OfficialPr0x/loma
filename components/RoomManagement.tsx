'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Bed, 
  Users, 
  Square, 
  Bath, 
  Wifi, 
  Car, 
  Coffee, 
  Waves,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react'

export function RoomManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const rooms = [
    {
      id: 1,
      name: 'Ocean View Deluxe',
      type: 'Deluxe',
      size: '45 sqm',
      capacity: 2,
      bed: '1 King Bed',
      bathroom: '1 Bathroom',
      price: 250,
      status: 'available',
      amenities: ['Ocean View', 'King Bed', 'Balcony', 'Mini Bar', 'WiFi', 'AC'],
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      occupancy: 0,
      maintenance: false
    },
    {
      id: 2,
      name: 'Beachfront Suite',
      type: 'Suite',
      size: '85 sqm',
      capacity: 4,
      bed: '1 King Bed + 1 Sofa Bed',
      bathroom: '2 Bathrooms',
      price: 450,
      status: 'occupied',
      amenities: ['Beach Access', 'Private Terrace', 'Jacuzzi', 'Butler Service', 'WiFi', 'AC'],
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      occupancy: 2,
      maintenance: false
    },
    {
      id: 3,
      name: 'Presidential Villa',
      type: 'Villa',
      size: '200 sqm',
      capacity: 6,
      bed: '2 King Beds + 2 Single Beds',
      bathroom: '3 Bathrooms',
      price: 850,
      status: 'maintenance',
      amenities: ['Private Pool', '360° Views', 'Chef Service', 'Helicopter Pad', 'WiFi', 'AC'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      occupancy: 0,
      maintenance: true
    },
    {
      id: 4,
      name: 'Garden View Standard',
      type: 'Standard',
      size: '35 sqm',
      capacity: 2,
      bed: '1 Queen Bed',
      bathroom: '1 Bathroom',
      price: 180,
      status: 'available',
      amenities: ['Garden View', 'Queen Bed', 'WiFi', 'AC'],
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      occupancy: 0,
      maintenance: false
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800'
      case 'occupied': return 'bg-blue-100 text-blue-800'
      case 'maintenance': return 'bg-yellow-100 text-yellow-800'
      case 'cleaning': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available': return <CheckCircle className="w-4 h-4" />
      case 'occupied': return <Users className="w-4 h-4" />
      case 'maintenance': return <Clock className="w-4 h-4" />
      case 'cleaning': return <Waves className="w-4 h-4" />
      default: return <XCircle className="w-4 h-4" />
    }
  }

  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || room.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900">Room Management</h1>
          <p className="text-gray-600 mt-2">Manage all resort rooms, availability, and maintenance</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Room</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search rooms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
            <option value="maintenance">Maintenance</option>
            <option value="cleaning">Cleaning</option>
          </select>
        </div>
      </div>

      {/* Room Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Rooms</p>
              <p className="text-3xl font-bold text-gray-900">{rooms.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Bed className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Available</p>
              <p className="text-3xl font-bold text-green-600">
                {rooms.filter(r => r.status === 'available').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Occupied</p>
              <p className="text-3xl font-bold text-blue-600">
                {rooms.filter(r => r.status === 'occupied').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Maintenance</p>
              <p className="text-3xl font-bold text-yellow-600">
                {rooms.filter(r => r.status === 'maintenance').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div className="relative">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(room.status)}`}>
                  {getStatusIcon(room.status)}
                  <span className="capitalize">{room.status}</span>
                </span>
              </div>
              {room.maintenance && (
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Maintenance
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-display font-semibold text-gray-800">
                  {room.name}
                </h3>
                <span className="text-2xl font-bold text-primary-500">
                  ${room.price}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Square className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{room.size}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{room.capacity} guests</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bed className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{room.bed}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bath className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{room.bathroom}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Amenities:</p>
                <div className="flex flex-wrap gap-1">
                  {room.amenities.slice(0, 4).map((amenity) => (
                    <span
                      key={amenity}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 4 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      +{room.amenities.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 btn-outline text-sm py-2">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </button>
                <button className="flex-1 btn-primary text-sm py-2">
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </button>
                <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

