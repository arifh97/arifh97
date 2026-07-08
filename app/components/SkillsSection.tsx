"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxt,
  SiRedux,
  SiPinia,
  SiJquery,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiFramer,
} from "react-icons/si";
import { Zap, Search, Globe } from "lucide-react";

type Skill = {
  name: string;
  icon: IconType | React.ElementType;
  color: string;
  level?: number;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 100 },
      { name: "CSS3", icon: SiCss, color: "#1572B6", level: 100 },
      { name: "Sass", icon: SiSass, color: "#CC6699", level: 100 },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E", level: 90 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 80 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "ReactJS", icon: SiReact, color: "#61DAFB", level: 90, },
      { name: "NextJS", icon: SiNextdotjs, color: "#fff", level: 90, },
      { name: "VueJS", icon: SiVuedotjs, color: "#4FC08D", level: 90, },
      { name: "NuxtJS", icon: SiNuxt, color: "#00DC82", level: 90, },
      { name: "Redux", icon: SiRedux, color: "#764ABC", level: 80, },
      { name: "Pinia", icon: SiPinia, color: "#FFD859", level: 80, },
      { name: "jQuery", icon: SiJquery, color: "#0769AD", level: 95, },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 100 },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", level: 100 },
      { name: "Material UI", icon: SiMui, color: "#007FFF", level: 100 },
      { name: "Sass/SCSS", icon: SiSass, color: "#CC6699", level: 100 },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF", level: 90 },
    ],
  },
  {
    title: "Optimization",
    skills: [
      { name: "Core Web Vitals", icon: Zap, color: "#F59E0B", level: 100 },
      { name: "SEO Best Practices", icon: Search, color: "#22C55E", level: 100 },
      { name: "Cross-browser", icon: Globe, color: "#38BDF8", level: 100 },
    ],
  },
];


const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Skills</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
            My <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="glass rounded-2xl p-4 md:p-6 transition-none!"
            >
              <h3 className="font-heading text-xl font-semibold mb-8 text-white/80">{category.title}</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-8">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="flex items-center gap-2 bg-white/10 px-3 py-2.5 rounded-lg relative z-1 rounded-tr-none">
                      <span className="absolute rounded-t-lg bottom-full right-0 size-4 font-medium text-[11px] w-max py-1 px-2 h-auto bg-white/10 text-accent">{skill.level}%</span>
                      <Icon size={18} color={skill.color} />
                      <span className="text-card-foreground text-sm">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
