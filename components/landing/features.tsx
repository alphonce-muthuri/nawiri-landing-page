"use client";

import { motion } from "framer-motion";
import { Building2, Coins, Globe, ShoppingBag, Sparkles, Cpu } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const features = [
  {
    icon: Building2,
    title: "Core Banking",
    description: "Open an account in minutes, pay 100+ utilities 24/7, and access AI-powered collateral-free loans (KSh 500-5M) in under 2 minutes.",
    accent: "blue",
  },
  {
    icon: Coins,
    title: "Investment Arm",
    description: "Start building wealth with low-entry products: micro-pensions from KSh 200/day, verified land investments from KSh 1,000, and more.",
    accent: "yellow",
  },
  {
    icon: Globe,
    title: "Remittances",
    description: "Send money home with 3% fees and turn transfers into progress with the Remit-Invest-Save model and repayment tools (e.g., YEDF portal).",
    accent: "blue",
  },
  {
    icon: Sparkles,
    title: "Kadogo Economy",
    description: "Micro-tools built for informal work: inventory loans, rent & housing savings, and small daily health cover - accessible via USSD and WhatsApp.",
    accent: "yellow",
  },
  {
    icon: ShoppingBag,
    title: "E‑Commerce & Trade",
    description: "A unified digital marketplace for goods, services, and logistics - with embedded finance to help individuals and SMEs buy, sell, and grow.",
    accent: "blue",
  },
  {
    icon: Cpu,
    title: "Technology & Integrations",
    description: "Mobile app, USSD, and WhatsApp banking powered by AI/ML credit scoring and secure APIs integrating services like M‑Pesa, Ardhisasa, and NSSF.",
    accent: "yellow",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-28 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-8 sm:mb-16"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <span className="section-label">Why Nawiri</span>
            <h2 className="text-[1.75rem] sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1]">
              Six pillars built for{" "}
              <span className="underline-yellow text-brand-yellow">financial inclusion</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="hidden lg:block text-sm text-muted-foreground max-w-xs leading-relaxed">
            Banking, investing, remittances, micro-finance tools, digital commerce, and the technology backbone - unified so you can save fees, access opportunity, and grow.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid min-[400px]:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl sm:rounded-2xl overflow-hidden"
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="bg-card p-4 min-[400px]:p-5 sm:p-7 hover:bg-white transition-colors duration-150 group"
              >
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-150 group-hover:scale-105 ${
                    f.accent === "blue"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/50 text-accent-foreground"
                  }`}
                >
                  <Icon className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" strokeWidth={1.75} />
                </div>
                <h3 className="text-[13px] sm:text-[14px] font-semibold mb-1.5 sm:mb-2 tracking-tight">{f.title}</h3>
                <p className="text-[12px] sm:text-[13.5px] text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
