"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#fef3e2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#E6A817] text-xs tracking-[0.4em] uppercase font-semibold mb-3">
            Testimonials
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            What Our Guests <span className="text-gradient">Say</span>
          </h2>
          <p className="text-[#6b5740] max-w-xl mx-auto leading-relaxed">
            Real stories from our beloved guests who have experienced the warmth of KASIKA.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {TESTIMONIALS.map((t) => (
                <CarouselItem key={t.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e8d5b7] hover:shadow-xl transition-shadow duration-400 h-full flex flex-col">
                    {/* Quote icon */}
                    <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center mb-5 shrink-0">
                      <Quote size={16} className="text-[#1A1A1A]" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-[#E6A817] fill-saffron" />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-[#4A2C1A] leading-relaxed text-sm mb-6 flex-1 italic">
                      "{t.review}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-[#f5ede0]">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-saffron">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="44px"
                        />
                      </div>
                      <div>
                        <p className="text-[#1A1A1A] font-semibold text-sm">{t.name}</p>
                        <p className="text-[#6b5740] text-xs">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-auto translate-y-0 bg-white border-[#e8d5b7] hover:bg-[#E6A817] hover:text-white hover:border-saffron transition-colors w-10 h-10 rounded-full" />
              <CarouselNext className="relative inset-auto translate-y-0 bg-white border-[#e8d5b7] hover:bg-[#E6A817] hover:text-white hover:border-saffron transition-colors w-10 h-10 rounded-full" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
