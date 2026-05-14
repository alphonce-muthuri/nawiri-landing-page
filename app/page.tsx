import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { SecurityTrust } from "@/components/landing/security-trust";
import { Testimonials } from "@/components/landing/testimonials";
import { AppCta } from "@/components/landing/app-cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-w-0 flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <SecurityTrust />
        <Testimonials />
        <AppCta />
      </main>
      <Footer />
    </>
  );
}
