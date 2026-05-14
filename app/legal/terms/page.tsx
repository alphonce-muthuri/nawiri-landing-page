import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of service - Nawiri",
  description:
    "Terms and conditions for using Nawiri digital banking services in East Africa.",
};

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-20 text-foreground">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">Terms of service</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: 24 March 2026</p>

      <div className="space-y-8 text-[15px] leading-relaxed text-foreground/95">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">1. Who we are</h2>
          <p className="text-muted-foreground">
            These Terms of Service (&quot;Terms&quot;) govern your use of websites, mobile applications, and related
            services (together, the &quot;Services&quot;) provided by Nawiri Financial Services Ltd
            (&quot;Nawiri&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company operating in Kenya and
            other markets where we offer Services. Nawiri is licensed by the Central Bank of Kenya (CBK) as indicated
            in our regulatory disclosures.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">2. Acceptance</h2>
          <p className="text-muted-foreground">
            By accessing or using our Services, opening an account, or continuing to use Nawiri after we notify you
            of changes to these Terms, you agree to be bound by these Terms and our Privacy Policy. If you do not
            agree, you must not use the Services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">3. Eligibility &amp; accounts</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>You must meet minimum age and identity requirements under applicable law and our onboarding process.</li>
            <li>
              You must provide accurate information and keep your credentials, devices, and contact details secure.
            </li>
            <li>
              Certain products (for example savings, investments, or credit) may have additional agreements or risk
              disclosures.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">4. Our Services</h2>
          <p className="text-muted-foreground">
            Nawiri may offer payments, deposits, savings, bill pay, cards, investments, lending, and other features as
            described in-app or on our website. Availability varies by country, product, and regulatory status. We may
            add, change, or discontinue features with notice where required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">5. Fees &amp; limits</h2>
          <p className="text-muted-foreground">
            Fees, FX spreads, interest rates, limits, and settlement times are disclosed before you complete a
            transaction or in our fee schedules. Taxes and third-party charges may apply.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">6. Prohibited use</h2>
          <p className="text-muted-foreground">
            You may not use Nawiri for unlawful activity, fraud, sanctions evasion, money laundering, terrorist
            financing, abusive behaviour toward our staff, or anything that compromises platform security or other
            users. We may monitor, block, or report activity as required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">7. Intellectual property</h2>
          <p className="text-muted-foreground">
            Nawiri and its licensors own all rights in the Services, branding, and content unless otherwise stated. You
            receive a limited, revocable licence to use the Services for personal or authorised business use in line with
            these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">8. Disclaimer & limitation of liability</h2>
          <p className="text-muted-foreground">
            To the fullest extent permitted by law, the Services are provided &quot;as is&quot; and we disclaim
            warranties not expressly stated. Our liability is limited as allowed by applicable law and may exclude
            indirect or consequential losses except where such exclusion is not permitted (including rights you may
            have as a consumer under Kenyan law).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">9. Suspension &amp; termination</h2>
          <p className="text-muted-foreground">
            We may suspend or close accounts where required for security, legal compliance, or breach of these Terms.
            You may close your account subject to settlement of outstanding obligations. Some provisions survive
            termination.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">10. Governing law &amp; disputes</h2>
          <p className="text-muted-foreground">
            These Terms are governed by the laws of Kenya unless another jurisdiction applies to a specific product.
            Courts in Kenya have non-exclusive jurisdiction unless mandatory consumer protections designate otherwise.
            You may also use our complaints process described on our Complaints page.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">11. Changes</h2>
          <p className="text-muted-foreground">
            We may update these Terms. We will post the new version and, where required, notify you in advance.
            Continued use after the effective date constitutes acceptance unless you close your account beforehand.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">12. Contact</h2>
          <p className="text-muted-foreground">
            Questions about these Terms:{" "}
            contact us through the in-app Help Centre or via the official contact details published during onboarding.
          </p>
        </section>
      </div>

      
    </article>
  );
}
