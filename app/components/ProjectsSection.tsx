"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured shopping experience with real-time inventory, payment integration, and admin dashboard.",
    tags: ["NextJS", "TypeScript", "Tailwind", "Stripe"],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Interactive data visualization dashboard with real-time charts, filters, and custom reporting tools.",
    tags: ["ReactJS", "Redux", "Recharts", "Material UI"],
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Social Media App",
    description: "Real-time social platform with messaging, stories, and infinite scroll feed optimized for performance.",
    tags: ["VueJS", "Pinia", "Firebase", "Tailwind"],
    gradient: "from-primary/20 to-accent/10",
  },
  {
    title: "Portfolio CMS",
    description: "Headless CMS-driven portfolio builder with drag-and-drop editing and theme customization.",
    tags: ["NextJS", "TypeScript", "Framer Motion"],
    gradient: "from-accent/10 to-primary/20",
  },
  {
    title: "Health & Fitness Tracker",
    description: "Progressive web app with offline support, data sync, and interactive workout planning.",
    tags: ["ReactJS", "PWA", "Chart.js", "IndexedDB"],
    gradient: "from-primary/15 to-accent/15",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing platform with advanced search, map integration, and virtual tour features.",
    tags: ["NextJS", "Mapbox", "Tailwind", "Prisma"],
    gradient: "from-accent/15 to-primary/15",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Portfolio</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover-glow hover:border-primary/30 transition-all duration-500"
            >
              {/* Project preview area */}
              <div className={`h-48 bg-linear-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-linear-to-t from-card/80 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/10 backdrop-blur-sm flex items-center justify-center gap-4">
                  <a href="#" className="p-3 rounded-xl glass text-foreground hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                  <a href="#" className="p-3 rounded-xl glass text-foreground hover:text-primary transition-colors">
                    <FaGithub size={20} />
                  </a>
                </div>
                <span className="font-heading text-2xl font-bold text-foreground/20 group-hover:scale-110 transition-transform duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
