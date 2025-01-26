import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Expert } from "@/app/types";

interface ExpertCarouselProps {
    experts: Expert[];
  }
  const ExpertCarousel: React.FC<ExpertCarouselProps> = ({ experts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experts.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="course__aside">
      <blockquote className="citation__quote">
      {'"'}{experts[currentIndex].notes}{'"'}
      </blockquote>
      <div className="quote">
        <Image
          src={experts[currentIndex].image}
          alt={experts[currentIndex].name}
          width={80}
          height={80}
          className="rounded-full border-2 border-gray-300"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800">
            {experts[currentIndex].name}
          </h4>
          <p className="text-sm text-gray-600">
            {experts[currentIndex].title}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center prev-next">
        <button   onClick={handlePrev} className="prev prev-next-button">
        </button>
        <button  onClick={handleNext} className="next prev-next-button">
        </button>
    </div>
    </div>
  );
};

export default ExpertCarousel;
