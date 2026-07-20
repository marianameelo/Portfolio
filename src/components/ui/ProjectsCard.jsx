"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { ProjectModal } from "./ProjectModal";

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  videoSrc,
  githubUrl,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full max-w-sm rounded-xl border border-[#8B5CF6] bg-[#04010a]">
        <div className="relative w-full h-40">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            className="object-cover rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center m-2">
          <p className="font-semibold text-white text-base">{title}</p>

          <p className="font-medium text-[#a57fff] bg-[#40277b] text-xs w-fit rounded-sm p-1">
            {technologies}
          </p>
        </div>

        <div className="m-2 flex flex-col gap-3">
          <p className="font-medium text-white text-sm">{description}</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 text-[#8B5CF6] hover:text-[#a57fff] transition-colors cursor-pointer"
            >
              <span className="text-sm font-semibold">Ver projeto</span>
              <FaLongArrowAltRight />
            </button>

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Ver código no GitHub"
                className="text-white hover:text-[#8B5CF6] transition-colors"
              >
                <FaSquareGithub size={24} />
              </a>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <ProjectModal
          title={title}
          videoSrc={videoSrc}
          githubUrl={githubUrl}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
