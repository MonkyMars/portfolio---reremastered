import Image from "next/image";
import React from "react";

export interface projects {
  title: string;
  description: string;
  date: Date;
  image: string;
  href: string;
  details?: {
    techStack: string[];
    features: string[];
    notes: TimelineItem[];
  };
}

export interface TimelineItem {
  title: "Problem" | "Complications" | "Conclussion";
  description: string;
  date: Date;
  image?: string;
}

export interface TimelineProps {
  project: projects;
  onClose: () => void;
}

export const TimeLineItem = ({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) => (
  <div
    className={`flex flex-col md:flex-row items-center mb-8 ${
      index % 2 === 0 ? "md:flex-row-reverse" : ""
    }`}
  >
    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
      <div className="bg-primary-100/80 p-6 rounded-lg shadow-md">
        {item.image ? (
          <div className="relative w-full h-48 mb-4">
            <Image
              src={`/demos/${item.image}`}
              alt={item.title}
              fill
              className="rounded-lg object-contain"
              unoptimized
            />
          </div>
        ) : null}
        <h3 className="text-2xl font-extrabold mb-2 font-doto">{item.title}</h3>
        <p className="text-sm text-primary-600 font-medium tracking-wide mb-3 italic bg-primary-300/30 inline-block px-3 py-1 rounded-full">
          {item.date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <p className="text-gray-700 max-w-[80ch]">{item.description}</p>
      </div>
    </div>
  </div>
);