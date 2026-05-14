"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Smartphone, Hash } from "lucide-react";
import { fadeUp, slideLeft, slideRight, stagger, scaleIn, viewport } from "@/lib/motion";
import { landingPeopleImages } from "@/lib/landing-people-images";

const steps = [
  {
    icon: Smartphone,
    title: "Choose your channel",
    description: "Use the mobile app or bank on any phone via USSD and WhatsApp - built for 24/7 access.",
    note: "App + USSD + WhatsApp",
  },
  {
    icon: Hash,
    title: "Open & verify",
    description: "Open an account in about 5 minutes with tiered KYC and biometric verification designed for safe, compliant onboarding.",
    note: "Tiered KYC + biometrics",
  },
  {
    icon: MessageCircle,
    title: "Grow with the pillars",
    description: "Bank, save, invest, remit, and access Kadogo micro-tools - then shop and trade through integrated marketplace services.",
    note: "6 pillars in one ecosystem",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="min-w-0 py-16 sm:py-24 lg:py-28 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto min-w-0 px-4 sm:px-6">
        <div className="grid min-w-0 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-20 items-center">

          {/* ── Left - image (desktop) ── */}
          <motion.div
            className="hidden lg:block relative order-2 lg:order-1"
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div className="rounded-2xl overflow-hidden aspect-[3/4] relative shadow-[0_2px_20px_oklch(0_0_0/0.08)] bg-muted">
              <Image
                src={landingPeopleImages.howItWorks}
                alt="Two friends smiling at sunset, one using Nawiri on a smartphone"
                fill
                placeholder="blur"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, min(520px, 45vw)"
                quality={85}
                priority={false}
              />
            </div>
            {/* Floating stat */}
            <motion.div
              className="float-card absolute -right-5 top-14 px-4 py-3 w-[152px]"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-[11px] text-muted-foreground mb-1 font-medium">Account setup</p>
              <p className="text-2xl font-semibold tracking-tight leading-none">2 min</p>
              <p className="text-[11px] text-primary mt-1.5">avg. opening time</p>
            </motion.div>
            {/* Floating transfer confirmation */}
            <motion.div
              className="float-card absolute -left-5 bottom-16 px-4 py-3"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-accent/40 flex items-center justify-center shrink-0">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <p className="text-[11px] font-semibold leading-none mb-0.5">Transfer sent</p>
                  <p className="text-[11px] text-muted-foreground leading-none">KES 5,000 · just now</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Steps (+ mobile image) ── */}
          <motion.div
            className="order-1 lg:order-2 min-w-0"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <span className="section-label">Getting started</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1] mb-4">
                Up and running{" "}
                <span className="underline-yellow text-brand-yellow">in minutes</span>
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-[340px]">
                Nawiri is built for everyday Kenya - mobile-first, but accessible on any phone via USSD and WhatsApp.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="lg:hidden relative rounded-2xl overflow-hidden aspect-[4/3] max-h-[320px] sm:max-h-[380px] mb-8 sm:mb-10 border border-border shadow-[0_2px_20px_oklch(0_0_0/0.08)] bg-muted"
            >
              <Image
                src={landingPeopleImages.howItWorks}
                alt="Two friends smiling at sunset, one using Nawiri on a smartphone"
                fill
                placeholder="blur"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, min(640px, 100vw)"
                quality={85}
                priority={false}
              />
            </motion.div>

            <div className="mb-7 sm:mb-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div key={step.title} variants={fadeUp} className="flex gap-3 sm:gap-5">
                    {/* Icon + connector */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-accent/50 flex items-center justify-center">
                        <Icon className="w-4 h-4 sm:w-[17px] sm:h-[17px] text-accent-foreground" strokeWidth={1.75} />
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-px bg-border flex-1 my-1.5 min-h-4" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-5 sm:pb-8 last:pb-0 min-w-0">
                      <h3 className="text-[13.5px] sm:text-[14px] font-semibold mb-1">{step.title}</h3>
                      <p className="text-[12.5px] sm:text-[13.5px] text-muted-foreground leading-relaxed mb-1.5">
                        {step.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-medium text-primary">
                        <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                        {step.note}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={fadeUp}>
              <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 rounded-lg text-sm h-11 sm:h-10 px-6 group shadow-[0_1px_3px_#10275d40]" asChild>
                <a href="/sign-up">
                  Start for free
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
