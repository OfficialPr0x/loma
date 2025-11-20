'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'th'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation keys
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.rooms': 'Rooms & Pricing',
    'nav.book': 'Book Now',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Paradise Awaits at Loma Beach Resort',
    'hero.subtitle': 'Experience luxury beachfront accommodation with breathtaking ocean views and world-class service',
    'hero.cta': 'Book Your Stay',
    'hero.explore': 'Explore Rooms',
    
    // Features
    'features.title': 'Why Choose Loma Beach Resort?',
    'features.beachfront.title': 'Beachfront Location',
    'features.beachfront.desc': 'Wake up to stunning ocean views and direct beach access',
    'features.luxury.title': 'Luxury Amenities',
    'features.luxury.desc': 'Premium facilities and services for the ultimate comfort',
    'features.service.title': 'Exceptional Service',
    'features.service.desc': 'Dedicated staff committed to making your stay unforgettable',
    
    // Rooms
    'rooms.title': 'Luxury Accommodations',
    'rooms.subtitle': 'Choose from our carefully curated selection of beachfront rooms and suites',
    'rooms.view': 'View Details',
    'rooms.book': 'Book Now',
    'rooms.from': 'From',
    
    // Booking
    'booking.title': 'Book Your Paradise Getaway',
    'booking.subtitle': 'Secure your spot at Loma Beach Resort with our easy booking system',
    'booking.form.checkin': 'Check-in Date',
    'booking.form.checkout': 'Check-out Date',
    'booking.form.guests': 'Number of Guests',
    'booking.form.room': 'Room Type',
    'booking.form.name': 'Full Name',
    'booking.form.email': 'Email Address',
    'booking.form.phone': 'Phone Number',
    'booking.form.special': 'Special Requests',
    'booking.form.submit': 'Send Inquiry',
    'booking.form.success': 'Thank you! We\'ll contact you within 24 hours.',
    
    // Footer
    'footer.about': 'About Loma Beach Resort',
    'footer.about.desc': 'Your gateway to paradise on the beautiful beaches of Thailand.',
    'footer.contact': 'Contact Information',
    'footer.follow': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong. Please try again.',
    'common.success': 'Success!',
  },
  th: {
    // Navigation
    'nav.home': 'หน้าแรก',
    'nav.rooms': 'ห้องพัก & ราคา',
    'nav.book': 'จองเลย',
    'nav.about': 'เกี่ยวกับเรา',
    'nav.contact': 'ติดต่อ',
    
    // Hero Section
    'hero.title': 'สวรรค์รอคุณอยู่ที่โลมา บีช รีสอร์ท',
    'hero.subtitle': 'สัมผัสความหรูหราของที่พักริมชายหาด พร้อมวิวทะเลที่สวยงามและบริการระดับโลก',
    'hero.cta': 'จองที่พักของคุณ',
    'hero.explore': 'ดูห้องพัก',
    
    // Features
    'features.title': 'ทำไมต้องเลือกโลมา บีช รีสอร์ท?',
    'features.beachfront.title': 'ที่ตั้งริมชายหาด',
    'features.beachfront.desc': 'ตื่นขึ้นมาพร้อมวิวทะเลที่สวยงามและเข้าถึงชายหาดได้โดยตรง',
    'features.luxury.title': 'สิ่งอำนวยความสะดวกหรูหรา',
    'features.luxury.desc': 'สิ่งอำนวยความสะดวกและบริการระดับพรีเมียมเพื่อความสะดวกสบายสูงสุด',
    'features.service.title': 'บริการที่ยอดเยี่ยม',
    'features.service.desc': 'พนักงานที่ทุ่มเทเพื่อทำให้การพักของคุณเป็นประสบการณ์ที่ยากจะลืม',
    
    // Rooms
    'rooms.title': 'ที่พักหรูหรา',
    'rooms.subtitle': 'เลือกจากห้องพักและสวีทริมชายหาดที่คัดสรรมาอย่างดี',
    'rooms.view': 'ดูรายละเอียด',
    'rooms.book': 'จองเลย',
    'rooms.from': 'เริ่มต้น',
    
    // Booking
    'booking.title': 'จองการเดินทางไปสวรรค์ของคุณ',
    'booking.subtitle': 'จองที่พักของคุณที่โลมา บีช รีสอร์ทด้วยระบบจองที่ง่ายดาย',
    'booking.form.checkin': 'วันที่เช็คอิน',
    'booking.form.checkout': 'วันที่เช็คเอาท์',
    'booking.form.guests': 'จำนวนแขก',
    'booking.form.room': 'ประเภทห้อง',
    'booking.form.name': 'ชื่อ-นามสกุล',
    'booking.form.email': 'อีเมล',
    'booking.form.phone': 'เบอร์โทรศัพท์',
    'booking.form.special': 'คำขอพิเศษ',
    'booking.form.submit': 'ส่งคำขอ',
    'booking.form.success': 'ขอบคุณ! เราจะติดต่อคุณภายใน 24 ชั่วโมง',
    
    // Footer
    'footer.about': 'เกี่ยวกับโลมา บีช รีสอร์ท',
    'footer.about.desc': 'ประตูสู่สวรรค์บนชายหาดที่สวยงามของประเทศไทย',
    'footer.contact': 'ข้อมูลติดต่อ',
    'footer.follow': 'ติดตามเรา',
    'footer.rights': 'สงวนลิขสิทธิ์ทั้งหมด',
    
    // Common
    'common.loading': 'กำลังโหลด...',
    'common.error': 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง',
    'common.success': 'สำเร็จ!',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Check for saved language preference or browser language
    const savedLang = localStorage.getItem('loma-language') as Language
    const browserLang = navigator.language.startsWith('th') ? 'th' : 'en'
    setLanguage(savedLang || browserLang)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('loma-language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
