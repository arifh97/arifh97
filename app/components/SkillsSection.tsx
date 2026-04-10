"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 95 },
      { name: "Sass", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 90 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "ReactJS", level: 95 },
      { name: "NextJS", level: 90 },
      { name: "VueJS", level: 85 },
      { name: "Redux", level: 88 },
      { name: "Pinia", level: 82 },
      { name: "jQuery", level: 90 },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", level: 96 },
      { name: "Bootstrap", level: 92 },
      { name: "Material UI", level: 88 },
      { name: "Sass/SCSS", level: 90 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Optimization",
    skills: [
      { name: "Core Web Vitals", level: 92 },
      { name: "SEO Best Practices", level: 90 },
      { name: "Cross-browser", level: 95 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Skills</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
            My <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="glass rounded-2xl p-6 md:p-8 hover-glow"
            >
              <h3 className="font-heading text-lg font-semibold mb-6 gradient-text">{category.title}</h3>
              {category.skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={0.3 + i * 0.1} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
