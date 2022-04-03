import React from 'react'
import Image from 'next/image'

import blogOne from '../../public/blogImage/blog-one.png'
import blogTwo from '../../public/blogImage/blog-two.png'
import blogThree from '../../public/blogImage/blog-three.png'
const Blog = () => {
    return (
        <div id='blog-section' className='custom-container'>
            <div className='flex flex-col-reverse sm:flex-row'>
                <div className='flex-1 sm:mt-32 mt-0'>
                    <Image src={blogOne} alt='img' />
                    <div className='blog-details mt-10'>
                        <h1 className='text-secondary font-semibold text-3xl mt-5'>
                            Role of Banking and <br /> FinTech APIs
                        </h1>
                        <p className='text-paragraphColor font-bold my-5'>
                            API banking refers to a set of protocols that makes
                            a {"bank's"} services available to other third-party
                            companies via APIs. This helps both bank and Fintech
                            to augment their complementary specialties and
                            offerings more than they can provide to their
                            customers by themselves.
                        </p>
                        <a
                            className='text-secondary font-semibold text-xl'
                            href='#'>
                            Read More...
                        </a>
                    </div>
                </div>
                <div className='flex-1 sm:m-10 sm:mt-52 my-10'>
                    <Image src={blogTwo} alt='img' />
                    <div className='blog-details mt-10'>
                        <h1 className='text-secondary font-semibold text-3xl mt-5'>
                            Common Issues Faced <br /> By Developers
                        </h1>
                        <p className='text-paragraphColor font-bold my-5'>
                            In a process of product planning client is not an
                            option, it is a priority. The most important thing
                            is that our product must be what the customer
                            wants.However, there might be situations where poor
                            communication may influence on an end-product of our
                            work. First of all, software developer has to ask
                            his client to describe his expectations. All the
                            details will be important.
                        </p>
                        <a
                            className='text-secondary font-semibold text-xl'
                            href='#'>
                            Read More...
                        </a>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='blog-title'>
                        <h1 className='title'>
                            The <span className='text-primary'>MernSoft</span>{' '}
                            <br /> Blog
                        </h1>
                        <p className='text-paragraphColor font-bold py-10 text-xl'>
                            Read our blog on topics worth exploring and get
                            technological insights that are sure to amaze you.
                        </p>
                    </div>
                    <Image src={blogThree} alt='img' />
                    <div className='blog-details mt-10'>
                        <h1 className='text-secondary font-semibold text-3xl mt-5'>
                            Your Absolute Guide To <br /> API Development
                        </h1>
                        <p className='text-paragraphColor font-bold my-5'>
                            You might have come across the term API several
                            times, especially when hiring app developers for
                            building mobile or web apps. But have you ever given
                            a thought about what an API development is? Well,
                            you should. Developing an API improves the
                            performance, functionality, and user experience of
                            an app, irrespective of the operating system or
                            device it has been made for.
                        </p>
                        <a
                            className='text-secondary font-semibold text-xl'
                            href='#'>
                            Read More...
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
