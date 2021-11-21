import React from 'react'

const HeroSection = () => {
  return (
    <div className='custom-container'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex-1 my-auto'>
          <h1 className='title'>
            Career & Culture at
            <br />
            <span className='text-primary'> MernSoft </span>
          </h1>

          <div className='flex py-5'>
            <a className='underline text-primary' href='#'>
              View Current Openings
            </a>
          </div>
        </div>
        <div className='flex-1 pl-10 py-10'>
          <img className='mx-auto' src='/career-illustration.svg' alt='img' />
        </div>
      </div>
      <p></p>
    </div>
  )
}

export default HeroSection
