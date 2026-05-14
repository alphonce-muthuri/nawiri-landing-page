import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { nawiriAppearance } from "@/lib/clerk-appearance";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nawiri - Digital Banking for East Africa",
  description:
    "Nawiri is your digital bank built for East Africa. Send money instantly, earn on your savings, invest, and pay bills - all from one powerful app. Join 500,000+ customers today.",
};

/** Matches real phone widths to desktop devtools; avoids accidental zoom/layout drift on iOS. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={nawiriAppearance}>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${inter.variable} h-full antialiased scroll-smooth overflow-x-hidden`}
      >
        <body className="min-h-full flex flex-col overflow-x-hidden">
          {children}
          <ScrollToTop />
        </body>
      </html>
    </ClerkProvider>
  );
}
