"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AnimatedPageContent from "@/components/AnimatedPageContent"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-[#007ac3]/95">
      {/* Sticky header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20 space-y-10">
        <AnimatedPageContent className="space-y-10">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Terms &amp; Conditions</h1>
          <p className="mt-3 text-[#007ac3]/90">
            These Terms of Service (“Terms”) govern access to and use of the Alpha Forex Capital evaluation platform and
            related services (the “Services”). By accessing, registering for, or using the Services, you agree to be bound by
            these Terms.
          </p>
        </header>

        {/* Intro / Agreement */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Agreement to Terms</h2>
          <p className="text-[#007ac3]/90">
            Alpha Forex Capital (“Alpha Forex Capital”, “we”, “our”, or “us”) provides access to a proprietary trading
            evaluation and performance assessment platform. By accessing, registering for, or using the Services, you confirm
            that you have read, understood, and agree to be legally bound by these Terms of Service (“TOS”).
          </p>
        </section>

        {/* 1. Nature of Services */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">1. Nature of Services</h2>
          <div className="space-y-3 text-[#007ac3]/90">
            <p>
              <strong>1.1 Evaluation &amp; Simulated Trading Dashboard.</strong> The platform operates as a simulated trading
              dashboard used for trader evaluation, performance assessment, and skill development, consistent with standard
              practices within the proprietary trading industry.
            </p>
            <p>
              <strong>1.2 No Brokerage or Advisory Relationship.</strong> We are not a broker-dealer, financial advisor,
              investment manager, exchange, or deposit-taking institution.
            </p>
            <p>
              <strong>1.3 Educational &amp; Evaluative Purpose.</strong> The Services are intended for educational, evaluative,
              and skill-development purposes only.
            </p>
          </div>
        </section>

        {/* 2. Use of Services */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">2. Use of Services</h2>
          <div className="space-y-3 text-[#007ac3]/90">
            <p>
              <strong>2.1 Eligibility.</strong> You must be at least eighteen (18) years old or the age of majority in your jurisdiction.
            </p>
            <p>
              <strong>2.2 One Account per User.</strong> Only one account per individual is permitted.
            </p>
            <p>
              <strong>2.3 Non-Transferability.</strong> Accounts and access credentials are personal and non-transferable.
            </p>
          </div>
        </section>

        {/* 3. Payouts, Rewards & Certificates */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">3. Payouts, Rewards &amp; Certificates</h2>
          <div className="space-y-3 text-[#007ac3]/90">
            <p>
              <strong>3.1 No Guaranteed Outcomes.</strong> Any references to payouts, withdrawals, rewards, or funding opportunities are not guaranteed.
            </p>
            <p>
              <strong>3.2 Discretionary Determinations.</strong> All payouts, rewards, and certificates are issued at the sole discretion of the Company.
            </p>
            <p>
              <strong>3.3 No Automatic Entitlement.</strong> Performance results do not automatically entitle users to payouts or funding.
            </p>
            <p>
              <strong>3.4 Certificates.</strong> Certificates represent evaluation milestones only.
            </p>
          </div>
        </section>

        {/* 4. Fees & Payments */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">4. Fees &amp; Payments</h2>
          <div className="space-y-3 text-[#007ac3]/90">
            <p>
              <strong>4.1 Evaluation Fees.</strong> Fees must be paid in full prior to participation.
            </p>
            <p>
              <strong>4.2 No Refund Policy.</strong> All fees are final and non-refundable.
            </p>
            <p>
              <strong>4.3 Chargebacks.</strong> Unauthorized chargebacks may result in suspension and reporting.
            </p>
          </div>
        </section>

        {/* 5. Challenge Rules & Compliance */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">5. Challenge Rules &amp; Compliance</h2>
          <div className="space-y-3 text-[#007ac3]/90">
            <p>
              <strong>5.1 Challenge Parameters.</strong> Rules must be followed at all times.
            </p>
            <p>
              <strong>5.2 Prohibited Trading Practices.</strong> Certain strategies may be restricted or prohibited.
            </p>
            <p>
              <strong>5.3 Monitoring.</strong> Activity is logged and monitored.
            </p>
          </div>
        </section>

        {/* 6. Funded Accounts */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">6. Funded Accounts</h2>
          <div className="space-y-3 text-[#007ac3]/90">
            <p>
              <strong>6.1 No Guarantee.</strong> Completion of an evaluation does not guarantee funded access.
            </p>
            <p>
              <strong>6.2 Ongoing Conditions.</strong> All accounts remain subject to compliance review.
            </p>
            <p>
              <strong>6.3 Revocation.</strong> Access may be revoked at any time.
            </p>
          </div>
        </section>

        {/* 7. Intellectual Property */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">7. Intellectual Property</h2>
          <div className="space-y-3 text-[#007ac3]/90">
            <p>All platform content and materials are the property of Alpha Forex Capital.</p>
          </div>
        </section>

        {/* 8. Limitation of Liability */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">8. Limitation of Liability</h2>
          <div className="space-y-3 text-[#007ac3]/90">
            <p>
              Services are provided “as is.” Liability is limited to fees paid in the last six (6) months.
            </p>
          </div>
        </section>

        {/* 9. Termination */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">9. Termination</h2>
          <div className="space-y-3 text-[#007ac3]/90">
            <p>
              Access may be suspended or terminated without notice or refund.
            </p>
          </div>
        </section>

        {/* 10. Legal & Compliance */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">10. Legal &amp; Compliance</h2>
          <div className="space-y-3 text-[#007ac3]/90">
            <p>
              <strong>10.1 Governing Law.</strong> These Terms are governed by the laws of England and Wales.
            </p>
            <p>
              <strong>10.2 Dispute Resolution.</strong> The Company reserves the right to determine the forum and method of dispute
              resolution, including courts or arbitration, at its discretion.
            </p>
          </div>
        </section>

        {/* 11. Miscellaneous */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">11. Miscellaneous</h2>
          <div className="space-y-3 text-[#007ac3]/90">
            <p>These Terms constitute the entire agreement between you and Alpha Forex Capital.</p>
            <p>
              <strong>Contact:</strong>{" "}
              <a href="mailto:support@piptriontraders.com" className="underline text-[#007ac3]">
                support@piptriontraders.com
              </a>
            </p>
          </div>
        </section>

        <p className="text-xs text-[#007ac3]/70"></p>
        </AnimatedPageContent>
      </main>

      <Footer />
    </div>
  )
}
