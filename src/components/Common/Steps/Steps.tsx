"use client"

import CustomButton from "@/components/Common/CustomButton";
import SectionTitle from "@/components/Common/SectionTitle";
import Section from "@/components/Section";
import { Step } from "@/types";

type StepsProps = {
  title: string;
  desc: string;
  buttonCta: string
  steps: Step[];
}

export default function Steps({title, desc, buttonCta, steps}: StepsProps) {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6">
          <SectionTitle title={title} className="mb-4" />
          <p className="max-w-md">Answer just a few questions to receive a personalized recommendation 
            specifically designed {desc}</p>
          <CustomButton title={buttonCta} link="#contact" />
        </div>

        <div className="space-y-10 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative pl-14">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full text-primary border-1 border-primary flex items-center justify-center text-xs font-medium z-10">
                {step.number}
              </div>
              {index !== steps.length - 1 && (
                <div className="absolute left-[14px] top-12 bottom-[-2rem] w-px bg-black" />
              )}
              <h3 className="text-sm font-medium">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
