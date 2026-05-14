"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";
import { fadeUp, fadeIn, slideRight, stagger, ease } from "@/lib/motion";

const HERO_IMAGE = "/woman.jpg";

const stats = [
  { value: "5 min", label: "account opening" },
  { value: "500K+", label: "customers served" },
  { value: "3%", label: "remittance fees" },
  { value: "KSh 200", label: "minimum daily savings" },
];

export function Hero() {
  return (
    <section className="lg:pt-[calc(60px+env(safe-area-inset-top))]">

      {/* ── MOBILE / TABLET: full-bleed ── */}
      <div className="lg:hidden pt-[calc(3.5rem+env(safe-area-inset-top))]">

        <motion.div
          className="relative w-full overflow-hidden"
          style={{ height: "calc(100svh - 3.5rem - env(safe-area-inset-top))", minHeight: 580 }}
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          <Image
            src={HERO_IMAGE}
            alt="Person using Nawiri mobile banking app on a city street"
            fill
            className="object-cover object-[65%_top]"
            priority
            sizes="100vw"
          />

          {/* Top gradient - softer, shows more image */}
          <div className="absolute inset-x-0 top-0 h-[52%] bg-gradient-to-b from-background/80 via-background/20 to-transparent pointer-events-none" />
          {/* Bottom gradient - rich, full coverage for legibility */}
          <div className="absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-background via-background/85 to-transparent pointer-events-none" />

          {/* ── Top: badge + headline ── */}
          <motion.div
            className="absolute inset-x-0 top-0 px-6 pt-7 sm:px-8 sm:pt-9"
            variants={stagger(0.1, 0.1)}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <div className="mb-5 inline-flex items-center gap-2 px-3 py-[5px] rounded-full border border-primary/30 bg-primary/8 text-primary text-[9px] font-bold tracking-[0.12em] uppercase">
                <ShieldCheck className="w-2.5 h-2.5 shrink-0" strokeWidth={2.5} />
                CBK-Licensed · Kenya DPA
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[2.6rem] min-[400px]:text-[2.875rem] sm:text-5xl font-semibold leading-[1.05] tracking-[-0.04em]"
            >
              Your <span className="text-primary">financial
              <br />freedom</span>, simplified
            </motion.h1>
          </motion.div>

          {/* ── Mid: floating metric card ── */}
          <motion.div
            className="absolute right-5 sm:right-7 top-[48%] -translate-y-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.6 }}
          >
            <div className="float-card flex items-center gap-2.5 px-3.5 py-2.5">
              <div className="w-7 h-7 rounded-full bg-accent/30 flex items-center justify-center shrink-0">
                <TrendingUp className="w-3.5 h-3.5 text-accent-foreground" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[9px] text-muted-foreground leading-none mb-[3px] font-medium">Savings interest</p>
                <p className="text-[13px] font-semibold leading-none">4% p.a.</p>
              </div>
            </div>
          </motion.div>

          {/* ── Bottom: description + CTAs ── */}
          <motion.div
            className="absolute inset-x-0 bottom-0 px-6 pb-9 sm:px-8 sm:pb-11"
            variants={stagger(0.09, 0.3)}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fadeUp}
              className="text-[13px] sm:text-sm text-foreground/65 leading-relaxed mb-5 max-w-[300px]"
            >
              Banking, savings, investments, and remittances - one app, via mobile, USSD, or WhatsApp.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-2.5 sm:flex-row">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 rounded-xl h-12 px-6 text-sm font-semibold group shadow-[0_4px_20px_#10275d40]"
                asChild
              >
                <Link href="/sign-up">
                  Open an account
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-border/40 bg-background/15 backdrop-blur-md rounded-xl h-12 px-6 text-sm font-medium hover:bg-background/25"
                asChild
              >
                <a href="#features">See how it works</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats - divide-x divide-y grid, editorial style */}
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 divide-x divide-y divide-border border-b border-border"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="px-6 py-4 sm:px-8 sm:py-5">
              <p className="text-[17px] font-semibold tracking-tight leading-none">{s.value}</p>
              <p className="text-[10px] text-muted-foreground mt-1.5 leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── DESKTOP (lg+) ── */}
      <div className="hidden lg:block">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_400px] gap-10 xl:gap-16 lg:items-end">

            {/* Left */}
            <motion.div
              className="py-20"
              variants={stagger(0.09, 0.1)}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={fadeUp}>
                <Badge className="mb-7 bg-accent/40 text-accent-foreground border-0 rounded-full text-xs font-medium px-3 py-1 inline-flex items-center gap-1.5 hover:bg-accent/40 [&>svg]:shrink-0">
                  <ShieldCheck className="w-3 h-3" strokeWidth={2} />
                  CBK-licensed Digital Credit Provider · Kenya DPA (2019) aligned
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-6xl lg:text-[68px] font-semibold leading-[1.04] tracking-[-0.03em] mb-6"
              >
                Your <span className="text-primary">financial freedom</span>,
                <br />
                simplified
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-[17px] text-muted-foreground leading-[1.65] mb-10 max-w-[420px]"
              >
                Nawiri brings core banking, investments, remittances, Kadogo micro-tools, and a digital marketplace into one mobile-first ecosystem - available via app, USSD, and WhatsApp.
              </motion.p>

              <motion.div variants={fadeUp} className="flex gap-3 mb-16">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 rounded-lg h-11 px-7 text-sm font-medium group shadow-[0_1px_3px_#10275d4d]"
                  asChild
                >
                  <Link href="/sign-up">
                    Open an account
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border rounded-lg h-11 px-7 text-sm font-medium hover:bg-secondary"
                  asChild
                >
                  <a href="#features">Explore the 6 pillars</a>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={stagger(0.07)}
                className="flex flex-wrap items-center gap-x-8 pt-8 border-t border-border"
              >
                {stats.map((s, i) => (
                  <motion.div key={s.label} variants={fadeUp} className="flex items-center gap-8">
                    <div>
                      <p className="text-[22px] font-semibold tracking-tight leading-none">{s.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                    </div>
                    {i < stats.length - 1 && (
                      <div className="w-px h-6 bg-border shrink-0" />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - image */}
            <motion.div
              className="h-[540px] xl:h-[580px] relative rounded-t-2xl overflow-hidden"
              variants={slideRight}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.65, ease, delay: 0.15 }}
            >
              <Image
                src={HERO_IMAGE}
                alt="Person using Nawiri mobile banking app on a city street"
                fill
                className="object-cover object-[70%_center]"
                priority
                sizes="420px"
              />

              {/* Balance card */}
              <motion.div
                className="float-card absolute bottom-7 left-5 right-5 p-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.6 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs text-muted-foreground font-medium">Available balance</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                    Live
                  </span>
                </div>
                <p className="text-[26px] font-semibold tracking-tight mb-3">KES 84,250.00</p>
                <div className="flex gap-1.5">
                  {["Pay", "Save", "Invest", "Send"].map((action) => (
                    <div
                      key={action}
                      className="flex-1 text-center bg-secondary hover:bg-primary/8 rounded-lg py-1.5 text-[11px] font-medium text-muted-foreground cursor-pointer transition-colors"
                    >
                      {action}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Earnings badge */}
              <motion.div
                className="float-card absolute top-6 right-5 px-3.5 py-2.5 flex items-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.75 }}
              >
                <div className="w-7 h-7 rounded-full bg-accent/40 flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5 text-accent-foreground" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground leading-none mb-0.5">Savings interest</p>
                  <p className="text-sm font-semibold leading-none">4% p.a.</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
