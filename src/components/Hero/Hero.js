import React from 'react'
import bgimage from '../../assets/bg.png'

const Hero = () => {
  return (
    <div>
      <div className='relative'>
      <img src={bgimage} className='w-full h-auto bg-contain my-5 rounded-3xl  p-5 background-size: cover; background-position: center' alt='background'/>
      </div>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-bold font-serif'>
      <h1 className='lg:text-5xl md:text-4xl text-3xl' >Beauty and Wellness Services</h1>
      <h5 className='text-xl'>Find salons, spas, and more near you</h5>
      </div>
    </div>
  )
}

export default Hero
