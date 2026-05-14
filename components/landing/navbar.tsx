"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/nawiri-dark-logo.png";

const navLinks = [
  { label: "Pillars", hash: "features" },
  { label: "How it works", hash: "how-it-works" },
  { label: "Security", hash: "security" },
  { label: "Stories", hash: "about" },
];

export function Navbar() {
  const { isSignedIn } = useAuth();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 pt-[env(safe-area-inset-top)]",
        scrolled
          ? "bg-white/98 backdrop-blur-md border-b border-border shadow-[0_1px_8px_oklch(0_0_0/0.06)]"
          : "bg-white/95 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto min-w-0 px-4 sm:px-6 flex items-center justify-between h-14 sm:h-[60px]">
        {/* Logo */}
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2 group">
          <Image
            src={LOGO_SRC}
            alt="Nawiri"
            width={120}
            height={28}
            priority
            className="h-6 w-auto group-hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={isHome ? `#${link.hash}` : `/#${link.hash}`}
              className="text-[13.5px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          {isSignedIn ? (
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                },
              }}
            />
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                className="text-[13.5px] h-8 px-3 text-muted-foreground hover:text-foreground"
                asChild
              >
                <Link href="/sign-in">Sign in</Link>
              </Button>
              <Button
                size="sm"
                className="text-[13.5px] h-8 px-4 bg-primary text-white hover:bg-primary/90 rounded-lg font-medium"
                asChild
              >
                <Link href="/sign-up">Get started</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-11 w-11 shrink-0 touch-manipulation" aria-label="Open menu">
              <Menu className="w-[18px] h-[18px]" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[260px] bg-white border-border px-6 pt-8">
            <SheetHeader className="sr-only">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setOpen(false)}>
              <Image
                src={LOGO_SRC}
                alt="Nawiri"
                width={120}
                height={28}
                className="h-6 w-auto"
              />
            </Link>
            <nav className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={isHome ? `#${link.hash}` : `/#${link.hash}`}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-border flex flex-col gap-2">
              {isSignedIn ? (
                <div className="flex items-center gap-3 px-1">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8",
                      },
                    }}
                  />
                  <span className="text-sm text-muted-foreground">My account</span>
                </div>
              ) : (
                <>
                  <Button variant="outline" className="w-full text-sm" asChild>
                    <Link href="/sign-in" onClick={() => setOpen(false)}>Sign in</Link>
                  </Button>
                  <Button className="w-full text-sm bg-primary text-white rounded-lg" asChild>
                    <Link href="/sign-up" onClick={() => setOpen(false)}>Get started</Link>
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
