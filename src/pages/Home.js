import React, { useState, useEffect } from "react";
import architectureImg from "../assets/Architecture_img.jpg";
import w2cBfb from "../assets/w2c_bfb.png";
import w2cVb from "../assets/w2c_vb.png";
import w2cEc from "../assets/w2c_ec.png";
import w2cSc from "../assets/w2c_sc.png";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const whyChooseUsData = [
    {
      img: w2cBfb,
      list: [
        "Tailored, industry-specific solutions for maximum impact",
        "Scalable infrastructure to grow with your business",
        "Proven strategies to maximize ROI"
      ]
    },
    {
      img: w2cVb,
      list: [
        "Trusted and verified business",
        "Proven track record with high-quality deliverables",
        "Guaranteed reliability and compliance"
      ]
    },
    {
      img: w2cEc,
      list: [
        "Streamlined onboarding and workflow setup",
        "Clear documentation to minimize back-and-forth",
        "Easy access to updates and progress tracking"
      ]
    },
    {
      img: w2cSc,
      list: [
        "Rapid execution without compromising quality",
        "Transparent timelines and deliverables",
        "Clear, concise reporting for better decision-making"
      ]
    }
  ];

  // Carousel functionality
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % whyChooseUsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + whyChooseUsData.length) % whyChooseUsData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const renderCard = (item, idx) => (
    <div 
      key={idx} 
      className="bg-black rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 w-full flex-shrink-0"
    >
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-full">
          <img 
            src={item.img} 
            alt="Feature icon" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="space-y-3" style={{ listStyleType: 'none' }}>
        {item.list.map((listItem, i) => (
          <div
            key={i}
            style={{ listStyleType: 'none' }}
            className="text-gray-700 text-sm sm:text-base leading-relaxed text-wrap"
          >
            {listItem}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 mb-4 font-bold">
              BEAM
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-6 font-medium">
              Connect. Collaborate. Deliver.
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-base sm:text-lg md:text-xl text-gray-600 mb-8">
              <p className="leading-relaxed">
                Your trusted B2B platform for sourcing expert services in software development, 
                UI/UX design, testing, DevOps, ongoing maintenance and many more
              </p>
              <p className="font-medium text-gray-700">New to BEAM?</p>
              <div className="inline-flex items-center gap-2 text-gray-700">
                <span>Begin your journey with BEAM now -</span>
                <a 
                  href="/signup" 
                  className="md:relative md:inline-block px-2 py-3 ml-2 text-white bg-blue-600 hover:bg-blue-700 rounded-2xl transition-all duration-300 transform hover:scale-105 font-medium border-2 border-white hover:border-blue-200 shadow-lg"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-center text-gray-900 mb-8 lg:mb-12 font-bold">
              How It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6 bg-black rounded-xl border-white border hover:bg-gray-100 transition-colors duration-300">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  1. Post a Requirement
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Let the community know what you need.
                </p>
              </div>
              <div className="text-center p-6 bg-black rounded-xl border-white border hover:bg-gray-100 transition-colors duration-300">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  2. Get Proposals
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Receive offers from trusted service providers tailored to your needs.
                </p>
              </div>
              <div className="text-center p-6 bg-black rounded-xl border-white border hover:bg-gray-100 transition-colors duration-300">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  3. Start Collaborating
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Connect, negotiate, and kick off your project with full transparency.
                </p>
              </div>
            </div>
          </div>

          {/* Architecture Section */}
          <div className="mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-center text-gray-900 mb-8 lg:mb-12 font-bold">
              Flow of BEAM
            </h2>
            <div className="flex justify-center items-center">
              <div className="w-full max-w-4xl">
                <img 
                  src={architectureImg} 
                  alt="BEAM Architecture Flow" 
                  className="w-full h-auto object-contain rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-center text-green-600 mb-8 lg:mb-12 font-bold">
              Why Choose Us
            </h2>
            
            {/* Mobile Carousel */}
            <div className="block md:hidden">
              <div 
                className="relative overflow-hidden px-4"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {whyChooseUsData.map((item, idx) => (
                    <div key={idx} className="w-full px-2 flex-shrink-0">
                      {renderCard(item, idx)}
                    </div>
                  ))}
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors z-10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors z-10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {whyChooseUsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === currentSlide 
                        ? 'bg-green-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {whyChooseUsData.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-black rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-full ">
                      <img 
                        src={item.img} 
                        alt="Feature icon" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <ul className="space-y-3" style={{ listStyleType: 'none' }}>
                    {item.list.map((listItem, i) => (
                      <li
                        key={i}
                        style={{ listStyleType: 'none' }}
                        className="text-gray-700 text-sm sm:text-base leading-relaxed text-wrap"
                      >
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-6 font-bold">
              Frequently Asked Questions
            </h3>
            <div className="bg-black border border-yellow-200 rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
              <p className="text-gray-700 text-base sm:text-lg mb-2 font-medium">
                In development
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Will be integrating after taking feedback
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}