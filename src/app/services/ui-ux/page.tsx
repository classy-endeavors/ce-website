import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/Common/ServicesHero";
import Services from "./components/Services";
import Tools from "./components/Tools";
import Banner from "@/components/Common/Banner";
import WhyUs from "@/components/Common/WhyUs/WhyUs";
import { uxData } from "@/components/Common/WhyUs/data";
import DesignProcess from "./components/DesignProcess";
import ServiceContactForm from "@/components/Common/ServiceContactForm";
import Features from "./components/Features";
import CaseStudies from "./components/CaseStudies";
import Industries from "./components/Industries";
import ContactUs from "@/components/ContactUs";
export const metadata: Metadata = {
  title: "Services - UI/UX Design",
  keywords: [
    "UI/UX Design",
    "User Experience",
    "User Interface",
    "Web Design",
    "Mobile App Design",
    "Design Services",
  ],
  description:
    "Explore our UI/UX design services that enhance user experience and interface design for web and mobile applications. We create intuitive, user-friendly designs that drive engagement and satisfaction.",
};

const UIUXPage = () => {
  return (
    <>
      <Hero
        title="Design That Feels Right—and Performs Exceptionally"
        subtitle="We help startups and enterprises craft stunning interfaces and frictionless experiences that delight users and drive growth."
        backgroundImage="/images/services/UIUXBackground.svg"
        keywords={["Intuitive Design.", "User-Centric.", "Engaging Experiences"]}
      />
      <Services />
      <Features />
      <Tools />
      <CaseStudies />
      <DesignProcess />
      <Industries />
      <Banner title="Let's Design Something That Works" description="Kickstart Your Next Project With a Free Custom Design — Share Your Idea and Let Our Expert Team Bring It to Life, Absolutely Free!" buttonText="Contact Us" />
      <ContactUs />
    </>
  );
};

export default UIUXPage;
