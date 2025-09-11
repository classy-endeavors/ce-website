"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/Common/SectionTitle";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { services } from "./cloudServicesData";


export default function CloudServices() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3; 

  const handleNext = () => {
    if (index < services.length - itemsPerPage) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <Section id="cloud-services">
      <div className="flex flex-col md:flex-row justify-between">
        <SectionTitle title="What’s included in our cloud computing services?" />
        <div className="hidden md:flex gap-2">
          <Button
            onClick={handlePrev}
            disabled={index === 0}
            variant="outline"
            className={`w-fit h-fit p-2 rounded-full border mr-2 ${index === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100"
              }`}
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={handleNext}
            disabled={index >= services.length - itemsPerPage}
            variant="outline"
            className={`w-fit h-fit p-2 rounded-full border ml-2 ${index >= services.length - itemsPerPage
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-gray-100"
              }`}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className="relative flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.slice(index, index + itemsPerPage).map((service) => (
            <div
              key={service.id}
              className="border rounded-xl p-6 lg:flex-1 lg:min-w-[400px]"
            >
              <h3 className="text-primary font-semibold mb-2">
                {String(service.id).padStart(2, "0")}
              </h3>
              <h4 className="font-semibold mb-6">{service.title}</h4>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
