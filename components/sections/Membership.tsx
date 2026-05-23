"use client";

import { motion } from "framer-motion";
import { Star, Tag, Clock, Gift } from "lucide-react";

export default function Membership() {
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
            Exclusive Offer
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Become a <span className="text-gradient">Member</span>
          </h2>
          <p className="text-[#6b5740] max-w-xl mx-auto leading-relaxed">
            Join the KASIKA family and enjoy exclusive privileges every time you dine with us.
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
                  Members Exclusive
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
                  Dinner Time Only
                </span>
              </div>
            </div>

            {/* Right - Details */}
            <div className="space-y-6">
              {/* Card visual */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white/60 text-[10px] tracking-[0.3em] uppercase">Members Card</p>
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
                    <p className="text-white font-medium text-sm">Asian Dining Indo Bar</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/60 text-xs mb-1">Discount</p>
                    <p className="text-white font-bold text-xl">5% OFF</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                {[
                  { icon: Tag, text: "5% discount on all dinner orders" },
                  { icon: Clock, text: "Valid during dinner hours (17:30 – 22:30)" },
                  { icon: Gift, text: "Priority reservation access" },
                  { icon: Star, text: "Exclusive seasonal menu previews" },
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
                Get Your Members Card
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
