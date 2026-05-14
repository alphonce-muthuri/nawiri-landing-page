"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed z-50 right-4 sm:right-6 bottom-4 sm:bottom-6",
        "h-10 w-10 rounded-full",
        "bg-primary text-white shadow-[0_10px_30px_oklch(0_0_0/0.20)]",
        "hover:bg-primary/90 active:scale-95 transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2",
        "ring-offset-background",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      )}
    >
      <ArrowUp className="w-4 h-4 mx-auto" strokeWidth={2.25} />
    </button>
  );
}

