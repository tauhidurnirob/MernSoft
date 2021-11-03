import React from 'react'

const ClientsReview = () => {
  return (
    <div className='custom-container'>
      <div>
        <div
          className='flex flex-col md:flex-row'
          style={{
            backgroundImage: 'url(/client-review-bg.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
            backgroundPositionY: 'center'
          }}>
          <div className='flex-auto '>
            <h1 className='md:ml-28 ml-5  text-primary title'>
              Clients <br /> <span className='text-secondary'>Review</span>
            </h1>
            <div className='review-container shadow-default bg-white rounded-3xl p-5 m-5 md:mr-0 mr-5 mb-0 w-auto md:w-96'>
              <h1 className='text-2xl text-secondary'>Great Experience</h1>
              <p className='text-paragraphColor font-bold py-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla.
                porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla.
              </p>
              <div className='client-name flex'>
                <img src='/clients/client-one.png' alt='img' />
                <h1 className='text-2xl text-secondary ml-5'>
                  Jane <br /> Harrison
                </h1>
              </div>
            </div>
          </div>
          <div className='flex-auto my-auto'>
            <div className='review-container bg-white shadow-default  rounded-3xl p-5 m-5'>
              <h1 className='text-2xl text-secondary'>Excellent Work</h1>
              <p className='text-paragraphColor font-bold py-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla
              </p>
              <div className='client-name flex'>
                <img src='/clients/client-two.png' alt='img' />
                <h1 className='text-2xl text-secondary ml-5'>
                  Maruice <br /> Webb
                </h1>
              </div>
            </div>
            <div className='review-container bg-white shadow-default rounded-3xl p-5 m-5'>
              <h1 className='text-2xl text-secondary'>Good Team</h1>
              <p className='text-paragraphColor font-bold py-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla
              </p>
              <div className='client-name flex'>
                <img src='/clients/client-Three.png' alt='img' />
                <h1 className='text-2xl text-secondary ml-5'>
                  Richa <br /> Turkstra
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientsReview
