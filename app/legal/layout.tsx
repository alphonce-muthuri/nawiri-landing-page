import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-w-0 flex-1 pt-[calc(3.5rem+env(safe-area-inset-top))] sm:pt-[calc(60px+env(safe-area-inset-top))]">
        {children}
      </main>
      <Footer />
    </>
  );
}
