"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AnimatedPageContent from "@/components/AnimatedPageContent"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen mt-28 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-[#007ac3]/95">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <AnimatedPageContent>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Privacy <span className="text-[#007ac3]">Policy</span>
        </h1>

        <p className="mb-8 text-[#007ac3]/90 leading-relaxed">
          Alpha Forex Capital (Alpha Forex Capital, we, our, or us) is committed to protecting your privacy. This Privacy
          Policy describes how we collect, use, disclose, and protect your personal information when you visit our website or
          use our services.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p className="mb-2">We may collect the following categories of information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Personal Information:</strong> Full name, email address, phone (optional), country, IP, billing details.</li>
              <li><strong>Account & Trading Data:</strong> Username, login activity, simulation results, platform usage.</li>
              <li><strong>Technical Data:</strong> Browser, device ID, operating system, IP/geolocation, cookies & analytics data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and manage services, challenges, and simulations</li>
              <li>Process payments and issue access credentials</li>
              <li>Send confirmations and service updates</li>
              <li>Analyze usage for improvements</li>
              <li>Prevent fraud or abuse</li>
              <li>Comply with laws and enforce Terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Cookies & Tracking</h2>
            <p>
              We use cookies, analytics, and tracking tools to monitor performance, personalize 
              your experience, and collect usage stats. You can manage cookies via browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Data Sharing</h2>
            <p>
              We don’t sell or rent data. Sharing is limited to payment processors, analytics, 
              email providers, partners, or authorities if legally required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. International Transfers</h2>
            <p>
              Your data may be processed outside your country. Safeguards (like EU SCCs) are applied 
              where required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Data Retention</h2>
            <p>
              We keep your data as long as needed for services, compliance, or fraud prevention. 
              You may request deletion unless retention is legally required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p>
              Depending on your location, you may request access, correction, deletion, portability, 
              or withdraw consent. Contact us at{" "}
              <a href="mailto:support@piptriontraders.com" className="text-[#007ac3] underline">
                support@piptriontraders.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Children’s Privacy</h2>
            <p>
              Our services are not intended for under-18s. We do not knowingly collect data from minors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Security</h2>
            <p>
              We implement reasonable technical safeguards, but no online method is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">10. Changes</h2>
            <p>
              We may update this policy at any time. Continued use means acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">11. Contact</h2>
            <p>
              If you have questions, contact us at{" "}
              <a href="mailto:support@piptriontraders.com" className="text-[#007ac3] underline">
                support@piptriontraders.com
              </a>.
            </p>
          </section>
        </div>
        </AnimatedPageContent>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
