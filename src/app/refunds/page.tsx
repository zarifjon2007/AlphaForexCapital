"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AnimatedPageContent from "@/components/AnimatedPageContent"

export default function RefundsPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-[#007ac3]/95">
      {/* Sticky Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <AnimatedPageContent>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Refunds <span className="text-[#007ac3]">Policy</span>
        </h1>

        <p className="mb-8 text-[#007ac3]/90 leading-relaxed">
          This Refunds Policy governs purchases made from Alpha Forex Capital’s proprietary trading simulation and evaluation
          platform.
        </p>

        {/* 1. All Sales Are Final */}
        <section className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold text-white">1. All Sales Are Final</h2>
          <p>
            All purchases—including trading challenges, evaluations, simulation
            accounts, upgrades, and subscriptions—are final and non-refundable,
            regardless of whether the challenge was started, performance outcomes,
            disqualification or rule violations, technical issues on your device or
            third-party tools, or changes in personal circumstances.
          </p>
          <p className="italic">Once a purchase is completed, you waive any right to request a refund.</p>
        </section>

        {/* 2. No Right of Withdrawal */}
        <section className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold text-white">2. No Right of Withdrawal</h2>
          <p>
            By purchasing and beginning access to the simulation or dashboard, you
            consent to immediate service delivery and waive any statutory cooling-off
            period (e.g., EU 14-day right of withdrawal). If you begin using our
            services (including logging in or placing a trade), you forfeit any right
            to cancellation or refund.
          </p>
        </section>

        {/* 3. Chargebacks & Payment Disputes */}
        <section className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold text-white">3. Chargebacks &amp; Payment Disputes</h2>
          <p>
            Initiating a chargeback or payment dispute without contacting us first
            violates our Terms and this policy. Unauthorized chargebacks may result
            in immediate account termination, reporting to fraud-prevention
            databases, and possible legal action for deliberate fraud or misuse.
          </p>
        </section>

        {/* 4. Duplicate Payments */}
        <section className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold text-white">4. Duplicate Payments</h2>
          <p>
            If you believe you were charged multiple times for the same product,
            contact us within 7 calendar days at{" "}
            <a href="mailto:support@piptriontraders.com" className="underline text-[#007ac3]">
              support@piptriontraders.com
            </a>{" "}
            with your full name, email, purchase date, and payment method. Verified
            duplicates will be refunded.
          </p>
        </section>

        {/* 5. Discretionary Exceptions */}
        <section className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold text-white">5. Discretionary Exceptions</h2>
          <p>
            While our policy is strictly no-refund, we may, at our sole discretion,
            consider refunds in rare cases such as proven duplicate purchases,
            accidental charges reported immediately (within 24 hours, no usage), or
            platform errors entirely caused by us. These exceptions are not
            guaranteed. If granted, refunds will be issued to the original payment
            method.
          </p>
        </section>

        {/* 6. Policy Acceptance */}
        <section className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold text-white">6. Policy Acceptance</h2>
          <p>
            By completing a purchase on our site or participating in any program,
            you confirm that you have read and understood this Refunds Policy, agree
            not to dispute charges under the terms above, and are legally bound by
            this agreement.
          </p>
        </section>

        {/* 7. Contact */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">7. Contact</h2>
          <p>
            For billing inquiries or exceptional cases, contact:{" "}
            <a href="mailto:support@piptriontraders.com" className="underline text-[#007ac3]">
              support@piptriontraders.com
            </a>
            .
          </p>
        </section>
        </AnimatedPageContent>
      </main>

      <Footer />
    </div>
  )
}



SUPABASE_URL=https://kstochbfbxqlacbavkdl.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdG9jaGJmYnhxbGFjYmF2a2RsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzIyODI5OCwiZXhwIjoyMDg4ODA0Mjk4fQ.1lV7AE4ZDGiVspN6BKo5HHkK9iiwWYEDfWsUYRW7H3g