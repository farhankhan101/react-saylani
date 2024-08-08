import { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items || items.length === 0) {
    return <div className="carousel-container">No items available</div>;
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const { image, text, buttonText } = items[currentIndex] || {};

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <div className="carousel-image" style={{ backgroundImage: `url(${image || ''})` }}></div>
        <div className="carousel-text">
          <h1>{text || "No text available"}</h1>
          <button className="btn btn-primary">{buttonText || "No button text"}</button>
        </div>
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>&#9664;</button>
      <button className="carousel-control next" onClick={nextSlide}>&#9654;</button>
    </div>
  );
};

export default Carousel;
