import React from "react";
import { 
  Car,
  Wrench,
  Droplets,
  Settings,
  ShoppingBag,
  Fuel,
  Tv,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Car,
      name: "Car Wash",
      description: "Professional exterior and interior cleaning services",
      features: ["Premium wash", "Interior detailing", "Wax protection"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Droplets,
      name: "Car Polishing", 
      description: "Expert polishing for a showroom shine",
      features: ["Paint restoration", "Scratch removal", "Protection coating"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Settings,
      name: "Lube Service",
      description: "Complete oil change and fluid maintenance",
      features: ["Engine oil change", "Filter replacement", "Fluid check"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Wrench,
      name: "Tyre Clinic",
      description: "Complete tyre services and repairs",
      features: ["Tyre fitting", "Wheel balancing", "Puncture repair"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: ShoppingBag,
      name: "Accessories Shop",
      description: "Quality auto parts and accessories",
      features: ["Original parts", "Car accessories", "Expert advice"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Car,
      name: "Executive Rooftop & Bar",
      description: "Luxury relaxation while you wait",
      features: ["Comfortable seating", "Refreshments", "WiFi access"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Settings,
      name: "General Maintenance",
      description: "Comprehensive vehicle maintenance services",
      features: ["Engine diagnostics", "Brake service", "Battery check"],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Fuel,
      name: "LPG Exchange",
      description: "Safe and efficient LPG cylinder services",
      features: ["Cylinder refill", "Safety inspection", "Quick service"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Tv,
      name: "DSTV Center", 
      description: "Entertainment and digital services",
      features: ["Installation", "Maintenance", "Subscription"],
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-orange-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4 font-['Outfit']">
            <Star className="w-4 h-4 mr-2" />
            Our Premium Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Outfit']">
            Complete Auto Care
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Outfit']">
            From basic maintenance to luxury amenities, we provide comprehensive automotive services 
            under one roof. Experience the difference at Regas Autoshop.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="p-8">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Outfit']">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 mb-6 font-['Outfit']">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 font-['Outfit']">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-3 rounded-lg hover:from-red-600 hover:to-orange-500 hover:text-white transition-all duration-300 font-medium font-['Outfit'] flex items-center justify-center group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Notice */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4 font-['Outfit']">And Many More Services!</h3>
          <p className="text-xl mb-6 opacity-90 font-['Outfit']">
            We're constantly expanding our services to better serve you. Contact us for any automotive needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0249567725"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors font-['Outfit']"
            >
              Call: 024 956 7725
            </a>
            <a 
              href="https://wa.me/233249567725"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all font-['Outfit']"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}