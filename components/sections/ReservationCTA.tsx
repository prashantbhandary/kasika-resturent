"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, CalendarDays } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { useT } from "@/lib/translations";

export default function ReservationCTA() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85"
          alt="KASIKA dining atmosphere"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 dark-section opacity-90" />
      </div>

      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="float-anim absolute w-32 h-32 rounded-full border border-saffron/10" style={{ top: "15%", left: "5%" }} />
        <div className="float-anim-delay absolute w-20 h-20 rounded-full border border-gold/10" style={{ bottom: "20%", right: "8%" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-saffron text-xs tracking-[0.5em] uppercase font-semibold mb-4">
            {t.res_eyebrow}
          </p>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            {t.res_title1} <span className="text-gradient">{t.res_title_highlight}</span><br />
            {t.res_title2}
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed mb-10">
            {t.res_description}
          </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 gold-gradient text-charcoal font-bold px-8 py-4 rounded-full text-base shadow-xl hover:opacity-90 transition-all hover:scale-105"
            >
              <CalendarDays size={18} />
              {t.res_book}
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="inline-flex items-center gap-2 border border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full text-base transition-all hover:scale-105"
            >
              <Phone size={18} />
              {t.res_call}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
