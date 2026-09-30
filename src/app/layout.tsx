import type { Metadata } from "next";
import { Playfair_Display, Nunito, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Woolen Sticks | Handcrafted Crochet & Knits",
  description:
    "Discover beautifully handcrafted crochet products — keychains, toys, festive specials, and more. Made with love by Woolen Sticks.",
  keywords: ["crochet", "handmade", "knits", "keychains", "diwali", "woolensticks"],
  openGraph: {
    title: "Woolen Sticks | Handcrafted Crochet & Knits",
    description: "Every stitch tells a story. Shop handcrafted crochet creations.",
    images: ["/woolen_sticks.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${nunito.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#FDFAF4] text-[#2D2D2D]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
