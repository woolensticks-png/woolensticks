"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
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

const values = [
  {
    icon: "🧶",
    title: "Handmade with Love",
    titleHi: "प्यार से बनाया",
    desc: "Every product is crafted by hand — no machines, no shortcuts. Just yarn, a hook, and a lot of care.",
    color: "#E8857A",
  },
  {
    icon: "🌿",
    title: "Quality Materials",
    titleHi: "उत्तम सामग्री",
    desc: "We use soft, durable, skin-friendly yarns so every piece feels as good as it looks.",
    color: "#8FAF88",
  },
  {
    icon: "❤️",
    title: "Community First",
    titleHi: "समुदाय पहले",
    desc: "Built from a passionate Instagram community. Your DMs, your ideas, your love — that's what drives us.",
    color: "#A08DB5",
  },
];

const milestones = [
  { year: "The Beginning", event: "Woolen Sticks was born from a single hook and a dream 🧶", color: "#E8857A" },
  { year: "First Sale", event: "First order placed! A custom keychain that made someone smile 🔑", color: "#F0B429" },
  { year: "Instagram Blows Up", event: "Our Reels started going viral — the crochet community found us! 📱", color: "#8FAF88" },
  { year: "Diwali Drop", event: "Diya Set hits 100K+ views in just 7 days 🪔🔥", color: "#A08DB5" },
  { year: "DTDC Partnership", event: "First B2C courier account — now shipping pan-India! 📦", color: "#C49A5A" },
  { year: "Today & Beyond", event: "A full website, a growing team, and so much yarn to crochet ✨", color: "#2C3E5C" },
];

const teamMembers = [
  { name: "The Founder", role: "Crocheter & Creator", emoji: "👩‍🎨", color: "#E8857A" },
  { name: "The Team", role: "Handcraft Artists", emoji: "🧑‍🤝‍🧑", color: "#8FAF88" },
  { name: "You!", role: "Our Inspiration", emoji: "💛", color: "#F0B429" },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen pt-20">

      {/* ─── Hero ─── */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#2C3E5C] via-[#3a5280] to-[#2C3E5C]">
        <div className="absolute inset-0 crochet-bg opacity-10" />
        {/* Floating yarn emojis */}
        {["🧶", "🪢", "🌸", "✨", "🎀"].map((e, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl opacity-30 pointer-events-none select-none"
            style={{ left: `${5 + i * 20}%`, top: `${20 + (i % 2) * 40}%` }}
            animate={{ y: [0, -12, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          >
            {e}
          </motion.span>
        ))}

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <span
              className="text-[#C49A5A] text-2xl"
              style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.8rem" }}
            >
              हमारी कहानी 🧶
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold text-white mt-3 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              "Every stitch <br />
              <span className="text-[#C49A5A]">tells a story."</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From a single crochet hook to a pan-India brand — this is the story of Woolen Sticks.
            </p>
          </motion.div>
        </div>

        {/* Wavy bottom */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" fill="none">
          <path d="M0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 L0 60 Z" fill="#FDFAF4" />
        </svg>
      </section>

      {/* ─── Origin Story ─── */}
      <section className="py-20 bg-[#FDFAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#C49A5A] shadow-2xl">
                  <Image
                    src="/woolen_sticks.jpg"
                    alt="Woolen Sticks"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Rotating dashed ring */}
                <motion.div
                  className="absolute rounded-full border-4 border-dashed border-[#E8857A] opacity-60"
                  style={{ inset: "-12px" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* Story text */}
            <motion.div
              className="flex-1"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="text-[#E8857A] text-xl"
                style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.4rem" }}
              >
                How it all started 🌱
              </span>
              <h2
                className="text-4xl font-bold text-[#2C3E5C] mt-2 mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A hook, some yarn, and a whole lot of heart
              </h2>
              <div className="space-y-4 text-[#2D2D2D]/75 text-lg leading-relaxed">
                <p>
                  Woolen Sticks wasn't born in a factory. It was born at a table, with a crochet hook and a ball of yarn, and a simple desire — to make something beautiful with our hands.
                </p>
                <p>
                  What started as a creative hobby quickly became something bigger. Our first Instagram reel showing a handmade keychain got thousands of views. Then came DMs. Then orders. Then our Diwali diya set exploded with <strong className="text-[#F0B429]">100,000+ views in just 7 days</strong>.
                </p>
                <p>
                  Today, Woolen Sticks is a small but passionate team, crocheting joy and shipping it across India via DTDC. Every product is still handmade, every stitch still has love in it.
                </p>
              </div>
              <div className="mt-8">
                <YarnDivider />
              </div>
              <div className="flex gap-6 mt-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#E8857A]" style={{ fontFamily: "var(--font-display)" }}>100K+</p>
                  <p className="text-sm text-[#2D2D2D]/60">Viral views</p>
                </div>
                <div className="w-px bg-[#C49A5A]/30" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#8FAF88]" style={{ fontFamily: "var(--font-display)" }}>100%</p>
                  <p className="text-sm text-[#2D2D2D]/60">Handmade</p>
                </div>
                <div className="w-px bg-[#C49A5A]/30" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#A08DB5]" style={{ fontFamily: "var(--font-display)" }}>❤️</p>
                  <p className="text-sm text-[#2D2D2D]/60">Made with love</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="py-20 bg-gradient-to-b from-[#F5EDD8] to-[#FDFAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[#8FAF88] text-xl" style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.4rem" }}>
              What we stand for 🌿
            </span>
            <h2 className="text-4xl font-bold text-[#2C3E5C] mt-2" style={{ fontFamily: "var(--font-display)" }}>
              Our Values
            </h2>
            <div className="mt-4 max-w-xs mx-auto">
              <YarnDivider color="#8FAF88" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="rounded-3xl p-8 text-center hover-lift"
                style={{ background: `${v.color}12`, border: `2px solid ${v.color}30` }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-5 shadow-lg"
                  style={{ background: `${v.color}25`, border: `2px solid ${v.color}` }}
                >
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-1" style={{ color: v.color, fontFamily: "var(--font-display)" }}>
                  {v.title}
                </h3>
                <p className="text-sm mb-3" style={{ fontFamily: "var(--font-handwritten)", fontSize: "0.9rem", color: v.color, opacity: 0.7 }}>
                  {v.titleHi}
                </p>
                <p className="text-[#2D2D2D]/70 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="py-20 bg-[#FDFAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[#F0B429] text-xl" style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.4rem" }}>
              The people behind the yarn 👩‍🎨
            </span>
            <h2 className="text-4xl font-bold text-[#2C3E5C] mt-2" style={{ fontFamily: "var(--font-display)" }}>
              Meet the Team
            </h2>
            <div className="mt-4 max-w-xs mx-auto">
              <YarnDivider color="#F0B429" />
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
                className="text-center"
              >
                <div className="relative mx-auto mb-4">
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center text-5xl shadow-xl border-4 mx-auto"
                    style={{ background: `${member.color}20`, borderColor: member.color }}
                  >
                    {member.emoji}
                  </div>
                  <motion.div
                    className="absolute rounded-full border-4 border-dashed opacity-40"
                    style={{ inset: "-6px", borderColor: member.color }}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <h3 className="font-bold text-[#2C3E5C] text-lg" style={{ fontFamily: "var(--font-display)" }}>
                  {member.name}
                </h3>
                <p className="text-sm" style={{ color: member.color, fontFamily: "var(--font-handwritten)", fontSize: "1rem" }}>
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="py-20 bg-[#2C3E5C] relative overflow-hidden">
        <div className="absolute inset-0 crochet-bg opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[#C49A5A] text-xl" style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.4rem" }}>
              Our journey so far 🗓️
            </span>
            <h2 className="text-4xl font-bold text-white mt-2" style={{ fontFamily: "var(--font-display)" }}>
              Milestones
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#C49A5A]/30" />

            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ x: i % 2 === 0 ? -40 : 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-center gap-6 mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Dot */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg border-4 border-[#2C3E5C] z-10"
                  style={{ backgroundColor: m.color }}
                >
                  {i + 1}
                </div>

                {/* Content */}
                <div
                  className="flex-1 rounded-2xl p-5"
                  style={{ background: `${m.color}15`, border: `1px solid ${m.color}40` }}
                >
                  <p className="font-bold text-sm mb-1" style={{ color: m.color, fontFamily: "var(--font-handwritten)", fontSize: "1rem" }}>
                    {m.year}
                  </p>
                  <p className="text-white/80 text-sm">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-br from-[#E8857A]/20 to-[#F0B429]/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-4">🛍️</div>
            <h2 className="text-4xl font-bold text-[#2C3E5C] mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Now you know our story. <br />Come be a part of it!
            </h2>
            <p className="text-[#2D2D2D]/70 mb-8 text-lg">
              Shop our handcrafted collection or follow us on Instagram for daily doses of crochet joy.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/products"
                className="flex items-center gap-2 bg-[#2C3E5C] text-white px-8 py-4 rounded-full font-bold hover:bg-[#C49A5A] transition-all duration-300 hover:scale-105"
              >
                Shop Now <ArrowRight size={20} />
              </Link>
              <a
                href="https://instagram.com/woolensticks"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border-2 border-[#E1306C] text-[#E1306C] px-8 py-4 rounded-full font-bold hover:bg-[#E1306C] hover:text-white transition-all"
              >
                <Instagram size={20} />
                Follow @woolensticks
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
