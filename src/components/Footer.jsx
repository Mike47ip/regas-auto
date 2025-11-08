import React from "react";
import { 
  Car,
  Phone, 
  MessageCircle, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  Clock,
  Star,
  Award,
  Shield
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Emergency Service', href: 'tel:0249567725' }
  ];

  const services = [
    { name: 'Car Wash & Polishing', href: '#services' },
    { name: 'Lube Service', href: '#services' },
    { name: 'Tyre Clinic', href: '#services' },
    { name: 'General Maintenance', href: '#services' },
    { name: 'LPG Exchange', href: '#services' },
    { name: 'Accessories Shop', href: '#services' }
  ];

  const contactInfo = [
    { name: 'Phone Support', href: 'tel:0249567725', value: '024 956 7725' },
    { name: 'WhatsApp', href: 'https://wa.me/233249567725', value: '024 956 7725' },
    { name: 'Location', href: '#contact', value: 'Highgate' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  const achievements = [
    { icon: Star, text: "5-Star Customer Rating" },
    { icon: Award, text: "Premium Service Quality" },
    { icon: Shield, text: "Trusted by 500+ Customers" },
    { icon: Clock, text: "24/7 Service Available" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-red-600 to-orange-500 p-2 rounded-lg">
                <Car className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-['Outfit']">Regas Autoshop</h3>
                <p className="text-red-400 text-sm font-['Outfit']">Building it bigger, better than before</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed font-['Outfit']">
              Your trusted automotive partner in Highgate. We provide comprehensive car care services 
              with modern facilities, professional technicians, and customer comfort in mind.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:0249567725"
                className="flex items-center text-gray-300 hover:text-red-400 transition-colors"
              >
                <Phone className="w-4 h-4 mr-3 text-red-400" />
                <span className="text-sm font-['Outfit']">024 956 7725</span>
              </a>
              <a 
                href="https://wa.me/233249567725"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-red-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-3 text-red-400" />
                <span className="text-sm font-['Outfit']">WhatsApp: 024 956 7725</span>
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-red-400" />
                <span className="text-sm font-['Outfit']">Highgate Location</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-['Outfit']">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm flex items-center group font-['Outfit']"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-['Outfit']">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm flex items-center group font-['Outfit']"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-['Outfit']">Connect With Us</h4>
            <ul className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a 
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm font-['Outfit']"
                  >
                    <div className="font-medium">{contact.name}</div>
                    <div className="text-red-400">{contact.value}</div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mb-6">
              <h5 className="font-semibold mb-3 font-['Outfit']">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-600/20 to-orange-500/20 border border-red-500/30 rounded-lg p-4">
              <h5 className="font-semibold mb-2 text-red-400 font-['Outfit']">24/7 Emergency</h5>
              <p className="text-sm text-gray-300 mb-3 font-['Outfit']">Need urgent automotive service?</p>
              <a 
                href="tel:0249567725"
                className="inline-flex bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-red-700 hover:to-orange-600 transition-all font-['Outfit']"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Achievements Banner */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <achievement.icon className="w-5 h-5 text-red-400" />
                <span className="text-gray-300 text-sm font-['Outfit']">{achievement.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter/CTA Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 font-['Outfit']">Ready for Premium Auto Care?</h3>
            <p className="text-gray-300 mb-6 font-['Outfit']">
              Experience the Regas Autoshop difference. Quality service, modern facilities, customer comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0249567725"
                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-8 py-3 rounded-lg transition-all font-semibold font-['Outfit']"
              >
                Call: 024 956 7725
              </a>
              <a 
                href="https://wa.me/233249567725"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 rounded-lg transition-all font-semibold font-['Outfit']"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="font-['Outfit']">© {currentYear} Regas Autoshop. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-['Outfit']">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-['Outfit']">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-['Outfit']">
                Service Agreement
              </a>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs font-['Outfit']">
              Professional automotive services in Highgate. Building it bigger, better than before with quality care and modern facilities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}