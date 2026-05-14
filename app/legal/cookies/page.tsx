import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie policy - Nawiri",
  description:
    "Cookies and similar technologies used by Nawiri, including categories, consent, and how to manage preferences.",
};

export default function CookiesPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-20 text-foreground">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">Cookie policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: 25 March 2026</p>

      <div className="space-y-8 text-[15px] leading-relaxed text-foreground/95">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">1. What are cookies?</h2>
          <p className="text-muted-foreground">
            Cookies are small files placed on your device when you visit our website. They help us keep the
            service secure, make pages work properly, and understand how features are used so we can improve them.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">2. Where cookies are used</h2>
          <p className="text-muted-foreground">
            We use cookies on our website and any web-based views embedded in the app. 
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">3. Cookie categories</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground font-medium">Essential cookies:</strong> required for authentication,
              session management, security, and basic site functionality.
            </li>
            <li>
              <strong className="text-foreground font-medium">Performance &amp; analytics cookies:</strong> help us measure
              performance and usage so we can improve reliability and features. Where consent is required, they are
              enabled only after you opt in.
            </li>
            <li>
              <strong className="text-foreground font-medium">Marketing cookies (if applicable):</strong> used to deliver and
              measure marketing communications (including remarketing). Where required by law, we seek consent before enabling.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">4. Consent and your choices</h2>
          <p className="text-muted-foreground">
            If you are presented with a cookie banner, you can choose which non-essential categories you allow. You can
            change your choices later using the cookie settings available on our website (or your browser/device settings).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">5. Managing cookies</h2>
          <p className="text-muted-foreground">
            Most browsers let you control cookies through their settings. You can typically block cookies, delete existing
            cookies, or disable third-party cookies. If you disable cookies, some parts of the website may not work as intended.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">6. Third-party cookies</h2>
          <p className="text-muted-foreground">
            Some cookies may be set by trusted third parties (for example, analytics or advertising providers) on our website.
            We aim to use reputable providers and apply appropriate safeguards. If a category is optional, it should only be enabled after consent where required.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">7. How long cookies last</h2>
          <p className="text-muted-foreground">
            Cookies may be temporary (session cookies) or persistent (stored for longer periods). We keep cookies only as long as needed for the purposes described in this policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">8. International transfers</h2>
          <p className="text-muted-foreground">
            If personal data associated with cookies is transferred outside your country, we use safeguards where required by applicable law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">9. Changes &amp; contact</h2>
          <p className="text-muted-foreground">
            We may update this Cookie Policy from time to time. If we make material changes, we will update the “Last updated” date.
            Questions can be directed to our privacy/contact details shown in the Privacy Policy.
          </p>
        </section>
      </div>
    </article>
  );
}

