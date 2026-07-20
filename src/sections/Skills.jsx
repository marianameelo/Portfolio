import { Card } from "@/components/ui/Cards";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { LuFigma } from "react-icons/lu";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Hero() {
  return (
    <section id="skills" className="border-t border-[#130432]">
      <div className="flex flex-col lg:flex-row gap-10 m-10  items-center">
        <div className="flex flex-col mb-2">
          <p className="font-semibold text-[#8B5CF6] text-xs mb-2">SKILLS</p>
          <div className="flex gap-2 mb-2">
            <p className="font-bold text-white text-2xl">Tecnologias que eu</p>
            <span className="font-bold text-[#8B5CF6] text-2xl">utilizo</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Card Icon={FaHtml5} title="HTML" />
            <Card Icon={IoLogoCss3} title="CSS" />
            <Card Icon={RiJavascriptLine} title="JavaScript" />
            <Card Icon={BiLogoTypescript} title="TypeScript" />
            <Card Icon={FaReact} title="React Native" />
            <Card Icon={FaGithub} title="GitHub" />
            <Card Icon={IoIosGitBranch} title="Git" />
            <Card Icon={LuFigma} title="Figma" />
            <Card Icon={RiTailwindCssFill} title="Tailwind" />
          </div>
        </div>
      </div>
    </section>
  );
}
