import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licences & regulatory disclosures - Nawiri",
  description: "Regulatory licences, deposit insurance, and key disclosures for Nawiri.",
};

export default function LicencesPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-20 text-foreground">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">Licences &amp; regulatory disclosures</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: 25 March 2026</p>

      <div className="space-y-8 text-[15px] leading-relaxed text-foreground/95">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Regulatory status (Kenya)</h2>
          <p className="text-muted-foreground">
            Nawiri Financial Services Ltd is licensed by the Central Bank of Kenya (CBK) as a{" "}
            <strong className="text-foreground font-medium">Digital Credit Provider (DCP)</strong>. Our Services are
            designed to support compliant onboarding and operations, including tiered KYC and screening controls.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Deposit protection</h2>
          <p className="text-muted-foreground">
            Where any product includes deposit or wallet balances that are eligible for third-party protection or scheme
            coverage, we will disclose that coverage and applicable limits in the relevant in-app product terms and
            statements. Coverage and eligibility can vary by product structure and partner arrangements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Other markets</h2>
          <p className="text-muted-foreground">
            Our primary market is Kenya. Any future expansion to other jurisdictions will be offered only where the
            necessary local regulatory approvals and/or partnerships are in place, with clear country-specific
            disclosures at onboarding.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Company registration</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Registered name: Nawiri Financial Services Ltd</li>
            <li>Jurisdiction: Kenya</li>
            
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Risks &amp; product disclosures</h2>
          <p className="text-muted-foreground">
            Investment, lending, FX, and card products carry specific risks (credit, market, operational, currency).
            Product factsheets, KIDs, and terms made available in-app at point of sale form part of your contractual
            relationship and may override general website wording where they conflict.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Third-party providers</h2>
          <p className="text-muted-foreground">
            Nawiri may rely on card schemes, telco wallets, clearing systems, and technology vendors. Their terms and
            network rules may apply to your use of those rails.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Contact</h2>
          <p className="text-muted-foreground">
            Regulatory correspondence:{" "}
            use the official contact details published during onboarding or in the in-app Help Centre.
          </p>
        </section>
      </div>

      <p className="mt-12 text-xs text-muted-foreground leading-relaxed border-t border-border pt-8">
        This page provides high-level regulatory and disclosure information. Product-specific terms and disclosures
        shown in-app at the point of use form part of your relationship with Nawiri and may include additional details.
      </p>
    </article>
  );
}
