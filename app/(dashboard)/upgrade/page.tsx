import IntroText from '@/components/IntroText'
import Pricing from '@/components/Pricing'
import React from 'react'

const page = () => {
  return (
    <div>
        <IntroText
        title="Upgrade your account"
        description="Become a pro and unlock all features of AgriNet"/>
        <Pricing/>
      
    </div>
  )
}

export default page
