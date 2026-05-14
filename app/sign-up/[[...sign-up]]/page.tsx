import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
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
    desc: "Use the app, or key services via USSD  and WhatsApp banking.",
  },
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

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/80 via-[#0f172a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent" />

        {/* Logo */}
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center gap-2 z-10 group"
        >
          <Image
            src={LOGO_SRC}
            alt="Nawiri"
            width={140}
            height={32}
            priority
            className="h-6 w-auto rounded-lg bg-white/90 p-1 group-hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Brand copy */}
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

          {/* Onboarding steps */}
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

          {/* Regulatory & compliance */}
          <div className="pt-2 border-t border-white/15">
            <p className="text-[12px] text-white/55 leading-snug">
              CBK-licensed Digital Credit Provider · Kenya DPA (2019) aligned · Tiered KYC + biometric verification
            </p>
          </div>
        </div>
      </div>

      {/* ── Right panel: sign-up form ── */}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between px-5 py-4 border-b border-border">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={LOGO_SRC}
              alt="Nawiri"
              width={120}
              height={28}
              className="h-5 w-auto"
            />
          </Link>
          <Link
            href="/sign-in"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Have an account?{" "}
            <span className="text-primary font-medium">Sign in</span>
          </Link>
        </div>

        {/* Form area */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 sm:px-12 lg:px-16 py-10">
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

            <p className="mt-6 text-center text-[13px] text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="text-primary font-medium hover:underline underline-offset-2"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-5 border-t border-border">
          <div className="max-w-[400px] mx-auto flex flex-wrap gap-x-4 gap-y-1 justify-center text-[11px] text-muted-foreground">
            <span>© 2026 Nawiri</span>
            <Link href="/legal/privacy" className="hover:text-foreground transition-colors">Privacy policy</Link>
            <Link href="/legal/cookies" className="hover:text-foreground transition-colors">Cookie policy</Link>
            <Link href="/legal/terms" className="hover:text-foreground transition-colors">Terms of service</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
