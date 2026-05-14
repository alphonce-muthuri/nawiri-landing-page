"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, slideRight, stagger, viewport } from "@/lib/motion";
import { landingPeopleImages } from "@/lib/landing-people-images";

export function AppCta() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 border-t border-border bg-[oklch(0.97_0.02_83)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_400px] gap-6 lg:gap-12 xl:gap-20 items-center">

          {/* ── Left ── */}
          <motion.div
            className="min-w-0 order-2 lg:order-1"
            variants={stagger(0.09)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div variants={fadeUp}>
              <span className="section-label">Get the app</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1] mb-4">
                Bank <span className="text-brand-yellow">anywhere</span> - even without data
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-[360px]">
                Use the Nawiri app when you have internet, or access key services anytime via USSD and WhatsApp banking - built for 24/7 convenience.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col min-[400px]:flex-row flex-wrap gap-3 mb-6 sm:mb-8">
              <button
                type="button"
                className="flex items-center justify-center gap-3 w-full min-[400px]:w-auto min-[400px]:flex-1 lg:flex-initial bg-foreground text-background rounded-xl px-4 py-3 sm:py-2.5 hover:opacity-90 transition-opacity"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] leading-none opacity-60">Download on the</p>
                  <p className="text-sm font-semibold leading-tight mt-0.5">App Store</p>
                </div>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-3 w-full min-[400px]:w-auto min-[400px]:flex-1 lg:flex-initial bg-foreground text-background rounded-xl px-4 py-3 sm:py-2.5 hover:opacity-90 transition-opacity"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" aria-hidden="true">
                  <path d="M3.18 23.76c.3.16.64.16.99.16l12.12-6.99-2.68-2.68-10.43 9.51zM.28 1.77C.1 2.1 0 2.5 0 2.98v18.04c0 .48.1.88.28 1.2l.07.06 10.1-10.1v-.24L.35 1.71l-.07.06zM20.49 10.28l-2.87-1.66-3.03 3.03 3.03 3.03 2.89-1.67c.82-.48.82-1.25-.02-1.73zM3.18.24L15.3 7.23l-2.68 2.68L2.19.4c.28-.17.64-.22.99-.16z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] leading-none opacity-60">Get it on</p>
                  <p className="text-sm font-semibold leading-tight mt-0.5">Google Play</p>
                </div>
              </button>
            </motion.div>

            <motion.p variants={fadeUp} className="text-[13px] text-muted-foreground leading-relaxed">
              Prefer the web?{" "}
              <Link href="/sign-up" className="text-primary font-medium hover:underline underline-offset-2">
                Open an account online
              </Link>
            </motion.p>
          </motion.div>

          {/* ── App visual ── */}
          <motion.div
            className="order-1 lg:order-2 relative overflow-hidden
              -mx-4 sm:-mx-6 lg:mx-0
              aspect-[21/9] lg:aspect-auto lg:h-[320px] xl:h-[360px]
              rounded-none lg:rounded-2xl
              lg:shadow-[0_4px_24px_oklch(0_0_0/0.10)] lg:border lg:border-black/5"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <Image
              src={landingPeopleImages.appOnPhone}
              alt="Nawiri app on mobile phone"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 440px"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
