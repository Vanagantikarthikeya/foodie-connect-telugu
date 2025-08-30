import React, { useEffect, useMemo, useState } from 'react';


const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      url: "/images/hero-2.jpg",
      alt: "Colorful healthy food bowl"
    },
    {
      url: "/images/hero-3.jpg",
      alt: "Delicious burgers and fries"
    },
    {
      url: "/images/hero-4.jpg",
      alt: "Gourmet breakfast spread"
    }
  ];

  const [success, setSuccess] = useState<boolean[]>(new Array(images.length).fill(false));

  useEffect(() => {
    // Preload only supported images
    images.forEach((img, i) => {
      const pre = new Image();
      pre.src = img.url;
      pre.onload = () => setSuccess(prev => {
        const arr = [...prev];
        arr[i] = true; // mark as successful
        return arr;
      });
      pre.onerror = () => {
        // leave as false; do not include this image in the rotation
      };
    });
  }, []);

  const activeImages = useMemo(() => images.filter((_, i) => success[i]), [success]);
  const canStart = activeImages.length >= Math.min(2, images.length);

  // Ensure currentSlide stays within bounds when activeImages change
  useEffect(() => {
    if (activeImages.length === 0) {
      setCurrentSlide(0);
      return;
    }
    if (currentSlide >= activeImages.length) {
      setCurrentSlide(0);
    }
  }, [activeImages.length]);

  useEffect(() => {
    if (!canStart) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activeImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [canStart, activeImages.length]);

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
      <div className="relative w-full h-full">
        {activeImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 hero-gradient opacity-25"></div>
            <div className={`absolute bottom-4 left-4 text-white transition-all duration-500 ${
              index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <h3 className="text-lg font-semibold drop-shadow-lg">{image.alt}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {activeImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75 scale-100'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;