'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Footer() {
  const { language, t } = useLanguage()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  const quickLinks = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.rooms', href: '/rooms' },
    { key: 'nav.book', href: '/book' },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.contact', href: '/contact' },
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-logo-gradient rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">LOMA BEACH</h3>
                <p className="text-sm text-neutral-400 font-medium">
                  {language === 'en' ? "LIFE'S A BEACH" : 'ชีวิตคือชายหาด'}
                </p>
              </div>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              {t('footer.about.desc')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-400 transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">{t('footer.contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-neutral-300">
                    123 Beach Road<br />
                    Koh Samui, Thailand 84320
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+66123456789"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  +66 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@lomabeachresort.com"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  info@lomabeachresort.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-neutral-300">
                    Check-in: 2:00 PM<br />
                    Check-out: 11:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © 2024 Loma Beach Resort. {t('footer.rights')}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-neutral-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
