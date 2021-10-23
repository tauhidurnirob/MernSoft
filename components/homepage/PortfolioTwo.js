import React from 'react'
import {ChevronRightIcon} from '@heroicons/react/solid'
const PortfolioOne = () => {
  return (
    <div
      className='w-full'
      style={{
        backgroundImage: 'url(/portfolio-two.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
      <div className='flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-5 '>
        <div className='flex-1 md:my-auto my-10'>
          <div className='our-portfolio py-5'>
            <span className='font-bold text-3xl text-primary border-2 border-primary rounded-full px-5 py-3'>
              Our Portfolio
            </span>
          </div>
          <h1 className='text-secondary font-bold text-3xl py-5'>Naturalabs</h1>
          <p className='text-paragraphColor font-bold py-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            temporibus. Quod minima non aliquam, nobis quibusdam earum odit
            impedit nemo?
          </p>
          <a href='#' className='flex text-lg font-bold text-primary'>
            Live Demo
            <ChevronRightIcon className='w-5 h-5s ml-3 my-auto bg-primary text-white rounded-full   border-2 border-primary' />
          </a>
        </div>
        <div className='flex-1 mx-auto'>
          <img className='w-auto' src='/mock-ups-two.png' alt='img' />
        </div>
      </div>
    </div>
  )
}

export default PortfolioOne
