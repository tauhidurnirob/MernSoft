import React from 'react'
import {
  CareerDestinationDataOne,
  CareerDestinationDataTwo
} from './CareerDestinationData'
const CareerDestination = () => {
  return (
    <div
      className='mt-20'
      style={{backgroundColor: '#EBEFFD', backgroundSize: 'cover'}}>
      <div className='custom-container py-14'>
        <h1 className='title text-center'>
          Your next career destination <br />
          <span className='text-primary'>MernSoft</span>
        </h1>
        <p className='custom-paragraph text-center pt-5'>
          We are focussed on some values that drive our daily <br />
          decisions, develop our relationships, and guide our strategy.
        </p>

        <div>
          <div className='flex flex-col md:flex-row text-center mt-10'>
            {CareerDestinationDataOne.map((item) => (
              <div
                className='flex-1 shadow-xl rounded-2xl p-5 m-5'
                key={item.id}>
                <img className='w-1/4 m-auto' src={item.imgUrl} alt='img' />
                <h1 className='title text-xl py-5'>{item.title}</h1>
                <p className='custom-paragraph'>{item.description}</p>
              </div>
            ))}
          </div>
          <div className='flex flex-col md:flex-row text-center'>
            {CareerDestinationDataTwo.map((item) => (
              <div
                className='flex-1 shadow-xl rounded-2xl p-5 m-5'
                key={item.id}>
                <img className='w-1/4 m-auto' src={item.imgUrl} alt='img' />
                <h1 className='title text-xl py-5'>{item.title}</h1>
                <p className='custom-paragraph'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerDestination
