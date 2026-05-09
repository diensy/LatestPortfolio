"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import toast from "react-hot-toast";
import { PERSONAL } from "@/lib/constants";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      
      toast.success("Message sent successfully! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Failed to send message. Please try WhatsApp or Email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-pad bg-brand-dark border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">
            Get In Touch
          </h2>
          <h3 className="text-4xl sm:text-5xl font-black">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            <div className="bg-brand-surface/80 backdrop-blur-md p-8 rounded-3xl border border-white/5 h-full shadow-lg">
              <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>
              <p className="text-brand-subtext mb-14 leading-relaxed">
                Fill out the form or reach out directly using the information below. I&apos;m currently available for freelance projects and full-time opportunities.
              </p>
              
              <div className="space-y-8">
                <a href={`mailto:${PERSONAL.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-white/5 flex items-center justify-center text-blue-500 group-hover:bg-purple-500 group-hover:text-white transition-all shadow-md group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-brand-subtext mb-1">Email</div>
                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">{PERSONAL.email}</div>
                  </div>
                </a>
                
                <a href={`tel:${PERSONAL.phone}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-white/5 flex items-center justify-center text-blue-500 group-hover:bg-purple-500 group-hover:text-white transition-all shadow-md group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-brand-subtext mb-1">Phone / WhatsApp</div>
                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">{PERSONAL.phone}</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-white/5 flex items-center justify-center text-blue-500 shadow-md">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-brand-subtext mb-1">Location</div>
                    <div className="text-white font-medium">{PERSONAL.location} (Remote)</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-brand-surface/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/5 shadow-lg">
              <h4 className="text-2xl font-bold text-white mb-12">Send me a message</h4>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-brand-subtext font-medium tracking-wide">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-brand-dark/50 border border-white/10 text-white px-4 py-3.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-brand-subtext font-medium tracking-wide">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-brand-dark/50 border border-white/10 text-white px-4 py-3.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-brand-subtext font-medium tracking-wide">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-brand-dark/50 border border-white/10 text-white px-4 py-3.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-4 bg-purple-500 hover:bg-blue-500 text-white font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
