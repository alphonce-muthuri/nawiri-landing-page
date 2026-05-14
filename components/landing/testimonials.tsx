"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, scaleIn, stagger, viewport } from "@/lib/motion";

const featured = {
  name: "Amina Wanjiku",
  role: "SME owner, Nairobi",
  quote:
    "Nawiri changed how I run my business. I can pay bills, access a quick loan decision, and manage everything on my phone - even when I'm away from the shop.",
  avatar: "https://images.unsplash.com/photo-1557141202-a329b1e586f2?auto=format&fit=crop&w=120&q=85",
};

const rest = [
  {
    name: "David Omondi",
    role: "Developer, Kisumu",
    quote: "I like that it's not just payments - I can save daily, invest from small amounts, and still use USSD when data is off.",
    avatar: "https://images.unsplash.com/photo-1752650143052-fab46a8c2735?auto=format&fit=crop&w=80&q=85",
  },
  {
    name: "Grace Mutua",
    role: "Diaspora family, Mombasa",
    quote: "My sister abroad remits with lower fees, and I can immediately move funds into savings and bills without visiting a branch.",
    avatar: "https://images.unsplash.com/photo-1772442199087-f03254e07bd0?auto=format&fit=crop&w=80&q=85",
  },
  {
    name: "Peter Kamau",
    role: "Entrepreneur, Nakuru",
    quote: "The AI loan decision is fast and the process is simple. It helped me restock when cash flow was tight.",
    avatar: "https://images.unsplash.com/photo-1516224498413-84ecf3a1e7fd?auto=format&fit=crop&w=80&q=85",
  },
  {
    name: "Fatuma Hassan",
    role: "Trader, Eldoret",
    quote: "USSD and WhatsApp banking makes it easy. I don't need a smartphone to manage my account.",
    avatar: "https://images.unsplash.com/photo-1711745818251-19a938e53e27?auto=format&fit=crop&w=80&q=85",
  },
  {
    name: "James Otieno",
    role: "Student, Nairobi",
    quote: "Micro-savings are perfect for me. It's easier to build a habit when you can start from small daily amounts.",
    avatar: "https://images.unsplash.com/photo-1773672726538-885c0d878033?auto=format&fit=crop&w=80&q=85",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="min-w-0">
            <span className="section-label">Customers</span>
            <h2 className="text-[1.65rem] min-[400px]:text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.02em] leading-[1.12] sm:leading-[1.1]">
              Built for{" "}
              <span className="underline-yellow text-brand-yellow">everyday Kenya</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-2 gap-y-1 shrink-0">
            <Stars />
            <span className="text-sm font-semibold">6 pillars</span>
            <span className="text-sm text-muted-foreground whitespace-nowrap">· one ecosystem</span>
          </motion.div>
        </motion.div>

        {/* Featured quote */}
        <motion.div
          className="border border-border rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-10 mb-6 sm:mb-8 bg-white"
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <Stars />
          <blockquote className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.5] sm:leading-[1.55] tracking-tight mt-4 sm:mt-5 mb-5 sm:mb-7 max-w-3xl">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-border shrink-0">
              <Image src={featured.avatar} alt={featured.name} width={40} height={40} className="object-cover w-full h-full" />
            </div>
            <div>
              <p className="text-sm font-semibold">{featured.name}</p>
              <p className="text-xs text-muted-foreground">{featured.role}</p>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4"
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {rest.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="border border-border rounded-xl p-4 sm:p-5 bg-white hover:border-primary/20 transition-colors"
            >
              <Stars />
              <p className="text-[13px] text-foreground leading-relaxed mt-3 mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2.5 pt-3 border-t border-border">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-border shrink-0">
                  <Image src={t.avatar} alt={t.name} width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold truncate">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground truncate">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
