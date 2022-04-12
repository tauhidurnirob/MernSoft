import React from 'react'
import dynamic from 'next/dynamic'

const Nav = dynamic(() => import('../components/Nav'), {
  ssr: false
})
const HeroSection = dynamic(
  () => import('/components/about/career/HeroSection'),
  {
    ssr: false
  }
)
const WhyMernSoft = dynamic(
  () => import('/components/about/career/WhyMernSoft'),
  {
    ssr: false
  }
)
const CareerDestination = dynamic(
  () => import('/components/about/career/CareerDestination'),
  {
    ssr: false
  }
)
const HiringSection = dynamic(
  () => import('/components/about/career/HiringSection'),
  {
    ssr: false
  }
)

const Blog = dynamic(() => import('../components/homepage/Blog'), {
  ssr: false
})

const ContactUs = dynamic(() => import('../components/ContactUs'), {
  ssr: false
})

const Footer = dynamic(() => import('../components/Footer'), {
  ssr: false
})
const ourCompany = () => {
  return (
    <div>
      <Nav />
      <HeroSection />
      <WhyMernSoft />
      <CareerDestination />
      <HiringSection />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default ourCompany
