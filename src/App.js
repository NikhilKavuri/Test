import React from "react";
import ImageSlider from "./ImageSlider";
import './App.css'
const images = [
  "https://img.freepik.com/free-photo/majestic-mountain-peak-reflects-tranquil-water-natural-beauty-generated-by-artificial-intelligence_25030-67568.jpg",
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  "https://img.freepik.com/premium-photo/lake-pier-with-mountains-background_1033303-296.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699660800&semt=ais",
];

const App = () => {
  return (
    <div className="parent-container">
      <h1 className="parent-heading">Image Slider Task</h1>
      <ImageSlider images={images} interval={3000} />
    </div>
  );
};

export default App;
