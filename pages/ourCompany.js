import React from 'react'
import dynamic from 'next/dynamic'

const Nav = dynamic(() => import('../components/Nav'), {
  ssr: false
})
const HeroSection = dynamic(
  () => import('/components/about/ourCompany/HeroSection'),
  {
    ssr: false
  }
)
const Achievements = dynamic(
  () => import('/components/about/ourCompany/Achievements'),
  {
    ssr: false
  }
)
const SuccessFactor = dynamic(
  () => import('/components/about/ourCompany/SuccessFactor'),
  {
    ssr: false
  }
)
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
      <Achievements />
      <SuccessFactor />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default ourCompany
