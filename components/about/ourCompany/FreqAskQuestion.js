import React, {useState} from 'react'
import {ChevronDownIcon, ChevronRightIcon} from '@heroicons/react/solid'
import {FreqAskQuestionData} from './FreqAskQuestionData'
const FreqAskQuestion = () => {
  const [isOpen, setIsOpen] = useState(null)

  const toggle = (index) => {
    if (isOpen === index) {
      return setIsOpen(null)
    }
    setIsOpen(index)
  }
  return (
    <div
      className='mt-10'
      style={{
        backgroundImage: 'url(/faq-bg.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className='custom-container'>
        <h1 className='title text-center my-10'>
          Frequently <br /> Asked <span className='text-primary'>Question</span>
        </h1>
        <div className='cored-section my-14 mx-auto md:w-2/3 w-3/3'>
          {FreqAskQuestionData.map((item, index) => (
            <div
              className='processes p-5 my-5 bg-white rounded-2xl'
              key={item.id}>
              <div className='flex justify-between'>
                <h1 className='text-secondary font-bold text-xl'>
                  {item.title}
                </h1>
                <a
                  className='transition-all duration-1000'
                  onClick={() => toggle(index)}>
                  {isOpen === index ? (
                    <ChevronDownIcon className='heroIcon' />
                  ) : (
                    <ChevronRightIcon className='heroIcon' />
                  )}
                </a>
              </div>
              <p className='transition-all duration-1000 text-paragraphColor font-bold pt-3'>
                {isOpen === index ? item.description : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FreqAskQuestion
