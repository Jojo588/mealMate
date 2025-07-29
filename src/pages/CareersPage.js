import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Users, Heart, Zap, Target } from "lucide-react";

const CareersPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Sustainability First",
      description: "We're passionate about reducing food waste and protecting our planet for future generations.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "We believe the best ideas come from diverse teams working together towards a common goal.",
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "We're always looking for new ways to solve problems and improve the user experience.",
    },
    {
      icon: Target,
      title: "Impact Focused",
      description: "Every feature we build and decision we make is guided by our mission to reduce food waste.",
    },
  ];

  const benefits = [
    "Competitive salary and equity",
    "Health, dental, and vision insurance",
    "Flexible work arrangements",
    "Professional development budget",
    "Unlimited PTO policy",
    "Home office setup allowance",
    "Team retreats and events",
    "Wellness and fitness benefits",
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">

      <main className="py-20">
        <div className="container px-4">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#333333]">
              Join Our <span className="text-[#A3B18A]">Mission</span>
            </h1>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              Help us build the future of food management and make a real impact on reducing global food waste.
              We're looking for passionate people who want to make a difference.
            </p>
          </div>

          {/* Company Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#333333] mb-4">Our Values</h2>
              <p className="text-xl text-[#666666]">What drives us every day</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#A3B18A]/10 rounded-full flex items-center justify-center mx-auto">
                      <value.icon className="h-8 w-8 text-[#A3B18A]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#333333]">{value.title}</h3>
                    <p className="text-[#666666] text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>


          {/* Benefits & Perks */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#333333] mb-6">Benefits & Perks</h2>
              <p className="text-[#666666] mb-8 leading-relaxed">
                We believe in taking care of our team members so they can do their best work and maintain a healthy work-life balance.
              </p>
              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#A3B18A] rounded-full flex-shrink-0"></div>
                    <span className="text-[#666666]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-2 border-[#FFB703]/20 shadow-lg bg-gradient-to-br from-[#FFB703]/5 to-[#A3B18A]/5">
              <CardHeader>
                <CardTitle className="text-2xl text-[#333333]">Don't See a Perfect Fit?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-[#666666] leading-relaxed">
                  We're always looking for talented people who share our passion for reducing food waste. Send us your resume and tell us how you'd like to contribute to our mission.
                </p>
                <div className="space-y-4">
                  <button className="w-full bg-[#A3B18A] duration-300 hover:bg-[#588157] text-white py-6 text-lg">
                    Send General Application
                  </button>
                  <div className="text-center">
                    <p className="text-sm text-[#666666]">
                      Or email us directly at{" "}
                      <a href="mailto:careers@mealmate.com" className="text-[#A3B18A] hover:underline">
                        careers@mealmate.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

    </div>
  );
};

export default CareersPage;
