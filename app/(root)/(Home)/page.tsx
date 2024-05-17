import { HeroParallaxDemo } from '@/components/Herosection'
import { ServicesSection } from '@/components/ServicesSection'
import { CanvasReveal } from '@/components/shared/CanvasReveal'
import { Button } from '@/components/ui/button'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <HeroParallaxDemo/> 
        <ServicesSection/>
        <CanvasReveal/>
    </div>
  )
}

export default HomePage