import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@mealmate.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Food Street, Kitchen City, KC 12345",
      description: "Our headquarters",
    },
    {
      icon: Clock,
      title: "Support Hours",
      content: "Monday - Friday",
      description: "9:00 AM - 6:00 PM EST",
    },
  ];


  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setSent(false);

    try {
      await emailjs.sendForm(
        'service_cjrzzgp',
        'template_6x78doc',
        form.current,
        'MwY8UNX2zZgB4D5K_'
      );
      setSent(true);
      form.current.reset();
    } catch (error) {
      console.error('Email send error:', error);
      alert('Failed to send message. Check console for details.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">

      <main className="py-20">
        <div className="container px-4">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#333333]">
              Get in <span className="text-[#A3B18A]">Touch</span>
            </h1>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              Have questions about Meal Mate? We'd love to hear from you. Send us a message and we'll respond as soon as
              possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-[#A3B18A]/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#333333]">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form ref={form} onSubmit={handleSubmit} >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#333333]">First Name</label>
                    <Input className="border-[#A3B18A]/20 focus:border-[#A3B18A]" name="name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#333333]">Last Name</label>
                    <Input className="border-[#A3B18A]/20 focus:border-[#A3B18A]" name="name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#333333]">Email</label>
                  <Input type="email" className="border-[#A3B18A]/20 focus:border-[#A3B18A]"name="email" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#333333]">Subject</label>
                  <Input className="border-[#A3B18A]/20 focus:border-[#A3B18A]" name="title"/>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#333333]">Message</label>
                  <Textarea
                    rows={6}
                    className="border-[#A3B18A]/20 focus:border-[#A3B18A] resize-none"
                    placeholder="Tell us how we can help you..."
                    name="message"
                  />
                </div>

                <button className="w-full mt-5 bg-[#e4af2a] rounded-md duration-300 hover:bg-[#588157] text-white py-6 text-lg font-semibold">
                  Send Message
                </button>
                  {sent && <p className="text-green-500 font-semibold text-lg">Your message has been sent successfully!</p>}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#333333] mb-6">Contact Information</h2>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-md bg-white">
                      <CardContent className="p-6 flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#A3B18A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-[#A3B18A]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#333333] mb-1">{info.title}</h3>
                          <p className="text-[#333333] font-medium">{info.content}</p>
                          <p className="text-sm text-[#666666]">{info.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <Card className="border-2 border-[#FFB703]/20 shadow-lg bg-gradient-to-br from-[#FFB703]/5 to-[#A3B18A]/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-[#333333] mb-4 mt-2">Quick Questions?</h3>
                  <p className="text-[#666666] mb-6">
                    Check out our Help Center for instant answers to common questions about using Meal Mate, managing
                    your account, and troubleshooting.
                  </p>
                  <button
                    variant="outline"
                    className="border-[#A3B18A] duration-300 text-[#A3B18A] hover:bg-[#A3B18A] hover:text-white bg-transparent"
                  >
                    Visit Help Center
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default ContactPage;
