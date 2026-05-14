"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Lock, Fingerprint, BadgeCheck } from "lucide-react";
import { fadeUp, slideLeft, slideRight, stagger, viewport } from "@/lib/motion";

const items = [
  { icon: ShieldCheck, title: "CBK Licensed", description: "Licensed as a Digital Credit Provider (DCP)" },
  { icon: Award, title: "Consumer Protection", description: "Multilingual support and complaints handling" },
  { icon: Lock, title: "Data Protection", description: "Aligned with Kenya's Data Protection Act (2019)" },
  { icon: Fingerprint, title: "Biometric KYC", description: "Tiered KYC with biometric verification" },
];

const statusRows = [
  { label: "Tiered KYC (ID + biometrics)", status: "Active" },
  { label: "Real-time AML screening", status: "Enabled" },
  { label: "CRB reporting", status: "Enabled" },
  { label: "Encryption & secure storage", status: "Active" },
  { label: "Monitoring & risk controls", status: "Monitoring" },
];

export function SecurityTrust() {
  return (
    <section id="security" className="py-16 sm:py-24 lg:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-20 items-center">

          {/* ── Left ── */}
          <motion.div
            variants={stagger(0.09)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <span className="section-label">Security</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1] mb-4">
                Your money is{" "}
                <span className="underline-yellow text-primary">always safe</span>
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed mb-10 max-w-[340px]">
                Nawiri is built with compliance and safety from day one - including tiered KYC, real-time AML screening, and secure-by-design data handling.
              </p>
            </motion.div>

            <motion.div
              variants={stagger(0.08)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10"
            >
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} variants={fadeUp} className="flex items-start gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-[15px] h-[15px] text-primary" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] sm:text-[13.5px] font-semibold">{item.title}</p>
                      <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-6 border-t border-border">
              {["CBK Licensed (DCP)", "Tiered KYC", "AML screening", "DPA (2019) aligned"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium border border-border rounded-full px-3 py-1 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors"
                >
                  <BadgeCheck className="w-3 h-3 text-primary" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right ── */}
          <motion.div
            className="flex flex-col gap-3"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <div className="rounded-2xl overflow-hidden aspect-video relative shadow-[0_2px_20px_oklch(0_0_0/0.08)]">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=85"
                alt="Secure mobile banking"
                fill
                className="object-cover"
                sizes="520px"
              />
            </div>

            <div className="border border-border rounded-xl p-4 sm:p-5 bg-card overflow-hidden">
              <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center justify-between gap-2 mb-3 sm:mb-4">
                <p className="text-[13px] sm:text-[13.5px] font-semibold">Security dashboard</p>
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-muted-foreground shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                  All systems operational
                </span>
              </div>
              <div className="divide-y divide-border">
                {statusRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-3 py-2 sm:py-2.5">
                    <span className="text-[11px] sm:text-[12.5px] text-muted-foreground min-w-0 leading-snug">{row.label}</span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-primary bg-primary/8 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
