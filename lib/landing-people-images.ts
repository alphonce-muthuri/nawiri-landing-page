/**
 * Landing imagery. Remote URLs use Unsplash; security art is a local asset (next/image optimizes it).
 */
import securityCyberArt from "../public/cyber-security-concept-digital-art.jpg";
import howItWorksHero from "../public/medium-shot-smiley-friends-sunset.jpg";

export const landingPeopleImages = {
  /** Cyber security digital art — `public/cyber-security-concept-digital-art.jpg` */
  securityBanking: securityCyberArt,
  /** African woman smiling at phone, Lagos — aCAxMbGlr2A (free Unsplash License) */
  appOnPhone:
    "https://images.unsplash.com/photo-1739271933163-8dcc7c8e8a3e?auto=format&fit=crop&w=1400&q=85",
  /** Friends using Nawiri on mobile — `public/medium-shot-smiley-friends-sunset.jpg` */
  howItWorks: howItWorksHero,
} as const;

/** Circular avatars for testimonial cards — Black African representation, free Unsplash License */
export const testimonialAvatars = {
  /** Black woman, white top, smiling headshot — WYE2UhXsU1Y */
  amina:
    "https://images.unsplash.com/photo-1611432579699-484f7990b127?auto=format&fit=crop&w=160&q=85",
  /** Black man, glasses, black shirt, portrait — _ObjhzjnMmc */
  david:
    "https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?auto=format&fit=crop&w=160&q=85",
  /** Black woman, yellow blazer, professional — PK_t0Lrh7MM */
  grace:
    "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?auto=format&fit=crop&w=160&q=85",
  /** Black man, white shirt, Lagos portrait — icu-D9rYM4w */
  peter:
    "https://images.unsplash.com/photo-1531901599143-df5010ab9438?auto=format&fit=crop&w=160&q=85",
  /** Black woman, afro, red background headshot — HyoTmwZQwWU */
  fatuma:
    "https://images.unsplash.com/photo-1709810529099-0ce6102692df?auto=format&fit=crop&w=160&q=85",
  /** Black man, white dress shirt, South Africa — uIvjLq_q5g8 */
  james:
    "https://images.unsplash.com/photo-1605602517387-ec78b947335e?auto=format&fit=crop&w=160&q=85",
} as const;
