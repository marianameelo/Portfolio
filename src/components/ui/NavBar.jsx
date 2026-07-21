"use client";

import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const links = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contatos" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#09090B] z-50 shadow-md">
      <div className="w-full h-20 px-6 flex items-center justify-between">
        <span className="flex items-center">
          <b className="text-white text-xl">mariana</b>
          <b className="text-[#8B5CF6] text-xl">.dev</b>
        </span>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <HiOutlineX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
        </button>

        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className="text-base font-medium text-[#A1A1AA] hover:text-violet-500 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-20 left-0 w-full flex flex-col items-center gap-6 py-6 px-6 bg-[#09090B] border-t border-[#1f1f23]">
          {links.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="text-[#A1A1AA] hover:text-[#8B5CF6] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
