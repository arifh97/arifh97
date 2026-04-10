"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Project from '@/app/utilities/project.json'
import { ProjectCard } from '@/app/components/ProjectCard'
import Link from "next/link";

const ProjectsSection = () => {
  const ref = useRef(null);

  const items = Project;

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Portfolio</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.slice(0, 12).map((item, index) => (
            <ProjectCard
              key={index}
              image={item.img}
              title={item.title}
              description={item.des}
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-6 md:mt-10 lg:mt-14">
          <Link className="px-8 py-3.5 rounded-xl font-semibold bg-linear-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all duration-300 hover:scale-105 " href="/projects">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
