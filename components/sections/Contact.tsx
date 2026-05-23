"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink, ShoppingBag } from "lucide-react";
import { RESTAURANT_INFO } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { useT } from "@/lib/translations";

export default function Contact() {
  const { lang } = useLanguage();
  const t = useT(lang);

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
            {t.contact_eyebrow}
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            {t.contact_title} <span className="text-gradient">{t.contact_title_highlight}</span>
          </h2>
          <p className="text-[#6b5740] max-w-xl mx-auto leading-relaxed">
            {t.contact_description}
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
                title: t.contact_address,
                lines: [RESTAURANT_INFO.address, RESTAURANT_INFO.addressEn],
              },
              {
                icon: Phone,
                title: t.contact_phone,
                lines: [RESTAURANT_INFO.phone, `${t.contact_mobile_prefix} ${RESTAURANT_INFO.mobile}`],
              },
{
                icon: Mail,
                title: t.contact_reservations,
                lines: [t.contact_call_visit, t.contact_walkins],
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
                <p className="text-charcoal font-semibold mb-1 text-sm">{t.contact_takeout_title}</p>
                <p className="text-[#6b5740] text-sm leading-relaxed">
                  {t.contact_takeout_hours_prefix} {RESTAURANT_INFO.takeout.hours}
                </p>
                <p className="text-[#6b5740] text-sm leading-relaxed">
                  {t.contact_takeout_delivery}
                </p>
                <p className="text-[#6b5740] text-xs mt-1 leading-relaxed">
                  {t.contact_takeout_note}
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
                {t.contact_call_now}
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=35.8058682,139.4475337&destination_place_id=ChIJ3eOxEPnfGGARc4aIapktQOg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-brown text-brown hover:bg-brown hover:text-white rounded-full py-3 text-sm font-semibold transition-colors"
              >
                <ExternalLink size={15} />
                {t.contact_directions}
              </a>
            </div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#e8d5b7] h-full min-h-120">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.758232911439!2d139.44753369999998!3d35.8058682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ddf910b1e3dd%3A0xe8402da96a4886f3!2sKASIka%20restaurent!5e0!3m2!1sen!2snp!4v1779560239131!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "480px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
