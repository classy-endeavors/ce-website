"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  className,
}: {
  data: TimelineEntry[];
  className?: string;
}) => {
  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans">
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 relative",
          className
        )}
      >
        {data.map((item, index) => {
          const isLast = index === data.length - 1;

          return (
            <div key={index} className="flex flex-col relative">
              {/* Line across */}
              <div className="absolute top-3 left-0 right-0 h-[2px] bg-primary/50 dark:bg-neutral-700 z-0" />

              {/* Main node */}
              <div className="absolute top-0 z-10">
                <div className="h-6 w-6 rounded-full bg-white dark:bg-black flex items-center justify-center border-2 border-primary/50">
                  <div className="h-3 w-3 rounded-full bg-primary/50" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-12 py-4 pe-6">
                <div className="text-sm">{item.content}</div>
              </div>

              {/* Extra end node for the last item */}
              {isLast && (
                <div className="absolute top-0 right-0 z-10">
                  <div className="h-6 w-6 rounded-full bg-white dark:bg-black flex items-center justify-center border-2 border-primary/50">
                    <div className="h-3 w-3 rounded-full bg-primary/50" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
