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
const OurJourney = dynamic(
  () => import('/components/about/ourCompany/OurJourney'),
  {
    ssr: false
  }
)
const OurDevProcess = dynamic(
  () => import('/components/about/ourCompany/OurDevProcess'),
  {
    ssr: false
  }
)
const FreqAskQuestion = dynamic(
  () => import('/components/about/ourCompany/FreqAskQuestion'),
  {
    ssr: false
  }
)
const ImageGallery = dynamic(
  () => import('/components/about/ourCompany/ImageGallery'),
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
      <OurJourney />
      <OurDevProcess />
      <FreqAskQuestion />
      <ImageGallery />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default ourCompany
