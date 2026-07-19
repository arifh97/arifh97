"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Briefcase, Award, Users, Zap } from "lucide-react";
import { Link } from "react-scroll";

const stats = [
  { icon: Briefcase, value: 230, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 180, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 7, suffix: "+", label: "Years Experience" },
  { icon: Zap, value: 99, suffix: "%", label: "Client Satisfaction" },
];

const CountUp = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <>{count}{suffix}</>;
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="common-title"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">About Me</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
            Passionate About <span className="gradient-text">Building</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">A highly skilled Frontend Web Developer with experience delivering <span className="text-foreground font-semibold">250+ client projects</span> across diverse industries. Specialized in building responsive, high-performance applications using ReactJS, NextJS, and VueJS.</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">Strong ability to translate complex UI/UX designs into clean, maintainable code between design and development with pixel-perfect precision.</p>
            <Link spy={true} smooth={true} duration={600} offset={0} to="contact" className="btn w-max">
              Let&apos;s Work Together
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, value, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
                className=""
              >
                <div className="glass rounded-2xl p-6 text-center hover-glow hover:border-primary/30 transition-all duration-300">
                  <Icon className="mx-auto mb-3 text-white" size={28} />
                  <div className="font-heading text-3xl font-bold gradient-text">
                    <CountUp target={value} suffix={suffix} inView={inView} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
