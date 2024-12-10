import React, { useState } from "react";
import prueba from "../../assets/img/prueba.jpg";
import me from "../../assets/img/me.jpeg";

function CarouselScreen() {
  const slides = [me, prueba, prueba]; // Arreglo de imágenes
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
      <div className="relative w-auto max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative flex items-center justify-center">
          {/* Imagen del carrusel */}
          <img
            src={slides[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-auto h-auto max-w-full max-h-[80vh] object-contain"
          />
        </div>
        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CarouselScreen;
