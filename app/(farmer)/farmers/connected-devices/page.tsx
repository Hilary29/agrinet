"use client";
import Devices from '@/components/Devices'
import HumiditySensor from '@/components/HumidtySensor';
import IntroText from '@/components/IntroText'
import NPKSensor from '@/components/NPKSensor'
import PHSensor from '@/components/PHSensor'
import TempSensor from '@/components/TempSensor'
import React from 'react'


const page = () => {
  return (
    <div>
      <IntroText
        title="Connected Devices"
        description="Add, manage, or remove IoT devices to track your farm in real time."
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Devices />
        <NPKSensor />
        <PHSensor />
        <TempSensor />
        <HumiditySensor />
      </section>
    </div>
  )
}

export default page;