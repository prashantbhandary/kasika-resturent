"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Flame, Leaf } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS, type MenuItem } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { useT, CATEGORY_TAB_KEY } from "@/lib/translations";

function SpiceLevel({ level }: { level: 0 | 1 | 2 | 3 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3].map((n) => (
        <Flame
          key={n}
          size={12}
          className={n <= level ? "text-orange-500 fill-orange-500" : "text-gray-200 fill-gray-200"}
        />
      ))}
    </div>
  );
}

function MenuCard({ item, lang }: { item: MenuItem; lang: "en" | "ja" }) {
  const t = useT(lang);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 group border border-[#f0e0c8]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-600 group-hover:scale-108"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex gap-1.5">
          {item.isVeg ? (
            <span className="flex items-center gap-1 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              <Leaf size={9} /> {t.menu_veg}
            </span>
          ) : (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {t.menu_nonveg}
            </span>
          )}
          {item.isSignature && (
            <span className="bg-[#E6A817] text-[#1A1A1A] text-[10px] font-bold px-2 py-0.5 rounded-full">
              {t.menu_chef_pick}
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div>
            <h4 className="font-playfair text-[#1A1A1A] font-semibold text-base leading-tight">
              {lang === "ja" && item.nameJa ? item.nameJa : item.name}
            </h4>
            {item.nameJa && lang === "en" && (
              <p className="text-[#E6A817] text-xs mt-0.5">{item.nameJa}</p>
            )}
          </div>
          <span className="font-playfair text-[#4A2C1A] font-bold text-lg shrink-0">
            {item.price}
          </span>
        </div>
        <p className="text-[#6b5740] text-xs leading-relaxed mb-3 line-clamp-2">
          {item.description}
        </p>
        <SpiceLevel level={item.spice} />
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Curry");
  const { lang } = useLanguage();
  const t = useT(lang);

  const filtered = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#fef3e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#E6A817] text-xs tracking-[0.4em] uppercase font-semibold mb-3">
            {t.menu_eyebrow}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            {t.menu_title} <span className="text-gradient">{t.menu_title_highlight}</span>
          </h2>
          <p className="text-[#6b5740] max-w-xl mx-auto leading-relaxed">
            {t.menu_description}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {MENU_CATEGORIES.map((cat) => {
            const labelKey = CATEGORY_TAB_KEY[cat];
            const label = labelKey ? t[labelKey] : cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "gold-gradient text-[#1A1A1A] shadow-md scale-105"
                    : "bg-white text-[#4A2C1A] border border-[#e8d5b7] hover:border-saffron hover:text-saffron"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} lang={lang} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-[#6b5740] text-sm mb-4">{t.menu_cta_text}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#E6A817] font-semibold border-b border-saffron pb-0.5 hover:gap-3 transition-all"
          >
            {t.menu_cta_link}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
