"use client"

import SectionTitle from '@/components/Common/SectionTitle'
import Section from '@/components/Section'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'
import React from 'react'
import { cloudBenefits } from './cloudBenefitsData'

export default function CloudBenefits() {
  return (
    <Section>
      <SectionTitle title="The Benefits of CE’s Cloud Computing Services" className="text-center mb-4" />
      <Accordion type="single" collapsible className="w-full">
        {cloudBenefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="border-b border-border/70 last:border-b-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium cursor-pointer py-6 text-foreground">
                <p className="flex gap-4"><span className="text-primary text-xl">• </span>{benefit.question}</p>
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
