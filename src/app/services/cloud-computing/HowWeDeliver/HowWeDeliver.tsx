import React from "react";
import Section from "@/components/Section";
import SectionTitle from "@/components/Common/SectionTitle";
import { Timeline } from "@/components/ui/timeline";
import { items } from "./howWeDeliverData";

export function HowWeDeliver(){
  const data = items.map((item) => ({
    title: item.title, 
    content: (
      <div>
        <div className="mb-4 flex items-center gap-2">
          <h3 className="font-medium text-base text-left">{item.title}</h3>
        </div>

        <ul className="list-disc list-inside text-muted-foreground space-y-1 text-left">
          {item.services.map((service: string, idx: number) => (
            <li key={idx} className="text-left">{service}</li>
          ))}
        </ul>
      </div>
    ),
  }));
  return (
    <Section>
      <SectionTitle
        title="Our Cloud Deployment Models"
        className="text-2xl md:text-3xl text-center mb-6"
      />
      <p className="mb-6">At 𝗖𝗹𝗮𝘀𝘀𝘆 𝗘𝗻𝗱𝗲𝗮𝘃𝗼𝗿𝘀, we make your cloud journey simple, secure, and scalable. Here’s 
how we help businesses unlock the full power of the cloud: </p>
      <div className="relative w-full overflow-clip">
        <Timeline data={data} className="lg:grid-cols-4" />
      </div>
      <p className="mt-6">With the right strategy and support, the cloud isn’t just technology, it’s a growth enabler. </p>
    </Section>
  );
};

