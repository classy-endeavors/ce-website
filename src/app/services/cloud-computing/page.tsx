import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import Brands from "@/app/(home)/components/Brands";
import FAQ from "@/components/Common/FAQ/FAQ";
import { cloudFaqs } from "@/components/Common/FAQ/faqData";
import ContactUs from "@/components/ContactUs";
import { aiTestimonials } from "@/components/ContactUs/testimonialsData";
import WhatWeOffer from "./components/WhatWeOffer.tsx/WhatWeOffer";
import CloudServices from "./CloudServices/CloudServices";
import Steps from "@/components/Common/Steps/Steps";
import { cloudComputingSteps } from "@/components/Common/Steps/stepsData";
import CloudBenefits from "./CloudBenefits/CloudBenefits";
import CloudServicesModels from "./CloudServicesModels/CloudServicesModels";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import { HowWeDeliver } from "./HowWeDeliver/HowWeDeliver";
import CloudDepModels from "./CloudDepModels/CloudDepModels";
import { cloudBrandsData } from "@/app/(home)/components/Brands/data";

export const metadata: Metadata = {
  title: "Services - Cloud Computing",
  keywords: [
    "Cloud Computing",
    "Cloud Services",
    "Cloud Solutions",
    "AWS",
    "Azure",
    "Google Cloud",
  ],
  description:
    "Explore our comprehensive Cloud Computing services, including cloud infrastructure, migration, and management solutions tailored to your business needs.",
};
const CloudComputing = () => {

  return (
    <>
      <Hero
        title="Scalable, Secure, and Smarter Cloud Solutions for Your Business"
        subtitle="At Classy Endeavors, we help businesses harness the full power of the cloud. From 
optimizing legacy systems to building cloud-native apps, our tailored cloud computing 
services ensure your business runs faster, scales smarter, and stays secure without breaking 
the bank. "
        cta="Get Started with Cloud Transformation"
        backgroundImage="/images/services/CloudBackground.svg"
      />
      <WhatWeOffer />
      <CloudServices />
      <Steps title="Our Cloud Expertise" desc="Answer just a few questions to receive a personalized recommendation specifically designed to align with your business goals and industry needs." buttonCta="Get Started" steps={cloudComputingSteps} />
      <CloudBenefits />
      <HowWeDeliver />
      <CloudServicesModels />
      <CloudDepModels />
      <Brands brands={cloudBrandsData} />
      <WhyChooseUs />
      <FAQ faqs={cloudFaqs} bannerTitle="Frequently Asked Questions" bannerDesc="Frequently Asked Qustions on Cloud Computing" />
      <ContactUs testimonials={aiTestimonials} />
    </>
  );
};

export default CloudComputing;
