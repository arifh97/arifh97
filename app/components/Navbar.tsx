"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

const navLinks = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Tools", href: "tools" },
  // { label: "Contact", href: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-solid transition-all duration-500 ${scrolled ? "backdrop-blur-xl shadow-lg" : "bg-transparent border-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="font-heading text-xl font-bold logo-gradient">
          Arif.folio
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              to={link.href} spy={true} smooth={true} duration={600} offset={0}
              key={link.href}
              className="text-base cursor-pointer font-medium text-gray-300 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            spy={true} smooth={true} duration={600} offset={0}
            className="btn min-h-12 px-6"
          >
            Hire Me
          </ScrollLink>
        </div>


        <ScrollLink
          to="contact"
          spy={true} smooth={true} duration={600} offset={0}
          className="btn min-h-10! md:min-h-12! px-4 cursor-pointer ml-auto mr-2 md:hidden"
        >
          Hire Me
        </ScrollLink>
        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong overflow-hidden"
          >
            <div className="container mx-auto py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.href}
                  to={link.href} spy={true} smooth={true} duration={600} offset={0}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </ScrollLink>
              ))}
              <ScrollLink
                to="contact"
                spy={true} smooth={true} duration={600} offset={0}
                onClick={() => setMobileOpen(false)}
                className="px-5 min-h-12 flex items-center justify-center rounded-lg text-lg font-semibold bg-linear-to-r from-primary to-accent text-primary-foreground text-center"
              >
                Hire Me
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
