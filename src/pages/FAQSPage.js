import { Button } from "../components/ui/Button"
import { Card, CardContent } from "../components/ui/Card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/Accordion"
import {Link} from 'react-router-dom';
export default function HelpCenterPage() {


  const faqs = [
    {
      question: "How do I add food items to my inventory?",
      answer:
        "You can add food items in three ways: 1) Scan the barcode using your device's camera, 2) Search for the item in our database, or 3) Manually enter the item details. The app will automatically suggest expiry dates for common items.",
    },
    {
      question: "Can I customize expiry date notifications?",
      answer:
        "Yes! Go to Settings > Notifications to customize when you receive alerts. You can set different notification times for different types of food (e.g., dairy products vs. canned goods) and choose between email, push notifications, or both.",
    },
    {
      question: "How does the recipe suggestion feature work?",
      answer:
        "Our recipe engine analyzes your current inventory and suggests recipes based on ingredients you have, especially those nearing expiry. You can filter suggestions by cooking time, difficulty level, and dietary preferences.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Absolutely. We use industry-standard encryption to protect your data. We never sell your personal information to third parties, and you can delete your account and all associated data at any time.",
    },
    {
      question: "Can I share my inventory with family members?",
      answer:
        "Yes! You can invite family members to join your household inventory. Each member can add items, mark them as used, and receive notifications. Go to Settings > Family Sharing to get started.",
    },
    {
      question: "What if I can't find a specific food item in the database?",
      answer:
        "If an item isn't in our database, you can add it manually with custom expiry dates. Our team regularly updates the database, and user-submitted items help us expand our coverage.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription anytime from Settings > Subscription. Your account will remain active until the end of your current billing period, and you'll still have access to basic features after cancellation.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes, you can export your inventory data, waste tracking statistics, and favorite recipes from Settings > Data Export. Data is provided in CSV format for easy use in other applications.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FAF9F6]">

      <main className="py-20">
        <div className="container px-4">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#333333]">
              Frequently <span className="text-[#A3B18A]">Asked Questions</span>
            </h1>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              Quick answers to the most common questions
            </p>
          </div>


          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">


            <Card className="border-2 border-[#A3B18A]/20 shadow-lg">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#A3B18A]/10">
                      <AccordionTrigger className="text-left text-[#333333] hover:text-[#A3B18A] font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#666666] leading-relaxed pt-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Contact Support */}
          <div className="text-center mt-20">
            <Card className="max-w-2xl mx-auto border-2 border-[#FFB703]/20 shadow-lg bg-gradient-to-br from-[#FFB703]/5 to-[#A3B18A]/5">
              <CardContent className="p-12 space-y-6">
                <h2 className="text-2xl font-bold text-[#333333]">Still Need Help?</h2>
                <p className="text-[#666666] leading-relaxed">
                  Can't find what you're looking for? Our support team is here to help you get the most out of Meal
                  Mate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-[#A3B18A] hover:bg-[#588157] text-white px-6 py-3">
                    <Link to='/contact'>
                      Contact Support
                    </Link>
                      </Button>
                  <Button
                    variant="outline"
                    className="border-[#A3B18A] text-[#A3B18A] hover:bg-[#A3B18A] hover:text-white px-6 py-3 bg-transparent"
                  >
                    <Link to='/contact'>
                    Send Feedback
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-[#666666]">Average response time: 2-4 hours during business hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

    </div>
  )
}
