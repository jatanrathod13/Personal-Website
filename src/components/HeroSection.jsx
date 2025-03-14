import React from 'react'

function HeroSection() {
  return (
    <section className='h-screen flex items-center justify-center relative'>
      <div className='absolute inset-0'>
        <img
          src='/images/background.jpg' // Updated to a more likely path
          alt='Background'
          className='object-cover w-full h-full'
        />
        {/* Semi-transparent overlay */}
        <div className='absolute inset-0 bg-black opacity-40'></div>
      </div>
      <div className='relative z-10 text-center px-4'>
        <h1 className='text-5xl font-extrabold text-white'>
          Welcome to My Personal Website
        </h1>
        <p className='mt-4 text-xl text-gray-200'>
          Crafting innovative digital experiences
        </p>
      </div>
    </section>
  )
}

export default HeroSection
