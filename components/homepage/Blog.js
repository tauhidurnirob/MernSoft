import React from 'react'

const Blog = () => {
  return (
    <div id='blog-section' className='custom-container'>
      <div className='flex flex-col-reverse sm:flex-row'>
        <div className='flex-1 sm:mt-32 mt-0'>
          <img src='/blogImage/blog-one.png' alt='img' />
          <div className='blog-details mt-10'>
            <h1 className='text-secondary font-semibold text-3xl mt-5'>
              Role of Banking and <br /> FinTech APIs
            </h1>
            <p className='text-paragraphColor font-bold my-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              quaerat voluptatum quasi ipsa iste minima numquam commodi maiores.
              Placeat molestias, aliquam similique eveniet delectus error
              dolorem doloremque odio. Rem, illum.
            </p>
            <a className='text-secondary font-semibold text-xl' href='#'>
              Read More...
            </a>
          </div>
        </div>
        <div className='flex-1 sm:m-10 sm:mt-52 my-10'>
          <img src='/blogImage/blog-two.png' alt='img' />
          <div className='blog-details mt-10'>
            <h1 className='text-secondary font-semibold text-3xl mt-5'>
              Common Issues Faced <br /> By Developers
            </h1>
            <p className='text-paragraphColor font-bold my-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              quaerat voluptatum quasi ipsa iste minima numquam commodi maiores.
              Placeat molestias, aliquam similique eveniet delectus error
              dolorem doloremque odio. Rem, illum.
            </p>
            <a className='text-secondary font-semibold text-xl' href='#'>
              Read More...
            </a>
          </div>
        </div>
        <div className='flex-1'>
          <div className='blog-title'>
            <h1 className='title'>
              The <span className='text-primary'>MernSoft</span> <br /> Blog
            </h1>
            <p className='text-paragraphColor font-bold py-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos vero praesentium officiis, error quod quisquam
              blanditiis pariatur expedita impedit maiores rerum, ullam commodi
              omnis quia inventore, voluptates et a voluptas?
            </p>
          </div>
          <img src='/blogImage/blog-three.png' alt='img' />
          <div className='blog-details mt-10'>
            <h1 className='text-secondary font-semibold text-3xl mt-5'>
              Your Absolute Guide To <br /> API Development
            </h1>
            <p className='text-paragraphColor font-bold my-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              quaerat voluptatum quasi ipsa iste minima numquam commodi maiores.
              Placeat molestias, aliquam similique eveniet delectus error
              dolorem doloremque odio. Rem, illum.
            </p>
            <a className='text-secondary font-semibold text-xl' href='#'>
              Read More...
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
