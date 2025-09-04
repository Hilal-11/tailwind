import React from 'react'
import { Container } from './Container'
import Nav from './Nav'
import heroImage from '../../public/hero-ui-v5.webp'

import HeroComponent from './HeroComponent'
function Hero() {
  return (
    <div className='h-auto relative bg-blue-100'>

      <div className='max-w-7xl mx-auto absolute inset-0 h-full w-full'>
        <div className='h-full absolute inset-y-0 left-0 w-px bg-gradient-to-b from-neutral-400/50 via-neutral-400 to-gray-300'></div>
        <div className='h-full absolute inset-y-0 right-0 w-px bg-gradient-to-b from-neutral-400/50 via-neutral-400 to-gray-300'></div>
      </div>
    <Container className="flex items-start justify-center">
      <Nav/>
      <HeroComponent />
      
    </Container>
    <div className='relative w-full'>
        <div className='h-px w-full absolute inset-0 left-0 -top-16 bg-gradient-to-r from-neutral-500/50 via-neutral-400 to-gray-300'></div>
      </div>
      <div className=''>
         <img className='rounded-lg  w-[1224px] mx-auto objec-cover object-left-top border-neutral-300 shadow-lg mask-b-from-0 to-100%'  src={heroImage} alt="" />
      </div>
      <br />
         <div className='relative w-full'>
        <div className='h-px w-full absolute inset-0 left-0 bg-gradient-to-r from-neutral-500/50 via-neutral-400 to-gray-300'></div>
      </div>
       <br /> <br /> <br />
    </div>
    
  )
}

export default Hero