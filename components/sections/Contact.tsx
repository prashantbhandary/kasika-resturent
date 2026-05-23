"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, ExternalLink, ShoppingBag } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-saffron text-xs tracking-[0.4em] uppercase font-semibold mb-3">
            Find Us
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Visit <span className="text-gradient">KASIKA</span>
          </h2>
          <p className="text-[#6b5740] max-w-xl mx-auto leading-relaxed">
            We'd love to welcome you. Come in, sit down, and let us take you on a culinary journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {[
              {
                icon: MapPin,
                title: "Address",
                lines: [RESTAURANT_INFO.address, RESTAURANT_INFO.addressEn],
              },
              {
                icon: Phone,
                title: "Phone",
                lines: [RESTAURANT_INFO.phone, `Mobile: ${RESTAURANT_INFO.mobile}`],
              },
              {
                icon: Clock,
                title: "Hours",
                lines: [
                  `Lunch: ${RESTAURANT_INFO.hours.lunch}`,
                  `Dinner: ${RESTAURANT_INFO.hours.dinner}`,
                  `Closed: ${RESTAURANT_INFO.hours.closed}`,
                ],
              },
              {
                icon: Mail,
                title: "Reservations",
                lines: ["Call or visit us directly", "Walk-ins welcome"],
              },
            ].map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-5 border border-[#e8d5b7] shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={16} className="text-charcoal" />
                </div>
                <div>
                  <p className="text-charcoal font-semibold mb-1 text-sm">{title}</p>
                  {lines.map((line, i) => (
                    <p key={i} className="text-[#6b5740] text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Takeout & Delivery */}
            <div className="bg-[#fef3e2] border border-[#e8d5b7] rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <ShoppingBag size={16} className="text-charcoal" />
              </div>
              <div>
                <p className="text-charcoal font-semibold mb-1 text-sm">Takeout & Delivery</p>
                <p className="text-[#6b5740] text-sm leading-relaxed">
                  Hours: {RESTAURANT_INFO.takeout.hours}
                </p>
                <p className="text-[#6b5740] text-sm leading-relaxed">
                  {RESTAURANT_INFO.takeout.delivery}
                </p>
                <p className="text-[#6b5740] text-xs mt-1 leading-relaxed">
                  {RESTAURANT_INFO.takeout.note}
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-2 gold-gradient text-charcoal font-bold rounded-full py-3 text-sm shadow-md hover:opacity-90 transition-opacity"
              >
                <Phone size={15} />
                Call Now
              </a>
              <a
                href="https://maps.google.com/?q=埼玉県所沢市緑町4-15-20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-brown text-brown hover:bg-brown hover:text-white rounded-full py-3 text-sm font-semibold transition-colors"
              >
                <ExternalLink size={15} />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#e8d5b7] h-full min-h-120 bg-[#f5ede0] flex flex-col items-center justify-center">
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full grid grid-cols-8 grid-rows-8">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="border border-brown/20" />
                  ))}
                </div>
              </div>
              <div className="relative z-10 text-center p-8">
                <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin size={28} className="text-charcoal" />
                </div>
                <h3 className="font-playfair text-brown text-xl font-bold mb-2">KASIKA</h3>
                <p className="text-[#6b5740] text-sm mb-1">{RESTAURANT_INFO.address}</p>
                <p className="text-[#6b5740] text-xs mb-6">Tokorozawa, Saitama</p>
                <a
                  href="https://maps.google.com/?q=埼玉県所沢市緑町4-15-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 gold-gradient text-charcoal font-semibold rounded-full px-6 py-3 text-sm shadow-md hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={14} />
                  Open in Google Maps
                </a>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-[#e8d5b7]/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
