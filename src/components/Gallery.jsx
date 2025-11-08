import React, { useState } from "react";
import { 
  Car,
  Wrench,
  Star,
  ArrowLeft,
  ArrowRight,
  Play,
  Maximize2
} from "lucide-react";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  // Placeholder gallery data based on the flyer images
  const galleryItems = [
    {
      id: 1,
      title: "Professional Car Wash Facility",
      description: "State-of-the-art car washing equipment",
      category: "facilities",
      placeholder: "Modern car wash bay with professional equipment"
    },
    {
      id: 2,
      title: "Executive Rooftop & Bar", 
      description: "Comfortable waiting area with refreshments",
      category: "amenities",
      placeholder: "Stylish rooftop area for customer relaxation"
    },
    {
      id: 3,
      title: "Service Workshop",
      description: "Fully equipped maintenance workshop",
      category: "workshop",
      placeholder: "Professional workshop with modern tools"
    },
    {
      id: 4,
      title: "LPG Exchange Center",
      description: "Safe LPG cylinder refill and exchange",
      category: "services",
      placeholder: "LPG cylinder service area with safety equipment"
    },
    {
      id: 5,
      title: "Accessories Shop",
      description: "Wide range of auto parts and accessories",
      category: "retail",
      placeholder: "Well-stocked accessories and parts display"
    },
    {
      id: 6,
      title: "Vehicle Parking Area",
      description: "Spacious parking for customer vehicles",
      category: "facilities",
      placeholder: "Large covered parking area with multiple vehicles"
    }
  ];

  const categories = [
    { name: "All", value: "all" },
    { name: "Facilities", value: "facilities" },
    { name: "Services", value: "services" },
    { name: "Workshop", value: "workshop" },
    { name: "Amenities", value: "amenities" },
    { name: "Retail", value: "retail" }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-orange-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4 font-['Outfit']">
            <Star className="w-4 h-4 mr-2" />
            Our Facilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Outfit']">
            Take a Look Inside
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500"> Regas Autoshop</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Outfit']">
            Explore our modern facilities, professional equipment, and comfortable amenities 
            designed to provide the best automotive service experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => {
                setActiveCategory(category.value);
                setCurrentImage(0);
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 font-['Outfit'] ${
                activeCategory === category.value
                  ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Main Gallery Slider */}
        <div className="relative mb-12">
          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-2 shadow-2xl">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden" style={{ height: '500px' }}>
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
              >
                <ArrowRight className="w-6 h-6" />
              </button>

              {/* Current Image */}
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {filteredItems[currentImage]?.category === 'workshop' && <Wrench className="w-8 h-8" />}
                    {filteredItems[currentImage]?.category === 'facilities' && <Car className="w-8 h-8" />}
                    {filteredItems[currentImage]?.category === 'services' && <Star className="w-8 h-8" />}
                    {filteredItems[currentImage]?.category === 'amenities' && <Play className="w-8 h-8" />}
                    {filteredItems[currentImage]?.category === 'retail' && <Maximize2 className="w-8 h-8" />}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-['Outfit']">
                    {filteredItems[currentImage]?.title}
                  </h3>
                  <p className="text-lg opacity-90 font-['Outfit']">
                    {filteredItems[currentImage]?.description}
                  </p>
                  <p className="text-sm mt-4 opacity-75 italic font-['Outfit']">
                    {filteredItems[currentImage]?.placeholder}
                  </p>
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-['Outfit']">
                {currentImage + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid md:grid-cols-6 grid-cols-3 gap-4 mb-12">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentImage(index)}
              className={`relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden aspect-square hover:scale-105 transition-all duration-300 ${
                currentImage === index ? 'ring-4 ring-red-500 scale-105' : ''
              }`}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-2">
                  {item.category === 'workshop' && <Wrench className="w-8 h-8 mx-auto text-gray-600 mb-1" />}
                  {item.category === 'facilities' && <Car className="w-8 h-8 mx-auto text-gray-600 mb-1" />}
                  {item.category === 'services' && <Star className="w-8 h-8 mx-auto text-gray-600 mb-1" />}
                  {item.category === 'amenities' && <Play className="w-8 h-8 mx-auto text-gray-600 mb-1" />}
                  {item.category === 'retail' && <Maximize2 className="w-8 h-8 mx-auto text-gray-600 mb-1" />}
                  <p className="text-xs text-gray-700 font-medium font-['Outfit']">
                    {item.title.split(' ').slice(0, 2).join(' ')}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Outfit']">
            Ready to Experience Our Premium Services?
          </h3>
          <p className="text-lg text-gray-600 mb-8 font-['Outfit']">
            Visit us at our Highgate location or contact us to schedule your service appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0249567725"
              className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-600 transition-all font-['Outfit']"
            >
              Call: 024 956 7725
            </a>
            <a 
              href="https://wa.me/233249567725"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all font-['Outfit']"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}