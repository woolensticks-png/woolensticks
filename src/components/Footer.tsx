"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Heart, MapPin } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/icons";
import { motion } from "framer-motion";

// Yarn divider SVG
function YarnDivider() {
  return (
    <svg viewBox="0 0 400 20" className="w-full h-5 my-4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 10 Q20 2 40 10 Q60 18 80 10 Q100 2 120 10 Q140 18 160 10 Q180 2 200 10 Q220 18 240 10 Q260 2 280 10 Q300 18 320 10 Q340 2 360 10 Q380 18 400 10"
        stroke="#C49A5A"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

const productCategories = [
  { href: "/products?cat=keychains", label: "🔑 Keychains" },
  { href: "/products?cat=toys", label: "🧸 Crochet Toys" },
  { href: "/products?cat=festive", label: "🪔 Festive Specials" },
  { href: "/products?cat=custom", label: "✨ Custom Orders" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C3E5C] text-white relative overflow-hidden">
      {/* Decorative top wave */}
      <svg viewBox="0 0 1440 60" className="w-full -mb-1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 30 Q180 0 360 30 Q540 60 720 30 Q900 0 1080 30 Q1260 60 1440 30 L1440 60 L0 60 Z"
          fill="#2C3E5C"
        />
        <path
          d="M0 30 Q180 0 360 30 Q540 60 720 30 Q900 0 1080 30 Q1260 60 1440 30"
          stroke="#C49A5A"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
      </svg>

      {/* Crochet pattern overlay */}
      <div className="absolute inset-0 crochet-bg opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C49A5A]">
                <Image src="/woolen_stick_small.jpg" alt="Woolen Sticks" fill className="object-cover" />
              </div>
              <div>
                <p className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  woolen sticks
                </p>
                <p className="text-xs text-[#C49A5A] tracking-widest uppercase">Handcrafted Crochet & Knits</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Every stitch tells a story. Handcrafted with love by our team, delivered to your doorstep.
            </p>
            <p className="text-xs text-white/50 italic" style={{ fontFamily: "var(--font-handwritten)", fontSize: "1rem" }}>
              हर धागे में है प्यार 🧶
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[#C49A5A] font-bold uppercase tracking-wider text-sm mb-4">Quick Links</h3>
            <YarnDivider />
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#C49A5A] transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[#C49A5A] font-bold uppercase tracking-wider text-sm mb-4">Shop</h3>
            <YarnDivider />
            <ul className="space-y-2">
              {productCategories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#C49A5A] transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-[#C49A5A] font-bold uppercase tracking-wider text-sm mb-4">Connect</h3>
            <YarnDivider />
            <div className="space-y-3 mb-6">
              <a
                href="mailto:woolensticks@gmail.com"
                className="flex items-center gap-2 text-white/70 hover:text-[#C49A5A] transition-colors text-sm"
              >
                <Mail size={15} />
                woolensticks@gmail.com
              </a>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin size={15} />
                India 🇮🇳
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/woolensticks"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-[#E1306C] to-[#833AB4] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-[#F0B429]/10 border border-[#F0B429]/30 rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-display)" }}>
              🧶 Join our yarn family!
            </p>
            <p className="text-white/60 text-sm">Get updates on new drops, festive specials & behind-the-scenes</p>
          </div>
          <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-64 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#C49A5A] text-sm"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#C49A5A] text-white rounded-full font-semibold text-sm hover:bg-[#F0B429] hover:text-[#2C3E5C] transition-colors whitespace-nowrap"
            >
              Subscribe ✨
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Woolen Sticks. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <Heart size={13} className="text-[#E8857A] fill-[#E8857A]" /> & lots of yarn
          </p>
        </div>
      </div>
    </footer>
  );
}
