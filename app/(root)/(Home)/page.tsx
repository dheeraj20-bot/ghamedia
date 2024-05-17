import { HeroParallaxDemo } from '@/components/Herosection'
import { ServicesSection } from '@/components/ServicesSection'
import { Button } from '@/components/ui/button'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <HeroParallaxDemo/> 
        <ServicesSection/>
    </div>
  )
}

export default HomePage