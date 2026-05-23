"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, CalendarDays } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/data";

export default function ReservationCTA() {
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
            Reservations
          </p>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Reserve Your <span className="text-gradient">Dining</span><br />
            Experience
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed mb-10">
            Whether it's an intimate dinner for two or a celebration with family — we curate an unforgettable experience for every occasion.
          </p>

          {/* Hours */}
          <div className="inline-flex flex-wrap justify-center gap-6 mb-10 glass-dark rounded-2xl px-8 py-5">
            <div className="text-center">
              <p className="text-saffron text-xs uppercase tracking-widest mb-1">Lunch</p>
              <p className="text-white font-medium text-sm">{RESTAURANT_INFO.hours.lunch}</p>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <p className="text-saffron text-xs uppercase tracking-widest mb-1">Dinner</p>
              <p className="text-white font-medium text-sm">{RESTAURANT_INFO.hours.dinner}</p>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <p className="text-saffron text-xs uppercase tracking-widest mb-1">Closed</p>
              <p className="text-white font-medium text-sm">{RESTAURANT_INFO.hours.closed}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 gold-gradient text-charcoal font-bold px-8 py-4 rounded-full text-base shadow-xl hover:opacity-90 transition-all hover:scale-105"
            >
              <CalendarDays size={18} />
              Book a Table
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="inline-flex items-center gap-2 border border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full text-base transition-all hover:scale-105"
            >
              <Phone size={18} />
              Call Restaurant
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
