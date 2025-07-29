import { Card, CardContent } from "../components/ui/Card"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">

      <main className="py-20">
        <div className="container px-4">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#333333]">
              Terms of <span className="text-[#A3B18A]">Service</span>
            </h1>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              Please read these terms carefully before using Meal Mate. By using our service, you agree to these terms.
            </p>
            <p className="text-sm text-[#666666]">Last updated: December 2024</p>
          </div>

          {/* Terms Content */}
          <Card className="max-w-4xl mx-auto border-2 border-[#A3B18A]/20 shadow-lg">
            <CardContent className="p-12 space-y-8">
              {/* Sections start */}
              <Section
                title="Acceptance of Terms"
                content={[
                  "By accessing and using Meal Mate, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
                ]}
              />

              <Section
                title="Use License"
                content={[
                  "Permission is granted to temporarily use Meal Mate for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
                ]}
                listItems={[
                  "Modify or copy the materials",
                  "Use the materials for any commercial purpose or for any public display",
                  "Attempt to reverse engineer any software contained in Meal Mate",
                  "Remove any copyright or other proprietary notations from the materials",
                ]}
              />

              <Section
                title="User Accounts"
                content={[
                  "When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.",
                ]}
              />

              <Section
                title="Prohibited Uses"
                content={["You may not use our service:"]}
                listItems={[
                  "For any unlawful purpose or to solicit others to perform unlawful acts",
                  "To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances",
                  "To infringe upon or violate our intellectual property rights or the intellectual property rights of others",
                  "To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate",
                  "To submit false or misleading information",
                ]}
              />

              <Section
                title="Service Availability"
                content={[
                  "We strive to provide reliable service, but we cannot guarantee that our service will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the service.",
                ]}
              />

              <Section
                title="Disclaimer"
                content={[
                  "The information on this service is provided on an 'as is' basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions and terms related to our service.",
                ]}
              />

              <Section
                title="Limitations"
                content={[
                  "In no event shall Meal Mate or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Meal Mate, even if we have been notified orally or in writing of the possibility of such damage.",
                ]}
              />

              <Section
                title="Revisions and Errata"
                content={[
                  "We may revise these terms of service at any time without notice. By using this service, you are agreeing to be bound by the then current version of these terms of service.",
                ]}
              />

              <Section
                title="Contact Information"
                content={[
                  <>
                    If you have any questions about these Terms of Service, please contact us at{" "}
                    <a href="mailto:legal@mealmate.com" className="text-[#A3B18A] hover:underline">
                      legal@mealmate.com
                    </a>
                    .
                  </>,
                ]}
              />
              {/* Sections end */}
            </CardContent>
          </Card>
        </div>
      </main>

    </div>
  )
}

function Section({ title, content, listItems }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-[#333333]">{title}</h2>
      <div className="space-y-3 text-[#666666] leading-relaxed">
        {content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        {listItems && (
          <ul className="list-disc list-inside space-y-2 ml-4">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
