import React from "react";

import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import Banner from "@/components/Common/Banner";
import SystemServices from "./components/Statistics";
import Industries from "./components/Industries";
import Showcase from "../../../components/Common/Showcase/Showcase";
import HowWeWork from "@/components/HowWeWork";
import { supportMtncProcesses } from "@/components/HowWeWork/data";
import Statistics from "./components/Statistics";
import SupportServices from "./components/SupportServices";
import ServiceContactForm from "@/components/Common/ServiceContactForm";

export const metadata: Metadata = {
  title: "Services - Support And Maintenance",
  keywords: [
    "support",
    "maintenance",
    "IT services",
    "technical support",
    "system maintenance",
    "application support",
    "software maintenance",
    "service plans",
    "business continuity",
  ],
  description:
    "Comprehensive support and maintenance services to ensure your IT systems and applications run smoothly and efficiently.",
};

const SupportAndMaintenance = () => {
  return (
    <>
      <Hero
        title="Software Care Solutions"
        subtitle="At Classy Endeavors, we understand that consistent system performance, secure frameworks, and reliable uptime are essential for business growth. Our software support and maintenance services are designed to optimize your systems and keep operations running seamlessly."
        backgroundImage="/images/services/SupportBackground.svg"
        keywords={["Software Support", "System Maintenance", "Business Continuity"]}
        section={<ServiceContactForm />}
      />
      <Statistics />
      <Showcase imageSrc="/images/services/cloud/Background (2).svg" title="Enhancement and Technology Refresh" description="Whether you're transitioning to new infrastructure or
              upgrading existing environments, we handle end-to-end
              modernization, security enhancements, and technology migrations to
              support your growth." buttonCta="Get Your Project" />
      <SupportServices />
      <HowWeWork title="Why Partner with Us?" imageSrc="/images/services/SupportMtncBackground.svg" processes={supportMtncProcesses} />
      <Industries />
      <Banner
        title="Don't let security issues disrupt your business"
        description="Our experts at Classy Endeavors are ready to provide insights and strategies
tailored to your unique requirements."
        buttonText="Book a Consultation"
      />
    </>
  );
};

export default SupportAndMaintenance;
