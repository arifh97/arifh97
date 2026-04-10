"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitBranch, Layers, Palette, Code2, Globe } from "lucide-react";
import { FaFigma } from "react-icons/fa";

const tools = [
  { icon: GitBranch, name: "Git & GitHub", desc: "Version control & collaboration" },
  { icon: Code2, name: "Webpack & Vite", desc: "Build tools & bundling" },
  { icon: FaFigma, name: "Figma", desc: "UI/UX design & prototyping" },
  { icon: Palette, name: "Adobe XD", desc: "Design handoff & wireframes" },
  { icon: Layers, name: "Sketch", desc: "Design-to-code workflow" },
  { icon: Globe, name: "Browser DevTools", desc: "Debugging & performance" },
];

const workflow = [
  { step: "01", title: "Design Review", desc: "Analyze Figma/XD mockups, define component architecture" },
  { step: "02", title: "Component Build", desc: "Build reusable, accessible components with atomic design" },
  { step: "03", title: "Integration", desc: "Connect APIs, state management, and routing" },
  { step: "04", title: "Optimization", desc: "Performance audit, SEO, Core Web Vitals tuning" },
];

const ToolsSection = () => {
  const ref = useRef(null);

  return (
    <section id="tools" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Workflow</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
            Tools & <span className="gradient-text">Process</span>
          </h2>
        </motion.div>

        {/* Tools grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6 md:mb-10 lg:mb-14">
          {tools.map(({ icon: Icon, name, desc }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="glass rounded-2xl p-5 text-center hover-glow hover:border-primary/30 group transition-all duration-300">
                <Icon className="mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" size={28} />
                <div className="text-sm font-semibold mb-1">{name}</div>
                <div className="text-xs text-muted-foreground">{desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflow.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
            >
              <div className="relative glass rounded-2xl p-6 hover-glow h-full">
                <span className="font-heading text-4xl font-bold gradient-text opacity-50">{item.step}</span>
                <h3 className="font-heading text-lg font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
