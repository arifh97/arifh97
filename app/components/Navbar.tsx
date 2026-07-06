"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from 'react-scroll'

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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="font-heading text-xl font-bold gradient-text">
          Arif.folio
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              to={link.href} spy={true} smooth={true} duration={600} offset={0}
              key={link.href}
              className="text-base cursor-pointer font-medium text-gray-300 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="contact"
            spy={true} smooth={true} duration={600} offset={0}
            className="px-6 py-3 cursor-pointer rounded-lg text-base font-semibold bg-linear-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Hire Me
          </Link>
        </div>


        <Link
          to="contact"
          spy={true} smooth={true} duration={600} offset={0}
          className="px-4 py-2 cursor-pointer ml-auto mr-2 md:hidden rounded-lg text-sm font-semibold bg-linear-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Hire Me
        </Link>
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
                <Link
                  key={link.href}
                  to={link.href} spy={true} smooth={true} duration={600} offset={0}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="contact"
                spy={true} smooth={true} duration={600} offset={0}
                onClick={() => setMobileOpen(false)}
                className="px-5 min-h-12 flex items-center justify-center rounded-lg text-lg font-semibold bg-linear-to-r from-primary to-accent text-primary-foreground text-center"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
