"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, scaleIn, stagger, viewport } from "@/lib/motion";
import { testimonialAvatars } from "@/lib/landing-people-images";

const featured = {
  name: "Amina Wanjiku",
  role: "SME owner, Nairobi",
  quote:
    "Nawiri changed how I run my business. I can pay bills, access a quick loan decision, and manage everything on my phone - even when I'm away from the shop.",
  avatar: testimonialAvatars.amina,
};

const rest = [
  {
    name: "David Omondi",
    role: "Developer, Kisumu",
    quote: "I like that it's not just payments - I can save daily, invest from small amounts, and still use USSD when data is off.",
    avatar: testimonialAvatars.david,
  },
  {
    name: "Grace Mutua",
    role: "Diaspora family, Mombasa",
    quote: "My sister abroad remits with lower fees, and I can immediately move funds into savings and bills without visiting a branch.",
    avatar: testimonialAvatars.grace,
  },
  {
    name: "Peter Kamau",
    role: "Entrepreneur, Nakuru",
    quote: "The AI loan decision is fast and the process is simple. It helped me restock when cash flow was tight.",
    avatar: testimonialAvatars.peter,
  },
  {
    name: "Fatuma Hassan",
    role: "Trader, Eldoret",
    quote: "USSD and WhatsApp banking makes it easy. I don't need a smartphone to manage my account.",
    avatar: testimonialAvatars.fatuma,
  },
  {
    name: "James Otieno",
    role: "Student, Nairobi",
    quote: "Micro-savings are perfect for me. It's easier to build a habit when you can start from small daily amounts.",
    avatar: testimonialAvatars.james,
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
    <section id="about" className="min-w-0 py-16 sm:py-24 lg:py-28 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto min-w-0 px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4 mb-8 sm:mb-14"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="min-w-0">
            <span className="section-label">Customers</span>
            <h2 className="text-[1.6rem] min-[360px]:text-[1.65rem] min-[400px]:text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.02em] leading-[1.12] sm:leading-[1.1] text-balance">
              Built for{" "}
              <span className="text-primary underline-yellow">everyday Kenya</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 shrink-0">
            <Stars />
            <span className="text-xs sm:text-sm font-semibold">6 pillars</span>
            <span className="text-xs sm:text-sm text-muted-foreground">· one ecosystem</span>
          </motion.div>
        </motion.div>

        {/* Featured quote */}
        <motion.div
          className="min-w-0 border border-border rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-10 mb-5 sm:mb-8 bg-white"
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <Stars />
          <blockquote className="min-w-0 text-[15px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.55] tracking-tight mt-4 sm:mt-5 mb-5 sm:mb-7 max-w-3xl break-words">
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

        {/* Mobile: horizontal scroll */}
        <motion.div
          className="sm:hidden -mx-4 px-4 overflow-x-auto flex gap-3 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {rest.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="shrink-0 w-[248px] border border-border rounded-xl p-4 bg-white"
            >
              <Stars />
              <p className="text-[12.5px] text-foreground leading-relaxed mt-3 mb-4 break-words">
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

        {/* sm+: grid */}
        <motion.div
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4"
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
              <p className="text-[13px] text-foreground leading-relaxed mt-3 mb-4 break-words">
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
