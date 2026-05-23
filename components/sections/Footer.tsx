"use client";

import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { NAV_LINKS, RESTAURANT_INFO } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                <span className="text-charcoal font-bold text-sm font-playfair">K</span>
              </div>
              <div>
                <p className="font-playfair text-xl font-bold tracking-widest text-white">KASIKA</p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-saffron">Asian Dining Indo Bar</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              A premium culinary journey through the vibrant flavors of India and Asia, in the heart of Tokorozawa, Saitama.
            </p>
            {/* Social icons using text labels since Lucide dropped brand icons */}
            <div className="flex gap-3">
              {["IG", "FB", "TW"].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-saffron hover:text-saffron transition-colors text-xs font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-saffron transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-saffron mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  {RESTAURANT_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-saffron shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-white/50 hover:text-saffron text-sm transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-saffron shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.mobile}`} className="text-white/50 hover:text-saffron text-sm transition-colors">
                  {RESTAURANT_INFO.mobile}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-saffron mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/70 text-xs uppercase tracking-wide mb-0.5">Lunch</p>
                  <p className="text-white/50 text-sm">{RESTAURANT_INFO.hours.lunch}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-saffron mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/70 text-xs uppercase tracking-wide mb-0.5">Dinner</p>
                  <p className="text-white/50 text-sm">{RESTAURANT_INFO.hours.dinner}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500/60 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/70 text-xs uppercase tracking-wide mb-0.5">Closed</p>
                  <p className="text-white/50 text-sm">{RESTAURANT_INFO.hours.closed}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10" />

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} KASIKA Asian Dining Indo Bar. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Owner: {RESTAURANT_INFO.owner} · Tokorozawa, Saitama, Japan
          </p>
        </div>
      </div>
    </footer>
  );
}
