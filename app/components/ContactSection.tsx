"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import Social from "./social";

const ContactSection = () => {
  const ref = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Contact</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Let's build something amazing together.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: Mail, text: "arifline16@gmail.com" },
                { icon: MapPin, text: "Available Worldwide (Remote)" },
                { icon: Phone, text: "+8801918599939" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl glass">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <span className="text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>

            <Social />
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-semibold bg-linear-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
    </section>
  );
};

export default ContactSection;
