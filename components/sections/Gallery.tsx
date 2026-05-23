"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { useT } from "@/lib/translations";

export default function Gallery() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <section id="gallery" className="py-24 bg-[#1A1A1A]">
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
            {t.gallery_eyebrow}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            {t.gallery_title} <span className="text-gradient">{t.gallery_title_highlight}</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            {t.gallery_description}
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="masonry-item"
            >
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                <div
                  className={`relative w-full ${
                    img.aspect === "tall"
                      ? "aspect-[3/4]"
                      : img.aspect === "wide"
                      ? "aspect-[4/3]"
                      : "aspect-square"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  {/* Glass morphism label */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <div className="glass-dark rounded-xl px-3 py-2">
                      <p className="text-white text-xs font-medium tracking-wide">{img.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
