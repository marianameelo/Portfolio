"use client";

import { ProjectCard } from "@/components/ui/ProjectsCard";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="projects" className="border-t border-[#130432]">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="flex flex-col lg:flex-row gap-10 m-10  items-center"
      >
        <div className="flex flex-col mb-2 w-full">
          <p className="font-semibold text-[#8B5CF6] text-xs mb-2">PROJETOS</p>
          <div className="flex gap-2 mb-2">
            <p className="font-bold text-white text-2xl">Projetos </p>
            <span className="font-bold text-[#8B5CF6] text-2xl">
              em destaque
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 mt-6 justify-items-center">
            <ProjectCard
              image="/imagens/cashly.png"
              title="Cashly"
              technologies="React Native"
              description="Aplicativo mobile de controle de gastos para ajudar na organização em suas finanças de forma prática."
              videoSrc="/projects/cashly.mp4"
              githubUrl="https://github.com/CodeShakerS1/Cashly"
            />
            <ProjectCard
              image="/imagens/focusMe.png"
              title="FocusMe"
              technologies="React"
              description="Sistema web com cronômetro estilo Pomodoro para auxiliar na organização dos estudos, permitindo gerenciar as tarefas, acompanhar um ranking semanal e ganhar XP como incentivo para a produtividade."
              videoSrc="/projects/focus-me.mp4"
              githubUrl="https://github.com/CodeShakerS1/FocusMe"
            />
            <ProjectCard
              image="/imagens/sosEstudante.png"
              title="SOS ESTUDANTE"
              technologies="Figma"
              description="Protótipo de aplicativo mobile desenvolvido no Figma para auxiliar estudantes, com gerenciamento de disciplinas, turmas e um canal de dúvidas entre alunos e professores."
              videoSrc="/projects/sos-estudante.mp4"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
