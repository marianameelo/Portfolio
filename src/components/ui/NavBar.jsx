"use client";

import Link from "next/link";

const links = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contatos" },
];

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-[#09090B] z-50 shadow-md flex justify-between flex-col lg:flex-row">
      <span className="flex items-center ml-8">
        <b className="text-white text-xl">mariana</b>
        <b className="text-[#8B5CF6] text-xl">.dev</b>
      </span>
      <div className="flex gap-7 items-center mr-8">
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
    </nav>
  );
}
