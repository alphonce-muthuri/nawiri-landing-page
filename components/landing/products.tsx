"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Coins,
  Cpu,
  Globe,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const products = [
  {
    icon: Building2,
    name: "Core Banking",
    description: "Instant accounts, bill payments (100+ utilities), and AI-powered collateral-free loans (KSh 500-5M) approved in under 2 minutes.",
    badge: "Pillar 1",
    badgeStyle: "bg-primary/10 text-primary",
  },
  {
    icon: Coins,
    name: "Investment Arm",
    description: "Micro-pensions from KSh 200/day, verified land investments from KSh 1,000, and accessible wealth tools for every income level.",
    badge: "Pillar 2",
    badgeStyle: "bg-accent/50 text-accent-foreground",
  },
  {
    icon: Globe,
    name: "Remittances",
    description: "Diaspora-friendly transfers with 3% fees, plus repayment and invest-from-abroad tools using a Remit-Invest-Save approach.",
    badge: "Pillar 3",
    badgeStyle: "bg-primary/10 text-primary",
  },
  {
    icon: Sparkles,
    name: "Kadogo Economy",
    description: "Hyper-local micro-tools for informal workers: inventory loans, rent & housing savings, and low-entry health cover - via USSD/WhatsApp.",
    badge: "Pillar 4",
    badgeStyle: "bg-accent/50 text-accent-foreground",
  },
  {
    icon: ShoppingBag,
    name: "E‑Commerce & Trade",
    description: "A unified marketplace connecting goods, services, and logistics - with embedded finance to support households, merchants, and SMEs.",
    badge: "Pillar 5",
    badgeStyle: "bg-primary/10 text-primary",
  },
  {
    icon: Cpu,
    name: "Technology & Integrations",
    description: "App + USSD + WhatsApp banking, AI/ML credit scoring, and APIs that connect key services like M‑Pesa, Ardhisasa, and NSSF.",
    badge: "Pillar 6",
    badgeStyle: "bg-accent/50 text-accent-foreground",
  },
];

export function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-6 mb-10 sm:mb-14"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <span className="section-label">Ecosystem</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1]">
              One platform,{" "}
              <span className="underline-yellow text-primary">six pillars</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Button
              variant="outline"
              className="self-start lg:self-auto border-border text-sm rounded-lg h-9 px-4 shrink-0"
            >
              See how it works
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Product list */}
        <motion.div
          className="divide-y divide-border"
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                variants={fadeUp}
                className="flex items-start sm:items-center gap-3 sm:gap-5 py-4 sm:py-[18px] group cursor-pointer hover:bg-card -mx-2 sm:-mx-3 px-2 sm:px-3 rounded-xl transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors mt-0.5 sm:mt-0">
                  <Icon className="w-[17px] h-[17px] text-foreground group-hover:text-primary transition-colors" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-0.5">
                    <h3 className="text-[14px] font-semibold">{product.name}</h3>
                    {product.badge && (
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full leading-none ${product.badgeStyle}`}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 mt-1 sm:mt-0 opacity-60 sm:opacity-0 sm:group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
