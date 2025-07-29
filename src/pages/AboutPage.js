import { Card, CardContent } from "../components/ui/Card";
import { Users, Target, Heart, Award } from "lucide-react";
import team from "../image/team-engineers-working-server-farm-using-pcs-analyze-data.jpg"

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To reduce global food waste by empowering individuals with smart tracking and recipe suggestions.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Sustainability, simplicity, and helping families save money while protecting the environment.",
    },
    {
      icon: Users,
      title: "Our Community",
      description: "Over 10,000 users worldwide are already reducing waste and discovering new recipes daily.",
    },
    {
      icon: Award,
      title: "Our Impact",
      description: "Together, we've saved over 50,000 pounds of food and $2M in grocery costs this year.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">

      <main className="py-20">
        <div className="container px-4 mx-auto">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#333333]">
              About <span className="text-[#A3B18A]">Meal Mate</span>
            </h1>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
              We're on a mission to eliminate food waste, one kitchen at a time. Founded in 2023, Meal Mate helps
              families track their food inventory and discover delicious recipes using ingredients they already have.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#333333]">Our Story</h2>
              <div className="space-y-4 text-[#666666] leading-relaxed">
                <p>
                  Meal Mate was born from a simple frustration: watching good food go to waste while grocery bills kept
                  climbing. Our founders, Sarah and Mike, were tired of finding expired items in their fridge and wanted
                  a better way to manage their kitchen.
                </p>
                <p>
                  What started as a personal solution quickly grew into a platform that helps thousands of families
                  reduce waste, save money, and discover new favorite recipes. Today, we're proud to be part of the
                  solution to global food waste.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#A3B18A]/20 to-[#FFB703]/20 rounded-3xl p-8">
              <img
                src={team}
                alt="Meal Mate founders"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#A3B18A]/10 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-[#A3B18A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#333333]">{value.title}</h3>
                  <p className="text-[#666666] leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
};

export default AboutPage;
