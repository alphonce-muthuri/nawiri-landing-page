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

        {/* Gradient overlay - keeps text legible */}
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

          {/* Trust list */}
          <ul className="space-y-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-white/60">
                <ShieldCheck className="w-3.5 h-3.5 text-white/50 shrink-0" strokeWidth={2} />
                {point}
              </li>
            ))}
          </ul>

          {/* Stats row */}
          <div className="flex items-center gap-6 pt-2 border-t border-white/15">
            {[
              { value: "~5 min", label: "account opening" },
              { value: "< 2 min", label: "AI loan approval" },
              { value: "3% fees", label: "remittance transfers" },
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
            href="/sign-up"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            No account?{" "}
            <span className="text-primary font-medium">Sign up</span>
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

            <SignIn appearance={nawiriAppearance} />

            <p className="mt-6 text-center text-[13px] text-muted-foreground">
              No account yet?{" "}
              <Link
                href="/sign-up"
                className="text-primary font-medium hover:underline underline-offset-2"
              >
                Create one free
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
