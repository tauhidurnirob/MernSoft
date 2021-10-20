import React from 'react'
import Benefits from './benefits'
const BenefitSection = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-10  my-10'>
      <div
        className='container-bg rounded-3xl'
        style={{
          backgroundImage: 'url(/benefits-bg.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderRadius: '100px'
        }}>
        <h1 className='text-3xl font-bold text-secondary py-10 text-center '>
          Benefits
        </h1>
        <div className='flex flex-col md:flex-row'>
          {Benefits.map((benefit) => (
            <div
              className='flex-1 bg-white shadow-default m-5 p-10 rounded-3xl'
              key={benefit.id}>
              <img src={benefit.imageUrl} className='w-28' alt='img' />
              <h3 className='text-2xl font-bold text-secondary py-8'>
                {benefit.title}
              </h3>
              <p className='text-paragraphColor font-bold'>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BenefitSection
