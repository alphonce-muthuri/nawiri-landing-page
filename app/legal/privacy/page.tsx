import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy - Nawiri",
  description:
    "How Nawiri collects, uses, and protects personal data across core banking, investments, remittances, micro-tools, and commerce.",
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-20 text-foreground">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">Privacy policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: 25 March 2026</p>

      <div className="space-y-8 text-[15px] leading-relaxed text-foreground/95">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">1. Introduction</h2>
          <p className="text-muted-foreground">
            Nawiri Financial Services Ltd (&quot;Nawiri&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy.
            This Privacy Policy explains how we collect, use, store, and share personal data when you use our website,
            mobile app(s), and banking services (collectively, the &quot;Services&quot;).
            The Services include core banking, savings and investments, remittances, Kadogo micro-finance tools, and an
            integrated digital commerce &amp; trade experience, accessed through the app
            It should be read together with our Terms of Service and any product-specific notices shown during onboarding.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">2. Data controller</h2>
          <p className="text-muted-foreground">
            The data controller responsible for your personal data is Nawiri Financial Services Ltd, Kenya, unless a
            separate entity in your country acts as controller for local Services (as stated at onboarding).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">3. Data we collect</h2>
          <p className="text-muted-foreground">Depending on how you use Nawiri, we may process:</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground font-medium">Identity &amp; KYC:</strong> name, date of birth, ID or
              passport numbers, photos, biometric verification outputs, proof of address, PEP/sanctions screening results.
            </li>
            <li>
              <strong className="text-foreground font-medium">Contact &amp; account:</strong> phone, email, device
              identifiers, account numbers, transaction metadata, messages to support.
            </li>
            <li>
              <strong className="text-foreground font-medium">Banking &amp; product activity:</strong> deposits, withdrawals, transfers and
              remittances, bill payments, savings contributions, investment subscriptions/redemptions, and lending/loan application details
              (including decisions and supporting information where permitted).
            </li>
            <li>
              <strong className="text-foreground font-medium">Commerce &amp; trade activity:</strong> orders and trade/merchant interactions,
              delivery/shipping details, and logistics or service-related information used to fulfil requests and prevent fraud.
            </li>
            <li>
              <strong className="text-foreground font-medium">Technical &amp; security:</strong> IP address, app logs,
              cookies (on our website and any in-app web views), crash reports, device/browser identifiers, and security signals.
            </li>
            <li>
              <strong className="text-foreground font-medium">Marketing (where permitted):</strong> preferences,
              campaign engagement, referral information.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">4. How we use data</h2>
          <p className="text-muted-foreground">We use personal data to:</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Provide, secure, and operate the Services (authentication, account administration, and customer support).</li>
            <li>Prevent fraud, detect and mitigate security threats, and improve reliability and performance.</li>
            <li>Onboard you compliantly (tiered KYC, biometric verification where required, and screening checks).</li>
            <li>Underwrite and administer banking products (including AI/ML credit scoring and lending decisions where permitted).</li>
            <li>Deliver remittances and enable related repayment and settlement flows where applicable.</li>
            <li>Operate investments and wealth tools, including verification steps and transaction execution through trusted partners.</li>
            <li>Run Kadogo micro-finance tools and insurance-like products (where offered), including underwriting and servicing.</li>
            <li>Fulfil commerce, logistics, and trade-related requests and manage merchant/customer interactions.</li>
            <li>Meet legal and regulatory obligations (AML/CFT, CBK reporting, tax, and responses to lawful requests).</li>
            <li>Communicate about your account, service updates, and (with consent where required) marketing.</li>
            <li>Conduct analytics, modelling, and product development using aggregated or de-identified data where possible.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">5. Legal bases</h2>
          <p className="text-muted-foreground">
            Where applicable data-protection law requires a &quot;legal basis&quot;, we rely on contract performance,
            legal obligation, legitimate interests (balanced against your rights), and consent for optional processing
            such as certain marketing or non-essential cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">6. Sharing &amp; processors</h2>
          <p className="text-muted-foreground">
            We may share personal data with trusted processors and partners who help us run the Services, including:
            cloud hosting providers, messaging/notification providers, payment and settlement partners, mobile network operators (MNOs),
            identity verification and biometric KYC service providers, and risk/compliance vendors (including credit bureaus and screening providers).
            For certain products, we may also use verification or execution partners needed to complete transactions and services
            (for example, land verification or pension/investment administration partners), and we share data with regulators
            when required by law.
            We use appropriate data-processing agreements and technical safeguards appropriate to the sensitivity of banking data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">7. International transfers</h2>
          <p className="text-muted-foreground">
            If personal data is transferred outside your country, we implement safeguards such as standard contractual
            clauses or equivalent mechanisms where required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">8. Retention</h2>
          <p className="text-muted-foreground">
            We keep data only as long as needed for the purposes above, including statutory retention for financial and
            AML records, then delete or anonymise it subject to legal holds.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">9. Your rights</h2>
          <p className="text-muted-foreground">
            Depending on applicable law, you may have rights to access, rectify, erase, restrict, or object to certain
            processing, and to lodge a complaint with a supervisory authority. Banking and AML rules may limit some
            requests. Contact us using the details below to exercise rights.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">10. Cookies &amp; similar technologies</h2>
          <p className="text-muted-foreground">
            We use cookies and similar technologies (such as web beacons and local storage) to run and protect our website
            and to improve the Services. Cookies may be set by us or by trusted third parties.
          </p>
          <p className="text-muted-foreground">
            Depending on the features you use, cookies may fall into the following categories:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground font-medium">Essential cookies:</strong> needed for authentication, session management,
              security, and core site functionality. These are used to keep your experience safe and consistent.
            </li>
            <li>
              <strong className="text-foreground font-medium">Performance &amp; analytics cookies:</strong> help us understand how users
              interact with the Services (for example, page performance and feature usage) so we can improve them.
              Where consent is required, these cookies are enabled only after you opt in.
            </li>
            <li>
              <strong className="text-foreground font-medium">Marketing cookies (if applicable):</strong> used to deliver and measure
              marketing communications and retargeting. Where required by law, we seek your consent before enabling these.
            </li>
          </ul>
          <p className="text-muted-foreground">
            You can manage cookie preferences through the cookie banner on our website and (where supported) your browser/device settings.
            If you do not allow certain non-essential cookies, some parts of the website may be less functional.
            Note: interactions via USSD and WhatsApp banking generally do not rely on web cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">11. Security</h2>
          <p className="text-muted-foreground">
            We implement administrative, technical, and physical measures designed to protect personal data. No method
            of transmission over the Internet is completely secure; please protect your devices and report suspicious
            activity promptly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">12. Children</h2>
          <p className="text-muted-foreground">
            Our Services are not directed at children under the age required to open a financial account in your
            jurisdiction. We do not knowingly collect their personal data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">13. Changes &amp; contact</h2>
          <p className="text-muted-foreground">
            We may update this policy and will post the new version with an updated date. For privacy questions or
            requests: contact us through the in-app Help Centre or via the official contact details published during
            onboarding. You may also contact your Data Protection Officer once appointed (details will be published
            here).
          </p>
        </section>
      </div>

      <p className="mt-12 text-xs text-muted-foreground leading-relaxed border-t border-border pt-8">
        This Privacy Policy reflects our current practices and may change as our Services evolve.
        For Kenya data protection related enquiries, please contact us using the details below.
        This document is not legal advice.
      </p>
    </article>
  );
}
