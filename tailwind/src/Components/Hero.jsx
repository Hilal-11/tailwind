import React from 'react'
import { Container } from './Container'
import Nav from './Nav'
import HeroComponent from './HeroComponent'
function Hero() {
  return (
    <div className='h-screen relative bg-blue-100'>

      <div className='max-w-7xl mx-auto absolute inset-0 h-full w-full'>
        <div className='h-full absolute inset-y-0 left-0 w-px bg-gradient-to-b from-neutral-400/50 via-neutral-200 to-transparent'></div>
        <div className='h-full absolute inset-y-0 right-0 w-px bg-gradient-to-b from-neutral-400/50 via-neutral-200 to-transparent'></div>
      </div>
    <Container className="flex items-start justify-center">
      <Nav/>
      <HeroComponent />
    </Container>
    </div>
  )
}

export default Hero