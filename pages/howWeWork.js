import React from 'react'
import dynamic from 'next/dynamic'

const Nav = dynamic(() => import('../components/Nav'), {
  ssr: false
})
const HeroSection = dynamic(
  () => import('/components/about/howWeWork/HeroSection'),
  {
    ssr: false
  }
)
const WeDesignSection = dynamic(
  () => import('/components/about/howWeWork/WeDesignSection'),
  {
    ssr: false
  }
)
const ProductDevelopmentCycle = dynamic(
  () => import('/components/about/howWeWork/ProductDevelopmentCycle'),
  {
    ssr: false
  }
)
const LangTooSection = dynamic(
  () => import('/components/about/howWeWork/LangToolSection'),
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
      <WeDesignSection />
      <ProductDevelopmentCycle />
      <LangTooSection />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default ourCompany
