import Head from 'next/head'
import dynamic from 'next/dynamic'

const Nav = dynamic(() => import('../components/Nav'), {
  ssr: false
})
const HeroSection = dynamic(
  () => import('../components/homepage/HeroSection'),
  {
    ssr: false
  }
)
const OurServices = dynamic(
  () => import('../components/homepage/OurServices'),
  {
    ssr: false
  }
)
const PortfolioOne = dynamic(
  () => import('../components/homepage/PortfolioOne'),
  {
    ssr: false
  }
)
const Benefit = dynamic(() => import('../components/homepage/BenefitSection'), {
  ssr: false
})
const PortfolioTwo = dynamic(
  () => import('../components/homepage/PortfolioTwo'),
  {
    ssr: false
  }
)
const DevelopmentProcess = dynamic(
  () => import('../components/homepage/DevelopmentProcess'),
  {
    ssr: false
  }
)
const ClientsReview = dynamic(
  () => import('../components/homepage/ClientsReview'),
  {
    ssr: false
  }
)
const ClientsLogo = dynamic(
  () => import('../components/homepage/ClientsLogo'),
  {
    ssr: false
  }
)
const Solution = dynamic(
  () => import('../components/homepage/SolutionSection'),
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
      <Solution />
      <Blog />

      <ContactUs />
      <Footer />
    </div>
  )
}
