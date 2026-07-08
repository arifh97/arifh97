"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Social from "./social";

// ✅ Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_mw77az1";
const EMAILJS_TEMPLATE_ID = "template_yu7gdbd";
const EMAILJS_PUBLIC_KEY = "yEj4uR_S3N6Y2WGKt";

type Status = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", service: '' });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "", service: 'personal' });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      // Reset status after 4 seconds
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const isLoading = status === "sending";

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
              Let&apos;s build something amazing together.
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
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-4 md:p-8 space-y-5"
          >
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">Name</label>
              <input
                type="text"
                name="name"
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
                name="email"
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
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            {/* Status feedback */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-green-500 text-sm font-medium">
                <CheckCircle size={16} />
                Message sent! I&apos; ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
                <AlertCircle size={16} />
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="btn w-full gap-x-3"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;