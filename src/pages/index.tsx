import Features from '@/components/Features'
import FAQAndFooter from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWork'
import Solution from '@/components/Solutions'
import React from 'react'

const index = () => {
  return (
<>
<Header/>
<HeroSection/>
<Solution/>
<Features/>
<HowItWorksSection/>
<FAQAndFooter/>
</>  )
}

export default index