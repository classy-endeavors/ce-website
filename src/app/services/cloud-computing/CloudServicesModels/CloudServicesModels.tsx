import SectionTitle from '@/components/Common/SectionTitle'
import Section from '@/components/Section'
import React from 'react'
import { cloudDepModels } from './cloudServicesModelsData'

export default function CloudServicesModels() {
  return (
    <Section>
      <SectionTitle title="Cloud Service Models We Support " className="mb-6" />
      <p className="mb-6 max-w-4xl">At Classy Endeavors, we help businesses unlock the full potential of the cloud with tailored
        IaaS, PaaS, and SaaS solutions. Our experts guide you in choosing, implementing, and
        optimizing the right model to meet your goals while ensuring scalability, cost-efficiency, and
        security.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {cloudDepModels.map((model) => (
          <div
            key={model.id}
            className="border rounded-xl p-6"
          >
            <h3 className="text-primary font-semibold mb-4">
              {String(model.id).padStart(2, "0")}
            </h3>
            <h4 className="font-semibold mb-6">{model.title}</h4>
            <p className="text-sm text-muted-foreground">{model.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
