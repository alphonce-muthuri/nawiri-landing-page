"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";
import { fadeUp, fadeIn, slideRight, scaleIn, stagger, ease } from "@/lib/motion";

const HERO_IMAGE = "/woman.jpg";

const stats = [
  { value: "5 min", label: "account opening" },
  { value: "< 2 min", label: "AI loan approval" },
  { value: "3%", label: "remittance fees" },
  { value: "KSh 200", label: "start saving / pension daily" },
];

export function Hero() {
  return (
    <section className="pt-[calc(3.5rem+env(safe-area-inset-top))] sm:pt-[calc(60px+env(safe-area-inset-top))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 sm:gap-10 xl:gap-16 lg:items-end">

          {/* ── Left ── */}
          <motion.div
            className="py-10 sm:py-14 lg:py-20"
            variants={stagger(0.09, 0.1)}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <Badge className="mb-5 sm:mb-7 bg-accent/40 text-accent-foreground border-0 rounded-full text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 inline-flex items-center gap-1.5 hover:bg-accent/40 max-w-full text-left [&>svg]:shrink-0">
                <ShieldCheck className="w-3 h-3" strokeWidth={2} />
                <span className="leading-snug">CBK-licensed Digital Credit Provider · Kenya DPA (2019) aligned</span>
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[2.125rem] min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold leading-[1.08] sm:leading-[1.04] tracking-[-0.03em] mb-5 sm:mb-6"
            >
              Your <span className="text-primary">financial freedom</span>,
              <br />
              simplified
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-[17px] text-muted-foreground leading-relaxed sm:leading-[1.65] mb-8 sm:mb-10 max-w-[420px]"
            >
              Nawiri brings core banking, investments, remittances, Kadogo micro-tools, and a digital marketplace into one mobile-first ecosystem - available via app, USSD, and WhatsApp.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col min-[400px]:flex-row gap-3 mb-10 sm:mb-14 lg:mb-16">
              <Button
                size="lg"
                className="w-full min-[400px]:w-auto bg-primary text-white hover:bg-primary/90 rounded-lg h-11 px-6 sm:px-7 text-sm font-medium group shadow-[0_1px_3px_#10275d4d]"
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
                className="w-full min-[400px]:w-auto border-border rounded-lg h-11 px-6 sm:px-7 text-sm font-medium hover:bg-secondary"
                asChild
              >
                <a href="#features">Explore the 6 pillars</a>
              </Button>
            </motion.div>

            {/* Mobile / tablet hero visual */}
            <motion.div
              variants={scaleIn}
              className="lg:hidden relative rounded-2xl overflow-hidden aspect-[4/3] max-h-[320px] sm:max-h-[380px] mb-10 sm:mb-0 sm:max-w-md border border-border shadow-[0_2px_20px_oklch(0_0_0/0.08)]"
            >
              <Image
                src={HERO_IMAGE}
                alt="Person using Nawiri mobile banking app on a city street"
                fill
                className="object-cover object-[65%_center]"
                priority
                sizes="(max-width: 640px) 100vw, 480px"
              />
              <div className="float-card absolute bottom-4 left-3 right-3 p-3 sm:p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[11px] text-muted-foreground font-medium">Available balance</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">
                    <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                    Live
                  </span>
                </div>
                <p className="text-xl sm:text-[26px] font-semibold tracking-tight mb-2">KES 84,250.00</p>
                <div className="grid grid-cols-4 gap-1">
                  {["Pay", "Save", "Invest", "Send"].map((action) => (
                    <div
                      key={action}
                      className="text-center bg-secondary rounded-lg py-1.5 text-[10px] sm:text-[11px] font-medium text-muted-foreground"
                    >
                      {action}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={stagger(0.07)}
              className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-x-6 gap-y-5 sm:gap-x-8 pt-8 border-t border-border"
            >
              {stats.map((s, i) => (
                <motion.div key={s.label} variants={fadeUp} className="flex items-center gap-0 sm:gap-8">
                  <div>
                    <p className="text-lg sm:text-[22px] font-semibold tracking-tight leading-none">{s.value}</p>
                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">{s.label}</p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-6 bg-border hidden sm:block shrink-0" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right - editorial image (desktop) ── */}
          <motion.div
            className="hidden lg:block h-[540px] xl:h-[580px] relative rounded-t-2xl overflow-hidden"
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

            {/* Balance card - bottom */}
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

            {/* Earnings badge - top right */}
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
    </section>
  );
}
