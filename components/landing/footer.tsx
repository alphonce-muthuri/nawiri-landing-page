import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

const LOGO_SRC = "/nawiri-dark-logo.png";

const footerColumns: {
  title: string;
  links: { label: string; href: string }[];
}[] = [
  {
    title: "Products",
    links: [
      { label: "Core Banking", href: "/#features" },
      { label: "Investment Arm", href: "/#features" },
      { label: "Remittances", href: "/#features" },
      { label: "Kadogo Economy", href: "/#features" },
      { label: "E‑Commerce & Trade", href: "/#features" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/#about" },
      { label: "Careers", href: "/coming-soon" },
      { label: "Press", href: "/coming-soon" },
      { label: "Blog", href: "/coming-soon" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Centre", href: "/coming-soon" },
      { label: "Contact us", href: "/coming-soon" },
      { label: "System status", href: "/coming-soon" },
      { label: "Security", href: "/#security" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of service", href: "/legal/terms" },
      { label: "Privacy policy", href: "/legal/privacy" },
      { label: "Cookie policy", href: "/legal/cookies" },
      { label: "Licences", href: "/legal/licences" },
      { label: "Complaints", href: "/legal/complaints" },
    ],
  },
];

const socials = [
  {
    label: "X",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.733-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="min-w-0 border-t border-border overflow-x-hidden">
      {/* Pre-footer CTA */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto min-w-0 px-4 sm:px-6 py-8 sm:py-10">
          <div className="flex min-w-0 flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-5">
            <div className="min-w-0">
              <h3 className="text-[17px] font-semibold tracking-tight mb-1">
                Ready to bank smarter?
              </h3>
              <p className="text-sm text-muted-foreground">
                Open an account in minutes and start with the pillar that matters most to you.
              </p>
            </div>
            <Button
              className="w-full sm:w-auto self-stretch sm:self-auto bg-primary text-white hover:bg-primary/90 rounded-lg text-sm h-11 sm:h-10 px-5 shrink-0 group shadow-[0_1px_3px_#10275d40]"
              asChild
            >
              <Link href="/sign-up">
                Open an account
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto min-w-0 px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid min-w-0 grid-cols-2 sm:grid-cols-3 lg:grid-cols-[180px_1fr_1fr_1fr_1fr] gap-x-5 gap-y-7 sm:gap-8 mb-7 sm:mb-10">
          {/* Brand */}
          <div className="col-span-2 min-w-0 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-3 group">
              <Image
                src={LOGO_SRC}
                alt="Nawiri"
                width={140}
                height={32}
                className="h-7 w-auto group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-[12.5px] text-muted-foreground leading-relaxed mb-5 max-w-[220px] sm:max-w-[160px]">
              Five pillars of financial inclusion & empowerment - in one ecosystem.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className="min-w-0">
              <p className="text-xs font-semibold mb-4 tracking-wide">{column.title}</p>
              <ul className="space-y-2.5">
                {column.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[12.5px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-[11.5px] text-muted-foreground max-w-lg min-w-0 leading-relaxed break-words">
            © 2026 Nawiri. CBK-licensed Digital Credit Provider · Kenya DPA (2019) aligned.
          </p>
          <div className="text-[11.5px] text-muted-foreground">
            Support:{" "}
            <Link href="/legal/complaints" className="hover:underline underline-offset-2">
              Complaints
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
