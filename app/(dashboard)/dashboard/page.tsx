import IntroText from '@/components/IntroText'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <IntroText 
      title="Dashboard" 
      description="View your farm&apos;s performance at a glance, including device stats and AI insights." />

    </div>
  )
}

export default page
