"use client";

import { motion } from "framer-motion";
import { Star, Tag, Clock, Gift, Check, Users } from "lucide-react";
import { PARTY_COURSES } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { useT } from "@/lib/translations";

export default function Membership() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <section id="offers" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-saffron text-xs tracking-[0.4em] uppercase font-semibold mb-3">
            {t.mem_eyebrow}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            {t.mem_title} <span className="text-gradient">{t.mem_title_highlight}</span>
          </h2>
          <p className="text-[#6b5740] max-w-xl mx-auto leading-relaxed">
            {t.mem_description}
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="membership-card rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            {/* Left - Offer Visual */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 mb-4">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} size={20} className="text-white fill-white" />
                ))}
              </div>
              <div className="mb-6">
                <p className="text-white/70 text-sm tracking-[0.2em] uppercase font-medium mb-1">
                  {t.mem_exclusive}
                </p>
                <h3 className="font-playfair text-white text-7xl md:text-8xl font-bold leading-none">
                  5%
                </h3>
                <p className="font-playfair text-white text-4xl md:text-5xl font-bold -mt-2">
                  OFF
                </p>
              </div>
              <div className="inline-flex items-center gap-2 bg-black/20 rounded-full px-5 py-2 backdrop-blur-sm">
                <Clock size={14} className="text-white" />
                <span className="text-white font-semibold text-sm tracking-wide">
                  {t.mem_dinner_only}
                </span>
              </div>
            </div>

            {/* Right - Details */}
            <div className="space-y-6">
              {/* Card visual */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white/60 text-[10px] tracking-[0.3em] uppercase">{t.mem_card_label}</p>
                    <p className="font-playfair text-white text-2xl font-bold tracking-widest">
                      KASIKA
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Star size={16} className="text-white fill-white" />
                  </div>
                </div>
                <div className="h-px bg-white/20 mb-4" />
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/60 text-xs mb-1">アジアンダイニングインドバー</p>
                    <p className="text-white font-medium text-sm">{t.mem_asian_dining}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/60 text-xs mb-1">{t.mem_discount}</p>
                    <p className="text-white font-bold text-xl">5% OFF</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                {[
                  { icon: Tag, text: t.mem_benefit1 },
                  { icon: Clock, text: t.mem_benefit2 },
                  { icon: Gift, text: t.mem_benefit3 },
                  { icon: Star, text: t.mem_benefit4 },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-white/15 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={13} className="text-white" />
                    </div>
                    <p className="text-white/85 text-sm">{text}</p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="block w-full text-center bg-white text-brown font-bold rounded-full py-4 hover:bg-white/90 transition-colors shadow-lg text-sm"
              >
                {t.mem_get_card}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Party Menu */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <Users size={16} className="text-saffron" />
              <p className="text-saffron text-xs tracking-[0.4em] uppercase font-semibold">
                {t.party_eyebrow}
              </p>
            </div>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-3">
              {t.party_title} <span className="text-gradient">{t.party_title_highlight}</span>
            </h3>
            <p className="text-[#6b5740] max-w-lg mx-auto text-sm leading-relaxed">
              {t.party_description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PARTY_COURSES.map((course, i) => (
              <motion.div
                key={course.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative bg-white rounded-3xl p-6 border shadow-sm hover:shadow-xl transition-shadow duration-400 ${
                  course.isPopular
                    ? "border-saffron shadow-md"
                    : "border-[#e8d5b7]"
                }`}
              >
                {course.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="gold-gradient text-charcoal text-[10px] font-bold px-4 py-1 rounded-full shadow">
                      {t.party_popular}
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <p className="text-saffron text-xs tracking-[0.3em] uppercase font-semibold mb-1">
                    {course.labelJa}
                  </p>
                  <h4 className="font-playfair text-charcoal text-2xl font-bold">
                    {course.label}
                  </h4>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-playfair text-3xl font-bold text-gradient">
                      {course.price}
                    </span>
                    <span className="text-[#6b5740] text-xs">{t.party_per_person}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Clock size={11} className="text-[#6b5740]" />
                    <span className="text-[#6b5740] text-xs">{course.duration}</span>
                  </div>
                </div>

                <div className="h-px bg-[#e8d5b7] mb-4" />

                <ul className="space-y-2 mb-4">
                  {course.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={13} className="text-saffron mt-0.5 shrink-0" />
                      <span className="text-[#6b5740] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {course.drinkNote && (
                  <div className="bg-[#fef3e2] border border-[#e8d5b7] rounded-xl p-3">
                    <p className="text-[#6b5740] text-xs leading-relaxed">
                      🍺 {course.drinkNote}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <p className="text-center text-[#6b5740] text-xs mt-6">
            {t.party_book_note}{" "}
            <a href="tel:04-2937-4758" className="text-saffron font-semibold hover:underline">
              04-2937-4758
            </a>{" "}
            {t.party_book_note2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
