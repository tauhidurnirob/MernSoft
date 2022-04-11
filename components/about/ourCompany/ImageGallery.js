import React from 'react'
import Image from 'next/image'

import imageItemOne from '../../../public/imageGallery/item-one.jpg'
import imageItemtwo from '../../../public/imageGallery/item-two.jpg'
import imageItemthree from '../../../public/imageGallery/item-three.jpg'
import imageItemfour from '../../../public/imageGallery/item-four.jpg'

const ImageGallery = () => {
    return (
        <div className='custom-container my-14 overflow-hidden'>
            <div className='flex flex-col sm:flex-row gap-6 mx-auto'>
                <div className='flex-1'>
                    <div className='item-one'>
                        <div className='ml-auto w-full sm:w-auto'>
                            <Image src={imageItemOne} alt='img' />
                        </div>
                    </div>
                    <div className='item-three mt-6'>
                        <div className='w-full sm:w-auto'>
                            <Image alt='img' src={imageItemtwo} />
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='item-two'>
                        <div className='w-full'>
                            <Image
                                className='w-full'
                                src={imageItemthree}
                                alt='img'
                            />
                        </div>
                    </div>
                    <div className='item-four mt-6'>
                        <div className='w-full sm:w-auto'>
                            <Image src={imageItemfour} alt='img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGallery
