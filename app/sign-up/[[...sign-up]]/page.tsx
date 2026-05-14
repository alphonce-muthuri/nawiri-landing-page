import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { nawiriAppearance } from "@/lib/clerk-appearance";

const LOGO_SRC = "/nawiri-dark-logo.png";

const steps = [
  {
    n: "01",
    title: "Open & verify",
    desc: "Open an account in about 5 minutes with tiered KYC and biometric verification.",
  },
  {
    n: "02",
    title: "Choose your pillar",
    desc: "Start with core banking, investments, remittances, Kadogo micro-tools, or integrated trade.",
  },
  {
    n: "03",
    title: "Bank from anywhere",
    desc: "Use the app, or key services via USSD and WhatsApp banking.",
  },
];

const mobileSteps = [
  { icon: "🏦", label: "Open & verify", sub: "~5 min KYC" },
  { icon: "🎯", label: "Pick a pillar", sub: "Banking, save, invest…" },
  { icon: "📱", label: "Bank anywhere", sub: "App · USSD · WhatsApp" },
];

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex bg-white">

      {/* ── Left panel: editorial image + brand copy ── */}
      <div className="hidden lg:flex lg:w-[52%] xl:w-[56%] relative flex-shrink-0 overflow-hidden">
        <Image
          src="/woman.jpg"
          alt="Person using Nawiri banking app"
          fill
          className="object-cover object-[65%_center]"
          priority
          sizes="56vw"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/80 via-[#0f172a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent" />

        <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 z-10 group">
          <Image
            src={LOGO_SRC}
            alt="Nawiri"
            width={140}
            height={32}
            priority
            className="h-6 w-auto rounded-lg bg-white/90 p-1 group-hover:opacity-90 transition-opacity"
          />
        </Link>

        <div className="absolute bottom-12 left-8 right-8 z-10 space-y-7">
          <div className="space-y-3">
            <h2 className="text-3xl xl:text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-white">
              Your financial freedom,
              <br />
              simplified
            </h2>
            <p className="text-[15px] text-white/70 leading-relaxed max-w-[320px]">
              Nawiri unifies core banking, investments, remittances, Kadogo micro-tools, and integrated commerce into one mobile-first ecosystem.
            </p>
          </div>

          <ol className="space-y-4">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-3.5">
                <span className="text-xs font-bold text-white/40 mt-0.5 w-5 shrink-0 tabular-nums">
                  {s.n}
                </span>
                <div>
                  <p className="text-sm font-medium text-white leading-none">{s.title}</p>
                  <p className="text-[13px] text-white/55 mt-1 leading-snug">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="pt-2 border-t border-white/15">
            <p className="text-[12px] text-white/55 leading-snug">
              CBK-licensed Digital Credit Provider · Kenya DPA (2019) aligned · Tiered KYC + biometric verification
            </p>
          </div>
        </div>
      </div>

      {/* ── Right panel: sign-up form ── */}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* Mobile: branded top strip */}
        <div className="lg:hidden bg-[#10275d] px-5 py-4 flex items-center justify-between shrink-0">
          <Link href="/">
            <Image
              src={LOGO_SRC}
              alt="Nawiri"
              width={120}
              height={28}
              className="h-[22px] w-auto brightness-0 invert"
            />
          </Link>
          <Link
            href="/sign-in"
            className="text-[12px] text-white/70"
          >
            Have an account?{" "}
            <span className="font-semibold text-white">Sign in</span>
          </Link>
        </div>

        {/* Mobile: welcome copy + steps */}
        <div className="lg:hidden px-5 pt-6 pb-1 shrink-0">
          <h1 className="text-[22px] font-semibold tracking-tight leading-snug">
            Create your account
          </h1>
          <p className="text-[13px] text-muted-foreground mt-1 mb-5">
            Join 500K+ Kenyans banking smarter with Nawiri
          </p>

          {/* Compact step strip */}
          <div className="grid grid-cols-3 gap-2">
            {mobileSteps.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-1 bg-slate-50 rounded-xl px-3 py-3 border border-border"
              >
                <span className="text-base leading-none">{s.icon}</span>
                <p className="text-[11.5px] font-semibold leading-snug mt-1">{s.label}</p>
                <p className="text-[10.5px] text-muted-foreground leading-snug">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form area */}
        <div className="flex-1 flex flex-col items-center lg:justify-center px-5 sm:px-8 lg:px-16 pt-5 pb-6 sm:pt-6 sm:pb-8 lg:py-10">
          <div className="w-full max-w-[420px]">

            {/* Desktop back link */}
            <Link
              href="/"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M7.5 9L4.5 6l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to nawiri.com
            </Link>

            <SignUp appearance={nawiriAppearance} />

            <p className="mt-5 text-center text-[13px] text-muted-foreground">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-primary font-medium hover:underline underline-offset-2">
                Sign in
              </Link>
            </p>

            {/* Mobile trust strip */}
            <div className="lg:hidden mt-4 flex items-start gap-2 px-3 py-3 rounded-xl bg-slate-50 border border-border">
              <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0 mt-px" strokeWidth={2} />
              <p className="text-[11.5px] text-muted-foreground leading-snug">
                CBK-licensed · Kenya DPA (2019) aligned · AML screened · Tiered KYC
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 px-5 py-4 border-t border-border">
          <div className="max-w-[400px] mx-auto flex flex-wrap gap-x-3 gap-y-1 justify-center text-[11px] text-muted-foreground">
            <span>© 2026 Nawiri</span>
            <Link href="/legal/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/legal/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
            <Link href="/legal/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
