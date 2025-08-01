"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Section from "../Section";
import Link from "next/link";
type BannerProps = {
  title: string;
  description: string;
  buttonText: string;
}
const Banner = ({ title, description, buttonText }: BannerProps) => {
  return (
    <Section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="relative z-10 container mx-auto max-w-7xl rounded-lg p-16 bg-neutral-100 overflow-hidden"
      >
        <div
          className={cn(
            "absolute inset-0 z-0 pointer-events-none",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          )}
        />
        <div className="from-neutral-200/50 pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-b rounded-lg" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center justify-center space-y-4"
        >
          <h1 className="mx-auto max-w-2xl text-center text-3xl leading-snug font-medium capitalize">
            {title}
          </h1>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-4 text-sm">
            {description}
          </p>
          <Link href="contact" className="rounded-full border border-white/80 bg-foreground text-background px-8 py-3">
            {buttonText}
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Banner;
