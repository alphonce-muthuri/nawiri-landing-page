import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Coming soon - Nawiri",
  description: "This page is coming soon.",
};

export default function ComingSoonPage() {
  return (
    <>
      <Navbar />
      <main className="min-w-0 flex-1 pt-[calc(3.5rem+env(safe-area-inset-top))] sm:pt-[calc(60px+env(safe-area-inset-top))]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
            Coming soon
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            We&apos;re still building this
          </h1>
          <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
            This page isn&apos;t ready yet. Check back soon — or head back home.
          </p>
          <Button asChild className="bg-primary text-white hover:bg-primary/90 rounded-lg h-10 px-6">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
