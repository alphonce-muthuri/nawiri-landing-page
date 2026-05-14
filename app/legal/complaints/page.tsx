import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complaints - Nawiri",
  description: "How to raise a complaint with Nawiri and what to expect from our process.",
};

export default function ComplaintsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-20 text-foreground">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">Complaints</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: 25 March 2026</p>

      <div className="space-y-8 text-[15px] leading-relaxed text-foreground/95">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Our commitment</h2>
          <p className="text-muted-foreground">
            We aim to resolve issues fairly and promptly. This page describes how to complain, what we will do, and
            where you may escalate if you remain dissatisfied. Timelines below are targets; statutory or regulatory
            deadlines may apply in specific cases.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">How to contact us</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground font-medium">In-app chat</strong> or Help Centre (fastest for most
              account issues).
            </li>
            <li>
              <strong className="text-foreground font-medium">WhatsApp banking</strong> or <strong className="text-foreground font-medium">USSD</strong>{" "}
              support flows (where available for your product/channel).
            </li>
            <li>
              <strong className="text-foreground font-medium">Email:</strong> use the official contact details shown in
              the in-app Help Centre.
            </li>
            <li>
              <strong className="text-foreground font-medium">Phone:</strong> use the official hotline details shown in
              the in-app Help Centre (where available).
            </li>
          </ul>
          <p className="text-muted-foreground">
            Include your name, contact details, account or transaction references, and a clear description of what went
            wrong and the outcome you want.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">What happens next</h2>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground font-medium">Acknowledgement</strong> - we aim to acknowledge within{" "}
              <strong className="text-foreground font-medium">3 business days</strong>.
            </li>
            <li>
              <strong className="text-foreground font-medium">Investigation</strong> - we review records, speak to
              teams involved, and may request more information from you.
            </li>
            <li>
              <strong className="text-foreground font-medium">Outcome</strong> - we explain our decision and any
              remediation (for example fee refund, transaction correction, or apology). Target final response within{" "}
              <strong className="text-foreground font-medium">15 business days</strong> for most banking complaints;
              complex cases may take longer, in which case we will tell you why and provide interim updates.
            </li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Escalation &amp; external bodies</h2>
          <p className="text-muted-foreground">
            If you are not satisfied with our final response, you may be entitled to refer the matter to the Central
            Bank of Kenya, a consumer protection body, an ombudsman, or the courts, depending on product and
            jurisdiction. We will provide applicable escalation information in the in-app Help Centre and in any
            product-specific disclosures where required.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Vulnerable customers</h2>
          <p className="text-muted-foreground">
            Tell us if you need reasonable support (for example accessibility, language, or health-related needs) so we
            can adapt how we handle your complaint.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Records</h2>
          <p className="text-muted-foreground">
            We keep complaint records in line with regulatory retention requirements and use anonymised learnings to
            improve our Services.
          </p>
        </section>
      </div>

    </article>
  );
}
