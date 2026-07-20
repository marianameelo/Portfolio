"use client";

import { Card } from "@/components/ui/Cards";
import { IoSchool } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="border-t border-[#130432]">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="flex flex-col lg:flex-row gap-10 m-10  items-center"
      >
        <div className="flex-1">
          <p className="font-semibold text-[#8B5CF6] text-xs mb-2">SOBRE MIM</p>
          <div className="flex gap-2 mb-2">
            <h2 className="text-3xl font-extrabold mb-3">
              Prazer, <span className="text-[#8B5CF6]">me conheça!</span>
            </h2>
          </div>
          <p className=" max-w-xl  text-gray-400 text-sm leading-relaxed">
            Tenho 20 anos e sou estudande de ADS na UNINASSAU. Tenho foco em
            desenvolvimento front-end e adoro criar soluções que unem design,
            tecnologia e a experiência do usuário. No último semestre,
            participei de um projeto integrado, atuando no desnevolvimento do
            front-end e coordenando a equipe responsável por essa área,
            colaborando na organização de tarefas e implementação das
            funcionalidades.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 lg:w-1/3">
          <Card
            Icon={IoSchool}
            title="4º periodo"
            description="ADS | UNINASSAU"
          />
          <Card
            Icon={MdOutlineDateRange}
            title="+1 ano"
            description="estudando front-end"
          />
          <Card
            Icon={IoIosRocket}
            title="3"
            description="projetos acadêmicos"
          />
        </div>
      </motion.div>
    </section>
  );
}
