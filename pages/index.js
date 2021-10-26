import Head from 'next/head'
import Nav from '../components/Nav'
import HeroSection from '../components/homepage/HeroSection'
import OurServices from '../components/homepage/OurServices'
import PortfolioOne from '../components/homepage/PortfolioOne'
import Benefit from '../components/homepage/BenefitSection'
import PortfolioTwo from '../components/homepage/PortfolioTwo'
import DevelopmentProcess from '../components/homepage/DevelopmentProcess'
import ClientsReview from '../components/homepage/ClientsReview'
import ClientsLogo from '../components/homepage/ClientsLogo'
export default function Home() {
  return (
    <div>
      <Head>
        <title>MernSoft | App Development Company in Dhaka, Bangladesh</title>
        <meta
          name='description'
          content='App Development Company in Dhaka, Bangladesh'
        />
      </Head>
      <Nav />
      <HeroSection />
      <OurServices />
      <PortfolioOne />
      <Benefit />
      <PortfolioTwo />
      <DevelopmentProcess />
      <ClientsReview />
      <ClientsLogo />
    </div>
  )
}
