import React from "react";
import { TimeLineItem, TimelineProps } from "./TimelineItem";
import Image from "next/image";
import { X } from "lucide-react";

const TimeLineView: React.FC<TimelineProps> = ({ project, onClose }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center py-8 justify-center bg-black bg-opacity-80 text-black pointer-events-auto overflow-hidden">
        <article className="bg-white max-w-4xl max-h-full p-8 rounded-lg shadow-lg pointer-events-auto overflow-auto">
          <div className="flex items-center justify-between relative">
            <span className="inline-block px-3 py-1 my-3 rounded-full bg-primary-100 text-primary-600 text-sm font-medium">
            Finished Project on:{" "}
            {project.date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <X className="p-1 my-3 rounded-full bg-primary-100 text-primary-600 text-sm font-medium cursor-pointer" size={28} onClick={onClose}/>
          </div>
          
          <header>
            <h1 className="font-doto font-extrabold text-4xl my-3">
              {project.title}
            </h1>
            <p className="text-left max-w-[80ch]">{project.description}</p>
          </header>
          <main>
            {project.details?.notes?.length && (
              <div className="mt-8">
                <h2 className="text-3xl font-doto font-extrabold mb-3">
                  Notes
                </h2>
                <ul>
                  {project.details.notes.map((note, index) => (
                    <TimeLineItem index={index} item={note} key={index} />
                  ))}
                </ul>
              </div>
            )}
          </main>
          <footer className="w-full mt-8 p-6 bg-primary-50 rounded-lg">
            {project.details?.techStack?.length && (
              <div>
                <h2 className="text-3xl font-doto font-extrabold mb-4">
                  Tech Stack
                </h2>
                <ul className="flex flex-wrap gap-4">
                  {project.details?.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-primary-200/50 p-2 rounded-lg shadow-sm"
                    >
                      <Image
                        src={`/icons/${encodeURI(tech).replaceAll('.', '')}.png`}
                        alt={`${tech} icon`}
                        width={24}
                        height={24}
                        className="object-contain"
                        unoptimized
                      />
                      <li className="text-primary-600 font-medium list-none">
                        {tech}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </footer>
        </article>
      </div>
    </>
  );
};

export default TimeLineView;
