"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useT } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&q=90"
          alt="KASIKA Restaurant – Premium Indian Dining"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20" />
      </div>

      {/* Floating spice decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="float-anim absolute w-16 h-16 rounded-full border border-saffron/30" style={{ top: "20%", left: "8%" }} />
        <div className="float-anim-delay absolute w-10 h-10 rounded-full bg-saffron/10" style={{ top: "60%", left: "5%" }} />
        <div className="float-anim absolute w-20 h-20 rounded-full border border-gold/20" style={{ top: "30%", right: "6%" }} />
        <div className="float-anim-delay absolute w-8 h-8 rounded-full bg-gold/15" style={{ bottom: "30%", right: "10%" }} />
        <div className="float-anim absolute w-12 h-12 rounded-full border border-white/10" style={{ bottom: "20%", left: "15%" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="glass-dark rounded-full px-5 py-2 flex items-center gap-2">
            <Star size={14} className="text-saffron fill-saffron" />
            <span className="text-white/90 text-xs tracking-[0.2em] uppercase font-medium">
              {t.hero_badge}
            </span>
            <Star size={14} className="text-saffron fill-saffron" />
          </div>
        </motion.div>

        {/* Restaurant name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-saffron text-sm tracking-[0.5em] uppercase mb-3 font-medium">
            {t.hero_asian_dining}
          </p>
          <h1 className="font-playfair text-[clamp(4rem,12vw,9rem)] font-bold text-white leading-none tracking-wider mb-4">
            KASIKA
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="text-white/80 text-[clamp(1rem,2.5vw,1.3rem)] font-light tracking-wide max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          {t.hero_tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="text-white/60 text-sm max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero_description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="gold-gradient text-charcoal font-semibold px-8 py-4 rounded-full text-base shadow-xl hover:opacity-90 transition-all hover:scale-105 inline-flex items-center"
          >
            {t.hero_view_menu}
          </a>
          <a
            href="#contact"
            className="border border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full text-base transition-all hover:scale-105 inline-flex items-center"
          >
            {t.hero_reserve}
          </a>
        </motion.div>

        {/* Address pill */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-12"
        >
          <span className="inline-block text-white/50 text-xs tracking-widest">
            〒359-1111 埼玉県所沢市緑町4-15-20 · TEL: 04-2937-4758
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">{t.hero_scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
