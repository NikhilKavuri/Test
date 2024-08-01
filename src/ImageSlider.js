import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images, interval }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider-container">
      <div
        className="slides"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <button className="nav-button left" onClick={handlePrev}>
        ‹
      </button>
      <button className="nav-button right" onClick={handleNext}>
        ›
      </button>
      <div className="indicator-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
