"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Social from "./social";
import { Link } from "react-scroll";
import Lightfall from './Lightfall';

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding md:pt-32">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full border border-border/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full border border-border/10" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 md:mb-8 bg-card/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-gray-300">Available for new projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6 text-white"
            >
              Hi, I&#39;m
              <span className="gradient-text"> Md Arif Hossain</span>
              <br />
              <span className="">Frontend Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Crafting high-performance, responsive web applications with modern frameworks.
              Turning complex designs into seamless digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-8 md:mb-12 text-sm md:text-base"
            >
              <Link
                smooth={true} duration={300} offset={0}
                to="projects"
                className="px-8 btn w-max"
              >
                View My Work
              </Link>
              <Link
                smooth={true} duration={300} offset={0}
                to="contact"
                className="px-8 btn w-max bg-card/20 backdrop-blur-2xl hover:bg-primary/90"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center justify-center"
            >
              <Social />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            whileInView={{ y: [0, 8, 0] }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="text-muted-foreground" size={20} />
          </motion.div>
        </motion.div>


        <Lightfall
          className="absolute inset-0 pointer-events-none"
          colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
          backgroundColor="#090B0B"
          speed={0.5}
          streakCount={2}
          streakWidth={1}
          streakLength={1}
          glow={1}
          density={0.6}
          twinkle={1}
          zoom={3}
          backgroundGlow={0}
          opacity={1}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={1}
          mixBlendMode="multiply"
        />
      </section>
    </>
  );
};

export default HeroSection;
