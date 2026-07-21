"use client";

import Image from "next/image";

import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse lg:flex-row items-center justify-between pt-28 px-6 md:px-10 lg:px-20 gap-12 min-h-screen"
    >
      <motion.div
        className="flex flex-col gap-5 text-center lg:text-left max-w-2xl"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
        }}
      >
        <p className="text-gray-400 text-base md:text-lg">Olá, eu sou</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight whitespace-nowrap">
          Mariana Cecilia
        </h1>
        <p className="text-lg md:text-2xl  font-bold  text-[#8B5CF6]">
          Desenvolvedora front-end
        </p>
        <p className="text-sm text-gray-400 ">
          Sou estudante de Análise e Desenvolvimento de Sistemas <br /> gosto
          muito de criar interfaces modernas, criativas <br />e responsivas,
          além de criar experiências digitais incríveis.
        </p>
        <div className=" flex flex-row gap-5 mt-2">
          <a
            className="cursor-pointer w-fit flex flex-row bg-[#8B5CF6] rounded-lg gap-2 items-center px-6 py-3 "
            href="#projects"
          >
            <p className="text-sm text-white font-light"> ver projetos</p>
            <FaLongArrowAltRight />
          </a>
          <a
            href="/cv/Curriculo-MarianaCecilia.pdf"
            download
            className=" cursor-pointer w-fit flex flex-row border border-[#8B5CF6] rounded-lg gap-2 items-center px-6 py-3"
          >
            <p className="text-sm text-white font-light"> baixar cv</p>
            <IoMdDownload />
          </a>
        </div>
        <div className="flex justify-center lg:justify-start gap-5 mt-4 mb-2">
          <a
            className=" cursor-pointer border border-[#8B5CF6] p-2"
            href="https://github.com/marianameelo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareGithub className="text-3xl text-white" />
          </a>
          <a
            className="cursor-pointer border border-[#8B5CF6] p-2"
            href="https://www.linkedin.com/in/mariana-cecilia-80a05833a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-white" />
          </a>
          <a
            className="cursor-pointer border border-[#8B5CF6] p-2"
            href="mailto:melomariana928@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail className="text-3xl text-white" />
          </a>
        </div>
      </motion.div>
      <motion.div
        className=" flex justify-center lg:justify-end flex-1"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <Image
          src="/imagens/mariana.jpeg"
          alt="Minha foto"
          width={380}
          height={380}
          className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto rounded-full shadow-[0_0_40px_#8B5CF6]"
          priority
        />
      </motion.div>
    </section>
  );
}
