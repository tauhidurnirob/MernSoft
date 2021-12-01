import React from 'react'

const ImageGallery = () => {
  return (
    <div className='custom-container my-14 overflow-hidden'>
      <div className='flex flex-col sm:flex-row gap-6 mx-auto'>
        <div className='flex-1'>
          <div className='item-one'>
            <img
              className='ml-auto w-full sm:w-auto'
              src='/imageGallery/item-one.jpg'
            />
          </div>
          <div className='item-three mt-6'>
            <img
              className='w-full sm:w-auto'
              src='/imageGallery/item-three.jpg'
            />
          </div>
        </div>
        <div className='flex-1'>
          <div className='item-two'>
            <img className='w-full' src='/imageGallery/item-two.jpg' />
          </div>
          <div className='item-four mt-6'>
            <img
              className='w-full sm:w-auto'
              src='/imageGallery/item-four.jpg'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
