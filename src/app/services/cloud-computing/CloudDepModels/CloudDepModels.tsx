"use client"

import SectionTitle from '@/components/Common/SectionTitle'
import Section from '@/components/Section'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'
import React from 'react'
import { cloudDepModels } from './cloudDepModelsData'

export default function CloudDepModels() {
  return (
    <Section>
      <SectionTitle title="Our Cloud Deployment Models" className="text-center mb-4" />
      <p className="mb-6">t Classy Endeavors, we design flexible cloud deployment models that balance scalability,
        security, and cost efficiency. Whether your business is ready to go fully cloud-native or
        requires a more controlled environment, our team tailors solutions to match your
        infrastructure, compliance, and growth goals.</p>
      <Accordion type="single" collapsible className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center">
        {cloudDepModels.map((benefit, index) => (
          <motion.div
            key={index}
            className="max-w-2xl px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold cursor-pointer py-6 text-foreground">
                {benefit.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {benefit.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </Section>
  )
}
