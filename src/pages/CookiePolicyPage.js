import React from "react"
import { Card, CardContent } from "../components/ui/Card"
import { Button } from "../components/ui/Button"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <main className="py-20">
        <div className="container px-4">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#333333]">
              Cookie <span className="text-[#A3B18A]">Policy</span>
            </h1>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              Learn about how we use cookies and similar technologies to improve your experience on Meal Mate.
            </p>
            <p className="text-sm text-[#666666]">Last updated: December 2024</p>
          </div>

          {/* Cookie Policy Content */}
          <Card className="max-w-4xl mx-auto border-2 border-[#A3B18A]/20 shadow-lg">
            <CardContent className="p-12 space-y-8">
              {/* Sections below... */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#333333]">What Are Cookies?</h2>
                <div className="space-y-3 text-[#666666] leading-relaxed">
                  <p>
                    Cookies are small text files that are stored on your computer or mobile device when you visit a
                    website. They help us provide you with a better experience by remembering your preferences and
                    improving our service.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#333333]">How We Use Cookies</h2>
                <div className="space-y-3 text-[#666666] leading-relaxed">
                  <p>We use cookies for several purposes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-[#333333]">Essential Cookies:</strong> Required for the website to
                      function properly, including login and security features
                    </li>
                    <li>
                      <strong className="text-[#333333]">Preference Cookies:</strong> Remember your settings and
                      preferences for a personalized experience
                    </li>
                    <li>
                      <strong className="text-[#333333]">Analytics Cookies:</strong> Help us understand how you use our
                      service to improve functionality
                    </li>
                    <li>
                      <strong className="text-[#333333]">Marketing Cookies:</strong> Used to deliver relevant
                      advertisements and track campaign effectiveness
                    </li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#333333]">Types of Cookies We Use</h2>
                <div className="space-y-6 text-[#666666] leading-relaxed">
                  <div className="bg-[#A3B18A]/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#333333] mb-2">Strictly Necessary Cookies</h3>
                    <p>
                      These cookies are essential for you to browse the website and use its features. Without these
                      cookies, services you have asked for cannot be provided.
                    </p>
                  </div>

                  <div className="bg-[#FFB703]/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#333333] mb-2">Performance Cookies</h3>
                    <p>
                      These cookies collect information about how you use our website, such as which pages you visit
                      most often. This data helps us optimize our website's performance.
                    </p>
                  </div>

                  <div className="bg-[#A3B18A]/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#333333] mb-2">Functionality Cookies</h3>
                    <p>
                      These cookies allow the website to remember choices you make and provide enhanced, more personal
                      features.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#333333]">Managing Your Cookie Preferences</h2>
                <div className="space-y-3 text-[#666666] leading-relaxed">
                  <p>
                    You can control and manage cookies in various ways. Please note that removing or blocking cookies
                    can impact your user experience and parts of our website may no longer be fully accessible.
                  </p>
                  <p>Most web browsers allow you to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>View what cookies are stored on your device and delete them individually</li>
                    <li>Block third-party cookies</li>
                    <li>Block cookies from particular sites</li>
                    <li>Block all cookies from being set</li>
                    <li>Delete all cookies when you close your browser</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#333333]">Third-Party Cookies</h2>
                <div className="space-y-3 text-[#666666] leading-relaxed">
                  <p>
                    We may use third-party services that set cookies on your device. These include analytics services
                    like Google Analytics and social media platforms. These third parties have their own privacy
                    policies and cookie policies.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#333333]">Updates to This Policy</h2>
                <div className="space-y-3 text-[#666666] leading-relaxed">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                    operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about
                    our use of cookies.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#333333]">Contact Us</h2>
                <div className="space-y-3 text-[#666666] leading-relaxed">
                  <p>
                    If you have any questions about our use of cookies, please contact us at{" "}
                    <a href="mailto:privacy@mealmate.com" className="text-[#A3B18A] hover:underline">
                      privacy@mealmate.com
                    </a>
                  </p>
                </div>
              </section>

              {/* Cookie Preferences Button */}
              <div className="bg-gradient-to-br from-[#A3B18A]/10 to-[#FFB703]/10 p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-[#333333] mb-4">Manage Your Cookie Preferences</h3>
                <p className="text-[#666666] mb-6">
                  You can update your cookie preferences at any time by clicking the button below.
                </p>
                <Button className="bg-[#A3B18A] hover:bg-[#588157] text-white px-8 py-3">
                  Cookie Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

    </div>
  )
}
