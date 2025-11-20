'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Menu, X, Globe } from 'lucide-react'
import { AnnouncementBar } from './AnnouncementBar'

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en')
  }

  const navItems = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.rooms', href: '/rooms' },
    { key: 'nav.book', href: '/book' },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.contact', href: '/contact' },
  ]

  return (
    <>
      {/* FOMO Announcement Bar */}
      <AnnouncementBar />

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
        style={{ top: '60px' }}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-logo-gradient rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <h1 className="text-xl font-display font-bold logo-text">
                  LOMA BEACH
                </h1>
                <p className="text-xs text-neutral-500 font-medium">
                  {language === 'en' ? "LIFE'S A BEACH" : 'ชีวิตคือชายหาด'}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200 relative group"
                >
                  {t(item.key)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-logo-gradient transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA and Language */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">ไทย</span>
              </button>
              <Link
                href="/book"
                className="btn-primary text-sm px-6 py-2 rounded-full"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-500 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200 py-2"
                  >
                    {t(item.key)}
                  </Link>
                ))}
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">ไทย</span>
                  </button>
                  <Link
                    href="/book"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary text-sm px-6 py-2 rounded-full"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}