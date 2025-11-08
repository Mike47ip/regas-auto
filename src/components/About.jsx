import React from "react";
import { 
  Award,
  Users,
  Clock,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Target,
  Heart,
  Zap
} from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Satisfied Customers",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Service Available",
      color: "text-green-600"
    },
    {
      icon: Award,
      number: "5+",
      label: "Years Experience",
      color: "text-purple-600"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Customer Rating",
      color: "text-yellow-600"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every service we provide"
    },
    {
      icon: Heart,
      title: "Care",
      description: "Your vehicle is treated with the utmost care and attention"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Modern equipment and latest techniques for best results"
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Reliable service you can count on every time"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-orange-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6 font-['Outfit']">
              <Award className="w-4 h-4 mr-2" />
              About Regas Autoshop
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Outfit']">
              Building Excellence in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500"> Automotive Care</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 font-['Outfit']">
              Located in the heart of Highgate, Regas Autoshop has been serving the community 
              with premium automotive services. We believe in building it bigger and better than 
              before, continuously improving our facilities and services to exceed your expectations.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 font-['Outfit']">
              Our state-of-the-art facility combines traditional craftsmanship with modern 
              technology, ensuring your vehicle receives the best possible care. From routine 
              maintenance to specialized services, we're your trusted automotive partner.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Modern equipment and professional technicians",
                "Comprehensive range of automotive services",
                "Customer comfort with executive amenities",
                "Transparent pricing and reliable service"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-['Outfit']">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-xl hover:from-red-700 hover:to-orange-600 transition-all duration-200 font-semibold flex items-center group font-['Outfit']">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="w-full h-80 bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <Award className="w-20 h-20 mx-auto mb-4" />
                    <p className="text-xl font-bold font-['Outfit']">Our Modern Facility</p>
                    <p className="text-sm opacity-90 font-['Outfit']">Experience the difference</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <div>
                  <div className="font-bold text-gray-900 font-['Outfit']">4.9/5</div>
                  <div className="text-xs text-gray-600 font-['Outfit']">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex p-4 bg-gray-50 rounded-2xl mb-4 group-hover:bg-gradient-to-r group-hover:from-red-50 group-hover:to-orange-50 transition-all duration-300">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2 font-['Outfit']">{stat.number}</div>
              <div className="text-gray-600 font-['Outfit']">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 font-['Outfit']">Our Core Values</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-['Outfit']">
            These principles guide everything we do at Regas Autoshop
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex p-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl mb-4 group-hover:from-red-600 group-hover:to-orange-500 transition-all duration-300">
                <value.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 font-['Outfit']">{value.title}</h4>
              <p className="text-gray-600 font-['Outfit']">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}