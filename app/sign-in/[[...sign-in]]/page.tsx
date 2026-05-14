import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { nawiriAppearance } from "@/lib/clerk-appearance";

const LOGO_SRC = "/nawiri-dark-logo.png";

const trustPoints = [
  "CBK-licensed Digital Credit Provider (DCP)",
  "Kenya Data Protection Act (DPA) 2019 aligned",
  "Tiered KYC with biometric verification",
  "Real-time AML screening and CRB reporting",
];

export default function SignInPage() {
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

        <div className="absolute bottom-12 left-8 right-8 z-10 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl xl:text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-white">
              Your financial freedom,
              <br />
              simplified
            </h2>
            <p className="text-[15px] text-white/70 leading-relaxed max-w-[340px]">
              Nawiri brings core banking, investments, remittances, Kadogo micro-tools, and integrated commerce into one mobile-first ecosystem.
            </p>
          </div>

          <ul className="space-y-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-white/60">
                <ShieldCheck className="w-3.5 h-3.5 text-white/50 shrink-0" strokeWidth={2} />
                {point}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 pt-2 border-t border-white/15">
            {[
              { value: "5 min", label: "account opening" },
              { value: "3% fees", label: "remittance transfers" },
              { value: "500K+", label: "customers served" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-base font-semibold text-white leading-none">{s.value}</p>
                <p className="text-[11px] text-white/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right panel: sign-in form ── */}
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
            href="/sign-up"
            className="text-[12px] text-white/70"
          >
            New here?{" "}
            <span className="font-semibold text-white">Sign up</span>
          </Link>
        </div>

        {/* Mobile: welcome copy */}
        <div className="lg:hidden px-5 pt-6 pb-1 shrink-0">
          <h1 className="text-[22px] font-semibold tracking-tight leading-snug">
            Welcome back
          </h1>
          <p className="text-[13px] text-muted-foreground mt-1">
            Sign in to your Nawiri account
          </p>
        </div>

        {/* Form area */}
        <div className="flex-1 flex flex-col items-center lg:justify-center px-5 sm:px-8 lg:px-16 pt-4 pb-6 sm:pt-6 sm:pb-8 lg:py-10">
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

            <SignIn appearance={nawiriAppearance} />

            <p className="mt-5 text-center text-[13px] text-muted-foreground">
              No account yet?{" "}
              <Link href="/sign-up" className="text-primary font-medium hover:underline underline-offset-2">
                Create one free
              </Link>
            </p>

            {/* Mobile trust strip */}
            <div className="lg:hidden mt-6 flex items-start gap-2 px-3 py-3 rounded-xl bg-slate-50 border border-border">
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
