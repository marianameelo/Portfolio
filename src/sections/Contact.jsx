"use client";

import { MdEmail } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText("melomariana928@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="border-t border-[#130432]">
      <div className="flex flex-col lg:flex-row gap-10 m-10  items-center">
        <div className="flex flex-col mb-2 w-full">
          <p className="font-semibold text-[#8B5CF6] text-xs mb-2">CONTATO</p>
          <div className="flex gap-2 mb-2">
            <p className="font-semibold text-white text-2xl">Vamos</p>{" "}
            <span className="font-semibold text-[#8B5CF6] text-2xl">
              conversar?
            </span>
          </div>
          <p className="font-medium text-white text-base">
            Estou aberta para oportunidades e projetos incríveis!
          </p>
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 bg-purple-500 text-[#0a0a0f] font-bold px-7 py-3.5 rounded-lg mb-2 mt-4 hover:bg-purple-400 transition w-fit"
          >
            <MdEmail size={18} /> {copied ? "Email copiado!" : "Copiar email"}
          </button>
          <div className="flex flex-col mt-4 gap-4">
            <div className="flex items-center gap-3">
              <MdEmail className="text-[#8B5CF6] text-xl" />
              <p className="text-white">melomariana928@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <FaLinkedin className="text-[#8B5CF6] text-xl" />
              <p className="text-white">linkedin.com/in/marianacecilia</p>
            </div>

            <div className="flex items-center gap-3">
              <FaSquareGithub className="text-[#8B5CF6] text-xl" />
              <p className="text-white">github.com/marianameelo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
