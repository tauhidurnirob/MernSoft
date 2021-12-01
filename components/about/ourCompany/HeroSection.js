import React from 'react'
import Scroll, {animateScroll as scroll} from 'react-scroll'
const HeroSection = () => {
  const Link = Scroll.Link
  return (
    <div className='custom-container'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex-1 my-auto'>
          <h1 className='title'>
            Best
            <span className='text-primary'> Software Development </span>
            Industry around the world
          </h1>
          <p className='text-paragraphColor font-bold py-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            impedit magni provident. Quidem deleniti omnis pariatur debitis nemo
            ut praesentium.
          </p>
          <div className='flex py-5'>
            <Link
              className='call-to-action font-bold cursor-pointer'
              to='contactUs-section'
              smooth={true}
              duration={1000}>
              Schedule A Free Consultation
            </Link>
          </div>
        </div>
        <div
          className='flex-1 pl-10 py-10'
          style={{
            backgroundImage: 'url(/ourCompany-heroSection-bg.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}>
          <img
            className='mx-auto'
            src='/ourCompany-heroSection-object.png'
            alt='img'
          />
        </div>
      </div>
      <p></p>
    </div>
  )
}

export default HeroSection
