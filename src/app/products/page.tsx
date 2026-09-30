"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Filter, Heart, ShoppingBag, Sparkles } from "lucide-react";

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

const categories = [
  { id: "all", label: "All", emoji: "🌈" },
  { id: "keychains", label: "Keychains", emoji: "🔑" },
  { id: "toys", label: "Crochet Toys", emoji: "🧸" },
  { id: "festive", label: "Festive", emoji: "🪔" },
  { id: "custom", label: "Custom", emoji: "✨" },
];

const products = [
  // ─── Keychains ───
  { id: 1,  name: "Pink Heart Keychain",    nameHi: "गुलाबी दिल चाबी",    price: 99,  category: "keychains", image: "/products/keychains/pinkHeart_keychain.jpeg",   color: "#E8857A", badge: "Bestseller", desc: "A sweet crochet heart keychain — perfect for gifting to someone you love!" },
  { id: 2,  name: "Sunflower Keychain",     nameHi: "सूरजमुखी चाबी",      price: 99,  category: "keychains", image: "/products/keychains/sunflower_keychain.jpeg",    color: "#F0B429", badge: "Popular",    desc: "Bright sunny sunflower crochet keychain — carry sunshine everywhere!" },
  { id: 3,  name: "Watermelon Keychain",    nameHi: "तरबूज़ चाबी",        price: 109, category: "keychains", image: "/products/keychains/watermelon_keychain.jpeg",   color: "#8FAF88", badge: "Trending",   desc: "Juicy watermelon slice keychain — super cute & colourful!" },
  { id: 4,  name: "Evil Eye Keychain",      nameHi: "नज़र चाबी",          price: 99,  category: "keychains", image: "/products/keychains/evilEyes.jpeg",               color: "#A08DB5", badge: "Popular",    desc: "Protective evil eye charm keychain. Stylish & meaningful!" },
  { id: 5,  name: "Blue Hat Keychain",      nameHi: "नीली टोपी चाबी",    price: 99,  category: "keychains", image: "/products/keychains/blueHat_keychain.jpeg",      color: "#2C3E5C", badge: "New",        desc: "Adorable mini crochet blue hat keychain — unique & handmade!" },
  { id: 6,  name: "Green Fish Keychain",    nameHi: "हरी मछली चाबी",     price: 109, category: "keychains", image: "/products/keychains/greenFish_keychain.jpeg",    color: "#8FAF88", badge: "Cute!",      desc: "Whimsical green fish crochet keychain — a real conversation starter!" },
  { id: 7,  name: "Light Pink Keychain",    nameHi: "हल्की गुलाबी चाबी", price: 89,  category: "keychains", image: "/products/keychains/lightPink_keychain.jpeg",    color: "#F4A7B9", badge: "Soft",       desc: "Delicate light pink crochet keychain — simple and elegant." },
  { id: 8,  name: "Dark Blue Keychain",     nameHi: "गहरी नीली चाबी",    price: 99,  category: "keychains", image: "/products/keychains/darkBlue_keychain.jpeg",     color: "#2C3E5C", badge: "Classic",    desc: "Rich dark blue crochet keychain — bold and beautiful." },
  { id: 9,  name: "Red Keychain",           nameHi: "लाल चाबी",          price: 89,  category: "keychains", image: "/products/keychains/red_keychain.jpeg",           color: "#E8857A", badge: "Bold",       desc: "Vibrant red crochet keychain — fiery and fun!" },
  { id: 10, name: "Yellow Circle Keychain", nameHi: "पीला गोला चाबी",    price: 99,  category: "keychains", image: "/products/keychains/yellowCircle_keychain.jpeg", color: "#F0B429", badge: "Cheerful",   desc: "Sunny yellow circular crochet keychain — pure joy!" },
  { id: 11, name: "White Keychain",         nameHi: "सफ़ेद चाबी",        price: 89,  category: "keychains", image: "/products/keychains/white_keychain.jpeg",         color: "#C49A5A", badge: "Minimal",    desc: "Clean white crochet keychain — minimalist and chic." },
  { id: 12, name: "White Blue Keychain",    nameHi: "सफ़ेद नीली चाबी",   price: 99,  category: "keychains", image: "/products/keychains/whiteBlue_keychain.jpeg",    color: "#2C3E5C", badge: "Duo-tone",   desc: "Elegant white & blue crochet keychain — a classic combo." },
  { id: 13, name: "Sunflower 2 Keychain",   nameHi: "सूरजमुखी 2 चाबी",  price: 109, category: "keychains", image: "/products/keychains/sunflower2_keychain.jpeg",   color: "#F0B429", badge: "New",        desc: "Another sunflower design — slightly different, equally beautiful!" },
  { id: 14, name: "Sunflower 3 Keychain",   nameHi: "सूरजमुखी 3 चाबी",  price: 109, category: "keychains", image: "/products/keychains/sunflower3_keychain.jpeg",   color: "#F0B429", badge: "New",        desc: "Third sunflower variant — our most detailed one yet!" },
  // ─── Diya Covers (Festive) ───
  { id: 15, name: "Pink Diya Cover",        nameHi: "गुलाबी दीया कवर",   price: 149, category: "festive",  image: "/products/covers/pink_cover.jpeg",                color: "#E8857A", badge: "🔥 100K Views!", desc: "The viral pink & teal crochet diya cover — seen by 100K+ on Instagram!" },
  { id: 16, name: "Multicolour Diya Cover", nameHi: "रंगीन दीया कवर",    price: 149, category: "festive",  image: "/products/covers/multiColor_cover.jpeg",          color: "#F0B429", badge: "Viral!",     desc: "Festive multicolour crochet diya cover — the life of the Diwali party!" },
  { id: 17, name: "Black Diya Cover",       nameHi: "काला दीया कवर",     price: 149, category: "festive",  image: "/products/covers/black_cover.jpeg",               color: "#2C3E5C", badge: "Elegant",    desc: "Sophisticated black crochet diya cover — modern festive décor." },
  { id: 18, name: "Green White Diya Cover", nameHi: "हरा सफ़ेद दीया कवर", price: 149, category: "festive", image: "/products/covers/greenWhite_cover.jpeg",           color: "#8FAF88", badge: "Fresh",      desc: "Cool green & white crochet diya cover — natural and festive." },
  { id: 19, name: "Pink Squares Cover",     nameHi: "गुलाबी स्क्वेयर कवर", price: 149, category: "festive", image: "/products/covers/pinkSquares_cover.jpeg",         color: "#E8857A", badge: "Pretty",     desc: "Granny-square style pink diya cover — intricate and beautiful!" },
  { id: 20, name: "Red Green Diya Cover",   nameHi: "लाल हरा दीया कवर",  price: 149, category: "festive",  image: "/products/covers/redGreen_cover.jpeg",            color: "#8FAF88", badge: "Festive",    desc: "Classic red & green — the most festive colour combination!" },
  { id: 21, name: "White Purple Cover",     nameHi: "सफ़ेद बैंगनी कवर",  price: 149, category: "festive",  image: "/products/covers/whitePurple_cover.jpeg",         color: "#A08DB5", badge: "Royal",      desc: "Elegant white & purple crochet diya cover — royally beautiful." },
  { id: 22, name: "White Cover",            nameHi: "सफ़ेद दीया कवर",    price: 139, category: "festive",  image: "/products/covers/white_cover.jpeg",               color: "#C49A5A", badge: "Minimal",    desc: "Clean all-white crochet diya cover — simple elegance." },
  { id: 23, name: "White Red Cover",        nameHi: "सफ़ेद लाल कवर",     price: 149, category: "festive",  image: "/products/covers/whiteRed_cover.jpeg",            color: "#E8857A", badge: "Duo-tone",   desc: "Bold white & red crochet diya cover — striking contrast!" },
  { id: 24, name: "White Blue Mix Cover",   nameHi: "सफ़ेद नीला मिक्स",  price: 149, category: "festive",  image: "/products/covers/whiteBlueMIx_cover.jpeg",        color: "#2C3E5C", badge: "Cool",       desc: "Cool white & blue mix diya cover — serene and festive." },
  { id: 25, name: "Yellow Green Cover",     nameHi: "पीला हरा कवर",      price: 149, category: "festive",  image: "/products/covers/yellowGreen_cover.jpeg",         color: "#8FAF88", badge: "Bright",     desc: "Cheerful yellow & green crochet diya cover — full of energy!" },
  { id: 26, name: "White Yellow Red Cover", nameHi: "तिरंगा दीया कवर",   price: 149, category: "festive",  image: "/products/covers/whiteYellowRed_cover.jpeg",      color: "#F0B429", badge: "Tricolour",  desc: "White, yellow & red — a vibrant tricolour diya cover!" },
  // ─── Custom ───
  { id: 27, name: "Custom Order",           nameHi: "कस्टम ऑर्डर",       price: 0,   category: "custom",   image: null,                                              color: "#A08DB5", badge: "✨ Custom",   desc: "Tell us your idea — colour, shape, character — and we'll make it!" },
];

const sortOptions = [
  { id: "popular", label: "Most Popular" },
  { id: "newest", label: "Newest" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filtered = products
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen pt-20">
      {/* ─── Hero ─── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#F5EDD8] via-[#FDFAF4] to-[#E8F5E8]">
        <div className="absolute inset-0 granny-bg opacity-50" />
        {/* Floating emoji */}
        {["🧶", "🌸", "🎀", "✨", "🪢"].map((e, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl pointer-events-none select-none"
            style={{ left: `${8 + i * 20}%`, top: `${20 + (i % 2) * 40}%` }}
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
          >
            {e}
          </motion.span>
        ))}

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <span
              className="text-[#C49A5A] text-xl"
              style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.5rem" }}
            >
              🛍️ हमारा संग्रह
            </span>
            <h1
              className="text-5xl md:text-6xl font-bold text-[#2C3E5C] mt-2 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Products
            </h1>
            <p className="text-[#2D2D2D]/70 text-lg">
              Every piece is unique, handcrafted with love, and shipped pan-India via DTDC 📦
            </p>
            <div className="mt-6 max-w-xs mx-auto">
              <YarnDivider />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Filters ─── */}
      <section className="sticky top-20 z-40 bg-[#FDFAF4]/95 backdrop-blur-md border-b border-[#C49A5A]/20 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Category chips */}
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-[#2C3E5C] text-white shadow-md scale-105"
                    : "bg-white border border-[#C49A5A]/40 text-[#2D2D2D] hover:border-[#2C3E5C] hover:scale-105"
                }`}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-[#C49A5A]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#C49A5A]/40 rounded-full px-3 py-1.5 bg-white text-[#2D2D2D] focus:outline-none focus:border-[#2C3E5C] cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.id} value={o.id}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* ─── Product Grid ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm text-[#2D2D2D]/50 mb-6">
          Showing <span className="font-semibold text-[#2C3E5C]">{filtered.length}</span> products
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              layout
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover-lift group cursor-pointer h-full flex flex-col">
                {/* Image area */}
                <div
                  className="relative h-48 md:h-52 overflow-hidden"
                  style={{ background: `${product.color}18` }}
                >
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl"
                      style={{ background: `${product.color}20` }}>
                      ✨
                    </div>
                  )}
                  {/* Badge */}
                  <span
                    className="absolute top-2 left-2 text-xs font-bold px-2.5 py-1 rounded-full text-white shadow z-10"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.badge}
                  </span>
                  {/* Wishlist */}
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
                    className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center shadow transition-all z-10 ${
                      wishlist.includes(product.id)
                        ? "bg-[#E8857A] text-white scale-110"
                        : "bg-white text-gray-400 hover:text-[#E8857A]"
                    }`}
                  >
                    <Heart size={14} className={wishlist.includes(product.id) ? "fill-white" : ""} />
                  </button>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <h3
                    className="font-bold text-[#2C3E5C] text-sm md:text-base leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-xs text-[#C49A5A] mb-2"
                    style={{ fontFamily: "var(--font-handwritten)", fontSize: "0.85rem" }}
                  >
                    {product.nameHi}
                  </p>
                  <p className="text-xs text-[#2D2D2D]/60 mb-4 flex-1 leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span
                      className="font-bold text-lg"
                      style={{ color: product.color, fontFamily: "var(--font-display)" }}
                    >
                      {product.price === 0 ? "Ask us! 💬" : `₹${product.price}`}
                    </span>
                    <a
                      href={`https://wa.me/919999999999?text=Hi!%20I%20want%20to%20order%20${encodeURIComponent(product.name)}%20from%20Woolen%20Sticks%20%F0%9F%A7%B6`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs flex items-center gap-1 bg-[#25D366] text-white px-3 py-1.5 rounded-full hover:bg-[#128C7E] transition-colors font-semibold shadow"
                    >
                      <ShoppingBag size={12} />
                      Order
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom order CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#A08DB5]/20 to-[#E8857A]/20 border-2 border-dashed border-[#A08DB5]/40 rounded-3xl p-10 text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-5xl mb-4">✨</div>
          <h3 className="text-3xl font-bold text-[#2C3E5C] mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Don't see what you want?
          </h3>
          <p className="text-[#2D2D2D]/70 mb-6 max-w-xl mx-auto">
            We love custom orders! Tell us your idea — a name, a colour, a character — and we'll crochet it just for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#A08DB5] text-white px-8 py-4 rounded-full font-bold hover:bg-[#2C3E5C] transition-all duration-300 hover:scale-105"
          >
            <Sparkles size={18} />
            Request Custom Order
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
