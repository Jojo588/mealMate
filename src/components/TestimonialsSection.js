import React from "react"
import { Card, CardContent } from "../components/ui/Card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/Avatar"
import { Star } from "lucide-react"

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home cook",
      avatar: "/placeholder.svg",
      content:
        "Meal Mate has completely changed how I manage my kitchen. I've reduced food waste by 80% and discovered so many new recipes!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Student",
      avatar: "/placeholder.svg",
      content:
        "As a busy student, this app helps me make the most of my groceries. The expiry alerts are a lifesaver, and I love the recipe suggestions.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Working mom",
      avatar: "/placeholder.svg",
      content:
        "Finally, an app that helps me plan meals around what I already have. My family loves trying the new recipes, and we're saving money too!",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-[#FAF9F6]">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#333333]">
            What Our <span className="text-[#A3B18A]">Users Say</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Join thousands of satisfied users who are reducing food waste and saving money.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FFB703] text-[#FFB703]" />
                  ))}
                </div>

                <blockquote className="text-[#666666] leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-[#91c439] text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-[#333333]">{testimonial.name}</p>
                    <p className="text-sm text-[#666666]">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection;