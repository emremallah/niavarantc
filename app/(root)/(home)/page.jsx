import AboutUs from '@/components/aboutus'
import Courses from '@/components/courses'
import Hero from '@/components/hero'
import KarDaneshSection from '@/components/kardanesh'
import WhyNiavaran from '@/components/whyus'
import React from 'react'

function page() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Courses />
      <KarDaneshSection />
      <WhyNiavaran />
    </div>
  )
}

export default page
