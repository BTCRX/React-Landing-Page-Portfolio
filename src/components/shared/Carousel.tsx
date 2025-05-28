import React, { useState, useEffect, useRef } from "react";

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlayInterval = 3000,
}) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, autoPlayInterval);

    return () => resetTimeout();
  }, [current, images.length, autoPlayInterval]);

  // Lebar slide item
  const itemWidth = 400; // px
  // Gap antar slide
  const gap = 20; // px
  // Lebar container total (3 slide + 2 gap)
  const containerWidth = itemWidth * 3 + gap * 2;

  // Hitung translateX agar slide tengah pas di tengah container
  const translateX =
    (itemWidth + gap) * current - (containerWidth / 2 - itemWidth / 2);

  // Fungsi navigasi prev
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Fungsi navigasi next
  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mx-auto" style={{ width: containerWidth }}>
      <div
        className="overflow-hidden rounded-2xl shadow-lg relative"
        style={{ width: containerWidth }}
      >
        <div
          className="flex items-center transition-transform duration-700 ease-in-out select-none"
          style={{
            transform: `translateX(${-translateX}px)`,
            gap: gap,
          }}
        >
          {images.map((src, index) => {
            const isActive = index === current;
            return (
              <div
                key={index}
                className="flex-shrink-0 rounded-lg shadow-md overflow-hidden border border-box-border bg-box-bg-2 my-10"
                style={{
                  width: itemWidth,
                  height: 400,
                  transition: "transform 0.7s ease-in-out",
                  transform: isActive ? "scale(1.1)" : "scale(0.85)",
                  opacity: isActive ? 1 : 0.6,
                  cursor: "pointer",
                }}
                onClick={() => setCurrent(index)}
              >
                <img
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#2B4970] bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition"
          style={{ userSelect: "none" }}
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#2B4970] bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition"
          style={{ userSelect: "none" }}
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center mt-6 space-x-3">
        {images.map((_, index) => {
          const isActive = index === current;
          return (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-4 h-4 rounded-full transition-transform duration-300 ${
                isActive ? "bg-[#122C4C] scale-150" : "bg-[#2B4970] scale-100"
              }`}
              onClick={() => setCurrent(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
