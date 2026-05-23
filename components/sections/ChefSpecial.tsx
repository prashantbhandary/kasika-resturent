"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Award } from "lucide-react";

export default function ChefSpecial() {
  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left – Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=900&q=90"
                alt="Chef's Special – KASIKA"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:right-8 glass-light rounded-2xl p-4 shadow-xl border border-[#e8d5b7]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center">
                  <Award size={18} className="text-charcoal" />
                </div>
                <div>
                  <p className="text-charcoal font-bold text-sm">Chef's Signature</p>
                  <p className="text-saffron text-xs font-medium">Lamb Rogan Josh</p>
                </div>
              </div>
            </motion.div>

            {/* Rating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -left-4 md:left-2 glass-light rounded-2xl p-4 shadow-xl border border-[#e8d5b7]"
            >
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-saffron fill-saffron" />
                ))}
              </div>
              <p className="text-charcoal text-sm font-semibold">5.0 Rating</p>
              <p className="text-[#6b5740] text-xs">200+ Reviews</p>
            </motion.div>
          </motion.div>

          {/* Right – Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-6"
          >
            <div>
              <p className="text-saffron text-xs tracking-[0.4em] uppercase font-semibold mb-3">
                Our Story
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
                Crafted with <span className="text-gradient">Passion</span>,<br />
                Served with <span className="text-gradient">Love</span>
              </h2>
            </div>

            <p className="text-[#6b5740] leading-relaxed text-base">
              KASIKA was born from a deep love of Indian culinary heritage and the desire to bring authentic flavors to Japan. Founded by Devi Lal, each recipe carries the soul of generations — spices ground by hand, sauces slow-cooked for hours, and every dish plated with intention.
            </p>

            <p className="text-[#6b5740] leading-relaxed text-base">
              We source our spices directly from India — saffron from Kashmir, cardamom from Kerala, cumin from Rajasthan. Combined with the finest local Japanese ingredients, the result is a dining experience that bridges two culinary worlds.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { label: "Authentic\nRecipes", value: "50+" },
                { label: "Fresh\nIngredients", value: "100%" },
                { label: "Years of\nExperience", value: "10+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-white rounded-2xl border border-[#e8d5b7] shadow-sm">
                  <p className="font-playfair text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[#6b5740] text-xs whitespace-pre-line leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Chef signature dish highlight */}
            <div className="bg-[#fef3e2] border border-[#e8d5b7] rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
                  <Star size={14} className="text-charcoal fill-charcoal" />
                </div>
                <div>
                  <p className="text-charcoal font-semibold text-sm">Today's Chef Special</p>
                  <p className="text-saffron text-xs">Lamb Rogan Josh – Kashmiri Style</p>
                </div>
              </div>
              <p className="text-[#6b5740] text-sm leading-relaxed">
                Tender lamb slow-braised for 4 hours in a fragrant blend of Kashmiri red chilies, whole spices, and creamy yogurt. A dish that speaks of winter mountains and ancient royal kitchens.
              </p>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="#menu"
                className="gold-gradient text-charcoal font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity inline-flex items-center text-sm"
              >
                View Full Menu
              </a>
              <a
                href="#contact"
                className="border border-brown text-brown px-6 py-3 rounded-full hover:bg-brown hover:text-white transition-colors inline-flex items-center text-sm font-semibold"
              >
                Reserve Table
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
