// Clerk appearance tuned to match the Nawiri landing page's light theme.
// Primary ≈ hex approximation of oklch(0.46 0.22 254) used in globals.css
export const nawiriAppearance = {
  general: {
    color: "#1e4fd8",          // primary blue (matches --primary oklch(0.46 0.22 254))
    backgroundColor: "#ffffff",
    fontColor: "#0f172a",      // slate-900
    borderRadius: "0.5em",
  },
  accounts: {
    backgroundColor: "#f8fafc", // slate-50 card interior
  },
  buttons: {
    fontColor: "#ffffff",
  },
} as const;
