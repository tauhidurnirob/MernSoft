import React from 'react'

const HeroSection = () => {
  return (
    <div className='max-w-7xl mx-auto px-4'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex-1 my-auto'>
          <h1 className='lg:text-4xl text-3xl text-secondary font-bold'>
            Leading
            <span className='text-primary'>
              {' '}
              Software Design & Development{' '}
            </span>
            Company Trusted By Brands Accross the Globe
          </h1>
          <p className='text-paragraphColor font-bold py-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            impedit magni provident. Quidem deleniti omnis pariatur debitis nemo
            ut praesentium.
          </p>
          <div className='flex py-5'>
            <a
              className='transition duration-500 ease-in-out bg-primary text-white hover:bg-white hover:text-primary px-5 py-3 rounded-full   border-2 border-primary font-bold'
              href='#'>
              Schedule A Free Consultation
            </a>
          </div>
        </div>
        <div className='flex-1 pl-10 py-10'>
          <img src='/banner-illiustration.svg' alt='img' />
        </div>
      </div>
      <p></p>
    </div>
  )
}

export default HeroSection
