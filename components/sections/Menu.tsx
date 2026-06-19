"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Leaf, Star } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS, type MenuItem } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { useT, CATEGORY_TAB_KEY } from "@/lib/translations";

function SpiceMarks({ level }: { level: 0 | 1 | 2 | 3 }) {
  if (level === 0) return null;
  return (
    <span className="inline-flex items-center align-middle">
      {Array.from({ length: level }).map((_, i) => (
        <Flame key={i} size={11} className="mark-chili fill-current" />
      ))}
    </span>
  );
}

function MenuRow({ item, lang }: { item: MenuItem; lang: "en" | "ja" }) {
  const primary = lang === "ja" && item.nameJa ? item.nameJa : item.name;
  const secondary = lang === "ja" ? item.name : item.nameJa;

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 },
      }}
      className="py-3 border-b border-dashed border-[#d8c399]/60 last:border-0"
    >
      <div className="menu-row flex items-baseline">
        <h4 className="font-playfair text-brown text-lg leading-snug shrink-0 max-w-[62%]">
          {primary}
          {item.isSignature && (
            <Star size={13} className="mark-pick fill-current inline-block ml-1.5 -translate-y-0.5" aria-label="Chef's pick" />
          )}
          {item.isVeg && (
            <Leaf size={12} className="mark-veg fill-current inline-block ml-1 -translate-y-0.5" aria-label="Vegetarian" />
          )}
          <SpiceMarks level={item.spice} />
        </h4>
        <span className="leader" aria-hidden />
        <span className="font-playfair text-[#43281A] font-semibold text-base whitespace-nowrap shrink-0">
          {item.price}
        </span>
      </div>
      {secondary && (
        <p className="text-[#9a7b4f] text-[11px] tracking-wide italic mt-0.5">{secondary}</p>
      )}
      <p className="text-[#6b5740] text-[13px] leading-relaxed mt-1 pr-10">
        {item.description}
      </p>
    </motion.li>
  );
}

function LegendItem({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wide text-[#6b5740]">
      {children}
      {label}
    </span>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Curry");
  const { lang } = useLanguage();
  const t = useT(lang);

  const filtered = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-cream relative overflow-hidden">
      {/* faint peacock corner wash to tie into the dark sections */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-peacock/5 blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-saffron text-xs tracking-[0.4em] uppercase font-semibold mb-2">
            {t.menu_eyebrow} · お品書き
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-charcoal mb-3">
            {t.menu_title} <span className="text-gradient">{t.menu_title_highlight}</span>
          </h2>
          <p className="text-[#6b5740] max-w-xl mx-auto leading-relaxed">
            {t.menu_description}
          </p>
        </motion.div>

        {/* Category tabs — menu chapters */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10">
          {MENU_CATEGORIES.map((cat) => {
            const labelKey = CATEGORY_TAB_KEY[cat];
            const label = labelKey ? t[labelKey] : cat;
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative pb-1.5 text-sm tracking-wide transition-colors ${
                  active ? "text-brown font-semibold" : "text-[#9a7b4f] hover:text-saffron"
                }`}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="menu-tab-underline"
                    className="absolute -bottom-px left-0 right-0 h-0.5 gold-gradient rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* The printed menu card */}
        <div className="menu-paper rounded-[4px] px-6 py-8 sm:px-12 sm:py-12 border border-[#d8c399]">
          {/* chapter heading + legend */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-5 mb-2 border-b-2 border-brown/25">
            <h3 className="font-playfair italic text-2xl sm:text-3xl text-brown">
              {(() => {
                const labelKey = CATEGORY_TAB_KEY[activeCategory];
                return labelKey ? t[labelKey] : activeCategory;
              })()}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
              <LegendItem label={t.menu_chef_pick.replace("★ ", "")}>
                <Star size={12} className="mark-pick fill-current" />
              </LegendItem>
              <LegendItem label={t.menu_veg}>
                <Leaf size={12} className="mark-veg fill-current" />
              </LegendItem>
              <LegendItem label={lang === "ja" ? "辛さ" : "Spice"}>
                <span className="inline-flex">
                  <Flame size={12} className="mark-chili fill-current" />
                  <Flame size={12} className="mark-chili fill-current" />
                  <Flame size={12} className="mark-chili fill-current" />
                </span>
              </LegendItem>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.ul
              key={activeCategory}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.04 } },
              }}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14"
            >
              {filtered.map((item) => (
                <MenuRow key={item.id} item={item} lang={lang} />
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mt-10"
        >
          <p className="text-[#6b5740] text-sm mb-3">{t.menu_cta_text}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-saffron font-semibold border-b border-saffron pb-0.5 hover:gap-3 transition-all"
          >
            {t.menu_cta_link}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
