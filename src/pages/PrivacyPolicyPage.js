import React from 'react'
import { Card, CardContent } from '../components/ui/Card'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">

      <main className="py-20">
        <div className="container px-4">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#333333]">
              Privacy <span className="text-[#A3B18A]">Policy</span>
            </h1>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-[#666666]">Last updated: December 2024</p>
          </div>

          {/* Privacy Policy Content */}
          <Card className="max-w-4xl mx-auto border-2 border-[#A3B18A]/20 shadow-lg">
            <CardContent className="p-12 space-y-8">

              {/* Section 1 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#333333]">Information We Collect</h2>
                <div className="space-y-3 text-[#666666] leading-relaxed">
                  <p><strong className="text-[#333333]">Account Information:</strong> When you create an account, we collect your name, email address, and password.</p>
                  <p><strong className="text-[#333333]">Food Inventory Data:</strong> Information about food items you add to your inventory, including names, expiry dates, and usage patterns.</p>
                  <p><strong className="text-[#333333]">Usage Data:</strong> How you interact with our app, including features used and time spent in the application.</p>
                  <p><strong className="text-[#333333]">Device Information:</strong> Basic device information such as browser type, operating system, and IP address for security purposes.</p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#333333]">How We Use Your Information</h2>
                <div className="space-y-3 text-[#666666] leading-relaxed">
                  <p>We use your information to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and improve our food management services</li>
                    <li>Send expiry notifications and recipe suggestions</li>
                    <li>Analyze usage patterns to enhance user experience</li>
                    <li>Communicate important updates about our service</li>
                    <li>Provide customer support when requested</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#333333]">Information Sharing</h2>
                <div className="space-y-3 text-[#666666] leading-relaxed">
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in these limited circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>With service providers who help us operate our platform (under strict confidentiality agreements)</li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#333333]">Data Security</h2>
                <div className="space-y-3 text-[#666666] leading-relaxed">
                  <p>We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.</p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#333333]">Your Rights</h2>
                <div className="space-y-3 text-[#666666] leading-relaxed">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and update your personal information</li>
                    <li>Delete your account and associated data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request a copy of your data</li>
                    <li>Restrict how we process your information</li>
                  </ul>
                </div>
              </section>

              {/* Section 6 */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#333333]">Contact Us</h2>
                <div className="space-y-3 text-[#666666] leading-relaxed">
                  <p>If you have questions about this Privacy Policy, please contact us at{' '}
                    <a href="mailto:privacy@mealmate.com" className="text-[#A3B18A] hover:underline">
                      privacy@mealmate.com
                    </a>
                  </p>
                </div>
              </section>

            </CardContent>
          </Card>
        </div>
      </main>

    </div>
  )
}
