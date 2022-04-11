import React from 'react'
import { AchievementsData } from '/components/about/ourCompany/AchievementsData'
import Image from 'next/image'
const Achievements = () => {
    return (
        <div
            className='my-10'
            style={{
                backgroundImage: 'url(/achievements-bg.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
            <div className='custom-container'>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex-auto md:flex-1 md:my-auto mt-14 mr-0 lg:mr-10'>
                        <h1 className='title'>
                            Our
                            <span className='text-primary'> Achievements</span>
                        </h1>
                        <p className='text-paragraphColor font-bold py-5'>
                            Our source of motivation is customer satisfaction.
                            Delivering business solutions that facilitate
                            digital transformation and amazing results is what
                            we strive for, here at MernSoft.
                        </p>
                    </div>
                    <div className='flex-auto md:flex-1  mb-14 md:my-14'>
                        <div className='flex justify-center flex-wrap lg:flex-nowrap'>
                            {AchievementsData.map((item) => (
                                <div className={item.className} key={item.id}>
                                    <Image
                                        className='mx-auto w-18 h-18'
                                        src={item.imageUrl}
                                        width='100'
                                        height='100'
                                        alt='icon'
                                    />
                                    <h1 className='mt-3 w-min text-secondary text-xl font-bold'>
                                        {item.title}
                                    </h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements
