"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import YarnLoader from "@/components/YarnLoader";
import { ArrowRight, Star, Heart, Sparkles } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/icons";

// ─── Yarn Divider ───
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

// ─── Confetti particles ───
const confettiColors = ["#E8857A", "#F0B429", "#8FAF88", "#A08DB5", "#C49A5A", "#2C3E5C"];
const confettiShapes = ["🧶", "🌸", "⭕", "🎀", "✨", "🪢"];

function ConfettiParticle({ index }: { index: number }) {
  return (
    <motion.div
      className="absolute text-2xl pointer-events-none select-none"
      style={{ left: `${(index * 13 + 5) % 95}%`, top: "-40px" }}
      initial={{ y: -40, opacity: 1, rotate: 0 }}
      animate={{ y: "110vh", opacity: [1, 1, 0.5, 0], rotate: [0, 180, 360, 540] }}
      transition={{
        duration: 4 + (index % 3),
        delay: index * 0.3,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "linear",
      }}
    >
      {confettiShapes[index % confettiShapes.length]}
    </motion.div>
  );
}

// ─── Category Card ───
const categories = [
  { icon: "🔑", title: "Keychains", titleHi: "चाबी के छल्ले", desc: "Cute & colourful handmade keychains for every vibe", color: "#E8857A", href: "/products?cat=keychains" },
  { icon: "🧸", title: "Crochet Toys", titleHi: "खिलौने", desc: "Adorable amigurumi toys — perfect gifts for all ages", color: "#8FAF88", href: "/products?cat=toys" },
  { icon: "🪔", title: "Festive Specials", titleHi: "त्योहारी विशेष", desc: "Diyas, décor & more for every Indian festival", color: "#F0B429", href: "/products?cat=festive" },
  { icon: "✨", title: "Custom Orders", titleHi: "कस्टम ऑर्डर", desc: "Got an idea? We'll crochet it just for you", color: "#A08DB5", href: "/contact" },
];

// ─── Products showcase ───
const featuredProducts = [
  { name: "Rainbow Keychain", nameHi: "रेनबो चाबी", price: "₹99", badge: "Bestseller", color: "#E8857A", emoji: "🔑", desc: "Vibrant handcrafted keychain" },
  { name: "Amigurumi Bear", nameHi: "भालू खिलौना", price: "₹299", badge: "New", color: "#8FAF88", emoji: "🐻", desc: "Soft crocheted teddy bear" },
  { name: "Diwali Diya Set", nameHi: "दीवाली दीया", price: "₹199", badge: "🔥 100K Views!", color: "#F0B429", emoji: "🪔", desc: "Festive crochet diya covers" },
  { name: "Strawberry Charm", nameHi: "स्ट्रॉबेरी चार्म", price: "₹129", badge: "Popular", color: "#E8857A", emoji: "🍓", desc: "Adorable mini crochet charm" },
  { name: "Bunny Plushie", nameHi: "बनी खिलौना", price: "₹349", badge: "New", color: "#A08DB5", emoji: "🐰", desc: "Handmade crochet bunny" },
  { name: "Mandala Keychain", nameHi: "मंडल चाबी", price: "₹149", badge: "Trending", color: "#C49A5A", emoji: "🌸", desc: "Intricate mandala design" },
];

// ─── Testimonials ───
const testimonials = [
  { name: "Priya S.", text: "Got the Diwali diya set — absolutely STUNNING! The quality is incredible for the price. Will definitely order again 🪔❤️", stars: 5 },
  { name: "Rahul M.", text: "Ordered a custom keychain for my girlfriend. Woolen Sticks made it exactly as I described. She loved it!", stars: 5 },
  { name: "Sneha K.", text: "The amigurumi bear is SO cute. My daughter won't put it down 😄 Fast delivery via DTDC too!", stars: 5 },
];

// ─── Home Page ───
export default function HomePage() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      {/* Entry Animation */}
      <YarnLoader onComplete={() => setLoaderDone(true)} />

      <AnimatePresence>
        {loaderDone && (
          <motion.div
            key="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDD8] via-[#FDFAF4] to-[#E8F5E8]" />
              <div className="absolute inset-0 crochet-bg opacity-40" />

              {/* Confetti */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <ConfettiParticle key={i} index={i} />
                ))}
              </div>

              {/* Decorative yarn balls */}
              <motion.div
                className="absolute top-24 left-8 opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="36" fill="#E8857A" />
                  <path d="M15 55 Q40 20 65 55" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
                  <path d="M12 40 Q40 8 68 40" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
                </svg>
              </motion.div>
              <motion.div
                className="absolute bottom-32 right-12 opacity-25"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <svg width="100" height="100" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="36" fill="#A08DB5" />
                  <path d="M15 55 Q40 20 65 55" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
                  <path d="M12 40 Q40 8 68 40" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
                </svg>
              </motion.div>

              {/* Hero content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-12">
                {/* Text */}
                <motion.div
                  className="flex-1 text-center lg:text-left"
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span
                    className="inline-block text-[#C49A5A] text-xl mb-4"
                    style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.5rem" }}
                  >
                    🧶 हस्तनिर्मित प्यार से बना
                  </span>
                  <h1
                    className="text-5xl md:text-7xl font-bold text-[#2C3E5C] leading-tight mb-6"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Handcrafted with{" "}
                    <span className="text-[#E8857A] relative">
                      love
                      <motion.svg
                        className="absolute -bottom-2 left-0 w-full"
                        viewBox="0 0 200 10"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                      >
                        <motion.path
                          d="M0 5 Q50 0 100 5 Q150 10 200 5"
                          stroke="#C49A5A"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 1 }}
                        />
                      </motion.svg>
                    </span>
                    ,{" "}
                    <br className="hidden md:block" />
                    one loop at a time
                  </h1>
                  <p className="text-lg text-[#2D2D2D]/70 mb-8 max-w-xl">
                    Discover our collection of handcrafted crochet keychains, toys, and festive specials.
                    Each piece made with care by the Woolen Sticks team.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <Link
                      href="/products"
                      className="flex items-center gap-2 bg-[#2C3E5C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#C49A5A] transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Shop Now <ArrowRight size={20} />
                    </Link>
                    <a
                      href="https://instagram.com/woolensticks"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border-2 border-[#E1306C] text-[#E1306C] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E1306C] hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <Instagram size={20} />
                      Follow Us
                    </a>
                  </div>

                  {/* Social proof */}
                  <div className="flex gap-6 mt-8 justify-center lg:justify-start">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#2C3E5C]" style={{ fontFamily: "var(--font-display)" }}>100K+</p>
                      <p className="text-xs text-[#2D2D2D]/60">Views in 7 days 🪔</p>
                    </div>
                    <div className="w-px bg-[#C49A5A]/30" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#2C3E5C]" style={{ fontFamily: "var(--font-display)" }}>100%</p>
                      <p className="text-xs text-[#2D2D2D]/60">Handmade</p>
                    </div>
                    <div className="w-px bg-[#C49A5A]/30" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#2C3E5C]" style={{ fontFamily: "var(--font-display)" }}>DTDC</p>
                      <p className="text-xs text-[#2D2D2D]/60">Pan-India shipping</p>
                    </div>
                  </div>
                </motion.div>

                {/* Logo medallion */}
                <motion.div
                  className="flex-shrink-0"
                  initial={{ x: 60, opacity: 0, rotate: -10 }}
                  animate={{ x: 0, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="relative">
                    <motion.div
                      className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#C49A5A] shadow-2xl"
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Image
                        src="/woolen_sticks.jpg"
                        alt="Woolen Sticks"
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                    {/* Rotating ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-dashed border-[#E8857A] opacity-50"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      style={{ margin: "-10px" }}
                    />
                    {/* Badge */}
                    <motion.div
                      className="absolute -bottom-4 -right-4 bg-[#F0B429] text-[#2C3E5C] px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✨ Handmade!
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Scroll indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="w-6 h-10 border-2 border-[#C49A5A] rounded-full flex justify-center pt-2">
                  <div className="w-1.5 h-3 bg-[#C49A5A] rounded-full" />
                </div>
              </motion.div>
            </section>

            {/* ═══════════════════════════════ MARQUEE ═══════════════════════════════ */}
            <section className="bg-[#2C3E5C] py-4 overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(3)].map((_, i) =>
                  ["🧶 Keychains", "🧸 Crochet Toys", "🪔 Festive Diyas", "✨ Custom Orders", "❤️ Handmade", "🌸 Made with Love", "📦 DTDC Shipping", "🎨 Colourful Designs"].map(
                    (item, j) => (
                      <span key={`${i}-${j}`} className="mx-6 text-white font-semibold text-sm tracking-wider">
                        {item}
                      </span>
                    )
                  )
                )}
              </div>
            </section>

            {/* ═══════════════════════════════ CATEGORIES ═══════════════════════════════ */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[#C49A5A] text-xl" style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.4rem" }}>
                  What we make 🧶
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E5C] mt-2" style={{ fontFamily: "var(--font-display)" }}>
                  Our Collections
                </h2>
                <div className="mt-4 max-w-xs mx-auto">
                  <YarnDivider />
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat, i) => (
                  <motion.div
                    key={cat.title}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Link href={cat.href}>
                      <div
                        className="group relative rounded-3xl p-8 text-center cursor-pointer hover-lift overflow-hidden"
                        style={{ background: `${cat.color}15`, border: `2px solid ${cat.color}40` }}
                      >
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                          style={{ background: cat.color }}
                        />
                        <div
                          className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg"
                          style={{ background: `${cat.color}25`, border: `2px solid ${cat.color}` }}
                        >
                          {cat.icon}
                        </div>
                        <h3
                          className="text-xl font-bold mb-1"
                          style={{ color: cat.color, fontFamily: "var(--font-display)" }}
                        >
                          {cat.title}
                        </h3>
                        <p
                          className="text-xs mb-2 opacity-70"
                          style={{ fontFamily: "var(--font-handwritten)", fontSize: "0.9rem", color: cat.color }}
                        >
                          {cat.titleHi}
                        </p>
                        <p className="text-sm text-[#2D2D2D]/70">{cat.desc}</p>
                        <div className="mt-4 flex items-center justify-center gap-1 text-sm font-semibold" style={{ color: cat.color }}>
                          Explore <ArrowRight size={14} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ═══════════════════════════════ FESTIVE SPOTLIGHT ═══════════════════════════════ */}
            <section className="py-20 bg-gradient-to-r from-[#F0B429]/20 via-[#E8857A]/10 to-[#F0B429]/20 relative overflow-hidden">
              <div className="absolute inset-0 crochet-bg opacity-30" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <motion.div
                    className="flex-1"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                  >
                    <span
                      className="inline-block text-[#F0B429] text-xl mb-4"
                      style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.4rem" }}
                    >
                      🔥 Going viral on Instagram!
                    </span>
                    <h2
                      className="text-4xl md:text-5xl font-bold text-[#2C3E5C] mb-4 leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Diwali Diya Set — Our most loved creation 🪔
                    </h2>
                    <p className="text-[#2D2D2D]/70 text-lg mb-6">
                      Our handcrafted crochet diya covers went viral with over{" "}
                      <span className="font-bold text-[#F0B429]">100,000+ views</span> in just 7 days!
                      Festive, colourful, and completely unique — perfect for gifting.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                      <Link
                        href="/products?cat=festive"
                        className="bg-[#F0B429] text-[#2C3E5C] px-6 py-3 rounded-full font-bold hover:bg-[#E8857A] hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        Shop Festive Specials
                      </Link>
                      <a
                        href="https://instagram.com/woolensticks"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 border-2 border-[#F0B429] text-[#F0B429] px-6 py-3 rounded-full font-bold hover:bg-[#F0B429] hover:text-white transition-all"
                      >
                        <Instagram size={18} />
                        See the Reel
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex-shrink-0 relative"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                  >
                    <div className="w-64 h-64 bg-gradient-to-br from-[#F0B429] to-[#E8857A] rounded-3xl flex items-center justify-center text-9xl shadow-2xl animate-float">
                      🪔
                    </div>
                    <motion.div
                      className="absolute -top-4 -right-4 bg-[#E8857A] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse-glow"
                    >
                      100K+ Views! 🔥
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-4 -left-4 bg-[#2C3E5C] text-white px-3 py-1.5 rounded-full text-xs font-semibold"
                    >
                      🚀 Going viral!
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ═══════════════════════════════ BESTSELLERS ═══════════════════════════════ */}
            <section className="py-20 granny-bg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  className="text-center mb-12"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-[#E8857A] text-xl" style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.4rem" }}>
                    Our favourites ❤️
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E5C] mt-2" style={{ fontFamily: "var(--font-display)" }}>
                    Trending Right Now
                  </h2>
                  <div className="mt-4 max-w-xs mx-auto">
                    <YarnDivider color="#E8857A" />
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {featuredProducts.map((product, i) => (
                    <motion.div
                      key={product.name}
                      initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                    >
                      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover-lift cursor-pointer group">
                        {/* Product image area */}
                        <div
                          className="h-40 md:h-48 flex items-center justify-center text-6xl relative"
                          style={{ background: `${product.color}20` }}
                        >
                          <span className="group-hover:scale-110 transition-transform duration-300">
                            {product.emoji}
                          </span>
                          {/* Badge */}
                          <span
                            className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full text-white"
                            style={{ backgroundColor: product.color }}
                          >
                            {product.badge}
                          </span>
                          {/* Heart */}
                          <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:text-[#E8857A] transition-colors">
                            <Heart size={14} />
                          </button>
                        </div>
                        {/* Info */}
                        <div className="p-4">
                          <h3 className="font-bold text-[#2C3E5C] text-sm md:text-base leading-tight">
                            {product.name}
                          </h3>
                          <p
                            className="text-xs text-[#C49A5A] mb-1"
                            style={{ fontFamily: "var(--font-handwritten)", fontSize: "0.85rem" }}
                          >
                            {product.nameHi}
                          </p>
                          <p className="text-xs text-[#2D2D2D]/60 mb-3">{product.desc}</p>
                          <div className="flex items-center justify-between">
                            <span
                              className="font-bold text-lg"
                              style={{ color: product.color, fontFamily: "var(--font-display)" }}
                            >
                              {product.price}
                            </span>
                            <Link
                              href="/contact"
                              className="text-xs bg-[#2C3E5C] text-white px-3 py-1.5 rounded-full hover:bg-[#C49A5A] transition-colors font-semibold"
                            >
                              Order
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-10">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 bg-[#2C3E5C] text-white px-8 py-4 rounded-full font-bold hover:bg-[#C49A5A] transition-all duration-300 hover:scale-105"
                  >
                    View All Products <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ═══════════════════════════════ STORY TEASER ═══════════════════════════════ */}
            <section className="py-20 bg-[#2C3E5C] relative overflow-hidden">
              <div className="absolute inset-0 crochet-bg opacity-10" />
              <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <span
                    className="text-[#C49A5A] text-2xl"
                    style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.8rem" }}
                  >
                    Our Story
                  </span>
                  <h2
                    className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    "Every stitch tells a story."
                  </h2>
                  <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                    Woolen Sticks started as a passion project — one hook, one yarn, infinite possibilities.
                    Today, our team crafts with love and ships handmade joy across India.
                  </p>
                  <Link
                    href="/story"
                    className="inline-flex items-center gap-2 border-2 border-[#C49A5A] text-[#C49A5A] px-8 py-4 rounded-full font-bold hover:bg-[#C49A5A] hover:text-white transition-all duration-300"
                  >
                    Read Our Story <ArrowRight size={20} />
                  </Link>
                </motion.div>
              </div>
            </section>

            {/* ═══════════════════════════════ TESTIMONIALS ═══════════════════════════════ */}
            <section className="py-20 px-4 bg-gradient-to-b from-[#FDFAF4] to-[#F5EDD8]">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  className="text-center mb-12"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-[#8FAF88] text-xl" style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.4rem" }}>
                    Happy customers 💬
                  </span>
                  <h2 className="text-4xl font-bold text-[#2C3E5C] mt-2" style={{ fontFamily: "var(--font-display)" }}>
                    What People Say
                  </h2>
                  <div className="mt-4 max-w-xs mx-auto">
                    <YarnDivider color="#8FAF88" />
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {testimonials.map((t, i) => (
                    <motion.div
                      key={t.name}
                      initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="bg-white rounded-3xl p-6 shadow-md hover-lift"
                    >
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: t.stars }).map((_, j) => (
                          <Star key={j} size={16} className="text-[#F0B429] fill-[#F0B429]" />
                        ))}
                      </div>
                      <p className="text-[#2D2D2D]/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#E8857A]/20 flex items-center justify-center text-sm">
                          🧶
                        </div>
                        <span className="font-semibold text-[#2C3E5C] text-sm">{t.name}</span>
                        <span className="text-[#8FAF88] text-xs ml-auto">Verified buyer ✓</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* ═══════════════════════════════ SOCIAL CTA ═══════════════════════════════ */}
            <section className="py-20 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] relative overflow-hidden">
              <div className="absolute inset-0 crochet-bg opacity-10" />
              <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-5xl mb-4">📸</div>
                  <h2
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Follow @woolensticks
                  </h2>
                  <p className="text-white/80 text-lg mb-4">
                    See our latest creations, behind-the-scenes, and viral reels on Instagram!
                  </p>
                  <p
                    className="text-white/70 text-xl mb-8"
                    style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.4rem" }}
                  >
                    Tag us with <span className="font-bold text-white">#WoolenSticks</span> 🧶
                  </p>
                  <a
                    href="https://instagram.com/woolensticks"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-[#833AB4] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
                  >
                    <Instagram size={24} />
                    Follow on Instagram
                  </a>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
