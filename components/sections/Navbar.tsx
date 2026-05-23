"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS, RESTAURANT_INFO } from "@/lib/data";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { useT } from "@/lib/translations";

const NAV_KEYS = ["nav_home", "nav_menu", "nav_about", "nav_gallery", "nav_offers", "nav_contact"] as const;

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggle } = useLanguage();
  const t = useT(lang);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "nav-blur shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="text-[#1A1A1A] font-bold text-sm tracking-wide font-playfair">K</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={cn(
                "font-playfair text-xl font-bold tracking-widest transition-colors",
                scrolled ? "text-[#4A2C1A]" : "text-white"
              )}
            >
              KASIKA
            </span>
            <span
              className={cn(
                "text-[9px] tracking-[0.2em] uppercase transition-colors",
                scrolled ? "text-[#E6A817]" : "text-[#D4A24C]"
              )}
            >
              {t.hero_asian_dining}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors relative group",
                scrolled ? "text-[#1A1A1A] hover:text-saffron" : "text-white/90 hover:text-white"
              )}
            >
              {t[NAV_KEYS[i]]}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#E6A817] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA + Language Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggle}
            className={cn(
              "flex items-center gap-1 text-xs font-bold tracking-widest border rounded-full px-3 py-1.5 transition-all duration-300",
              scrolled
                ? "border-[#e8d5b7] text-[#4A2C1A] hover:border-saffron hover:text-saffron"
                : "border-white/30 text-white/80 hover:border-saffron hover:text-saffron"
            )}
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "text-saffron" : "text-inherit"}>EN</span>
            <span className="opacity-40 mx-0.5">|</span>
            <span className={lang === "ja" ? "text-saffron" : "text-inherit"}>日本語</span>
          </button>

          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className={cn(
              "flex items-center gap-1.5 text-sm transition-colors",
              scrolled ? "text-[#4A2C1A]" : "text-white/80"
            )}
          >
            <Phone size={14} />
            <span className="font-medium">{RESTAURANT_INFO.phone}</span>
          </a>
          <a
            href="#contact"
            className="gold-gradient text-[#1A1A1A] font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity shadow-md text-sm inline-flex items-center"
          >
            {t.nav_reserve}
          </a>
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggle}
            className={cn(
              "flex items-center gap-1 text-[10px] font-bold tracking-widest border rounded-full px-2.5 py-1 transition-all",
              scrolled
                ? "border-[#e8d5b7] text-[#4A2C1A]"
                : "border-white/30 text-white/80"
            )}
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "text-saffron" : ""}>EN</span>
            <span className="opacity-40 mx-0.5">|</span>
            <span className={lang === "ja" ? "text-saffron" : ""}>JP</span>
          </button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger>
              <button
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  scrolled ? "text-[#4A2C1A]" : "text-white"
                )}
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#FFF9F1] border-l border-[#e8d5b7] w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-[#e8d5b7]">
                  <div>
                    <p className="font-playfair text-2xl font-bold text-[#4A2C1A] tracking-widest">KASIKA</p>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#E6A817]">{t.hero_asian_dining}</p>
                  </div>
                  <button onClick={() => setMobileOpen(false)} className="text-[#4A2C1A]">
                    <X size={22} />
                  </button>
                </div>
                <nav className="flex flex-col gap-1 p-6">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center py-3 px-4 text-[#1A1A1A] hover:text-saffron hover:bg-[#f5ede0] rounded-xl transition-colors font-medium text-lg"
                      >
                        {t[NAV_KEYS[i]]}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="mt-auto p-6 border-t border-[#e8d5b7] space-y-3">
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="flex items-center gap-2 text-[#4A2C1A] font-medium"
                  >
                    <Phone size={16} className="text-[#E6A817]" />
                    {RESTAURANT_INFO.phone}
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center gold-gradient text-[#1A1A1A] font-semibold rounded-full shadow-md py-3 text-sm"
                  >
                    {t.nav_reserve}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
