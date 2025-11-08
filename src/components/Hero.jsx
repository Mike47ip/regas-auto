import React from "react";
import { 
  ArrowRight, 
  Play, 
  Star,
  Car,
  Wrench,
  Shield,
  Clock,
  Users,
  Award
} from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-red-50 pt-24 md:pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-orange-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6 font-['Outfit']">
              <Star className="w-4 h-4 mr-2" />
              Premium Auto Care Services in Highgate
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-['Outfit']">
              We are building it
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 block">bigger, better</span>
              <span className="text-gray-700">than before.</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-['Outfit']">
              Your trusted automotive partner in Highgate. From comprehensive car wash services to 
              expert maintenance, we provide professional care with modern facilities and experienced technicians.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-xl hover:from-red-700 hover:to-orange-600 transition-all duration-200 font-semibold flex items-center justify-center group font-['Outfit']">
                Book Service Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://wa.me/233249567725" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-red-300 text-red-700 px-8 py-4 rounded-xl hover:border-red-600 hover:text-red-600 transition-all duration-200 font-semibold flex items-center justify-center group font-['Outfit']"
              >
                <Play className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900 font-['Outfit']">500+</span>
                </div>
                <p className="text-gray-600 text-sm font-['Outfit']">Happy Customers</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Clock className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900 font-['Outfit']">24/7</span>
                </div>
                <p className="text-gray-600 text-sm font-['Outfit']">Available Service</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Award className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900 font-['Outfit']">5+</span>
                </div>
                <p className="text-gray-600 text-sm font-['Outfit']">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-8 shadow-2xl animate-pulse-slow hover:scale-105 transition-all duration-500">
              {/* Placeholder for garage image */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="w-full h-64 bg-white/20 rounded-lg mb-6 flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                  <div className="text-white animate-float">
                    <Car className="w-16 h-16 mx-auto mb-4 animate-bounce" />
                    <p className="text-lg font-semibold font-['Outfit']">Modern Auto Facilities</p>
                  </div>
                </div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform rotate-3 animate-bounce hover:rotate-6 hover:scale-110 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900 font-['Outfit']">Car Wash</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-3 animate-float hover:-rotate-6 hover:scale-110 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900 font-['Outfit']">Lube Service</span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-6 bg-white rounded-lg shadow-lg p-4 transform rotate-6 animate-bounce hover:rotate-12 hover:scale-110 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900 font-['Outfit']">Tyre Clinic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}