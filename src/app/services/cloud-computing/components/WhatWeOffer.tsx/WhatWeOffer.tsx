import SectionTitle from '@/components/Common/SectionTitle'
import Section from '@/components/Section'
import React from 'react'

export default function WhatWeOffer() {
  return (
    <Section id="what-we-offer" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <SectionTitle title="What Classy Enedeavors' Cloud Computing Services Offer You" className="max-w-md" />
      <div className="flex flex-col gap-2">
        <p className="">At Classy Endeavors, we deliver end-to-end cloud computing services that modernize your
          infrastructure, reduce risk, and accelerate business outcomes. From strategic cloud
          consulting to hands-on implementation and ongoing management, our team helps you
          migrate, optimize, and operate cloud environments that are secure, scalable, and costefficient.</p>
        <p>Our certified cloud engineers have deep, practical experience across the major platforms:
          AWS, Microsoft Azure, and Google Cloud, and apply proven DevOps practices and cloudnative patterns to speed migrations and cut time-to-value. We design solutions that match
          your business goals: whether that’s lift-and-shift migration, cloud-native application
          development, hybrid / multi-cloud integration, or tightening security and compliance.</p>
      </div>
    </Section>
  )
}
