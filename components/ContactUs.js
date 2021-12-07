import React, {useState, useEffect} from 'react'
import {ChevronRightIcon, PhoneIcon, MailIcon} from '@heroicons/react/solid'
import emailjs from 'emailjs-com'

const ContactUs = () => {
  const [value, onChange] = useState(20)

  function sendEmail(e, data) {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_6yunhqk',
        'template_wy23h1o',
        e.target,
        'user_0T6wFOexOIYlKLhKKeSGX'
      )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(data)
  }

  return (
    <div
      id='contactUs-section'
      className='relative'
      style={{
        backgroundImage: 'url(/contactUs-bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflow: 'hidden'
      }}>
      <div className='absolute top-0 left-0 z-1'>
        <img className='w-1/2' src='/contactUs-leaf.png' alt='img' />
      </div>
      <div className='custom-container'>
        <div className='flex flex-col sm:flex-row z-100'>
          <div className='flex-1 my-36'>
            <h1 className='text-3xl text-secondary my-10'>
              Got an{' '}
              <span className='text-primary'>
                amazing business <br /> idea ?
              </span>{' '}
              Let's bring it to the <br /> market together.
            </h1>
            <h1 className='text-3xl text-secondary'>Get in Touch With us!</h1>
            <div className='info mt-14'>
              <h1 className='title flex'>
                <PhoneIcon className='w-10 mr-3' /> +1(800) 352 - 9138
              </h1>
              <h1 className='title flex  mt-5'>
                <MailIcon className='w-10 mr-3' /> info@mernsoft.com
              </h1>
            </div>
          </div>
          <div className='flex-1 my-auto mr-0 sm:ml-10'>
            <form onSubmit={sendEmail} id='contact-form'>
              <div className='my-10 pt-0'>
                <input
                  type='text'
                  placeholder='Full Name'
                  className='contactUs-input'
                  name='name'
                  required
                />
              </div>
              <div className='my-10 pt-0'>
                <input
                  type='text'
                  placeholder='Email Address'
                  className='contactUs-input'
                  name='user_email'
                  required
                />
              </div>
              <div className='my-10 pt-0'>
                <input
                  type='number'
                  placeholder='Phone Number'
                  className='contactUs-input'
                  name='phone'
                />
              </div>
              <div className='my-10 pt-0'>
                <div className='slider-parent'>
                  <span
                    className='buble border-2 border-secondary rounded-md p-1'
                    style={{left: `${value}%`}}>
                    ${value}k
                  </span>
                  <input
                    id='slider'
                    className='outline-none h-1 bg-secondary appearance-none rounded-full transition duration-500 ease-in-out'
                    type='range'
                    min='20'
                    max='900'
                    value={value}
                    list='newlist'
                    style={{width: '100%'}}
                    onChange={({target: {value: radius}}) => {
                      onChange(radius)
                    }}
                    name='radius'
                    required
                  />
                  <datalist id='newlist'>
                    <option key={1} />
                    <option key={2} />
                    <option key={3} />
                  </datalist>
                </div>
                <div className='flex mt-2 justify-between text-secondary'>
                  <div className='value-left'>$20k</div>
                  <div className='value-right'>$900k</div>
                </div>
              </div>
              <div className='my-10 pt-0'>
                <textarea
                  type='text'
                  placeholder='Project Description'
                  className='contactUs-input'
                  name='project_description'
                  required
                />
              </div>
              <div className='flex bg-secondary text-white justify-center rounded-full px-12 mx-14 my-10 pt-0'>
                <input
                  className='py-3 bg-secondary text-lg font-bold cursor-pointer'
                  type='submit'
                  value='Submit'
                  name='submit'
                />{' '}
                <ChevronRightIcon className='w-5 ml-3 my-auto bg-white text-secondary rounded-full   border-2 border-secondary' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
