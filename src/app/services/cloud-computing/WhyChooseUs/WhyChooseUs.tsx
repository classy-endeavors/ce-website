"use client";

import { Cloud, Users, ShieldCheck, Layers, Lock, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/Section";
import SectionTitle from "@/components/Common/SectionTitle";

const features = [
  {
    icon: Cloud,
    title: "Industry-Leading Expertise",
    description:
      "At Classy Endeavors, we bring decades of hands-on experience in cloud architecture, native applications, data science, security, and R&D. We collaborate closely with your team to understand your business challenges and goals, crafting customized cloud solutions that align perfectly with your unique needs.",
  },
  {
    icon: Users,
    title: "Your Trusted Cloud Partner",
    description:
      "From small-scale applications to complex enterprise projects, we provide end-to-end cloud services. Our experts combine vertical industry knowledge with technical excellence to deliver cloud solutions that are efficient, scalable, and tailored for your business success.",
  },
  {
    icon: Settings,
    title: "Certified Partnerships with Top Cloud Providers",
    description:
      "Our engineers hold advanced certifications in AWS, Microsoft Azure, and Google Cloud. By leveraging the best cloud platforms, we create a seamless, integrated environment that combines the ideal mix of IaaS, PaaS, and SaaS solutions for your business.",
  },
  {
    icon: Layers,
    title: "Proven Methodologies That Deliver Results",
    description:
      "We design and implement flexible cloud models that balance cost, risk, and technology requirements, ensuring your infrastructure is optimized for both performance and scalability. Our solutions are tested, reliable, and built to drive measurable results.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance and Security Expertise",
    description:
      "Navigating data compliance, application security, and regulatory requirements is a core strength of Classy Endeavors. We ensure that your cloud strategy adheres to industry regulations while following the latest cybersecurity best practices.",
  },
  {
    icon: Lock,
    title: "Solutions Tailored to Your Business",
    description:
      "Our focus is on your business needs. Whether you require multi-cloud strategies or a specific platform, we provide cloud tools and technologies that fit your workflows perfectly. Our solutions are designed to enhance productivity, innovation, and long-term growth.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section>
      <SectionTitle title="Why Choose Classy Endeavors for Cloud Computing Services " className="max-w-md mb-8" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary/30 mb-6">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-4">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
