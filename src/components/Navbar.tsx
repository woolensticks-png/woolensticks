"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home", labelHi: "होम" },
  { href: "/products", label: "Products", labelHi: "उत्पाद" },
  { href: "/story", label: "Our Story", labelHi: "हमारी कहानी" },
  { href: "/contact", label: "Contact", labelHi: "संपर्क" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FDFAF4]/95 backdrop-blur-md shadow-md border-b border-[#C49A5A]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C49A5A] group-hover:border-[#2C3E5C] transition-colors duration-300">
              <Image
                src="/woolen_stick_small.jpg"
                alt="Woolen Sticks Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span
                className="block text-xl font-bold text-[#2C3E5C] leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                woolen sticks
              </span>
              <span
                className="block text-xs text-[#C49A5A] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-handwritten)" }}
              >
                Handcrafted with ❤️
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[#2D2D2D] font-semibold hover:text-[#2C3E5C] transition-colors duration-200"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C49A5A] group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com/woolensticks"
              target="_blank"
              rel="noreferrer"
              className="text-[#E1306C] hover:scale-110 transition-transform duration-200"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <Link
              href="/products"
              className="flex items-center gap-2 bg-[#2C3E5C] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#C49A5A] transition-colors duration-300 text-sm"
            >
              <ShoppingBag size={16} />
              Shop Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#2C3E5C] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FDFAF4] border-t border-[#C49A5A]/30 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-semibold text-[#2C3E5C] hover:text-[#C49A5A] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span
                    className="text-sm text-[#8FAF88]"
                    style={{ fontFamily: "var(--font-handwritten)" }}
                  >
                    {link.labelHi}
                  </span>
                </Link>
              ))}
              <a
                href="https://instagram.com/woolensticks"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[#E1306C] font-semibold mt-2"
              >
                <Instagram size={20} />
                @woolensticks
              </a>
              <Link
                href="/products"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center bg-[#2C3E5C] text-white py-3 rounded-full font-bold hover:bg-[#C49A5A] transition-colors"
              >
                🛍️ Shop Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
