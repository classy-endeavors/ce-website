"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import { technologies } from "./technologiesData";

const Technologies = () => {
  const [activeTab, setActiveTab] = useState(technologies[0].title);
  return (
    <section id="features" className="relative z-10 pt-20 max-w-7xl mx-auto px-6">
      <SectionTitle
        title="Our Technologies"
      />
      <div className="flex flex-wrap gap-4 border-b border-gray-200 mb-8">
        {technologies.map((card) => (
          <button
            key={card.title}
            onClick={() => setActiveTab(card.title)}
            className={`text-base font-medium p-4 border-b-2 ${activeTab === card.title
              ? "border-primary text-black"
              : "border-transparent text-muted-foreground"
              }`}
          >
            {card.title}
          </button>
        ))}
      </div>

      {technologies
        .filter((card) => card.title === activeTab)
        .map((card) => (
          <div key={card.title} className="flex flex-col md:flex-row gap-6 md:gap-12">
            <table className="text-left border-b border-gray-200  w-full md:w-2/3">
              <tbody>
                {card.tech.map((item) => (
                  <tr key={item.title} className="border-b border-gray-200">
                    <td className="py-6 pr-6 font-medium whitespace-nowrap w-40">
                      {item.title}
                    </td>
                    <td className="py-4 text-muted-foreground">
                      {item.tools.join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="columns-3 md:columns-4 lg:columns-6 gap md:gap-6 w-full md:w-1/3">
              {card.stack.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center w-fit"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 object-contain mb-2"
                    width={12}
                    height={12}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
    </section>
  );
};

export default Technologies;
