"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CATEGORIES_FEATURED } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Categories() {
  return (
    <section className="py-24 bg-cream" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-saffron text-xs tracking-[0.4em] uppercase font-semibold mb-3">
            Our Specialties
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Explore Our <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-[#6b5740] max-w-xl mx-auto leading-relaxed">
            From tandoori classics to fragrant biryanis — discover an authentic culinary journey across India and Asia.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_FEATURED.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            >
              <a href="#menu" className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 aspect-4/3">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/85 via-charcoal/30 to-transparent" />

                <div className="absolute top-4 right-4 glass-dark rounded-full px-3 py-1">
                  <span className="text-saffron text-xs font-semibold">{cat.count}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold text-xs tracking-[0.2em] uppercase mb-1">{cat.titleJa}</p>
                  <h3 className="font-playfair text-white text-2xl font-bold mb-1 group-hover:text-saffron transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-snug line-clamp-1 mb-3">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-saffron text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore <ArrowRight size={12} />
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
