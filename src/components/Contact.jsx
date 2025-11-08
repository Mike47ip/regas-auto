import React, { useState } from "react";
import { 
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Send,
  Star,
  Car,
  CheckCircle
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (could integrate with WhatsApp or email)
    const whatsappMessage = `Hello Regas Autoshop! 
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service Needed: ${formData.service}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/233249567725?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "024 956 7725",
      description: "Available 24/7 for your convenience",
      action: "tel:0249567725",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "024 956 7725", 
      description: "Quick response via WhatsApp",
      action: "https://wa.me/233249567725",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Highgate Location",
      description: "Easy to find, ample parking",
      action: "#",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "24/7 Service",
      description: "Always here when you need us",
      action: "#",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const services = [
    "Car Wash",
    "Car Polishing", 
    "Lube Service",
    "Tyre Clinic",
    "General Maintenance",
    "LPG Exchange",
    "Accessories Shop",
    "Other Service"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-orange-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4 font-['Outfit']">
            <Star className="w-4 h-4 mr-2" />
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Outfit']">
            Get in Touch
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500"> Today</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Outfit']">
            Ready to experience premium automotive care? Contact us to schedule your service 
            or visit our modern facility in Highgate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-['Outfit']">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.action}
                  target={contact.action.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-start p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 group"
                >
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${contact.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1 font-['Outfit']">
                      {contact.title}
                    </h4>
                    <p className="text-xl text-red-600 font-semibold mb-2 font-['Outfit']">
                      {contact.info}
                    </p>
                    <p className="text-gray-600 font-['Outfit']">
                      {contact.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4 font-['Outfit']">Need Immediate Service?</h4>
              <p className="mb-6 opacity-90 font-['Outfit']">
                For urgent automotive needs, reach out to us immediately through these channels:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:0249567725"
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all font-['Outfit'] flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
                <a 
                  href="https://wa.me/233249567725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all font-['Outfit'] flex items-center justify-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-['Outfit']">
                Schedule Your Service
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Outfit']">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all font-['Outfit']"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Outfit']">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all font-['Outfit']"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Outfit']">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all font-['Outfit']"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Outfit']">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all font-['Outfit']"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Outfit']">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all font-['Outfit']"
                    placeholder="Tell us more about your needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-4 rounded-lg hover:from-red-700 hover:to-orange-600 transition-all duration-200 font-semibold flex items-center justify-center group font-['Outfit']"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message via WhatsApp
                </button>

                <p className="text-sm text-gray-600 text-center font-['Outfit']">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Location Map Placeholder */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8 font-['Outfit']">
            Find Us in Highgate
          </h3>
          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-2 shadow-xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12 text-center">
              <MapPin className="w-16 h-16 text-white mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2 font-['Outfit']">
                Regas Autoshop Location
              </h4>
              <p className="text-white/90 text-lg font-['Outfit']">
                Highgate - Easy to find with ample parking space
              </p>
              <button className="mt-6 bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all font-['Outfit']">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}