'use client'

import React from 'react'

export function SimpleMap() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Location & Directions
          </h2>
          <p className="text-xl text-gray-600">
            Discover how easy it is to reach your tropical paradise
          </p>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
              <p className="text-gray-600">123 Beach Road, Koh Samui, Thailand 84320</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
              <p className="text-gray-600">+66 123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
