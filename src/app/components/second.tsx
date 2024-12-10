import React from "react";
import { useNavigate } from "react-router-dom";

function SecondScreen() {
  const navigate = useNavigate();

  const handleNavigateToCarousel = () => {
    navigate("/carousel"); // Redirige a la ruta del carrusel
  };

  const handleNavigateToHeart = () => {
    navigate("/heart"); // Redirige a la ruta del corazón
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        {/* Contenedor izquierdo (Botones) */}
        <div className="w-full md:w-1/4 bg-white p-6 space-y-4 flex flex-col justify-center">
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleNavigateToCarousel}
          >
            Abrir Carrusel
          </button>
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleNavigateToHeart}
          >
            Botón 2
          </button>
          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Botón 3
          </button>
        </div>

        {/* Contenedor derecho (Texto de la cita) */}
        <div className="flex-1 flex items-center justify-center p-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left">
            "Cuando te sientas triste, ven aquí y recuerda lo valiosa,
            hermosa y buena que eres. Tienes un corazón lleno de fortaleza y
            una capacidad increíble para lograr todo lo que te propongas.
            Yo confío en ti, confío en que puedes con todo. Siempre serás capaz
            de superar cualquier desafío. ¡Eres más fuerte de lo que imaginas!
            💖💪🌟"
          </h1>
        </div>
      </div>
    </section>
  );
}

export default SecondScreen;
