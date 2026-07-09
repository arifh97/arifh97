"use client";

import { motion } from "framer-motion";
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
  SiShadcnui,
  SiGreensock,
} from "react-icons/si";

import {
  Zap,
  Search,
  Globe,
  Hourglass,
  GitBranch,
  Image,
  PackageSearch,
  Database,
  Accessibility,
  Smartphone,
} from "lucide-react";

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
      { name: "shadcn/ui", icon: SiShadcnui, color: "#000000", level: 95 },
      { name: "GSAP", icon: SiGreensock, color: "#88CE02", level: 85 },
      { name: "React Bits", icon: SiReact, color: "#61DAFB", level: 85 },
    ],
  },
  {
    title: "Optimization",
    skills: [
      { name: "Core Web Vitals", icon: Zap, color: "#F59E0B", level: 100 },
      { name: "SEO Best Practices", icon: Search, color: "#22C55E", level: 100 },
      { name: "Cross-browser", icon: Globe, color: "#38BDF8", level: 100 },
      { name: "Lazy Loading", icon: Hourglass, color: "#8B5CF6", level: 95 },
      { name: "Code Splitting", icon: GitBranch, color: "#EC4899", level: 90 },
      { name: "Image Optimization", icon: Image, color: "#14B8A6", level: 95 },
      // { name: "Bundle Analysis", icon: PackageSearch, color: "#F97316", level: 85 },
      { name: "Caching Strategies", icon: Database, color: "#6366F1", level: 85 },
      // { name: "Accessibility (a11y)", icon: Accessibility, color: "#10B981", level: 90 },
      { name: "Responsive Design", icon: Smartphone, color: "#0EA5E9", level: 100 },
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
          className="common-title"
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
              <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-4 gap-y-8">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="flex items-center gap-2 bg-white/10 px-3 py-2.5 rounded-lg relative z-1 rounded-tr-none">
                      <span className="absolute rounded-t-lg right-0 bottom-full size-4 font-medium text-[11px] w-max py-1 px-2 h-auto bg-white/10 text-accent">{skill.level}%</span>
                      <Icon size={18} color={skill.color} />
                      <span className="text-card-foreground text-sm line-clamp-1">{skill.name}</span>
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
