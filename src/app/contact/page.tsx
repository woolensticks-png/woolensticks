"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Sparkles, CheckCircle } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/icons";

function YarnDivider({ color = "#C49A5A" }: { color?: string }) {
  return (
    <svg viewBox="0 0 400 20" className="w-full h-5" fill="none">
      <path
        d="M0 10 Q20 2 40 10 Q60 18 80 10 Q100 2 120 10 Q140 18 160 10 Q180 2 200 10 Q220 18 240 10 Q260 2 280 10 Q300 18 320 10 Q340 2 360 10 Q380 18 400 10"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}

const subjectOptions = [
  "💬 General Enquiry",
  "🛒 Place an Order",
  "✨ Custom Order Request",
  "🤝 Collaboration",
  "📦 Track My Order",
  "📸 Feature / Press",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    isCustom: false,
    customDetails: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      isCustom: name === "subject" ? value.includes("Custom") : prev.isCustom,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: send to email/backend
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">

      {/* ─── Hero ─── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#F5EDD8] to-[#FDFAF4]">
        <div className="absolute inset-0 crochet-bg opacity-40" />
        {["🧶", "💬", "✉️", "🎀", "🌸"].map((e, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl opacity-30 pointer-events-none select-none"
            style={{ left: `${10 + i * 18}%`, top: `${15 + (i % 2) * 45}%` }}
            animate={{ y: [0, -10, 0], rotate: [0, 8, -8, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
          >
            {e}
          </motion.span>
        ))}

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <span className="text-[#C49A5A] text-2xl" style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.8rem" }}>
              बात करते हैं! 🧶
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#2C3E5C] mt-2 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Let's talk yarn!
            </h1>
            <p className="text-[#2D2D2D]/70 text-lg">
              Got a question, custom order idea, or just want to say hi? We'd love to hear from you!
            </p>
            <div className="mt-6 max-w-xs mx-auto">
              <YarnDivider />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact info sidebar */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* WhatsApp - primary */}
            <a
              href="https://wa.me/919999999999?text=Hi%20Woolen%20Sticks!%20I%20want%20to%20connect%20%F0%9F%A7%B6"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/10 border-2 border-[#25D366]/40 rounded-2xl p-5 hover:bg-[#25D366]/20 transition-all hover-lift group"
            >
              <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.737 5.5 2.027 7.82L0 32l8.4-2.007A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.294 22.614c-.346.967-2.014 1.857-2.773 1.954-.713.09-1.61.127-2.6-.163-.597-.176-1.363-.41-2.347-.81-4.133-1.73-6.833-5.893-7.037-6.167-.2-.273-1.64-2.18-1.64-4.16 0-1.98 1.04-2.953 1.41-3.353.346-.363.76-.453 1.013-.453.253 0 .507.003.727.013.23.01.543-.087.853.65.32.76 1.087 2.627 1.18 2.82.093.193.16.42.033.673-.12.247-.187.4-.373.62-.187.22-.393.49-.56.66-.187.19-.38.4-.163.787.217.387.963 1.587 2.067 2.573 1.42 1.273 2.617 1.667 2.987 1.857.373.193.587.16.807-.097.22-.253.947-1.103 1.2-1.483.247-.38.5-.317.84-.19.34.127 2.167 1.02 2.54 1.207.373.187.62.28.713.433.093.153.093.887-.253 1.853z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#128C7E] text-lg group-hover:text-[#075E54]">Chat on WhatsApp</p>
                <p className="text-sm text-[#2D2D2D]/60">Quickest way to reach us for orders!</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/woolensticks"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-gradient-to-r from-[#833AB4]/10 to-[#E1306C]/10 border-2 border-[#E1306C]/30 rounded-2xl p-5 hover:from-[#833AB4]/20 hover:to-[#E1306C]/20 transition-all hover-lift group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#833AB4] to-[#E1306C] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <Instagram size={24} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-[#E1306C] text-lg">@woolensticks</p>
                <p className="text-sm text-[#2D2D2D]/60">DM us on Instagram for orders & queries!</p>
              </div>
            </a>

            {/* Email */}
            <div className="flex items-center gap-4 bg-[#2C3E5C]/5 border border-[#2C3E5C]/20 rounded-2xl p-5">
              <div className="w-12 h-12 bg-[#2C3E5C] rounded-full flex items-center justify-center shadow flex-shrink-0">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-[#2C3E5C]">Email us</p>
                <a href="mailto:woolensticks@gmail.com" className="text-sm text-[#C49A5A] hover:underline">
                  woolensticks@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 bg-[#8FAF88]/10 border border-[#8FAF88]/30 rounded-2xl p-5">
              <div className="w-12 h-12 bg-[#8FAF88] rounded-full flex items-center justify-center shadow flex-shrink-0">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-[#2C3E5C]">Based in India 🇮🇳</p>
                <p className="text-sm text-[#2D2D2D]/60">Shipping pan-India via DTDC 📦</p>
              </div>
            </div>

            {/* Custom order teaser */}
            <div className="bg-gradient-to-br from-[#A08DB5]/15 to-[#E8857A]/15 border-2 border-dashed border-[#A08DB5]/40 rounded-2xl p-5">
              <p className="text-[#A08DB5] font-bold text-lg mb-2 flex items-center gap-2">
                <Sparkles size={18} /> Custom Orders Welcome!
              </p>
              <p className="text-sm text-[#2D2D2D]/70 mb-3">
                Have a specific colour, character, or design in mind? Tell us and we'll make it happen!
              </p>
              <p className="text-xs text-[#A08DB5] font-semibold italic" style={{ fontFamily: "var(--font-handwritten)", fontSize: "0.95rem" }}>
                "If you can imagine it, we can crochet it." 🧶
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <CheckCircle size={80} className="text-[#8FAF88] mb-6" />
                <h2 className="text-3xl font-bold text-[#2C3E5C] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  Message Sent! 🎉
                </h2>
                <p className="text-[#2D2D2D]/70 text-lg mb-2">
                  Thank you for reaching out! We'll get back to you soon.
                </p>
                <p className="text-[#C49A5A]" style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.2rem" }}>
                  जल्द मिलते हैं! 🧶
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:"", email:"", subject:"", message:"", isCustom:false, customDetails:"" }); }}
                  className="mt-8 px-6 py-3 border-2 border-[#C49A5A] text-[#C49A5A] rounded-full font-semibold hover:bg-[#C49A5A] hover:text-white transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-xl p-8 border border-[#C49A5A]/20"
              >
                <h2 className="text-2xl font-bold text-[#2C3E5C] mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Send us a message 💌
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2C3E5C] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-4 py-3 border-2 border-[#C49A5A]/30 rounded-xl focus:outline-none focus:border-[#2C3E5C] bg-[#FDFAF4] text-[#2D2D2D] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2C3E5C] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border-2 border-[#C49A5A]/30 rounded-xl focus:outline-none focus:border-[#2C3E5C] bg-[#FDFAF4] text-[#2D2D2D] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-[#2C3E5C] mb-2">
                    What's this about? *
                  </label>
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#C49A5A]/30 rounded-xl focus:outline-none focus:border-[#2C3E5C] bg-[#FDFAF4] text-[#2D2D2D] transition-colors cursor-pointer"
                  >
                    <option value="">Select a topic...</option>
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Custom order details - shown conditionally */}
                {form.isCustom && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="mb-5 overflow-hidden"
                  >
                    <label className="block text-sm font-semibold text-[#A08DB5] mb-2">
                      ✨ Describe your custom order
                    </label>
                    <input
                      type="text"
                      name="customDetails"
                      value={form.customDetails}
                      onChange={handleChange}
                      placeholder="e.g. A blue amigurumi elephant with a red bow, ~15cm size"
                      className="w-full px-4 py-3 border-2 border-[#A08DB5]/40 rounded-xl focus:outline-none focus:border-[#A08DB5] bg-[#A08DB5]/5 text-[#2D2D2D] transition-colors"
                    />
                  </motion.div>
                )}

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#2C3E5C] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us anything — we love hearing from you! 🧶"
                    className="w-full px-4 py-3 border-2 border-[#C49A5A]/30 rounded-xl focus:outline-none focus:border-[#2C3E5C] bg-[#FDFAF4] text-[#2D2D2D] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#2C3E5C] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#C49A5A] transition-all duration-300 hover:scale-[1.02] shadow-lg"
                >
                  <Send size={20} />
                  Send Message 🧶
                </button>

                <p className="text-center text-xs text-[#2D2D2D]/50 mt-4">
                  Or DM us directly on{" "}
                  <a
                    href="https://instagram.com/woolensticks"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#E1306C] font-semibold"
                  >
                    @woolensticks
                  </a>{" "}
                  for the fastest response!
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── Social CTA strip ─── */}
      <section className="py-16 bg-[#F5EDD8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl font-bold text-[#2C3E5C] mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Find us on Instagram 📸
            </p>
            <p className="text-[#2D2D2D]/70 mb-6 text-lg">
              The fastest way to reach us + see our daily crochet content, tutorials, and new drops!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://instagram.com/woolensticks"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-[#833AB4] to-[#E1306C] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
              >
                <Instagram size={22} />
                @woolensticks
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
              >
                <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.737 5.5 2.027 7.82L0 32l8.4-2.007A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.294 22.614c-.346.967-2.014 1.857-2.773 1.954-.713.09-1.61.127-2.6-.163-.597-.176-1.363-.41-2.347-.81-4.133-1.73-6.833-5.893-7.037-6.167-.2-.273-1.64-2.18-1.64-4.16 0-1.98 1.04-2.953 1.41-3.353.346-.363.76-.453 1.013-.453.253 0 .507.003.727.013.23.01.543-.087.853.65.32.76 1.087 2.627 1.18 2.82.093.193.16.42.033.673-.12.247-.187.4-.373.62-.187.22-.393.49-.56.66-.187.19-.38.4-.163.787.217.387.963 1.587 2.067 2.573 1.42 1.273 2.617 1.667 2.987 1.857.373.193.587.16.807-.097.22-.253.947-1.103 1.2-1.483.247-.38.5-.317.84-.19.34.127 2.167 1.02 2.54 1.207.373.187.62.28.713.433.093.153.093.887-.253 1.853z" />
                </svg>
                WhatsApp us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
