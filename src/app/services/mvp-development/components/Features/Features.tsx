"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { features } from "./featureData";
import { cn } from "@/lib/utils";

const Features = () => {
  // const flipVariant = {
  //   hidden: { rotateY: 100, opacity: 0 },
  //   visible: (i: number) => ({
  //     rotateY: 0,
  //     opacity: 1,
  //     transition: { delay: i * 0.3, duration: 0.8, ease: "easeIn" },
  //   }),
  // };

  return (
    <section className="relative z-10 py-16 pb-4 md:pt-20 lg:pt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="container mx-auto max-w-6xl rounded-2xl text-black"
      >
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <div className="flex flex-col items-center justify-center">
              <Badge className="bg-background border-border mb-4 rounded-md border px-4 py-2 text-sm text-black">
                Why Us
              </Badge>
              <h3 className="mx-auto max-w-3xl text-center text-3xl leading-snug font-bold">
                Why choose us as your AI Development Company{" "}
              </h3>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {features.map((feat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  // variants={flipVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={cn("relative flex flex-col overflow-hidden rounded-lg p-8", index%2 !== 0 ? "bg-neutral-100" : "border border-border rounded-lg")}
                >
                  <p className="mt-4 text-lg font-bold">{feat.value}</p>
                  <p className="relative z-20 mt-4 text-sm font-normal text-neutral-600 dark:text-neutral-400">
                    {feat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
