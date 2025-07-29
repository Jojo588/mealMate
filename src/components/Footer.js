import React from "react";
import { ChefHat, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer({ activeNavChoice }) {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Recipes", href: "#recipes" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
    ],
    support: [
      { name: "FAQs", href: "#FAQs" },
      { name: "Privacy Policy", href: "#privacy_policy" },
      { name: "Terms of Service", href: "#terms_of_service" },
      { name: "Cookie Policy", href: "#cookie_policy" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-[#333333] text-white">
      <div className="container px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <a href="/" className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-[#A3B18A]" />
              <span className="text-xl font-bold">Meal Mate</span>
            </a>
            <p className="text-gray-300 leading-relaxed">
              Helping you reduce food waste and discover delicious recipes with what you already have at home.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-[#A3B18A]/20 rounded-full flex items-center justify-center hover:bg-[#A3B18A] transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Groups */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div className="space-y-6" key={section}>
              <h3 className="text-lg font-semibold text-[#A3B18A]">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => {
                  const slug = link.name.toLowerCase().replace(/ /g, "_");
                  const isActive = activeNavChoice === slug;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className={`text-gray-300 hover:text-white transition-colors ${
                          isActive ? "text-white font-semibold" : ""
                        }`}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-sm">© 2024 Meal Mate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
